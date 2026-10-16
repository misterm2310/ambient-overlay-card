<img src="docs/icon.png" width="96" align="right" alt="Icon">

# 🌙 Ambient Overlay Card für Home Assistant

🇬🇧 **English?** → [README in English](README.en.md)

**Stimmung für dein Dashboard.** Die Karte legt kleine Animationen über das ganze Dashboard: echtes Wetter, Mond und Sterne, eine Dampflok mit deiner Familie als Waggons, einen Labrador, eine Eule, Geburtstags-Ballons und vieles mehr. Alles läuft über CSS, schont den Akku und pausiert, wenn das Dashboard im Hintergrund ist.

![Vorschau – Nacht mit Eule, Mond, Sternen und Dampflok, Tag mit Vogelhäuschen, Sonne, Bienen und Labrador](docs/screenshot.png)

<details><summary>🎂 Geburtstags-Modus ansehen</summary>

![Geburtstags-Modus mit Wimpelkette, Lichterkette, Ballons und Konfetti](docs/screenshot-geburtstag.png)

</details>

<details><summary>🧺 Editor „Alles in einer Karte“ ansehen</summary>

<img src="docs/screenshot-liste.png" width="420" alt="Editor mit Effekt-Liste, grünen und grauen Punkten und „Wann anzeigen?“">
<img src="docs/screenshot-gruppen.png" width="420" alt="„Wann anzeigen?“ mit ODER-Gruppe">

</details>

---

## ✨ Was kann das Ding?

| Funktion | So klappt's |
|---|---|
| 🌦️ **Wetter-Automatik** | Die Karte schaut auf deine `weather.*`-Entity und zeigt selbst das Passende: Regen, Schnee, Hagel, Blitz, Nebel, Sturm, Wolken, Sterne oder Sonne. Bei „Schneeregen“ laufen Schnee **und** Regen gleichzeitig, bei „Gewitter mit Regen“ Blitz **und** Regen. |
| 🌙 **Mond mit echter Mondphase** | Erscheint oben rechts, sobald die Sonne weg ist – auch zusammen mit Regen oder Schnee. Die Phase wird aus dem Datum berechnet, ganz ohne Sensor. Tagsüber sitzt dort bei „sonnig“ die ☀️ Sonne. |
| 🚂 **Dampflok** | Fährt unten durchs Bild: Lok mit Dampf, beleuchteten Fenstern und „TUUT“. Vier Waggons mit Alltags-Ladung – per Schalter auf 🎅 Weihnachten oder 🍽️ Abendessen umstellbar. Ganz selten wird der Dampf zum Herz. |
| 👥 **Familie im Zug** | Jede angehakte Person, die gerade **zuhause** ist, bekommt einen eigenen Waggon mit Profilbild. Dazu 🎟️ Gäste-Waggons aus einem Sensor (z. B. „Oma, Opa“) und ein 🚦 blinkender Schlusswagen. |
| 🐕 **Goldener Labrador** | Läuft mit echter Beinbewegung, wedelt, schnüffelt kurz und hinterlässt Pfotenabdrücke. Regnet es laut Wetter-Entity, schüttelt er sich. |
| 🦉🐦 **Eule & Vogelhäuschen** | Oben links: tagsüber das Vogelhäuschen mit Besuch, nachts die Eule, die blinzelt und den Kopf dreht. Umgeschaltet wird über `sun.sun`. |
| 🌠 **Nachthimmel** | Sternschnuppen, Wunschstern und ein seltener Komet – jedes Teil einzeln an- und abwählbar. |
| 🎂 **Geburtstags-Modus** | Luftballons, Konfetti, Wimpelkette mit eigenem Text und Lichterkette – jedes Teil einzeln an- und abwählbar. |
| 🎃 **Halloween** | Flackernde Kürbis-Laternen, ein Gespenst, das „Buh!“ ruft, eine Hexe auf dem Besen (verliert ab und zu den Hut), Spinnweben und Fledermäuse – jedes Teil einzeln an- und abwählbar. |
| 👻 **Halloween-Look** | Am 31. Oktober ganz von selbst (oder per Schalter): Zug mit Kürbissen, Hexenkessel, Sarg und Süßigkeiten, Labrador mit Teufelshörnchen, Eule mit Hexenhut, Vogelhäuschen mit Kürbis und Spinnwebe (der Vogel trägt einen Mini-Hexenhut) und ein oranger Mond (in seiner echten Mondphase). |
| 🎅 **Weihnachtsmann** | Fliegt mit Schlitten und Rentieren vorbei und verliert ab und zu ein Geschenk. |
| 🕷️🐝🍂 **Noch mehr Tiere & Deko** | Spinne im Netz (verliert kurz den Halt und tut dann so, als wäre nichts gewesen), Bienenschwarm und Herbstlaub. |
| ☃️ **Wachsende Schneedecke** | Schneit es eine Weile, bleibt unten langsam eine kleine Schneeschicht liegen. |
| 🌫️ **Sanft statt hart** | Wechselt das Wetter von selbst, blendet der alte Effekt weich aus. |
| 🧺 **Alles in einer Karte** | Alle Effekte in einer einzigen Karte, jeder mit eigenem **„🕒 Wann anzeigen?“** – zum Antippen statt YAML: nur nachts, Zeitraum im Jahr, Uhrzeit, Schalter, Person zuhause, Wetter … plus ODER-/UND-Gruppen. Grüne und graue Punkte zeigen, was gerade läuft und warum etwas wartet. |
| 👁️ **Editor mit Live-Vorschau** | Effekte als Kacheln zum Antippen, aufklappbare Bereiche, Schiebeschalter und Suchfelder wie in Home Assistant. Oben eine Vorschau mit Knopf „▶ Jetzt vorbeifliegen lassen“ – so musst du nicht minutenlang auf Hexe, Zug oder Hund warten. |
| 🌗 **Hell & Dunkel** | Die Karte erkennt das Theme selbst, auch wenn es nur auf einer einzelnen Dashboard-Seite gesetzt ist. |
| 🔋 **Akku-schonend** | Fast alles läuft über CSS (Grafikkarte). Ist der Tab im Hintergrund, pausieren die Animationen. |
| 🎯 **Immer obendrauf** | Die Effekte liegen in einer eigenen Ebene über allem – auch über anderen Karten mit eigenen Animationen. |

