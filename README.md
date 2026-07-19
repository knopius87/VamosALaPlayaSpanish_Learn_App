<div align="center">
  <img src="./icon.svg" width="132" alt="Vamos Roadtrip App-Icon mit Hippie-Bus">

  # ¡Vamos! Roadtrip

  **Spanisch lernen auf einem sonnigen VW-Bus-Roadtrip durch Spanien.**  
  A2/B1 · mobil · offlinefähig · ohne Anmeldung

  ![HTML](https://img.shields.io/badge/HTML-5-e34f26?style=flat-square)
  ![CSS](https://img.shields.io/badge/Design-Hippie_Dark_Mode-f45d91?style=flat-square)
  ![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-f7df1e?style=flat-square&logoColor=111)
  ![PWA](https://img.shields.io/badge/PWA-offline-51d6c3?style=flat-square)
</div>

## Die Idee

¡Vamos! Roadtrip verwandelt Reise-Spanisch in eine Fahrt mit einem farbenfrohen, rundlichen Hippie-Bus. Ein leuchtender Sunset-Cocktail ersetzt das frühere Trikot-Motiv. Jeder Stopp besitzt ein Reisethema, eine eigene dunkle Sonnenuntergangs-Farbwelt und eine passende spanische Landschaft. Die Reise startet in Barcelona, führt durch Andalusien und Nordspanien und endet in Madrid.

Die App läuft direkt im Browser, benötigt keinen Build-Schritt und speichert den Lernfortschritt ausschließlich lokal auf dem jeweiligen Gerät.

## Lernumfang

- 12 spanische Reise-Stopps
- 168 Reisevokabeln mit vollständig übersetzten Beispielsätzen
- 84 Scaffolds für eigene Gesprächsbeiträge
- 72 spanische Lückensätze
- 36 dreistufige Conversation Challenges mit insgesamt 108 Aufgaben
- 9 Grammatik-Werkstätten auf Niveau A2/B1
- Multiple Choice, Lückentext und vollständig getippte Antworten
- freier Übe-Modus für einzelne Städte oder den gesamten Roadtrip
- XP, Herzen, Serien, Patches, Münzen und Konfetti
- installierbar und offlinefähig als Progressive Web App
- durchgängige deutsche Erklärungen – Einstieg auch ohne Spanisch-Vorkenntnisse

## Route

| Stopp | Stadt | Reisethema | Kulisse |
|---:|---|---|---|
| 1 | Barcelona | Begrüßen und Small Talk | Mosaike am Mittelmeer |
| 2 | Valencia | Anreise und Unterkunft | Orangenhaine und Küste |
| 3 | Alicante | Wetter, Strand und Pläne | Costa Blanca |
| 4 | Granada | Orientierung und Besichtigungen | Sierra Nevada |
| 5 | Málaga | Restaurant und Café | Costa del Sol |
| 6 | Sevilla | Freizeit, Einladungen und Tapas | Andalusischer Tapas-Abend |
| 7 | Córdoba | Markt und Einkaufen | Patios und maurische Bögen |
| 8 | Toledo | Kultur und Reiseerlebnisse | Goldene Meseta |
| 9 | Salamanca | Fußball und Café-Small-Talk | Plaza Mayor |
| 10 | Bilbao | Apotheke und Gesundheit | Grüne Atlantikküste |
| 11 | Zaragoza | Panne, Probleme und Notfälle | Weite Landschaft am Ebro |
| 12 | Madrid | La Gran Meta | Lichter der Gran Vía |

Jeder Stopp besteht aus drei Mini-Trips:

1. **Arrancamos** – Basiswortschatz
2. **En la carretera** – Aufbauwortschatz
3. **Parada libre** – Gesprächsgerüste

Danach folgen drei Conversation Challenges pro Stadt mit fester Progression: passende Antwort erkennen, einen spanischen Lückensatz ergänzen und schließlich eine vollständige Antwort selbst tippen. Der anschließende Vertiefungssprint fragt alle 14 Lernwörter, alle sechs Lückensätze und drei Satzgerüste aktiv ab.

## Grammatik-Werkstätten

1. `ser`, `estar` und `hay`
2. Präsens, unregelmäßige und reflexive Verben
3. Fragen, Höflichkeit, `tú`, `usted` und `vosotros`
4. Artikel, Mengen und Ortspräpositionen
5. Objektpronomen und `gustar`
6. Pretérito perfecto und indefinido
7. Imperfecto und Erzählrahmen
8. Pläne, Zukunft und Imperativ
9. `por`, `para` und erster Subjuntivo

## Auf GitHub Pages veröffentlichen

> Alle Dateien dieses Ordners gemeinsam in das Stammverzeichnis des Repositorys hochladen. `index.html` wird automatisch als Startseite verwendet.

1. Auf [github.com/new](https://github.com/new) ein Repository namens `vamos-roadtrip` anlegen.
2. Im Repository **Add file → Upload files** wählen.
3. Alle Dateien aus diesem Ordner hineinziehen und mit **Commit changes** bestätigen.
4. Unter **Settings → Pages** die Quelle **Deploy from a branch** auswählen.
5. Branch **main** und Ordner **/ (root)** festlegen.

Die öffentliche Adresse lautet anschließend normalerweise:

```text
https://DEIN-GITHUB-NAME.github.io/vamos-roadtrip/
```

## Auf dem Smartphone installieren

- **iPhone/iPad:** Adresse in Safari öffnen → Teilen → **Zum Home-Bildschirm**
- **Android:** Adresse in Chrome öffnen → Browsermenü → **App installieren**

## Projektstruktur

```text
vamos-roadtrip/
├── index.html
├── styles.css
├── app.js
├── icon.svg
├── manifest.webmanifest
├── sw.js
├── .nojekyll
└── README.md
```

## Datenschutz

Die App verwendet keine Konten, Werbung oder externen Lerndienste. Fortschritt, XP, Herzen und Lernserie bleiben im lokalen Speicher des Browsers.
