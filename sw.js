// Service worker: appen skal virke offline OG fange opp oppdateringer når du er på nett.
// Strategi: "nettverk-først" for selve siden (index.html) så du alltid får nyeste versjon
// når du har nett, med fall-tilbake til hurtiglager offline. Ikoner o.l. hentes fra lager.
const CACHE = "hekle-v5";
const ASSETS = [
  "index.html",
  "manifest.json",
  "icon-180.png",
  "icon-192.png",
  "icon-512.png",
  "vendor/pdf.min.js",
  "vendor/pdf.worker.min.js"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;

  const isPage = req.mode === "navigate" ||
    (req.headers.get("accept") || "").includes("text/html");

  if (isPage) {
    // Nettverk-først: hent nyeste, oppdater lager, fall tilbake til lager offline.
    e.respondWith(
      fetch(req).then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put("index.html", copy));
        }
        return res;
      }).catch(() => caches.match("index.html"))
    );
    return;
  }

  // Andre filer (ikoner, wasm, språkdata): lager-først, med nett som reserve.
  // Viktig: bare vellykkede svar (res.ok) bufres – aldri 404/feil.
  e.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
      }
      return res;
    }))
  );
});