**11 Effekte zum Auswählen** plus die Wetter-Automatik mit 10 weiteren (Regen, Schnee, Hagel, Blitz, Nebel, Sturm, Wolken, Sterne, Sonne, Mond). Entweder alles in **einer Karte** als Liste – oder wie früher pro Effekt eine Karte, z. B. Wetter-Automatik **und** Dampflok **und** Eule auf derselben Seite.

---

## 📦 Installation

1. **HACS** öffnen → oben rechts **⋮ → Benutzerdefinierte Repositories**.
2. `https://github.com/misterm2310/ambient-overlay-card` eintragen, Typ **Dashboard** (früher „Lovelace“), **Hinzufügen**.
3. Nach **Ambient Overlay Card** suchen, **Herunterladen**.
4. Dashboard neu laden (`Strg` + `F5`).
5. Dashboard → **Bearbeiten → Karte hinzufügen → Ambient Overlay Card**. 🎉

```yaml
type: custom:ambient-overlay-card
effects:
  - event: weather_auto
    weather_entity: weather.home
  - event: owl_birdhouse
```

> 💡 Sieht nach einem Update alles aus wie vorher? Das ist fast immer der Browser-Zwischenspeicher. In der App einmal nach unten ziehen oder im Browser `Strg` + `Shift` + `R`.

> 🧪 **Beta-Versionen testen:** In HACS bei der Karte die Option **„Beta-Versionen anzeigen“** einschalten. Dann bietet HACS dir auch Vorabversionen an (z. B. `1.0.10-beta.1`). Wer sie nicht einschaltet, bekommt nur fertige Versionen.

