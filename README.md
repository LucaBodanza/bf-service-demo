# BF Service — anteprima sito web

Anteprima navigabile del nuovo sito di **BF Service di Bodanza Francesco** (office automation: assistenza, noleggio e vendita di stampanti, fotocopiatrici e plotter).

**Anteprima online:** https://lucabodanza.github.io/bf-service-demo/

Non è il sito pubblico: ogni pagina è marcata `noindex`, quindi Google non la indicizza e non fa concorrenza al sito ufficiale.

## Pagine
- `index.html` — Assistenza stampanti e fotocopiatrici a Brescia
- `chi-siamo.html` — Chi siamo – BF Service di Bodanza Francesco, Villanuova s/C
- `servizi.html` — Servizi per stampanti e fotocopiatrici
- `assistenza-stampanti-multifunzione.html` — Assistenza stampanti e multifunzione Brescia
- `noleggio-vendita-stampanti-fotocopiatrici.html` — Noleggio e vendita fotocopiatrici e stampanti
- `plotter.html` — Plotter e grande formato HP DesignJet
- `computer-postazioni-it.html` — Computer e postazioni IT per l'ufficio
- `zone.html` — Zone servite: Brescia, Garda, Verona, Bergamo
- `zona-garda-valle-sabbia.html` — Assistenza stampanti Salò, Garda e Valle Sabbia
- `faq.html` — FAQ e guide su riparazione e noleggio
- `contatti.html` — Contatti e orari
- `richiesta-intervento.html` — Richiedi un intervento tecnico
- `privacy.html` — Privacy e cookie
- `404.html` — Pagina non trovata
- `guida-stampante-non-stampa.html` — La stampante non stampa: 7 controlli
- `guida-stampante-offline.html` — Stampante offline: cosa fare
- `guida-righe-fogli-bianchi.html` — Stampante che fa righe o fogli bianchi
- `guida-carta-inceppata.html` — Carta inceppata: come toglierla
- `guida-codici-errore-kyocera.html` — Codici errore Kyocera: cosa fare
- `guida-noleggio-o-acquisto.html` — Noleggio o acquisto della fotocopiatrice?

## Come aggiornare
Carica i file nuovi con **Add file → Upload files** (trascina tutti i file della cartella). GitHub Pages si aggiorna da solo in un paio di minuti e l'indirizzo non cambia.

## Note tecniche
- Sito statico multipagina: un file HTML per pagina, `style.css` e `main.js` condivisi. Nessun build, nessun server.
- I vecchi link della demo (`#/faq`, `#/sos`…) vengono reindirizzati alle nuove pagine.
- Dati strutturati Schema.org (LocalBusiness, Service, FAQPage, Article, BreadcrumbList) e `llms.txt` per i motori di ricerca AI.
- Colori e tipografia (Inter) dai design token del progetto; verde `#80B040` dal logo originale.
