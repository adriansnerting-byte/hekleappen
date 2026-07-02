# Hekle – masketeller 🧶

En enkel app for å holde styr på masker, runder og oppskrifter mens du hekler.
Fungerer i nettleser og kan legges til på Hjem-skjermen på iPhone som en «ekte» app –
også uten nett.

## Slik bruker du den
- **Nytt prosjekt** – lag ett prosjekt per plagg (f.eks. «Amigurumi-katt»).
- **Legg inn oppskriften** – trykk blyant-ikonet (✎). Skriv én linje per runde.

### To måter å legge inn en runde på
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