<details><summary>Ohne HACS (von Hand)</summary>

1. `ambient-overlay-card.js` aus dem aktuellen [Release](https://github.com/misterm2310/ambient-overlay-card/releases) herunterladen.
2. Nach `/config/www/ambient-overlay-card.js` kopieren.
3. **Einstellungen → Dashboards → ⋮ → Ressourcen → Ressource hinzufügen**: URL `/local/ambient-overlay-card.js`, Typ **JavaScript-Modul**.
4. Dashboard neu laden.
</details>

<details><summary>🔄 Umstieg von der alten „Weather & Event Overlay Card“</summary>

Die Karte hieß früher **Weather & Event Overlay Card** (`weather-event-overlay-card`). Drei Dinge anpassen:

1. **Ressource:** Alte URL (`/local/weather-event-overlay-card.js`) entfernen, neue hinzufügen (`/local/ambient-overlay-card.js`). Bei HACS das alte Repository entfernen und das neue hinzufügen.
2. **Karten:** `type: custom:weather-event-overlay-card` ändern in `type: custom:ambient-overlay-card`.
3. **Neu laden:** `Strg` + `Shift` + `R`.

Alle anderen Optionen (`event`, `count_preset`, `person_entities` …) bleiben gleich.

**Zusammengelegte Effekte** – die alten `event`-Werte gehen nicht mehr:

| Alt | Neu |
|---|---|
| `owl`, `birdhouse` | `owl_birdhouse` (wechselt selbst nach Sonnenstand) |
| `shooting_stars`, `wishstar`, `comet` | `night_sky` (Teile einzeln abwählbar) |
| `balloons`, `lights` | `birthday` (Teile einzeln abwählbar) |
| `rain`, `snow`, `hail`, `lightning`, `fog`, `storm`, `clouds` | `weather_auto` – laufen nur noch über die Wetter-Automatik |
| `gnome_door` | ersatzlos entfernt |
</details>

---

## 👆 So wird's eingerichtet

Karte hinzufügen → **Ambient Overlay Card** → im Editor. Eine neue Karte startet mit **einem** Effekt. Willst du mehrere, tipp unten auf **„🔀 In Liste umwandeln“** (siehe [Alles in einer Karte](#-alles-in-einer-karte-liste)).

1. **▶ Vorschau:** Oben siehst du den Effekt live. Kommt eine Figur nur selten vorbei (Hexe, Zug, Hund, Weihnachtsmann …), schick sie mit **„▶ Jetzt vorbeifliegen lassen“** sofort los.
2. **✨ Effekt:** Kachel antippen – danach klappt die Auswahl von selbst zu. Antippen der Zeile öffnet sie wieder. Die reinen Wetter-Effekte stehen bewusst nicht einzeln da, die macht die **🌦️ Wetter**-Automatik.
3. **🧩 Was soll gezeigt werden?** (bei Geburtstag, Nachthimmel und Halloween): jedes Teil mit eigenem Schiebeschalter. Beim Geburtstag steht hier auch der Text für die Wimpelkette.
4. **🎨 Aussehen:** Anzahl (Wenig/Mittel/Viel), Deckkraft (Zart/Dezent/Kräftig) und bei manchen Effekten die Farbe.
5. **⚙️ Einstellungen** – je nach Effekt:
   * **🌦️ Wetter:** deine `weather.*`-Entity (ohne sie zeigt der Bereich rot „Wetter fehlt!“).
   * **🐕 Labrador:** optional die Wetter-Entity fürs Schütteln bei Regen.
   * **🚂 Dampflok:** Weihnachts-, Abendessen- und Halloween-Schalter, Personen zum Antippen, Gäste-Sensor oder fester Gäste-Text. Sind mehrere Schalter an, gilt: Weihnachten vor Abendessen vor Halloween.
   * **🎃 Halloween-Schalter** gibt's bei Dampflok, Labrador, Eule & Vogelhäuschen und der Wetter-Automatik (für den Mond). Ohne Schalter kommt der Halloween-Look nur am 31. Oktober. Gefunden werden `input_boolean.`, `binary_sensor.` und `switch.`.
6. **🕒 Wann anzeigen?** Wann der Effekt zu sehen ist (leer = immer) – Bausteine siehe unten.
7. **💙 Über die Karte:** Version, Links und Spenden-Knopf.

Neben vielen Einstellungen steht ein kleines **ⓘ** – antippen, dann kommt eine kurze Erklärung. Rechts in jeder Zeile siehst du eine Zusammenfassung, auch wenn der Bereich zugeklappt ist.

Gut zu wissen:
* Bei **Weihnachtsmann, Hund, Dampflok, Vogelhäuschen, Komet und Laub** heißt „Anzahl“ nicht *wie viele*, sondern *wie oft* etwas vorbeikommt.
* Bei **Halloween** steuert „Anzahl“ beides: wie viele Kürbisse und Fledermäuse, und wie oft Hexe und Gespenst vorbeikommen.
* Bei **Bienen, Wolken und Geburtstag** ist „Anzahl“ eine ganz normale Menge.
* Die **Spinne** gibt es nur einmal, da gibt's keinen Anzahl-Regler.
* **Weihnachtsmann, Hund, Dampflok, Eule & Vogelhäuschen, Laub, Bienen, Geburtstag und Halloween** haben feste Farben, also keinen Farbmodus.

### 🧺 Alles in einer Karte (Liste)

Statt für jeden Effekt eine eigene Karte mit Sichtbarkeits-Regeln anzulegen, packst du **alle Effekte in eine einzige Karte**. Bei einer Einzel-Karte unten auf **„🔀 In Liste umwandeln“** tippen – dein Effekt bleibt mit allen Einstellungen drin.

* **✨ Meine Effekte:** jede Zeile ist ein Effekt mit **grünem Punkt** (läuft gerade) oder **grauem Punkt** samt Grund („wartet – Sonne ist noch oben“). Mit dem Schalter machst du ihn aus, ohne ihn zu löschen. Antippen klappt ihn auf: dort stecken dieselben Bereiche wie bei der Einzel-Karte, dazu ↑ ↓, kopieren und entfernen (mit Sicherheitsfrage).
* **🕒 Wann anzeigen?** – pro Effekt. Leer = immer. Fertige Bausteine zum Antippen: *Nur nachts, Nur tagsüber, Zeitraum im Jahr (z. B. 17.10.–2.11., jedes Jahr), Uhrzeit von–bis (auch nur an bestimmten Wochentagen), Schalter ist an, Person ist zuhause, Wetter ist …* und *Eigene Bedingung* für jede beliebige Entität.
* **Gruppen:** Mehrere Bedingungen untereinander müssen **alle** stimmen. Für „eins davon reicht“ gibt es die blaue **ODER**-Gruppe, die grüne **UND**-Gruppe für „alles davon“. Gruppen lassen sich ineinander stecken; Antippen von ODER/UND schaltet um.
* **🔒 Gilt für alle Effekte:** Bedingungen, die für die ganze Karte gelten – z. B. „nur wenn der Fernseher an ist“. Stimmt hier etwas nicht, ist gar nichts zu sehen.
* **Vorschau:** zeigt alles, was gerade läuft („5 von 11 laufen gerade“) – oder nur den Effekt, den du aufgeklappt hast, auch wenn der gerade wartet.
* **Zustand wählen:** Bei „Eigene Bedingung“ und „Wetter ist …“ kommt das Auswahlfeld von Home Assistant mit allen Zuständen des Geräts (mehrere = eins davon reicht). Lädt HA es nicht, gibt es die Zustände als Knöpfe zum Antippen.
* Fehlt eine Entität (umbenannt, gelöscht), pausiert nur dieser Effekt und zeigt rot **„⚠️ … nicht gefunden“**. Der Rest läuft weiter.

Die Bedingungen haben dasselbe Format wie die Sichtbarkeit in Home Assistant (`state`, `numeric_state`, `time`, `screen`, `user`, `and`, `or`) – du kannst also deine alten Sichtbarkeits-Regeln 1:1 reinkopieren. Neu dazu kommt `period` für einen Zeitraum im Jahr.

```yaml
type: custom:ambient-overlay-card
conditions:                      # 🔒 gilt für alle Effekte
  - condition: state
    entity: input_boolean.deko_effekte
    state: "on"
effects:
  - event: weather_auto
    weather_entity: weather.home
  - event: halloween
    conditions:                  # 🕒 Wann anzeigen?
      - condition: period        # jedes Jahr 17. Oktober bis 2. November
        from: "10-17"
        to: "11-02"
      - condition: state         # nur nachts
        entity: sun.sun
        state: below_horizon
  - event: train
    person_entities: person.anna, person.ben
    conditions:
      - condition: or            # eins davon reicht
        conditions:
          - condition: state
            entity: sun.sun
            state: above_horizon
          - condition: time
            after: "12:00:00"
            before: "20:00:00"
  - event: dog
    enabled: false               # vorübergehend aus
```

**Und meine alten Karten?** Laufen genau wie vorher weiter – nichts musst du ändern. Auch die Einzel-Karte hat jetzt „🕒 Wann anzeigen?“.

### 🚃 Reihenfolge der Waggons

Von vorn nach hinten: **Lok** → die **vier festen Waggons** → die **Personen** (in der Reihenfolge, wie du sie angehakt hast) → die **Gäste** (wie die Namen im Sensor stehen) → ganz hinten der **Schlusswagen** mit den blinkenden Lampen.

### 🌦️ Was die Wetter-Automatik zeigt

| Wetter in Home Assistant | Effekt |
|---|---|
| `rainy`, `pouring` | 🌧️ Regen |
| `snowy` | ❄️ Schnee (mit wachsender Schneedecke) |
| `snowy-rainy` | ❄️ Schnee **+** 🌧️ Regen |
| `hail` | 🧊 Hagel |
| `lightning` | ⚡ Blitz |
| `lightning-rainy` | ⚡ Blitz **+** 🌧️ Regen |
| `fog` | 🌫️ Nebel |
| `windy`, `windy-variant` | 💨 Sturm |
| `cloudy`, `partlycloudy` | 🌤️ Wolken-Drift |
| `clear-night` | ✨ Sternenhimmel |
| `sunny` | ☀️ Sonne (nur tagsüber) |
| alles andere | aus |

**Dazu immer:** Ist die Sonne untergegangen (`sun.sun` = `below_horizon`), kommt der 🌙 Mond dazu – egal welches Wetter. Die Sonne verschwindet dann, auch wenn die Wetter-Entity noch „sunny“ meldet (beide sitzen am selben Platz).

Anzahl, Deckkraft und Farbmodus gelten bei der Automatik für **alle** Wetter-Effekte gemeinsam. Tiere und Deko laufen nicht über die Automatik – nimm sie einfach als weiteren Effekt in die Liste.

---

## 🧩 Die Effekte

| `event` | Was passiert |
|---|---|
| `off` | Kein Effekt (Standard) |
| `weather_auto` | 🌦️ Automatisch nach echtem Wetter (siehe oben) |
| `night_sky` | 🌠 Sternschnuppen, Wunschstern und Komet |
| `owl_birdhouse` | 🦉🐦 Tags Vogelhäuschen, nachts Eule |
| `birthday` | 🎂 Ballons, Konfetti, Wimpelkette mit Text, Lichterkette |
| `halloween` | 🎃 Kürbisse, Gespenst, Hexe, Spinnweben, Fledermäuse |
| `leaves` | 🍂 Herbstwind-Stoß mit 3-Farben-Verlauf |
| `santa` | 🎅 Weihnachtsmann mit Schlitten, verliert mal ein Geschenk |
| `train` | 🚂 Dampflok mit Waggons, Familie, Gästen und Schlusswagen |
| `dog` | 🐕 Goldener Labrador (optional Schütteln bei Regen) |
| `spider` | 🕷️ Spinne im Netz mit roten Augen |
| `bee` | 🐝 Bienenschwarm im Zickzack |

<details><summary>📋 YAML-Beispiele</summary>

**Dampflok mit Familie, Gästen und Festtags-Schaltern**
```yaml
type: custom:ambient-overlay-card
event: train
count_preset: medium
opacity_preset: high
santa_sensor: input_boolean.weihnachtszeit
dinner_sensor: input_boolean.schalter_abendessen
person_entities: person.anna, person.ben
custom_wagon_entity: input_text.gaeste
```

**Dampflok mit festen Gäste-Waggons (ohne Sensor)**
```yaml
type: custom:ambient-overlay-card
event: train
custom_wagon_text: Oma, Opa
```

**Labrador, der sich bei Regen schüttelt**
```yaml
type: custom:ambient-overlay-card
event: dog
opacity_preset: high
weather_entity: weather.home
```

**Eule & Vogelhäuschen** (`count_preset` = wie oft ein Vogel vorbeifliegt)
```yaml
type: custom:ambient-overlay-card
event: owl_birdhouse
opacity_preset: high
```

**Geburtstag mit eigenem Text**
```yaml
type: custom:ambient-overlay-card
event: birthday
birthday_text: "Happy Birthday, Max!"
opacity_preset: high
```

**Halloween ohne Fledermäuse**
```yaml
type: custom:ambient-overlay-card
event: halloween
count_preset: medium
opacity_preset: high
halloween_bats: false
```

**Halloween-Zug schon ab Mitte Oktober (per Schalter)**
```yaml
type: custom:ambient-overlay-card
event: train
halloween_sensor: input_boolean.halloween
```

**Nachthimmel – nur der Komet**
```yaml
type: custom:ambient-overlay-card
event: night_sky
count_preset: low
opacity_preset: high
night_shooting_stars: false
night_wishstar: false
night_comet: true
```

**Spinne**
```yaml
type: custom:ambient-overlay-card
event: spider
color_mode: auto
```

**Bienen**
```yaml
type: custom:ambient-overlay-card
event: bee
```

**Herbstlaub mit eigenen Farben** (nur per YAML)
```yaml
type: custom:ambient-overlay-card
event: leaves
leaf_colors:
  - "#c9a227"
  - "#a83232"
  - "#d9812c"
```
</details>

---

## 🎛️ Karten-Optionen

Alles geht im visuellen Editor. Für YAML-Fans:

| Option | Standard | Was macht das? |
|---|---|---|
| `event` | `off` | Welcher Effekt läuft (siehe Tabelle oben) |
| `count_preset` | `medium` | `low`, `medium` oder `high` – wie viele bzw. wie oft |
| `opacity_preset` | `medium` | `low`, `medium` oder `high` – wie kräftig. Bei `high` wird jeder Effekt spürbar kräftiger |
| `color_mode` | `auto` | `auto` = passend zum Theme, `custom` = feste Farbe |
| `color` | `auto` | eigene Farbe (Hex) für Nachthimmel, Spinnennetz und die Wetter-Effekte |
| `weather_entity` | – | `weather.*`-Entity für die Automatik, beim Hund fürs Schütteln |
| `birthday_text` | `Happy Birthday!` | Text auf der Wimpelkette (wird gegen Schadcode abgesichert) |
| `birthday_balloons` / `birthday_confetti` / `birthday_banner` / `birthday_lights` | `true` | Teile des Geburtstags-Modus einzeln an/aus |
| `night_shooting_stars` / `night_wishstar` / `night_comet` | `true` | Teile des Nachthimmels einzeln an/aus |
| `santa_sensor` | – | Schalter (`input_boolean`/`binary_sensor`): an = Weihnachts-Ladung im Zug |
| `dinner_sensor` | – | Schalter: an = Abendessen-Ladung im Zug (Weihnachten hat Vorrang) |
| `halloween_pumpkins` / `halloween_ghost` / `halloween_witch` / `halloween_webs` / `halloween_bats` | `true` | Teile des Halloween-Modus einzeln an/aus |
| `halloween_sensor` | – | Schalter: an = Halloween-Look bei Zug, Hund, Eule und Mond. Am 31. Oktober kommt der Look auch ohne Schalter |
| `person_entities` | – | `person.`-Entities mit Komma – wer zuhause ist, fährt mit (im Editor zum Antippen) |
| `custom_wagon_entity` | – | Sensor mit Namen und Komma, z. B. `input_text.gaeste` – pro Name ein Waggon. Leer, `unknown` oder `unavailable` = keine Gäste-Waggons. Hat Vorrang vor dem festen Text |
| `custom_wagon_text` | – | fester Text für Gäste-Waggons, z. B. `Oma, Opa` |
| `leaf_colors` | `["#c9a227", "#a83232", "#d9812c"]` | drei Hex-Farben fürs Laub (nur YAML) |
| `leaf_shape` | eingebaute Form | eigene Blattform als SVG-Pfad (nur YAML, wird sicherheitsgeprüft) |
| `conditions` | – | 🕒 Wann anzeigen? Liste von Bedingungen (Format wie die HA-Sichtbarkeit, plus `period` mit `from`/`to` als `"MM-TT"`). In der Liste: oben = gilt für alle, im Effekt = nur für diesen |
| `effects` | – | macht aus der Karte eine Liste: jeder Eintrag hat dieselben Optionen wie oben, dazu `conditions` und `enabled: false` zum Ausschalten |

---

## ❓ Häufige Fragen

**Kann ich den Halloween-Look am 31. Oktober abschalten?** Im Moment nicht – an dem Tag kommt er automatisch. Den Halloween-Modus selbst (`event: halloween`) gibt's dagegen nur, wenn du ihn auswählst.

**Kann ich mehrere Effekte gleichzeitig haben?** Ja – am einfachsten mit **„Alles in einer Karte“** (siehe oben). Mehrere Einzel-Karten gehen aber weiterhin.

**Wie blende ich alle Effekte auf einmal aus?** In der Liste über **🔒 Gilt für alle Effekte**, z. B. mit einem `input_boolean`. Die normale **Sichtbarkeit** der Karte in Home Assistant klappt auch.

**Belastet das mein Tablet?** Kaum. Fast alles läuft über CSS, und bei Tabs im Hintergrund pausiert alles. Auf sehr schwachen Geräten bei `count_preset` einfach `low` nehmen.

**Ist das sicher?** Der Geburtstags-Text und eigene Blattformen werden geprüft, bevor sie angezeigt werden. Die Karte schickt nichts ins Internet.

---

## 💙 Gefällt dir die Karte?

Sie ist und bleibt **kostenlos**. Wenn du magst, kannst du mir ganz freiwillig eine kleine Spende per PayPal schicken: [paypal.me/MarcoStrickmann](https://paypal.me/MarcoStrickmann). Danke! 🙏

[![PayPal](https://img.shields.io/badge/PayPal-Spenden-0070BA?logo=paypal&logoColor=white)](https://paypal.me/MarcoStrickmann)

## 💡 Ideen, Wünsche und Fehler

- **Idee oder Wunsch?** Schreib sie bei den [Diskussionen](https://github.com/misterm2310/ambient-overlay-card/discussions). Dort kann jeder mit 👍 zustimmen und mitreden.
- **Etwas funktioniert nicht?** Mach ein [Issue](https://github.com/misterm2310/ambient-overlay-card/issues) auf. Hilfreich: deine Version, welcher Effekt, welches Gerät, was du getan hast und was passiert ist.

---

Lizenz: [MIT](LICENSE) – frei verwenden, verändern und weitergeben, auch kommerziell. Nur der Lizenztext mit Urheberrechtshinweis muss dabei bleiben.
