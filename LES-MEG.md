# Hekle – masketeller 🧶

En enkel app for å holde styr på masker, runder og oppskrifter mens du hekler.
Fungerer i nettleser og kan legges til på Hjem-skjermen på iPhone som en «ekte» app –
også uten nett.

## Slik bruker du den
- **Nytt prosjekt** – lag ett prosjekt per plagg (f.eks. «Amigurumi-katt»).
- **Legg inn oppskriften** – trykk blyant-ikonet (✎). Skriv én linje per runde.

### Lim inn hele oppskriften på én gang
Trykk **«📋 Lim inn hele oppskriften»** i redigering, og lim inn hele oppskriften
med én runde per linje. Appen lager alle rundene automatisk. Den forstår både
kompakt notasjon og vanlig norsk prosa, blant annet:
- Runde-etiketter og områder: `R1:`, `Runde 3`, `Runde 6-7` (lager 2 runder)
- Farge i parentes: `Runde 1 (rød):` – vises som farge på runden
- Økninger skrevet på ulike måter: `øk`, `2 Fm (øke)`, `2 fm i hver maske`
- Gjentakelse: `*3 fm, øk* x6`, `(3 fm, øk) x6`, eller «Repeter 10 ganger»
- Fasit-antall: `Til sammen 40 Fm`, `(12)`, `= 18`, `70 masker hver runde`
- «Fm hele veien rundt» / «fm i hver maske» – antallet arves fra runden før
- Fargebytte-notater («…endrer du farge til hvit») festes til riktig runde
  og vises stort når du kommer dit 📌

Appen **sammenligner** utregnet antall mot oppskriftens «Til sammen»-tall og
**flagger avvik** i forhåndsvisningen, så du kan rette dem før du legger til.
```
Runde 1 (rød): Start med magisk ring, 6 fm.
Runde 2 (rød): 2 fm i hver maske. Til sammen 12 fm.
Runde 3 (rød): Fm, 2 fm (øke). Repeter 6 ganger. Til sammen 18 fm.
Runde 4-8 (rød): Fm hele veien rundt. Til sammen 18 fm.
```

### Laste opp PDF med oppskrift
Trykk **«📄 Last opp PDF med oppskrift»** og velg en PDF. Appen henter ut teksten
(rett i nettleseren – ingenting sendes ut) og fyller den inn i lim-inn-feltet, klar
til gjennomsyn og redigering før du legger den til.
- Virker på **tekst-baserte** PDF-er (de fleste kjøpte/nedlastede mønstre).
- For innskannede bilde-PDF-er: bruk «Les mønster fra bilde» under.
- Sjekk alltid forhåndsvisningen – PDF-oppsett kan gi rare linjeskift du kan rette.

### Lese mønster fra bilde (OCR)
Har du et **bilde** eller skjermbilde av et mønster? Trykk **«🖼️ Les mønster fra
bilde (OCR)»** og velg bildet. Appen kjenner igjen teksten (norsk) rett på enheten.
- Første gang lastes gjenkjenningen ned (~18 MB), deretter virker det **offline**.
- Best på skarpe, rette bilder i godt lys. Skygger/skjev vinkel gir dårligere treff.
- **Tips (ofte best på iPhone):** åpne bildet i Bilder-appen, hold på teksten,
  «Marker alt» → «Kopier», og bruk **«📋 Lim inn hele oppskriften»** i stedet.
  iPhonens egen tekstgjenkjenning er svært god.
- Sjekk alltid forhåndsvisningen (særlig ø/å) og rett før du legger til.

### To måter å legge inn én runde på
1. **Steg-for-steg (anbefalt)** – skriv mønsteret i «Steg-for-steg»-feltet, så viser
   telleren stort *hva neste maske skal være*: en vanlig **FM**, eller en **ØK**
   (2 fm i samme maske). Skjermen blir farget ved økning/felling.
   - `fm` = fastmaske, `øk` = økning (2 i samme), `fell` = felling (2 sammen)
   - Parenteser med antall: `10x(3 fm, øk)` eller `(3 fm, øk) x10` eller `*3 fm, øk* x10`
   - Eksempler: `6 fm` · `3 fm, øk` · `10x(fm, fm, fm, øk)`
   - Maskemålet regnes ut automatisk.
2. **Enkel telling** – la steg-feltet stå tomt og skriv bare et *maskemål*
   (f.eks. 30). Da teller den bare +1 per maske opp til målet.

### Under hekling
- **Tell** – trykk hvor som helst på det store feltet for neste maske / +1.
  «− 1» retter opp bomtelling.
- **Bekreftelse på trykk** – hvert trykk gir en kort klikk-lyd + en synlig puls,
  så du vet at det registrerte uten å se på skjermen. Slå lyden av/på med
  🔊-knappen øverst. (iPhone støtter ikke vibrasjon fra nettsider, derfor lyd.)
- **Neste runde** – trykk «Ferdig med runden» eller pilene for å bla mellom runder.
- **Gjentakelse** – «↻ Gjenta samme runde» lager flere like runder på én gang.
- Alt lagres automatisk på telefonen/maskinen din.

## Legge den til på iPhone
1. Appen må ligge på en nettadresse (https). Se «Publisere» under.
2. Åpne adressen i **Safari** på iPhone.
3. Trykk Del-knappen → **«Legg til på Hjem-skjerm»**.
4. Nå ligger «Hekle» som et ikon og åpner i fullskjerm.

## Filer
- `index.html` – hele appen (design + logikk).
- `manifest.json` – app-navn og ikon for Hjem-skjerm.
- `sw.js` – gjør at appen virker uten nett.
- `icon-*.png` – app-ikoner.
- `.claude/` – kun for lokal forhåndsvisning; trengs ikke ved publisering.

## Publisere (så den kan brukes på iPhone)
Appen er «statisk» – bare filer. Enkleste gratis-alternativer:
- **Netlify Drop** (netlify.com/drop): dra mappa inn i nettleseren, får en https-adresse.
- **GitHub Pages** eller **Vercel** fungerer også.
Si ifra hvis du vil ha hjelp til å publisere.
