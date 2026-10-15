/**
 * ambient-overlay-card
 * Lovelace Custom Card — stimmungsvolle Overlay-Effekte fürs Dashboard
 */

// 🏷️ Versionsnummer: Wird sie erhöht und auf GitHub hochgeladen, legt
// GitHub automatisch ein Release an (z. B. v1.0.9). Beta: "1.1.0-beta.1".
const CARD_VERSION = "1.0.13";

/* ============================== CREDITS ============================== */
// 🎩 Mister-M-Logo direkt in der Datei (die Karte ist nur eine einzige Datei,
// eine extra Bild-Datei würde bei HACS-Installationen fehlen).
const CREDITS_LOGO = "data:image/webp;base64,UklGRnwRAABXRUJQVlA4IHARAABQfwCdASpYAhoBPmEwlUgkIyIhIlG5QIAMCWlu4XYBH9R9kFjLrnJg9ERw3rHh36v/tOlJ5g36c9JHzG+a9+M3YAfz3/gdar6CPSx/tZ+4GYMekv7329f4X+p/tz0P/rpzp3qvtb+z/KX5C/0/g7wDvyf+df4z8h/yI5BIAH5V/W/9h9wfxs/YebP2a9gD9XP975XHiPfZ/+j7Bv82/sf/Z9ST/m/2H5X+6r6c/9nuI/yz+3/9zsG+ip+zooqIB0EKogHQQqiAdBCqIB0EKogHQQqiAdBCqIB0EKogG4qfW47X4wgbmS3onCexCkYZePkLhl4+QuGXj5C4YlmB2HxtfuPgcx5iodIuG58hcMvHyFwy8fIXDLRj3ljwcZxghln5jb0mIzFbVt2+CeGj2vnhE+dLneNz5C4ZePkLhl4+QuGXfPDKpQWPKSIm8Dsf4UdQl8ZLHGkgISl2as+QuGXj5C4ZePkLhl45a0Zir4H0ECEVX7d+H4YqEO/I8dhW3MKsNC0IXstNz48ApGe5pzJMV0+4t/yj8jvuN5eBWI+dfKosWhr4o9gaABNcUuQFQ4WibfWANWZ95VewGWPLXGJy41Yl+l1Vm2B+vzTM14sCkwM1goNDE/kiZCoA8d/ycv9+DQI8qmPkLiixVGK6ZyOws83gRoIqk8j/2bL7Fyt1f+FxYzl1wSHNZbCLMhPwV0QC+ZPNVOGVYBLaJysEnr3UjYOq2NBCfIwJqQYjxjIs8akP2Ny7rQmaCFUQDoIVLM5FUMcDrIoEd3hVXU0eA7j4x2qJZF5vWz747draSDvqJA2BS1IZ3Q3KLtAzTlbRQFK28g4O+UdixJeUzgbFuEDv3jkkyu3MXH5kfp3MN6yVfauHMHR/1pQQ1KayFCBfk9DJe8XDc+QuGXhjCqDiW1uy07Y6UpkkUJUcidgM7shWjBHV6BCWTTsOa8fTagFS88laUe0Ha/V6IuewyT5z5f7+eYzJIW9F65RgMQGImPWQUdyREYE4t0U49/cps65rvQHQQqiAdBBwnpx5tWnD5W+ErtTdliXm9kYOA6iVgs1V/pPDLT4XfrQbvhAV7dYtw7ry2IHY2kfUPHuP+eZZ4ejkaB9rqT0Wskrz7RKMIw5eKY9Vn1+DdnKaPm2A2NDn1MfIXDLx8hTZsuD5zDq1binCCVdsthpPLqKHQ1UqMFbavFyuTI9W6jMNPQG13oKJqMNIjbhq9qKmaL4loQgJdEyCQA10EKogHQQqlUy2ZJRAOx5uUTnEEKogHQQqiAdBCqIB0EKogHQQqiAdBCqIB0EKogHQQqiAdBCqIB0EKogHQQqiAdBCqIB0EKogHQQqiAdBCqIB0EKogHQQqiAdBCqIB0CIAP7/0EAABP+orh1JgRhpPescWqk5QpTiPR7tFEPG41cjEVCJqMmej+vX7jQ2iVnw0WYOXFi/XWLfvo+UjNPnehvEHfMSFete2pu6e8aFRJQHU/oCdfuGM5mg0oVe4sJfjsJ9VP9P+A5MD9MlldlFsIyEdcFRv1dDDJ/MuSF8ac/HZQl4oFGyBfllXvFD7NX/XgoWaYUZY7T3JZHY4Biyp30wyvPNIKL9wcHSQTzWqbMQWcPilUbuEbLdCdZVmTc0nWQYkgLa6EfDNW0PfKswrysvceFfaXYpYOxKh6D5PAymzMNSEw1vJqON3d9KDk7STNO0oIHG2Rcomgyoe38cDdTG8lXznc2D6mUte+TWqn0+YlapAuMWV7TasjHzBTkcGA/9hftbZGRnJsrppsFqoyr7HvecYFJkDa1R94cDcwiP/Ys4Ww9WPiBHbBdIygKNcVRsajX5480szKj6nd4x7JqfdbeufwF6Yl+mSJl7UDVrxLrFCdPsspmajzEnD2RARXgRjyRypBZPMd6b0o12GVu4YX3DcTh/R3ouj7R36HRKpFSEfznQi2/33HKe9Z2NeYA3Y6rQ6Goi32/LtgCrpDylLwlB/nV0XwyH/wTI8djF1Mqv7iA7hKFHCLORIERmQwmlx2UG62vEPFYWJ99XuZLVBsbMl8+R0LS0FlOB3Bjx92LCMx7SfQLmedKsJeH+4l2M5Kn25/KXEfz7fW5pUZq7VxBDtiei238v++e4WotNDL7tEA3eGoxhpDS13+HI/5fj0KBwg6776b4hMwJznYRtPRW3oBSx+KI005CtiLdrAnhpfXCnjJ2FvVll5hJWFIPBqYdiXLN/ZeXNVKl1YzXwGcVgtBHWOzdNKqynU30ivBEy64Cqgc7CUBiXInxLV1eR3oydpSQO3oqqJXH/J4YKCZCplLhQZMMB6Lv6rfifB9T8mj1lfafs1D5AVL+CSV5cCyxmwkPQ0ot5LOSl5wt18/iGOkaf/lEMMWfGwOxqHmbooyNJDgWxKgSrBVROigCCLfVAMYNHYapiUh/OKU/tF/NsUxLJjpmDkcsPZ8YNH9qD67x6rzBsqtynfm/Awh128cp/ZHbHIn8jaxxCuDvOOUK/YCo3L1BfW+h+qgQhF25mzM4LY8C/ud5HvoIQN3IPdowPt1jkec1+dj7eHu+ROLrIu7Xg6lOh9gMZN/wrEbeSAqPsVyJVC5Ff8FD6kCYejhbqMdI1IOBbQ2+wj8/h8qgcSp2pTK6fvyFszVVLXXz/kiHx9pYCRVltTf8fZqO1YyLLEfafvypesHZKkQf0fANNwxIhNlyeGzInJ+pSIQ1MZeidlgRhbKBZdc9eQBsjyXdTK2Qu2CCkH/ReBIFrNwcp6Ob5w8wWaVUD8bJI6rYK/MxCG3tdmaEDnS7zZU2AqCB7/m3UkqdkoU2qWi/Jw52V7NwAkwkLeqidtjzCjpg6O4t96mhfWPQDQWiX+5UBnLL8MqhJQqz8OX4chuCu+/kS7WF106x6bZcbLEbEEoyDh/tN8DGLZglssblxV3IExHlC1YzSFnf+y1EJexNC78WZ6A/WTVL/MdVPQ88ff3lu3lfC/FPJnYOVaXKLxqGuybAebSec7hgI+/0RCIclVWSMB43r1tXp0bAmOT0ctukebaUGwHAJLIyIJJB3imGULfaTH3aF8rY2oY+21ytlWc0inNpjtaxHYQfStrjpxpa/Rq4d74m+G+aEhb6iXSLr6YiBVkaD+ihgzXpGGvXwAGIJlYUej3GT68zl/MdF3UAmFwFHTu3m5XZHr0GrifpREJBpO/d92FMNRjI+EJY/8DFIBrxic1dQ8jYB//0xcFm4EnckjtP4Jo3f162n/kRpesxDql9hC/xclVIAMJ+OFeKnXMa36hfwRVr8zTL6IvZbEVgPI4u3d1TjmhcOU2Fr+n3/1DJffAg8VPBfMB/APbkmq7IoWbwfKHehiXTNxmhnqVlXSrTy9Mvf2wlb3JyDDPvkxE4wFcDMMmLKIWuJZvBPiplar/C5szJCYlJhG4N/yZkybk3DbUKqv9KaP9VMmZh1Nu5lj3alis7Pl3gscWAFeTEk291Kahz2VvBYSDewgTtTV7k5B7hW0BTS41Ml0zx3RFVjFIsgnTei4nU0EMB8g4bjxCN15nMH1vogUihSvw4c81TliEIP1q0j4kg2J6rVMPpDo9hruU4UzNIZ9G8o5loDQ3USN0hnkyAWWTarRAqW/hlYUMDU5YL7IjmdZwqV4lvZu8E6IwBC8hw7ggZuts0EXLpwYXkV8NHJLlU44cIKFmPOIGW6vP/0e3f157/PLApW8Aqu41HTR8aFnZR1T/qc5quXO8Y0Tuy5pvggk3WaLAIzb47Xq8lcsOSIlXHSZld0kA6n8FvAGUAr2K5rGOjS6VPDhhGbRIsO5KimP282asijBSBvR7zoUa7G2mwuBbZFP5AB7Nr9o9PSSXwpFWR5jLGaboGhPOau+QH+VZREYI23UoFnhOHkjr8XxR6YqBHK/Um2RkumxercAEl4D7PLF59UrC45NVP2IZlAoOgrs1JSOqdaHIItTF+4zn3epQBk4avW8iRY46wxgCuay/YL+JXAHjhtZCyibiMEj0cdmz99kFodA0NKDWMQUHm+j6Od49RYWDFkr3AbHjd3kOXk87O2fz8l/YThp5G6C7LfMtWQFSFGe+KMeS0B7oX9fpj3acbnjmqJROLa50Nf85J3Beasw3cj1GmPqIzdmaFI9KVLN9ypP0wd22z6dNRz9eDUcebXLQNiqV+Lc8lZ93VHg5So9eG9Bd3/ic7PQGd0r41rxJnf0NV95i0Zq5z49ayZ6PLjcw/WnA8PSN6foxFT764nbqv8iF1+DPv+kL1Y3j3RpLnFw6de730ovM+xpaOWT9XgaoIj2au3+7uzXboQRdA/kkJMkch+GLCPUrTz3smCpFAF8/kv9oGg3IhfqQNH8On2rxav8qg7gPZvke0gd2RQyb/PXHExvBMY6OG4E7u/pM6M75Gd2c5UoUsqu4wJgmy8MAAmfm/x7wWk7536tVxtPnsfmiuWz15qfFB18pAuoY5MoeMlrpwafQYwpbu64QAhdUMVAsGZR4uBa9wHfKPsELjycj6siVuSoNHzuonqUjXdLMmAvPvvUYOhBqvOyVwYaybc893kxfG1vczezB+Wcp0IAa1nnyTzRGK7Ah20a6HUkYvn30ObUbAlBfZj8jn7TUgkmaLITGVzPJWs7nopKQKQ5JA/J8ecPhgMuWfKGatONduOIymYjcbdBsZJfqSwViaPqrrhmajG+hVGnYgdTeprDjCczEvCywu0TkgHYXkpHWk/tz4X2ILFOqhe9fTZCDuknVDruDa6isAcSKveiJvWUWAoXsplNwjKoZbl/gqqnpqbQ0FPO9ii8RBIAU54kxPPAJeUjqdMnffwvIBUlhv+ak1/TJR1u6+QSpjUFQO9FbIQnRACl7mowlpjPflFAb9KTHBr5uMCupk2uyyWVxlA9xp8Sx4luqJ9duW/PRjlq27h148H2O/+dtNrGy6tX5DaPjnocOipj7LdKjMWEMvza33Agm9/yfTuQdnKqzDdMoBRQRxcfwUDC1VC9UVjwazoey5G7SLC8QpoYkmi5Eg7Tf4iG8mQJqqaA9YcaU6/kqkzUkQiAOMYnC77blVBg7T5XvVz9m4/eU8m+onZgMyZVcZ5X8pLCLixfUJyAeVqbkeT/V/uKw7TYc25DVsvfMYO2ZO6YZmoN6oTxdyMidL3gsxKvDnReYx0n+SMkAouOAv4ZcTIgKR2+W8xYjUzym5nbpJOKU0XYDlSt3n4VnswHEqDHHfHsr0uMJWeOVqK8i2JVPwL1Px+haOEy49c0l+iaT8Lt5vN8FK/oraDeXLLCUI6LvUGS9uT1nnEmpMpEV8QgAim0OBXYg/dBHnW5NDbRJr/MuPxfgXtgDWDl4Rkz6yEL4kkwg2Cq5Mefduiv1NWH3LlJpw+qGBQY92mszR7BKjQLlMScQ4UWRu0IaT/+Z5CjhtUCyJBDPzqFiVAwL3kmtobvAy2Eqyl0xp/Aa57CfI70gQCRIe0gEFkpBdlxkl7qcsP32HANKAmAAlXrtq0FX4koUQ4jenCmULD/Vg/lpF7b1IUj3T0wEexEzNjU1omXKq2VV0dRL2IyQ5ePHUHP+3awu13Oe2SECesIJ2oA/6pCMuLtEYX9gcUAsqZcty/xZRJKHlRQ8VlKw/t+YlMlRs2KCol5JhniuLa8X7GKSUHzB1wVXCv2H2DSDMoJgqSC+Byza99mPabKUt7RnFSPQ3Z7+7qy+9VuPd95ip7vm2FPHK4fFa+aN4drJtAS5lUqboo9HoWt88LgnVjzLE+JhB7rc6pNq+eJ0/85cCEUanhUDRQlltGE7ISGhV62M4xCh4RIcRYLrC2W4SkSnlAZERM5KKYoSTNZsggONoHaQwvzB2u4aRYWotcBEpnfuuP5oowW35N7XqWvnw9W1ol+pszc3p1ENroVjFgwJTdGIvembVgUmkW+AnfsOxK032JjsjQuNGEQDiplGYrh++ARgEvG9l6fJ4/ES2rJ9TYOZobwVYAAAAAAAAAAAA=";
const CREDITS_REPO = "https://github.com/misterm2310/ambient-overlay-card";

// Credits-Bereich ganz unten im Editor - wie bei der Einkaufsliste
function creditsHtml() {
  return `<div class="aoc-credits" translate="no">
    <style>
      .aoc-credits { text-align:center; margin-top:18px; padding-top:14px; border-top:1px solid var(--divider-color, rgba(127,127,127,.25)); color:var(--primary-text-color, #222); font-size:14px; line-height:1.5; }
      .aoc-credits p { margin:6px 0; }
      .aoc-logo { background:#fff; border-radius:14px; padding:10px; display:inline-block; max-width:100%; box-shadow:0 1px 4px rgba(0,0,0,.12); }
      .aoc-logo img { display:block; max-width:100%; width:220px; height:auto; }
      .aoc-btns { display:flex; flex-wrap:wrap; gap:8px; justify-content:center; margin:12px 0; }
      .aoc-btn { color:var(--primary-text-color, #222); background:var(--secondary-background-color, rgba(127,127,127,.12)); border-radius:12px; padding:10px 14px; text-decoration:none; font-weight:500; }
      .aoc-btn.pp { display:inline-flex; align-items:center; gap:8px; background:#0070BA; color:#fff; border:2px solid #003087; font-weight:700; }
      .aoc-btn.pp svg { width:20px; height:20px; flex:none; }
      .aoc-small { font-size:12px; opacity:.7; }
    </style>
    <div class="aoc-logo"><img src="${CREDITS_LOGO}" alt="Mister-M" loading="lazy"></div>
    <p><b>Ambient Overlay Card</b> v${CARD_VERSION}</p>
    <p>Gemacht von <b>Mister-M</b> – mit Hilfe von Claude 🤖</p>
    <div class="aoc-btns">
      <a class="aoc-btn" href="${CREDITS_REPO}" target="_blank" rel="noopener">🐙 GitHub</a>
      <a class="aoc-btn" href="${CREDITS_REPO}/discussions" target="_blank" rel="noopener">💡 Idee oder Wunsch</a>
      <a class="aoc-btn" href="${CREDITS_REPO}/issues" target="_blank" rel="noopener">🐞 Fehler melden</a>
      <a class="aoc-btn pp" href="https://paypal.me/MarcoStrickmann" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.2C1 8.6 2.7 5 6.2 5c2 0 3.5 1.1 5.8 3.4C14.3 6.1 15.8 5 17.8 5c3.5 0 5.2 3.6 3.8 6.8C19.5 16.4 12 21 12 21z" fill="#fff"/></svg><span>Spenden mit PayPal</span></a>
    </div>
    <p class="aoc-small">Die Karte ist und bleibt kostenlos. Wenn sie dir gefällt, freue ich mich über eine kleine Spende – ganz freiwillig. Beim Antippen öffnet sich PayPal im Browser; vorher geht nichts ins Internet.</p>
    <p class="aoc-small">Lizenz: MIT</p>
  </div>`;
}

/* ============================== HELFER ============================== */

function fireEvent(node, type, detail) {
  const event = new Event(type, { bubbles: true, composed: true });
  event.detail = detail;
  node.dispatchEvent(event);
}

function spreadSample(arr, count) {
  if (!arr || !arr.length) return [];
  const sorted = [...arr].sort((a, b) => a.l - b.l);
  if (count >= sorted.length) return sorted;
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(sorted[Math.floor((i * sorted.length) / count)]);
  }
  return result;
}

function hexToRgb(hex) {
  let h = (hex || "").trim();
  if (h === "auto" || !h) h = "#ffffff";
  if (h.startsWith("#")) h = h.slice(1);
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const num = parseInt(h, 16);
  if (h.length !== 6 || Number.isNaN(num)) return { r: 255, g: 255, b: 255 };
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function rgbToCss({ r, g, b }) {
  return `rgb(${r}, ${g}, ${b})`;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function gradientColor(colors, t) {
  const safeColors = (colors && colors.length === 3) ? colors : ["#c9a227", "#a83232", "#d9812c"];
  const [c0, c1, c2] = safeColors.map(hexToRgb);
  const seg = t < 0.5 ? [c0, c1, t * 2] : [c1, c2, (t - 0.5) * 2];
  const [from, to, localT] = seg;
  return rgbToCss({
    r: Math.round(lerp(from.r, to.r, localT)),
    g: Math.round(lerp(from.g, to.g, localT)),
    b: Math.round(lerp(from.b, to.b, localT)),
  });
}

function getParticleCount(preset, eventType) {
  let max = 60;
  if (eventType === "balloons") max = 30;
  if (eventType === "lights") max = 25;
  if (eventType === "shooting_stars") {
    switch (preset) {
      case "low": return 3;
      case "high": return 8;
      case "medium": default: return 5;
    }
  }
  if (eventType === "lightning") {
    switch (preset) {
      case "low": return 2;
      case "high": return 6;
      case "medium": default: return 4;
    }
  }
  if (eventType === "fog") {
    switch (preset) {
      case "low": return 3;
      case "high": return 8;
      case "medium": default: return 5;
    }
  }
  if (eventType === "stars") {
    switch (preset) {
      case "low": return 15;
      case "high": return 55;
      case "medium": default: return 30;
    }
  }
  if (eventType === "bats") {
    switch (preset) {
      case "low": return 4;
      case "high": return 14;
      case "medium": default: return 8;
    }
  }
  if (eventType === "bee") {
    switch (preset) {
      case "low": return 3;
      case "high": return 8;
      case "medium": default: return 5;
    }
  }
  if (eventType === "clouds") {
    switch (preset) {
      case "low": return 2;
      case "high": return 7;
      case "medium": default: return 4;
    }
  }
  if (eventType === "confetti") {
    switch (preset) {
      case "low": return 20;
      case "high": return 70;
      case "medium": default: return 40;
    }
  }
  switch (preset) {
    case "low": return Math.round(max * 0.33);
    case "high": return max;
    case "medium": default: return Math.round(max * 0.66);
  }
}

function getOpacityValue(preset) {
  switch (preset) {
    case "low": return 0.3;
    case "high": return 1.0;
    case "medium": default: return 0.6;
  }
}

// Mondphase rein aus dem Datum berechnet (kein Home-Assistant-Sensor
// nötig). Referenz: bekannter Neumond am 6. Januar 2000, 18:14 UTC.
// Rückgabe: 0 = Neumond, 0.25 = zunehmender Halbmond, 0.5 = Vollmond,
// 0.75 = abnehmender Halbmond, dann wieder Richtung 1 = Neumond.
function getMoonPhase(date) {
  const knownNewMoon = Date.UTC(2000, 0, 6, 18, 14, 0);
  const synodicMonthDays = 29.530588853;
  const diffDays = (date.getTime() - knownNewMoon) / 86400000;
  const phase = ((diffDays % synodicMonthDays) + synodicMonthDays) % synodicMonthDays;
  return phase / synodicMonthDays;
}

// Erzeugt den SVG-Pfad für die beleuchtete Mondfläche bei einer gegebenen
// Phase (0-1). Zunehmend wächst von rechts, abnehmend schrumpft nach
// links (deutsche Konvention). Für Neumond/Vollmond gibt's Sonderfälle,
// da die normale Kreisbogen-Formel dort mathematisch entartet (Radius 0).
function moonPhasePath(cx, cy, r, phase) {
  if (phase < 0.01 || phase > 0.99) return null; // Neumond: keine beleuchtete Fläche
  if (Math.abs(phase - 0.5) < 0.01) return "full"; // Vollmond: komplett beleuchtet
  const theta = phase * 2 * Math.PI;
  let rx = r * Math.cos(theta);
  // Mindestbreite der Sichel sichern: astronomisch korrekt wird sie kurz
  // nach Neu-/vor Vollmond hauchdünn (kaum als Sichel erkennbar, eher ein
  // Haarriss) - für eine klar lesbare Deko-Darstellung wird sie auf
  // mindestens 20% der Mondscheiben-Breite begrenzt, minimal
  // unastronomisch, aber immer eindeutig als Sichel erkennbar.
  const minRx = r * 0.8;
  if (rx > minRx) rx = minRx;
  // Diese beiden Flags wurden NICHT aus einer Formel geraten, sondern für
  // alle vier Mondviertel einzeln durchgemessen (tatsächlich gerenderte
  // beleuchtete Fläche mit der astronomisch erwarteten verglichen) - beide
  // Flags zusammen sind nötig, eine einzelne Flag allein reicht nicht aus.
  const sweepOuter = phase < 0.5 ? 1 : 0;
  const sweepInner = (phase < 0.5) === (rx > 0) ? 0 : 1;
  return `M${cx},${(cy - r).toFixed(2)} A${r},${r} 0 0,${sweepOuter} ${cx},${(cy + r).toFixed(2)} A${Math.abs(rx).toFixed(2)},${r} 0 0,${sweepInner} ${cx},${(cy - r).toFixed(2)} Z`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function brightnessFromAnyColor(str) {
  if (!str) return null;
  const trimmed = str.trim();
  if (!trimmed || trimmed === "transparent" || trimmed === "rgba(0, 0, 0, 0)") return null;
  if (trimmed.startsWith("#")) {
    const rgb = hexToRgb(trimmed);
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  }
  const nums = trimmed.match(/[\d.]+/g);
  if (!nums || nums.length < 3) return null;
  const r = parseFloat(nums[0]), g = parseFloat(nums[1]), b = parseFloat(nums[2]);
  return (r * 299 + g * 587 + b * 114) / 1000;
}

const THEME_BG_VAR_NAMES = [
  "--card-background-color",
  "--primary-background-color",
  "--ha-card-background",
  "--secondary-background-color",
  "--app-header-background-color",
];

function checkNodeForThemeColor(node) {
  const style = getComputedStyle(node);
  for (const varName of THEME_BG_VAR_NAMES) {
    const brightness = brightnessFromAnyColor(style.getPropertyValue(varName));
    if (brightness !== null) return brightness;
  }
  return brightnessFromAnyColor(style.backgroundColor);
}

function detectBackgroundBrightness(hostEl) {
  try {
    let node = hostEl;
    let depth = 0;
    while (node && depth < 25) {
      if (node.nodeType === 1) {
        const brightness = checkNodeForThemeColor(node);
        if (brightness !== null) return brightness;
      }
      if (node.parentElement) {
        node = node.parentElement;
      } else if (node.parentNode && node.parentNode.host) {
        node = node.parentNode.host;
      } else if (node.getRootNode) {
        const root = node.getRootNode();
        node = (root && root.host) ? root.host : null;
      } else {
        node = null;
      }
      depth++;
    }

    for (const el of [document.body, document.documentElement]) {
      if (!el) continue;
      const brightness = checkNodeForThemeColor(el);
      if (brightness !== null) return brightness;
    }

    return null;
  } catch (e) {
    return null;
  }
}

function isDarkModeActive(hassInstance, hostEl) {
  try {
    const brightness = detectBackgroundBrightness(hostEl);
    if (brightness !== null) {
      return brightness < 128;
    }

    if (hassInstance && hassInstance.themes && typeof hassInstance.themes.darkMode === "boolean") {
      return hassInstance.themes.darkMode;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  } catch (e) {
    return true;
  }
}

function resolveDynamicColor(cfgColor, hassInstance, defaultLight = "#000000", defaultDark = "#ffffff", hostEl) {
  if (cfgColor && cfgColor !== "auto") return cfgColor;
  const dark = isDarkModeActive(hassInstance, hostEl);
  return dark ? defaultDark : defaultLight;
}

function overlayBaseCss(className, extraProps = "") {
  return `
    .${className} {
      position: fixed; top:0; left:50%; transform:translateX(-50%);
      width:100vw; height:100vh; pointer-events:none; z-index:9999; overflow:hidden;
      ${extraProps}
    }
  `;
}

function sanitizeLeafShape(input) {
  if (typeof input !== "string" || !input.trim()) return null;
  const trimmed = input.trim();
  const forbidden = /<script|javascript:|on\w+\s*=|<iframe|<object|<embed|xlink:href|href\s*=/i;
  if (forbidden.test(trimmed)) return null;
  const allowedTagPattern = /<\/?(path|polygon|circle|line|g|rect)\b[^>]*>/gi;
  const strippedOfAllowed = trimmed.replace(allowedTagPattern, "");
  if (strippedOfAllowed.includes("<")) return null;
  return trimmed;
}

const _randomCache = new Map();
function getCachedRandomSet(key, count, factory) {
  const cacheKey = `${key}:${count}`;
  if (!_randomCache.has(cacheKey)) {
    _randomCache.set(cacheKey, Array.from({ length: count }, factory));
  }
  return _randomCache.get(cacheKey);
}

/* ============================ STATISCHE DATEN ============================ */

// Wie lange ein Effekt braucht, um beim Beenden sanft auszublenden statt
// abrupt zu verschwinden.
const FADE_DURATION_MS = 2500;

// Phasenversatz der periodisch durchziehenden Figuren.
//
// Alle rechnen ihre Startzeit aus der absoluten Uhrzeit:
// "-(jetzt % intervall)". Das sorgt dafuer, dass eine Figur nach einem
// Neu-Rendern genau dort weiterlaeuft, wo sie war - aber es hat einen
// Haken: Zug, Hund und Komet teilen sich dieselbe Intervall-Tabelle.
// Ohne Versatz starten sie deshalb IMMER im selben Moment, weil sie alle
// ab demselben Nullpunkt zaehlen. Beim Neustart von Home Assistant faellt
// das besonders auf - dann zieht die ganze Gesellschaft gleichzeitig los.
//
// Jede Figur bekommt darum einen festen Anteil ihres Intervalls als
// Versatz. Bei gleichem Intervall liegen die Durchlaeufe dadurch
// gleichmaessig verteilt statt uebereinander.
const PERIODIC_PHASE = {
  train: 0,
  comet: 1 / 3,
  dog: 2 / 3,
  santa: 0.5,
  birdhouse: 0.25,
  witch: 1 / 6,
  ghost: 0,
};

// Wie lange eine Figur tatsaechlich sichtbar unterwegs ist (in Sekunden).
// Den Rest des Intervalls wartet sie unsichtbar ausserhalb des Bildes.
// Diese Werte stehen so auch in den Renderern ("30 / interval * 100" usw.).
const PERIODIC_FLIGHT_SEC = {
  train: 30,
  dog: 20,
  santa: 18,
  birdhouse: 9,
  comet: 3.5,
  witch: 16,
  ghost: 22,
};

// Zeitpunkt, an dem die Karte geladen wurde (also praktisch der Moment des
// Home-Assistant-Neustarts bzw. des Seiten-Aufbaus). Wird einmal beim Laden
// der Datei festgehalten und aendert sich danach nie wieder.
const SCRIPT_START_SEC = Date.now() / 1000;

// Merker fuer den Neustart-Versatz, einmal pro Figur+Intervall berechnet.
const _bootSkip = {};

function periodicDelaySec(interval, key) {
  const offset = (PERIODIC_PHASE[key] || 0) * interval;
  const memo = key + ":" + interval;

  // Zweiter Teil gegen das "alles auf einmal": nicht nur den Startzeitpunkt
  // versetzen, sondern auch verhindern, dass eine Figur beim Laden der
  // Karte mitten im Durchlauf steht. Ohne das poppt bei etwa jedem
  // dritten Neustart ein Zug oder Hund unvermittelt in der Bildschirmmitte
  // auf, weil die Animation ja aus der absoluten Uhrzeit berechnet wird
  // und nicht weiss, dass die Seite gerade erst neu aufgebaut wurde.
  //
  // Trick: Wir schauen EINMAL beim Laden, wo die Figur in ihrem Zyklus
  // gerade steht. Steckt sie mitten im Durchlauf, schieben wir ihre Phase
  // genau bis zum Ende des Durchlaufs vor - sie ist damit "schon durch",
  // bleibt unsichtbar und faehrt erst beim naechsten regulaeren Mal
  // saeuberlich von der Seite ins Bild.
  //
  // Wichtig: Dieser Schub wird nur ein einziges Mal berechnet und danach
  // gemerkt. Sonst wuerde jedes Neu-Rendern die Figur erneut nach vorne
  // schubsen und sie kaeme nie an - genau der Fehler, den wir bei den
  // Sternschnuppen schon hatten.
  if (_bootSkip[memo] === undefined) {
    const flight = Math.min(PERIODIC_FLIGHT_SEC[key] || 0, interval * 0.3);
    const phaseAtBoot = (SCRIPT_START_SEC + offset) % interval;
    _bootSkip[memo] = (phaseAtBoot > 0 && phaseAtBoot < flight)
      ? flight - phaseAtBoot
      : 0;
  }

  return (-((Date.now() / 1000 + offset + _bootSkip[memo]) % interval)).toFixed(2);
}

// Nummer des gerade laufenden Durchlaufs - passend zur Startzeit aus
// periodicDelaySec (gleicher Versatz, gleicher Neustart-Schub). Damit
// bleiben Gags wie "Hexe verliert den Hut" während eines Durchlaufs
// stabil, auch wenn mittendrin neu gerendert wird.
// Muss NACH periodicDelaySec aufgerufen werden (braucht dessen Merker).
function periodicCycle(interval, key) {
  const offset = (PERIODIC_PHASE[key] || 0) * interval;
  const skip = _bootSkip[key + ":" + interval] || 0;
  return Math.floor((Date.now() / 1000 + offset + skip) / interval);
}

// 🎃 Ist gerade Halloween? Ja, wenn der (optionale) Halloween-Schalter
// "an" ist - oder automatisch am 31. Oktober (ganzer Tag, Ortszeit).
function isHalloweenTime(cfg, hass) {
  const sensor = cfg && cfg.halloween_sensor;
  if (sensor && hass?.states?.[sensor]?.state === "on") return true;
  const now = new Date();
  return now.getMonth() === 9 && now.getDate() === 31;
}

const WEATHER_STATE_MAP = {
  "rainy": ["rain"],
  "pouring": ["rain"],
  "snowy": ["snow"],
  "snowy-rainy": ["snow", "rain"],
  "hail": ["hail"],
  "lightning": ["lightning"],
  "lightning-rainy": ["lightning", "rain"],
  "fog": ["fog"],
  "windy": ["storm"],
  "windy-variant": ["storm"],
  "clear-night": ["stars"],
  "cloudy": ["clouds"],
  "partlycloudy": ["clouds"],
  "sunny": ["sun"],
};

function mapWeatherStateToEvents(state) {
  return WEATHER_STATE_MAP[state] || ["off"];
}

const COUNT_IS_INTERVAL_TEXT = {
  santa: "Wie oft der Weihnachtsmann vorbeifliegt: Wenig ≈ alle 5-6 Min., Mittel ≈ alle 3-4 Min., Viel ≈ alle 1-2 Min. (keine Partikelmenge, da es nur einen Schlitten gibt).",
  dog: "Wie oft der Labrador durchläuft: Wenig ≈ alle 5-6 Min., Mittel ≈ alle 3-4 Min., Viel ≈ alle 1-2 Min. (keine Partikelmenge, da es nur einen Hund gibt).",
  train: "Wie oft die Dampflok vorbeituckert: Wenig ≈ alle 5-6 Min., Mittel ≈ alle 3-4 Min., Viel ≈ alle 1-2 Min. (keine Partikelmenge, da es nur eine gibt).",

  night_sky: "Wie oft der Komet vorbeizieht: Wenig ≈ alle 5-6 Min., Mittel ≈ alle 3-4 Min., Viel ≈ alle 1-2 Min. Steuert gleichzeitig die Anzahl der Sternschnuppen (3 / 5 / 8).",
  owl_birdhouse: "Wie oft tagsüber ein Vogel am Häuschen vorbeifliegt: Wenig ≈ alle 100 Sek., Mittel ≈ alle 60 Sek., Viel ≈ alle 30 Sek. (nachts sitzt dort die Eule, dann ohne Wirkung).",
  halloween: "Wenig = 3 Kürbisse, Hexe ≈ alle 5-6 Min., Gespenst ≈ alle 3 Min. · Mittel = 5 Kürbisse, Hexe ≈ alle 3-4 Min., Gespenst ≈ alle 2 Min. · Viel = 7 Kürbisse, Hexe ≈ alle 1-2 Min., Gespenst ≈ jede Minute. Steuert auch die Anzahl der Fledermäuse.",
};

const EVENT_CAPABILITIES = {
  off: { count: false, opacity: false, color: false },
  weather_auto: { count: true, opacity: true, color: true },
  leaves: { count: true, opacity: true, color: false },
  night_sky: { count: true, opacity: true, color: true },
  santa: { count: true, opacity: true, color: false },
  spider: { count: false, opacity: true, color: true },
  dog: { count: true, opacity: true, color: false },
  train: { count: true, opacity: true, color: false },
  owl_birdhouse: { count: true, opacity: true, color: false },
  bee: { count: true, opacity: true, color: false },
  birthday: { count: true, opacity: true, color: false },
  halloween: { count: true, opacity: true, color: false },
};

const BALLOON_COLORS = ["#FF4B4B", "#FF851B", "#FFDC00", "#2ECC40", "#0074D9", "#B10DC9", "#F012BE"];

const BALLOON_SVG = `
<svg viewBox="0 0 50 80" preserveAspectRatio="xMidYMid meet">
  <path d="M 25 5 Q 45 5 45 30 Q 45 52 25 55 Q 5 52 5 30 Q 5 5 25 5 Z" fill="currentColor" />
  <polygon points="22,55 28,55 25,58" fill="currentColor" />
  <path d="M 12 18 Q 15 10 22 8" stroke="rgba(255,255,255,0.6)" stroke-width="2.5" stroke-linecap="round" fill="none" />
  <path d="M 25 58 Q 20 65 28 72 T 25 80" stroke="rgba(200,200,200,0.7)" stroke-width="1" fill="none" />
</svg>
`;

const DEFAULT_LEAF_SHAPE = `
  <path d="M50 4 C22 18, 10 55, 50 96 C90 55, 78 18, 50 4 Z" fill="currentColor"/>
  <path d="M50 10 L50 90" stroke="rgba(0,0,0,0.25)" stroke-width="3" stroke-linecap="round"/>
  <path d="M50 30 L34 20 M50 30 L66 20 M50 55 L30 45 M50 55 L70 45 M50 75 L36 68 M50 75 L64 68"
        stroke="rgba(0,0,0,0.18)" stroke-width="2" stroke-linecap="round"/>
`;

const BALLOONS = Array.from({ length: 30 }, (_, i) => ({
  l: (i * 3.2) + 2,
  size: Math.floor(Math.random() * 20) + 38,
  dur: (Math.random() * 4 + 7).toFixed(2),
  d: (Math.random() * -10).toFixed(2),
  color: BALLOON_COLORS[i % BALLOON_COLORS.length],
  sway: Math.floor(Math.random() * 25 + 15),
}));

const DROPS = Array.from({ length: 60 }, (_, i) => ({
  l: (i * 1.6) + 1,
  size: Math.floor(Math.random() * 14) + 16,
  dur: (Math.random() * 0.3 + 0.4).toFixed(2),
  d: (Math.random() * -2).toFixed(2),
  op: (Math.random() * 0.5 + 0.4).toFixed(2),
}));

const FLAKES_DATA = Array.from({ length: 50 }, (_, i) => ({
  l: (i * 1.95) + 1,
  s: Math.floor(Math.random() * 12) + 8,
  ex: Math.floor(Math.random() * 60) - 30,
  dur: Math.floor(Math.random() * 12) + 18,
  d: (Math.random() * 1).toFixed(2),
  op: (Math.random() * 0.6 + 0.3).toFixed(2),
}));

/* ============================ RENDER-FUNKTIONEN ============================ */

function renderRain(cfg, hass, hostEl) {
  const color = resolveDynamicColor(cfg.color, hass, "#000000", "#ffffff", hostEl);
  const count = getParticleCount(cfg.count_preset || "medium", "rain");
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const drops = spreadSample(DROPS, count);

  const isHigh = (cfg.opacity_preset || "medium") === "high";
  const dropHTML = drops.map((d) => {
    const op = isHigh
      ? Math.min(1, Math.max(d.op, 0.85)).toFixed(2)
      : (d.op * opacity).toFixed(2);
    return `<div class="drop" style="left:${d.l}vw; height:${d.size}px; animation-duration:${d.dur}s; animation-delay:${d.d}s; opacity:${op};"></div>`;
  }).join("\n");

  const css = `
    ${overlayBaseCss("rain")}
    .rain .drop { 
      position: absolute; 
      top: -20%; 
      width: 2px; 
      background: linear-gradient(180deg, rgba(255,255,255,0) 0%, ${color} 100%) !important; 
      border-radius: 50%; 
      animation: rainfall linear infinite;
      will-change: transform;
    }
    @keyframes rainfall { 
      0% { transform: translateY(0vh) translateX(0px); } 
      100% { transform: translateY(120vh) translateX(-15px); } 
    }
  `;
  return { css, html: `<div class="rain" aria-hidden="true">${dropHTML}</div>` };
}

function renderSnow(cfg, hass, hostEl) {
  const color = resolveDynamicColor(cfg.color, hass, "#000000", "#ffffff", hostEl);
  const count = getParticleCount(cfg.count_preset || "medium", "snow");
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const flakes = spreadSample(FLAKES_DATA, count);

  const isHigh = (cfg.opacity_preset || "medium") === "high";
  // Verzögerung aus der absoluten Uhrzeit ableiten, damit die Flocken bei
  // einem Neu-Rendern weiterfallen statt nach oben zu springen. Das passiert
  // beim Schnee besonders oft: der Zähler für die wachsende Schneedecke
  // rendert alle 15 Sekunden neu - mit fester Verzögerung sprang jede
  // Flocke dabei sichtbar ein Stück zurück nach oben.
  const snowNowSec = Date.now() / 1000;
  const flakeHTML = flakes.map((f) => {
    const op = isHigh
      ? Math.min(1, Math.max(f.op, 0.85)).toFixed(2)
      : (f.op * opacity).toFixed(2);
    return `<i class="snowflake" style="left:${f.l}vw; font-size:${f.s}px; --start-x:0px; --end-x:${f.ex}px; animation-duration:${f.dur}s; animation-delay:-${((snowNowSec + f.d * 20) % f.dur).toFixed(2)}s; opacity:${op}; color:${color};">❄</i>`;
  }).join("\n");

  const css = `
    ${overlayBaseCss("snowflakes")}
    .snowflake { position:absolute; top:-10%; font-style:normal; animation:wander-fall linear infinite; will-change: transform; }
    @keyframes wander-fall {
      0%   { transform: translate(var(--start-x), -10%); }
      50%  { transform: translate(var(--end-x), 60vh); }
      100% { transform: translate(var(--end-x), 120vh); }
    }
    .snow-accumulation {
      position: absolute; bottom: 0; left: 0; width: 100%;
      border-top-left-radius: 40% 10px; border-top-right-radius: 40% 10px;
      transition: height 8s linear;
    }
  `;

  const snowLevel = typeof cfg._snowLevel === "number" ? cfg._snowLevel : 0;
  const accumHeight = Math.min(18, snowLevel * 0.18);
  const accumHtml = accumHeight > 0
    ? `<div class="snow-accumulation" aria-hidden="true" style="height:${accumHeight.toFixed(2)}vh; background:linear-gradient(180deg, rgba(255,255,255,0.92), rgba(230,238,245,0.8));"></div>`
    : "";

  return { css, html: `<div class="snowflakes" aria-hidden="true">${flakeHTML}${accumHtml}</div>` };
}

function renderLeaves(cfg, hass, hostEl) {
  const leafColors = Array.isArray(cfg.leaf_colors) && cfg.leaf_colors.length === 3 ? cfg.leaf_colors : ["#c9a227", "#a83232", "#d9812c"];
  const count = getParticleCount(cfg.count_preset || "medium", "leaves");
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const leafShape = sanitizeLeafShape(cfg.leaf_shape) || DEFAULT_LEAF_SHAPE;
  const leaves = spreadSample(FLAKES_DATA, count);

  // Periodischer Windstoß statt Dauer-Fall: "Anzahl/Frequenz" steuert jetzt
  // wie oft ein kurzer Schwung Blätter durchs Bild weht, statt wie viele
  // Blätter durchgehend gleichzeitig fallen. Läuft nicht mehr den ganzen
  // Tag ununterbrochen, sondern stoßweise - fühlt sich eher nach
  // "gelegentlicher Herbstwind" an statt nach Dauerregen.
  const interval = { low: 340, medium: 210, high: 100 }[cfg.count_preset || "medium"] || 210;
  const gustPct = Math.min(35, (25 / interval) * 100);
  const nowSec = Date.now() / 1000;
  const baseDelay = -(nowSec % interval);
  const fadeInPct = (gustPct * 0.06).toFixed(2);
  const fadeOutPct = (gustPct * 0.94).toFixed(2);

  const isHigh = (cfg.opacity_preset || "medium") === "high";
  const leafHTML = leaves.map((f, i) => {
    const op = isHigh
      ? Math.min(1, Math.max(f.op, 0.85)).toFixed(2)
      : (f.op * opacity).toFixed(2);
    const color = gradientColor(leafColors, i / leaves.length);
    const px = `${f.s * 1.6}px`;
    // Jedes Blatt startet leicht zeitversetzt INNERHALB desselben
    // Windstoß-Fensters (nicht über den ganzen Tag verteilt wie vorher).
    const staggerSec = f.d * (gustPct / 100) * interval * 0.7;
    const thisDelay = (baseDelay - staggerSec).toFixed(2);
    return `<i class="leaf" style="left:${f.l}vw; width:${px}; height:${px}; --leaf-op:${op}; animation-delay:${thisDelay}s; color:${color};"><svg viewBox="0 0 100 100" width="100%" height="100%">${leafShape}</svg></i>`;
  }).join("\n");

  const css = `
    ${overlayBaseCss("leaves")}
    .leaf { position:absolute; top:-10%; animation:leaf-fall-gust ${interval}s linear infinite; will-change: transform, opacity; }
    @keyframes leaf-fall-gust {
      0%, ${fadeInPct}% { transform: translateY(0) rotate(0deg); opacity: 0; }
      ${(parseFloat(fadeInPct) + 1).toFixed(2)}% { opacity: var(--leaf-op); }
      ${fadeOutPct}% { opacity: var(--leaf-op); }
      ${gustPct.toFixed(2)}%, 100% { transform: translateY(120vh) rotate(360deg); opacity: 0; }
    }
  `;
  return { css, html: `<div class="leaves" aria-hidden="true">${leafHTML}</div>` };
}


function renderLights(cfg, hass, hostEl) {
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const bulbCount = getParticleCount(cfg.count_preset || "medium", "lights");
  const colors = ["#ff3333", "#33cc33", "#3399ff", "#ffff33", "#ff9933", "#cc33cc"];
  
  let bulbsHtml = "";
  for (let i = 0; i < bulbCount; i++) {
    const col = colors[i % colors.length];
    bulbsHtml += `<div class="bulb" style="background:${col}; animation-delay:${(i * 0.2).toFixed(1)}s;"></div>\n`;
  }

  const html = `<div class="lights-string" style="opacity:${opacity};" aria-hidden="true">${bulbsHtml}</div>`;
  const css = `
    .lights-string {
      position: fixed; top: 0; left: 50%; transform: translateX(-50%); width: 100vw; height: 25px;
      pointer-events: none; z-index: 9999; display: flex; justify-content: space-around; padding: 0 10px; box-sizing: border-box;
    }
    .bulb {
      width: 10px; height: 14px; border-radius: 50%;
      box-shadow: 0 0 8px currentColor;
      animation: bulb-blink 1.2s ease-in-out infinite alternate;
      will-change: opacity, transform;
    }
    @keyframes bulb-blink { 0% { opacity: 0.3; transform: scale(0.85); } 100% { opacity: 1; transform: scale(1.1); } }
  `;
  return { css, html };
}

function renderShootingStars(cfg, hass, hostEl) {
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const count = getParticleCount(cfg.count_preset || "medium", "shooting_stars");
  const color = resolveDynamicColor(cfg.color, hass, "#000000", "#ffffff", hostEl);

  const stars = getCachedRandomSet("shooting_stars", count, () => ({
    top: (Math.random() * 50).toFixed(2),
    left: (Math.random() * 100).toFixed(2),
    dur: (Math.random() * 3 + 2).toFixed(2),
    offset: (Math.random() * 5).toFixed(2),
  }));

  // Verzögerung aus der absoluten Uhrzeit ableiten (negativer Wert), damit
  // die Sternschnuppen bei einem Neu-Rendern GENAU DA weiterlaufen, wo sie
  // gerade waren. Mit einer festen positiven Verzögerung würden sie sonst
  // jedes Mal von vorne anfangen - z. B. immer dann, wenn der Wunschstern
  // im selben Effekt seine Position wechselt und neu gezeichnet wird.
  const nowSec = Date.now() / 1000;
  const starsHtml = stars.map((s) => {
    const dur = parseFloat(s.dur);
    const phase = ((nowSec + parseFloat(s.offset)) % dur).toFixed(2);
    return `<div class="shooting-star" style="top:${s.top}vh; left:${s.left}vw; animation-duration:${s.dur}s; animation-delay:-${phase}s; color:${color};"></div>`;
  }).join("\n");

  const html = `<div class="shooting-stars-container" style="opacity:${opacity};" aria-hidden="true">${starsHtml}</div>`;
  const css = `
    ${overlayBaseCss("shooting-stars-container")}
    .shooting-star {
      position: absolute; width: 100px; height: 2px;
      background: linear-gradient(90deg, currentColor, transparent);
      transform: rotate(-45deg); opacity: 0;
      animation: shooting-star-anim linear infinite;
      will-change: transform, opacity;
    }
    @keyframes shooting-star-anim {
      0% { transform: translateX(0) translateY(0) rotate(-45deg); opacity: 1; }
      100% { transform: translateX(-300px) translateY(300px) rotate(-45deg); opacity: 0; }
    }
  `;
  return { css, html };
}

function renderLightning(cfg, hass, hostEl) {
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const speedFactor = getParticleCount(cfg.count_preset || "medium", "lightning");
  const dur = (6 / speedFactor).toFixed(1);

  const html = `<div class="lightning-flash" style="opacity:${opacity}; animation-duration:${dur}s;" aria-hidden="true"></div>`;
  const css = `
    .lightning-flash {
      position: fixed; top: 0; left: 50%; transform: translateX(-50%); width: 100vw; height: 100vh;
      pointer-events: none; z-index: 9999; background: rgba(255, 255, 255, 0.85);
      opacity: 0; animation: flash-anim ease-in-out infinite;
      will-change: opacity;
    }
    @keyframes flash-anim {
      0%, 90%, 100% { opacity: 0; }
      92% { opacity: 0.9; }
      93% { opacity: 0.1; }
      94% { opacity: 0.8; }
      96% { opacity: 0; }
    }
  `;
  return { css, html };
}

function renderFog(cfg, hass, hostEl) {
  const color = resolveDynamicColor(cfg.color, hass, "#000000", "#ffffff", hostEl);
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const count = getParticleCount(cfg.count_preset || "medium", "fog");
  const isHigh = (cfg.opacity_preset || "medium") === "high";

  const banks = getCachedRandomSet("fog", count, () => ({
    top: (Math.random() * 80).toFixed(2),
    width: Math.floor(Math.random() * 40) + 60,
    height: Math.floor(Math.random() * 15) + 12,
    dur: (Math.random() * 20 + 25).toFixed(2),
    delay: (Math.random() * -20).toFixed(2),
    baseOp: (Math.random() * 0.3 + 0.3).toFixed(2),
    reverse: Math.random() > 0.5,
  }));

  const fogHTML = banks.map((b) => {
    const bankOp = isHigh ? Math.max(b.baseOp, 0.7) : (b.baseOp * opacity);
    const dir = b.reverse ? "fog-drift-reverse" : "fog-drift";
    return `<div class="fog-bank" style="top:${b.top}vh; width:${b.width}vw; height:${b.height}vh; animation-duration:${b.dur}s; animation-delay:${b.delay}s; animation-name:${dir}; opacity:${bankOp.toFixed(2)}; background:radial-gradient(ellipse at center, ${color} 0%, transparent 70%);"></div>`;
  }).join("\n");

  const css = `
    ${overlayBaseCss("fog-container")}
    .fog-bank {
      position: absolute; left: -20vw; border-radius: 50%; filter: blur(10px); will-change: transform;
    }
    @keyframes fog-drift {
      0%   { transform: translateX(0); }
      100% { transform: translateX(140vw); }
    }
    @keyframes fog-drift-reverse {
      0%   { transform: translateX(140vw); }
      100% { transform: translateX(0); }
    }
  `;
  return { css, html: `<div class="fog-container" aria-hidden="true">${fogHTML}</div>` };
}

function renderHail(cfg, hass, hostEl) {
  const color = resolveDynamicColor(cfg.color, hass, "#000000", "#ffffff", hostEl);
  const count = getParticleCount(cfg.count_preset || "medium", "hail");
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const isHigh = (cfg.opacity_preset || "medium") === "high";
  const stones = spreadSample(DROPS, count);

  const hailHTML = stones.map((d) => {
    const op = isHigh
      ? Math.min(1, Math.max(d.op, 0.85)).toFixed(2)
      : (d.op * opacity).toFixed(2);
    const size = Math.max(3, Math.round(d.size / 3));
    const dur = (parseFloat(d.dur) * 0.55).toFixed(2);
    return `<div class="hailstone" style="left:${d.l}vw; width:${size}px; height:${size}px; animation-duration:${dur}s; animation-delay:${d.d}s; opacity:${op}; background:${color};"></div>`;
  }).join("\n");

  const css = `
    ${overlayBaseCss("hail")}
    .hail .hailstone {
      position: absolute; top: -10%; border-radius: 50%;
      box-shadow: 0 0 2px rgba(0,0,0,0.3);
      animation: hailfall linear infinite;
      will-change: transform;
    }
    @keyframes hailfall {
      0% { transform: translateY(0vh) translateX(0px); }
      100% { transform: translateY(120vh) translateX(-25px); }
    }
  `;
  return { css, html: `<div class="hail" aria-hidden="true">${hailHTML}</div>` };
}

function renderStorm(cfg, hass, hostEl) {
  const color = resolveDynamicColor(cfg.color, hass, "#000000", "#ffffff", hostEl);
  const count = getParticleCount(cfg.count_preset || "medium", "storm");
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const isHigh = (cfg.opacity_preset || "medium") === "high";
  const gusts = spreadSample(DROPS, count);

  const gustHTML = gusts.map((d) => {
    const op = isHigh
      ? Math.min(1, Math.max(d.op, 0.85)).toFixed(2)
      : (d.op * opacity).toFixed(2);
    const dur = (parseFloat(d.dur) * 0.6).toFixed(2);
    const len = Math.max(20, d.size * 2);
    return `<div class="storm-streak" style="top:${d.l}vh; width:${len}px; animation-duration:${dur}s; animation-delay:${d.d}s; opacity:${op}; background:linear-gradient(90deg, transparent, ${color});"></div>`;
  }).join("\n");

  const css = `
    ${overlayBaseCss("storm-container")}
    .storm-streak {
      position: absolute; left: -20vw; height: 2px;
      animation: storm-gust linear infinite;
      will-change: transform;
    }
    @keyframes storm-gust {
      0%   { transform: translateX(0) translateY(0); }
      100% { transform: translateX(140vw) translateY(6vh); }
    }
  `;
  return { css, html: `<div class="storm-container" aria-hidden="true">${gustHTML}</div>` };
}

function renderSanta(cfg, hass, hostEl) {
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const isHigh = (cfg.opacity_preset || "medium") === "high";
  const finalOpacity = isHigh ? 1 : opacity;
  const interval = { low: 340, medium: 210, high: 100 }[cfg.count_preset || "medium"] || 210;
  const flightPct = Math.min(30, (18 / interval) * 100);
  const nowSec = Date.now() / 1000;
  const delaySec = periodicDelaySec(interval, "santa");

  // Gelegentlich (etwa jeder 3. Durchflug) verliert der Schlitten ein
  // Geschenk, das runterfällt - deterministisch nach Durchflug-Nummer
  // bestimmt, damit ein Neu-Rendern mitten im Flug nicht plötzlich das
  // Geschenk verschwinden/auftauchen lässt.
  const flightNumber = Math.floor(nowSec / interval);
  const dropsGift = flightNumber % 3 === 0;
  const giftStartPct = (flightPct * 0.35).toFixed(2);
  const giftEndPct = (flightPct * 0.85).toFixed(2);

  const css = `
    .santa-container {
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      pointer-events: none; z-index: 9999; overflow: hidden;
    }
    .santa-sleigh-box {
      position: absolute; top: 8vh; right: -250px; width: 220px; height: 62px;
      animation: santa-fly ${interval}s linear infinite; animation-delay: ${delaySec}s; will-change: transform;
    }
    @keyframes santa-fly {
      0% { transform: translateX(0) translateY(0); }
      ${flightPct.toFixed(2)}% { transform: translateX(calc(-100vw - 300px)) translateY(-15px); }
      100% { transform: translateX(calc(-100vw - 300px)) translateY(-15px); }
    }
    ${dropsGift ? `
    .santa-gift {
      animation: santa-gift-fall ${interval}s linear infinite; animation-delay: ${delaySec}s;
      transform-box: fill-box; transform-origin: center;
    }
    @keyframes santa-gift-fall {
      0%, ${giftStartPct}% { opacity: 0; transform: translateY(0) rotate(0deg); }
      ${(parseFloat(giftStartPct) + 2).toFixed(2)}% { opacity: 1; transform: translateY(0) rotate(0deg); }
      ${giftEndPct}% { opacity: 0; transform: translateY(42px) rotate(140deg); }
      100% { opacity: 0; transform: translateY(42px) rotate(140deg); }
    }
    ` : ""}
  `;

  const html = `
    <div class="santa-container" style="opacity:${finalOpacity};" aria-hidden="true">
      <div class="santa-sleigh-box">
        <svg viewBox="0 -20 320 90" preserveAspectRatio="xMidYMid meet">
          <defs>
            <g id="santa-reindeer">
              <ellipse cx="35" cy="28" rx="17" ry="9" fill="#8b5a2b"/>
              <path d="M20,24 Q10,18 8,14" fill="none" stroke="#8b5a2b" stroke-width="7" stroke-linecap="round"/>
              <ellipse cx="8" cy="14" rx="7" ry="6" fill="#8b5a2b"/>
              <circle cx="2" cy="16" r="2.3" fill="#4a2f18"/>
              <path d="M8,9 L4,-3 M4,-3 L0,-7 M4,-3 L2,1 M8,9 L13,-4 M13,-4 L17,-8 M13,-4 L15,0"
                    fill="none" stroke="#4a2f18" stroke-width="2" stroke-linecap="round"/>
              <path d="M22,35 Q16,44 12,50 M28,36 Q24,44 20,50 M46,36 Q54,42 58,50 M40,36 Q46,44 50,50"
                    fill="none" stroke="#5a3a1a" stroke-width="3" stroke-linecap="round"/>
              <path d="M52,24 Q57,20 55,27" fill="none" stroke="#8b5a2b" stroke-width="2" stroke-linecap="round"/>
            </g>
          </defs>
          <use href="#santa-reindeer"/>
          <use href="#santa-reindeer" transform="translate(68,0)"/>
          <path d="M60,18 Q100,22 148,26 M128,18 Q140,22 148,26" fill="none" stroke="#3a2a1a" stroke-width="1.2" opacity="0.8"/>
          <path d="M148,44 Q142,30 154,20 Q162,13 172,13 L212,13 Q224,13 224,25 L224,37 Q224,44 214,44 Z"
                fill="#b91c1c" stroke="#d4af37" stroke-width="2"/>
          <ellipse cx="182" cy="27" rx="12" ry="14" fill="#c41e3a"/>
          <ellipse cx="182" cy="40" rx="12" ry="3" fill="#ffffff"/>
          <rect x="172" y="29" width="20" height="3" fill="#1a1a1a"/>
          <rect x="180" y="28.5" width="4" height="4" fill="#d4af37"/>
          <circle cx="182" cy="10" r="7" fill="#f4c2a1"/>
          <path d="M175,12 Q182,24 189,12 Q188,18 182,20 Q176,18 175,12 Z" fill="#ffffff"/>
          <path d="M175,5 Q165,-8 179,-13 Q184,-12 180,-6 Q177,-1 175,5 Z" fill="#c41e3a"/>
          <ellipse cx="180" cy="4" rx="7" ry="2.5" fill="#ffffff"/>
          <circle cx="179" cy="-13" r="2.5" fill="#ffffff"/>
          ${dropsGift ? `
          <g class="santa-gift">
            <rect x="206" y="34" width="13" height="11" fill="#e63946" stroke="#1a1a1a" stroke-width="1"/>
            <path d="M206,38 L219,38 M212.5,34 L212.5,45" stroke="#ffffff" stroke-width="1.5"/>
            <path d="M209,34 Q212.5,29 216,34" fill="none" stroke="#ffffff" stroke-width="1.5"/>
          </g>
          ` : ""}
        </svg>
      </div>
    </div>
  `;
  return { css, html };
}

function buildCornerWebSvg(spokeCount, ringCount) {
  const cx = 100, cy = 0, radius = 100;
  const angles = [];
  for (let i = 0; i < spokeCount; i++) {
    angles.push(90 + (i * (90 / (spokeCount - 1))));
  }
  const toPoint = (angleDeg, r) => {
    const rad = (angleDeg * Math.PI) / 180;
    return { x: (cx + r * Math.cos(rad)).toFixed(1), y: (cy + r * Math.sin(rad)).toFixed(1) };
  };

  let spokesD = "";
  angles.forEach((a) => {
    const p = toPoint(a, radius);
    spokesD += `M ${cx} ${cy} L ${p.x} ${p.y} `;
  });

  let ringsSvg = "";
  for (let ring = 1; ring <= ringCount; ring++) {
    const frac = ring / (ringCount + 1);
    const pts = angles.map((a) => toPoint(a, radius * frac));
    let d = `M ${pts[0].x} ${pts[0].y} `;
    for (let i = 1; i < pts.length; i++) d += `L ${pts[i].x} ${pts[i].y} `;
    ringsSvg += `<path d="${d}" fill="none" stroke="currentColor" stroke-width="0.6" opacity="${(0.35 + ring * 0.1).toFixed(2)}"/>`;
  }
  return `<path d="${spokesD}" fill="none" stroke="currentColor" stroke-width="0.7" opacity="0.7"/>${ringsSvg}`;
}

function renderSpider(cfg, hass, hostEl) {
  const webColor = resolveDynamicColor(cfg.color, hass, "#000000", "#ffffff", hostEl);
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const isHigh = (cfg.opacity_preset || "medium") === "high";
  const finalOpacity = isHigh ? 1 : opacity;
  const webSvg = buildCornerWebSvg(6, 4);

  const css = `
    .spider-web-container {
      position: fixed; top: 0; right: 0; width: 300px; height: 300px;
      pointer-events: none; z-index: 9999; overflow: visible; color: ${webColor};
    }
    .corner-web {
      position: absolute; top: 0; right: 0; width: 180px; height: 180px; filter: drop-shadow(0 0 2px rgba(0,0,0,0.2));
    }
    .hanging-spider-box {
      position: absolute; top: 40px; right: 50px; width: 26px; height: 26px;
      animation: spider-drop 14s ease-in-out infinite; will-change: transform;
    }
    .spider-web-thread {
      position: absolute; top: -300px; left: 50%; width: 1px; height: 300px;
      background: ${webColor}; transform: translateX(-50%);
    }
    @keyframes spider-drop {
      0%, 100% { transform: translateY(0); }
      26% { transform: translateY(150px); }
      28% { transform: translateY(200px); }
      31% { transform: translateY(158px); }
      34%, 65% { transform: translateY(180px); }
      45%, 55% { transform: translateY(170px); }
    }
    .spider-body-wrapper {
      width: 100%; height: 100%;
      animation: spider-wobble 14s ease-in-out infinite;
    }
    @keyframes spider-wobble {
      0%, 26%, 34%, 100% { transform: rotate(0deg); }
      28% { transform: rotate(9deg); }
      31% { transform: rotate(-6deg); }
    }
    .spider-eye {
      animation: spider-eye-blink 1.4s ease-in-out infinite;
    }
    @keyframes spider-eye-blink {
      0%, 40% { opacity: 1; filter: drop-shadow(0 0 3px #ff2222); }
      50% { opacity: 0.25; filter: drop-shadow(0 0 1px #ff2222); }
      60%, 100% { opacity: 1; filter: drop-shadow(0 0 3px #ff2222); }
    }
  `;

  const html = `
    <div class="spider-web-container" style="opacity:${finalOpacity};" aria-hidden="true">
      <svg class="corner-web" viewBox="0 0 100 100">${webSvg}</svg>
      <div class="hanging-spider-box">
        <div class="spider-web-thread"></div>
        <div class="spider-body-wrapper">
          <svg viewBox="0 0 100 100" style="width:100%; height:100%;">
            <defs>
              <g id="spider-legs-right">
                <path d="M58,42 Q75,32 88,18" stroke="#111" stroke-width="4" fill="none" stroke-linecap="round"/>
                <path d="M58,50 Q80,47 94,42" stroke="#111" stroke-width="4" fill="none" stroke-linecap="round"/>
                <path d="M58,58 Q80,62 92,74" stroke="#111" stroke-width="4" fill="none" stroke-linecap="round"/>
                <path d="M56,65 Q70,78 76,92" stroke="#111" stroke-width="4" fill="none" stroke-linecap="round"/>
              </g>
            </defs>
            <use href="#spider-legs-right"/>
            <use href="#spider-legs-right" transform="translate(100,0) scale(-1,1)"/>
            <circle cx="50" cy="40" r="10" fill="#111"/>
            <ellipse cx="50" cy="62" rx="15" ry="19" fill="#111"/>
            <circle class="spider-eye" cx="45" cy="35" r="2.5" fill="#ff0000"/>
            <circle class="spider-eye" cx="55" cy="35" r="2.5" fill="#ff0000"/>
          </svg>
        </div>
      </div>
    </div>
  `;
  return { css, html };
}





function renderTrain(cfg, hass, hostEl) {
  // Dampflok mit variabler Waggon-Anzahl: vier feste Alltags-/Fest-Waggons,
  // dazu optional ein Waggon pro zuhause befindlicher Person (aus
  // person_entities) und ein frei beschriftbarer Waggon. Die Lok selbst
  // sitzt in einer eigenen <g transform="translate">-Gruppe mit lokalen
  // Koordinaten, lässt sich also einfach an die tatsächliche Zug-Länge
  // anpassen.
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const isHigh = (cfg.opacity_preset || "medium") === "high";
  const finalOpacity = isHigh ? 1 : opacity;
  const interval = { low: 340, medium: 210, high: 100 }[cfg.count_preset || "medium"] || 210;
  const walkPct = Math.min(30, (30 / interval) * 100).toFixed(2);
  const nowSec = Date.now() / 1000;
  const delaySec = periodicDelaySec(interval, "train");

  // 5. mögliche Ladung "Weihnachtsmann-Sack": ersetzt die Holzscheite im
  // letzten Waggon, aber NUR wenn der konfigurierte Sensor (z. B. ein
  // input_boolean für die Weihnachtszeit) eingeschaltet ist.
  const santaActive = cfg.santa_sensor && hass?.states?.[cfg.santa_sensor]?.state === "on";
  // Alternative Ladung "Abendessen": Geschirr und Essen statt der
  // normalen Ladung, wenn der konfigurierte Abendessen-Sensor an ist.
  // Weihnachten hat Vorrang, falls beide Sensoren zufällig gleichzeitig an wären.
  const dinnerActive = !santaActive && cfg.dinner_sensor && hass?.states?.[cfg.dinner_sensor]?.state === "on";
  // 🎃 Halloween-Ladung: am 31. Oktober automatisch oder per Halloween-
  // Schalter. Weihnachten und Abendessen haben Vorrang (das sind bewusst
  // eingeschaltete Schalter, Halloween kommt sonst ja auch vom Kalender).
  const halloweenActive = !santaActive && !dinnerActive && isHalloweenTime(cfg, hass);
  const cargo0 = santaActive ? "snowman" : dinnerActive ? "plates" : halloweenActive ? "hw_pumpkins" : "food";
  const cargo1 = santaActive ? "santa" : dinnerActive ? "roast" : halloweenActive ? "hw_cauldron" : "toys";
  const cargo2 = santaActive ? "presents" : dinnerActive ? "dessert" : halloweenActive ? "hw_coffin" : "mailbags";
  const cargo3 = santaActive ? "santa_sack" : dinnerActive ? "drinks" : halloweenActive ? "hw_candy" : "wood";

  // Gelegentliche Gags, deterministisch nach Durchfahrt-Nummer bestimmt
  // (kein Zufall bei jedem Rendern, damit ein Neu-Rendern mitten in der
  // Fahrt nicht plötzlich was verschwinden/auftauchen lässt).
  const flightNumber = Math.floor(nowSec / interval);
  const hasHeartSmoke = flightNumber % 6 === 0;
  const hootPct = (parseFloat(walkPct) * 0.62).toFixed(2);
  const hootEndPct = (parseFloat(walkPct) * 0.72).toFixed(2);

  const smokeHtml = [0, 1, 2].map((i) => {
    if (i === 1 && hasHeartSmoke) {
      // Mittlerer Rauchpuff wird ganz selten zu einer Herzform statt eines
      // Kreises, bevor er sich beim Aufsteigen wie gewohnt wieder aufloest.
      return `
        <path class="train-smoke train-smoke-heart" d="M69,3 C67,0 62,0 62,4 C62,7 69,11 69,11 C69,11 76,7 76,4 C76,0 71,0 69,3 Z"
          fill="#d9d9d9" stroke="#1a1a1a" stroke-width="1.2"
          style="animation-duration:2.85s; animation-delay:0.55s;"/>
      `;
    }
    return `
    <circle class="train-smoke" cx="${76 - i * 11}" cy="${-1 - i * 3}" r="${5.5 + i * 1.4}" fill="#d9d9d9" stroke="#1a1a1a" stroke-width="1.5"
      style="animation-duration:${(2.6 + i * 0.25).toFixed(2)}s; animation-delay:${(i * 0.55).toFixed(2)}s;"/>
  `;
  }).join("");

  // Zusätzliche Waggons für Personen, die gerade zuhause sind - werden
  // hinten an die vier festen Waggons angehängt. Reihenfolge richtet sich
  // einfach danach, wie die Entities in der Konfiguration aufgeführt sind
  // (kein besonderer Sortier-Aufwand nötig, die Reihenfolge ist nicht wichtig).
  const personEntities = typeof cfg.person_entities === "string"
    ? cfg.person_entities.split(",").map((s) => s.trim()).filter(Boolean)
    : [];
  const personCargoList = personEntities
    .map((eid) => hass?.states?.[eid])
    .filter((st) => st && st.state === "home")
    .map((st) => {
      const picture = st.attributes?.entity_picture;
      const name = st.attributes?.friendly_name || st.entity_id || "?";
      const initial = name.trim().charAt(0).toUpperCase() || "?";
      // Kreis bewusst DEUTLICH größer als die übrige Ladung und wächst
      // dafür über den normalen Ladebereich nach oben hinaus (dort ist
      // reichlich Platz, siehe z. B. der Weihnachtsmann-Hut) - kein
      // Name mehr, der stattdessen Platz gekostet hätte.
      const cargoContent = picture
        ? `
          <circle cx="43" cy="-6" r="36" fill="#e8e0d0" stroke="#1a1a1a" stroke-width="1.8"/>
          <clipPath id="person-clip-${escapeHtml(st.entity_id)}"><circle cx="43" cy="-6" r="33.5"/></clipPath>
          <image x="9.5" y="-39.5" width="67" height="67" href="${escapeHtml(picture)}" preserveAspectRatio="xMidYMid slice" clip-path="url(#person-clip-${escapeHtml(st.entity_id)})"/>
        `
        : `
          <circle cx="43" cy="-6" r="36" fill="#8a9bb0" stroke="#1a1a1a" stroke-width="1.8"/>
          <text x="43" y="5" font-size="38" text-anchor="middle" fill="#ffffff" font-weight="bold">${escapeHtml(initial)}</text>
        `;
      return { cargo: cargoContent, window: "" };
    });

  // Zusätzliche, frei beschriftbare Waggons (z. B. für Gäste, ein
  // Haustier oder was auch immer nicht über eine person-Entity abgebildet ist).
  // Zwei Quellen möglich: entweder ein Sensor (z. B. input_text), dessen
  // Inhalt komma-getrennte Namen enthält ("Marcel, Rudolf") - dann gibt es
  // pro Name einen eigenen Waggon - oder ein fest eingetragener Text.
  // Der Sensor hat Vorrang, falls beides gesetzt ist.
  const customEntityRaw = cfg.custom_wagon_entity
    ? (hass?.states?.[cfg.custom_wagon_entity]?.state || "")
    : "";
  const customEntityUnavailable = ["unknown", "unavailable", "none", ""].includes(String(customEntityRaw).trim().toLowerCase());
  const customNames = (!customEntityUnavailable ? String(customEntityRaw) : (cfg.custom_wagon_text || ""))
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const makeCustomCargo = (text) => {
    const fontSize = text.length <= 4 ? 22 : text.length <= 7 ? 16 : text.length <= 10 ? 12 : 9;
    const safeText = escapeHtml(text.length > 14 ? text.slice(0, 13) + "…" : text);
    return {
      cargo: `
        <circle cx="43" cy="-6" r="36" fill="#f5f0e6" stroke="#1a1a1a" stroke-width="1.8"/>
        <text x="43" y="0" font-size="${fontSize}" text-anchor="middle" fill="#1a1a1a" font-weight="bold">${safeText}</text>
      `,
      window: "",
    };
  };
  const customCargoList = customNames.map(makeCustomCargo);

  // Gesamt-Waggon-Anzahl: vier feste + Personen + Freitext-Waggons. Nur
  // die ANZAHL wird hier gebraucht (für Positionen/Breite) - welche
  // konkrete Ladung in den ersten vier Waggons steckt, kommt erst weiter
  // unten dazu (CARGO-Objekt ist an dieser Stelle noch nicht definiert).
  const wagonCount = 4 + personCargoList.length + customCargoList.length + 1;
  const WAGON_GAP = 93;
  const WAGON_X = Array.from({ length: wagonCount }, (_, i) => 4 + i * WAGON_GAP);
  const LOCO_X = 4 + wagonCount * WAGON_GAP + 8;

  // SVG-Breite und die außen sichtbare Box wachsen mit der tatsächlichen
  // Zug-Länge mit - beide im selben Verhältnis, damit jeder Waggon immer
  // gleich groß bleibt (der Zug wird bei mehr Waggons länger, nicht
  // gestaucht) und "preserveAspectRatio" nichts verzerrt oder abschneidet.
  const svgWidth = LOCO_X + 132;
  const svgTop = -60;
  const svgHeight = 66 - svgTop;
  const baseScale = 37 / 90;
  const scale = baseScale;
  const boxWidth = Math.round(svgWidth * scale);
  const boxHeight = Math.round(svgHeight * scale);

  const css = `
    .train-container {
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      pointer-events: none; z-index: 9999; overflow: hidden;
    }
    .train-box {
      position: absolute; bottom: 1vh;
      animation: train-drive ${interval}s linear infinite; animation-delay: ${delaySec}s; will-change: transform;
    }
    @keyframes train-drive {
      0% { transform: translateX(0); }
      ${walkPct}% { transform: translateX(calc(100vw + ${boxWidth + 40}px)); }
      100% { transform: translateX(calc(100vw + ${boxWidth + 40}px)); }
    }
    .train-wheel {
      /* Rotation entfernt (Ressourcen-Ersparnis) - Räder stehen jetzt fest */
    }
    .train-smoke {
      animation-name: train-smoke-rise; animation-timing-function: ease-out; animation-iteration-count: infinite;
      transform-box: fill-box; transform-origin: center;
    }
    @keyframes train-smoke-rise {
      0%   { transform: translate(0,0) scale(0.5); opacity: 0.9; }
      100% { transform: translate(-95px,-8px) scale(1.7); opacity: 0; }
    }
    .train-hoot {
      animation: train-hoot-pop ${interval}s linear infinite;
      animation-delay: ${delaySec}s;
      transform-box: fill-box; transform-origin: center;
    }
    @keyframes train-hoot-pop {
      0%, ${hootPct}% { opacity: 0; transform: scale(0.4) translateY(4px); }
      ${(parseFloat(hootPct) + 1.5).toFixed(2)}% { opacity: 1; transform: scale(1.08) translateY(0); }
      ${hootEndPct}% { opacity: 1; transform: scale(1) translateY(0); }
      ${(parseFloat(hootEndPct) + 2).toFixed(2)}%, 100% { opacity: 0; transform: scale(0.4) translateY(4px); }
    }
    .end-lamp-a, .end-lamp-b {
      animation: end-lamp-blink 1.4s steps(1) infinite;
    }
    .end-lamp-b {
      animation-delay: -0.7s;
    }
    @keyframes end-lamp-blink {
      0%, 49% { fill: #ff2222; }
      50%, 100% { fill: #22cc44; }
    }
  `;

  const wheel = (cx, cy, r) => `
    <g class="train-wheel">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="#ee1c1c" stroke="#1a1a1a" stroke-width="2"/>
      <circle cx="${cx}" cy="${cy}" r="${(r * 0.32).toFixed(1)}" fill="#1a1a1a"/>
    </g>
  `;

  // Vier verschiedene Ladungen, die statt der einheitlichen Kohle oben auf
  // den Waggon kommen - jede innerhalb desselben Bereichs (x=2-81, y=8-32),
  // damit sie zum Waggon-Umriss passt.
  // Ladungs-Motive. Bewusst wenige, dafür GROSSE Einzelteile: der
  // Waggon ist nur 87 Einheiten breit, viele kleine Teile werden am
  // Bildschirm zu unkenntlichen Farbklecksen. Alle Motive stehen auf
  // dem Waggonboden (y=32) und wachsen nach oben in den freien Platz.
  const CARGO = {
    food: `
      <circle cx="18" cy="18" r="13" fill="#d81f26" stroke="#8a1015" stroke-width="1.8"/>
      <path d="M18,5 Q19,-1 24,-2" stroke="#4a7a2a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <circle cx="43.5" cy="17" r="14" fill="#f5a623" stroke="#a86a10" stroke-width="1.8"/>
      <path d="M43.5,3 Q45,-3 50,-4" stroke="#4a7a2a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <circle cx="69" cy="18" r="13" fill="#7cb342" stroke="#4a7a1f" stroke-width="1.8"/>
      <path d="M69,5 Q70,-1 75,-2" stroke="#4a7a2a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    `,
    toys: `
      <rect x="6" y="6" width="24" height="26" fill="#4a90d9" stroke="#1a1a1a" stroke-width="2"/>
      <path d="M12,14 L24,14 M18,14 L18,26" stroke="#2a5f96" stroke-width="2.5"/>
      <rect x="32" y="-3" width="24" height="35" fill="#ffd93d" stroke="#1a1a1a" stroke-width="2"/>
      <circle cx="44" cy="9" r="6" fill="#e8952a"/>
      <rect x="58" y="10" width="24" height="22" fill="#e63946" stroke="#1a1a1a" stroke-width="2"/>
      <path d="M64,21 L76,21" stroke="#8a2020" stroke-width="2.5"/>
    `,
    presents: `
      <rect x="8" y="10" width="30" height="22" fill="#4a90d9" stroke="#1a1a1a" stroke-width="2"/>
      <path d="M23,10 L23,32 M8,21 L38,21" stroke="#ffd93d" stroke-width="3.5"/>
      <path d="M23,10 Q16,2 13,7 Q16,11 23,10 Q30,2 33,7 Q30,11 23,10 Z" fill="#ffd93d" stroke="#1a1a1a" stroke-width="1.3"/>
      <rect x="46" y="2" width="34" height="30" fill="#e63946" stroke="#1a1a1a" stroke-width="2"/>
      <path d="M63,2 L63,32 M46,17 L80,17" stroke="#7cb342" stroke-width="4"/>
      <path d="M63,2 Q55,-7 52,-1 Q55,3 63,2 Q71,-7 74,-1 Q71,3 63,2 Z" fill="#7cb342" stroke="#1a1a1a" stroke-width="1.3"/>
    `,
    wood: `
      <circle cx="18" cy="19" r="13" fill="#8a5a2f" stroke="#4a2f18" stroke-width="2"/>
      <circle cx="18" cy="19" r="5.5" fill="#c9a05a"/>
      <circle cx="43.5" cy="17" r="14" fill="#6b4423" stroke="#4a2f18" stroke-width="2"/>
      <circle cx="43.5" cy="17" r="6" fill="#a67c3d"/>
      <circle cx="69" cy="19" r="13" fill="#8a5a2f" stroke="#4a2f18" stroke-width="2"/>
      <circle cx="69" cy="19" r="5.5" fill="#c9a05a"/>
    `,
    santa_sack: `
      <path d="M14,32 Q6,7 43.5,1 Q81,7 73,32 Z" fill="#c0392b" stroke="#6b1810" stroke-width="2"/>
      <path d="M24,5 Q43.5,-7 63,5" stroke="#6b1810" stroke-width="2.2" fill="none"/>
      <rect x="26" y="-9" width="15" height="16" fill="#4a90d9" stroke="#1a1a1a" stroke-width="1.4"/>
      <path d="M33.5,-9 L33.5,7 M26,-1 L41,-1" stroke="#ffd93d" stroke-width="2"/>
      <circle cx="55" cy="-4" r="8" fill="#ffd93d" stroke="#1a1a1a" stroke-width="1.4"/>
    `,
    snowman: `
      <circle cx="43.5" cy="21" r="11" fill="#f5f5f5" stroke="#c9c2b4" stroke-width="1.6"/>
      <circle cx="43.5" cy="6" r="8.5" fill="#f5f5f5" stroke="#c9c2b4" stroke-width="1.6"/>
      <circle cx="43.5" cy="-6" r="6.5" fill="#f5f5f5" stroke="#c9c2b4" stroke-width="1.6"/>
      <path d="M35,3 L26,-4 M52,3 L61,-4" stroke="#6b4423" stroke-width="2.8" stroke-linecap="round"/>
      <rect x="38" y="-20" width="11" height="9" fill="#1a1a1a"/>
      <rect x="33.5" y="-12" width="20" height="2.8" fill="#1a1a1a"/>
      <circle cx="41" cy="-7" r="1.1" fill="#1a1a1a"/>
      <circle cx="46" cy="-7" r="1.1" fill="#1a1a1a"/>
      <path d="M43.5,-5 L49.5,-3.5 L43.5,-2 Z" fill="#e8952a"/>
      <circle cx="43.5" cy="3" r="1.3" fill="#1a1a1a"/>
      <circle cx="43.5" cy="9" r="1.3" fill="#1a1a1a"/>
    `,
    santa: `
      <rect x="4" y="16" width="18" height="16" fill="#7cb342" stroke="#1a1a1a" stroke-width="1.6"/>
      <path d="M13,16 L13,32 M4,24 L22,24" stroke="#e63946" stroke-width="2.2"/>
      <circle cx="46" cy="20" r="12" fill="#c0392b" stroke="#6b1810" stroke-width="1.6"/>
      <rect x="36" y="24" width="20" height="4.5" fill="#1a1a1a"/>
      <circle cx="46" cy="2" r="8" fill="#f0d1a8" stroke="#c9a878" stroke-width="1.1"/>
      <path d="M38,6 Q46,15 54,6 L54,11 Q46,18 38,11 Z" fill="#ffffff"/>
      <path d="M37,-3 Q46,-14 55,-3 Q55,-12 46,-14 Q37,-12 37,-3 Z" fill="#c0392b" stroke="#6b1810" stroke-width="1.4"/>
      <circle cx="55" cy="-13" r="3.2" fill="#ffffff"/>
      <circle cx="43" cy="1" r="1.2" fill="#1a1a1a"/>
      <circle cx="49" cy="1" r="1.2" fill="#1a1a1a"/>
      <rect x="66" y="14" width="17" height="18" fill="#4a90d9" stroke="#1a1a1a" stroke-width="1.6"/>
      <path d="M74.5,14 L74.5,32 M66,23 L83,23" stroke="#ffd93d" stroke-width="2.2"/>
    `,
    plates: `
      <ellipse cx="43.5" cy="27" rx="32" ry="5.5" fill="#ffffff" stroke="#1a1a1a" stroke-width="2"/>
      <ellipse cx="43.5" cy="20" rx="22" ry="10" fill="#e8d9c0" stroke="#c9b48a" stroke-width="1.4"/>
      <circle cx="32" cy="15" r="5.5" fill="#e63946" stroke="#8a2020" stroke-width="1.1"/>
      <circle cx="45" cy="11" r="6" fill="#7cb342" stroke="#4a7a1f" stroke-width="1.1"/>
      <circle cx="58" cy="15" r="5" fill="#e8952a" stroke="#a86a10" stroke-width="1.1"/>
    `,
    roast: `
      <ellipse cx="43.5" cy="28" rx="32" ry="5" fill="#e8d9c0" stroke="#1a1a1a" stroke-width="1.8"/>
      <path d="M27,21 L17,30 M60,21 L70,30" stroke="#c9791a" stroke-width="7" stroke-linecap="round"/>
      <ellipse cx="43.5" cy="13" rx="22" ry="14" fill="#c9791a" stroke="#8a4f0f" stroke-width="1.8"/>
      <path d="M32,6 Q43.5,0 55,6" stroke="#8a4f0f" stroke-width="1.6" fill="none"/>
      <circle cx="13" cy="25" r="5" fill="#7cb342" stroke="#4a7a1f" stroke-width="1.2"/>
      <circle cx="74" cy="25" r="5" fill="#e63946" stroke="#8a2020" stroke-width="1.2"/>
    `,
    drinks: `
      <rect x="8" y="4" width="16" height="28" rx="2.5" fill="#4a90d9" stroke="#1a1a1a" stroke-width="1.8"/>
      <rect x="13" y="-6" width="6" height="11" fill="#4a90d9" stroke="#1a1a1a" stroke-width="1.5"/>
      <rect x="10" y="12" width="12" height="9" fill="#e8f0f8" opacity="0.85"/>
      <rect x="35" y="-2" width="17" height="34" rx="2.5" fill="#7cb342" stroke="#1a1a1a" stroke-width="1.8"/>
      <rect x="40.5" y="-13" width="6" height="12" fill="#7cb342" stroke="#1a1a1a" stroke-width="1.5"/>
      <rect x="37.5" y="8" width="12" height="9" fill="#eef7e4" opacity="0.85"/>
      <path d="M62,8 L79,8 L76,32 L65,32 Z" fill="#e8952a" stroke="#1a1a1a" stroke-width="1.8"/>
      <rect x="67.5" y="-2" width="6" height="11" fill="#e8952a" stroke="#1a1a1a" stroke-width="1.5"/>
    `,
    mailbags: `
      <path d="M8,32 Q2,10 22,4 Q42,10 36,32 Z" fill="#9a8a68" stroke="#4a3f28" stroke-width="2"/>
      <path d="M13,6 Q22,-4 31,6" stroke="#4a3f28" stroke-width="2.2" fill="none"/>
      <rect x="14" y="14" width="16" height="11" fill="#e8d9c0" stroke="#4a3f28" stroke-width="1.3"/>
      <path d="M48,32 Q42,12 62,6 Q82,12 76,32 Z" fill="#8a7a5a" stroke="#4a3f28" stroke-width="2"/>
      <path d="M53,8 Q62,-2 71,8" stroke="#4a3f28" stroke-width="2.2" fill="none"/>
      <rect x="54" y="16" width="16" height="11" fill="#e8d9c0" stroke="#4a3f28" stroke-width="1.3"/>
    `,
    dessert: `
      <path d="M8,32 L13,9 L35,9 L40,32 Z" fill="#e8c9a0" stroke="#1a1a1a" stroke-width="1.8"/>
      <ellipse cx="24" cy="8" rx="13" ry="6" fill="#ffffff" stroke="#1a1a1a" stroke-width="1.5"/>
      <circle cx="24" cy="0" r="4" fill="#e63946" stroke="#8a2020" stroke-width="1.1"/>
      <path d="M52,7 L73,7 L62.5,32 Z" fill="#e8c9a0" stroke="#1a1a1a" stroke-width="1.8"/>
      <path d="M56,14 L69,14 M58,20 L67,20" stroke="#c9a878" stroke-width="1.4"/>
      <circle cx="62.5" cy="1" r="9" fill="#f0a0b8" stroke="#1a1a1a" stroke-width="1.5"/>
      <circle cx="62.5" cy="-10" r="6.5" fill="#fff0c0" stroke="#1a1a1a" stroke-width="1.5"/>
    `,
    // 🎃 Halloween-Ladungen
    hw_pumpkins: `
      <g transform="translate(2,-1) scale(0.6)">${pumpkinShapes(true)}</g>
      <g transform="translate(40,-6) scale(0.68)">${pumpkinShapes(true)}</g>
    `,
    hw_cauldron: `
      <path d="M14,8 Q10,32 24,32 L63,32 Q77,32 73,8 Z" fill="#1f1f24" stroke="#000" stroke-width="2"/>
      <ellipse cx="43.5" cy="8" rx="31" ry="6" fill="#2b2b33" stroke="#000" stroke-width="2"/>
      <ellipse cx="43.5" cy="8" rx="26" ry="4" fill="#6fdc3c"/>
      <circle cx="34" cy="2" r="4.5" fill="#8cf05a" stroke="#3f9a1a" stroke-width="1"/>
      <circle cx="50" cy="-3" r="3.5" fill="#8cf05a" stroke="#3f9a1a" stroke-width="1"/>
      <circle cx="58" cy="-11" r="2.5" fill="#8cf05a" stroke="#3f9a1a" stroke-width="1"/>
      <path d="M58,8 L68,-14" stroke="#7a4a22" stroke-width="3" stroke-linecap="round"/>
    `,
    hw_coffin: `
      <path d="M16,32 L8,14 L18,-4 L44,-10 L58,-4 L70,14 L62,32 Z" fill="#6b3f22" stroke="#2a160a" stroke-width="2"/>
      <path d="M22,26 L16,14 L23,2 L44,-3 L54,2 L62,14 L56,26 Z" fill="#7d4a28" stroke="#2a160a" stroke-width="1"/>
      <path d="M39,0 L39,22 M31,7 L47,7" stroke="#d9c9a8" stroke-width="3.4" stroke-linecap="round"/>
    `,
    hw_candy: `
      <path d="M6,22 L12,16 L12,30 Z M32,22 L26,16 L26,30 Z" fill="#ff5fa2" stroke="#1a1a1a" stroke-width="1.3"/>
      <ellipse cx="19" cy="23" rx="8" ry="7" fill="#ff5fa2" stroke="#1a1a1a" stroke-width="1.5"/>
      <path d="M15,20 L23,26 M15,26 L23,20" stroke="#ffffff" stroke-width="1.4"/>
      <path d="M54,32 L54,6" stroke="#f2f2f2" stroke-width="3" stroke-linecap="round"/>
      <circle cx="54" cy="-2" r="12" fill="#f28c28" stroke="#1a1a1a" stroke-width="1.6"/>
      <path d="M54,-2 m-8,0 a8,8 0 1,0 16,0 a6,6 0 1,0 -12,0 a4,4 0 1,0 8,0" fill="none" stroke="#1f1a2a" stroke-width="1.8"/>
      <path d="M66,32 L70,20 L74,32 Z" fill="#ffffff" stroke="#1a1a1a" stroke-width="1.2"/>
      <path d="M67.5,28 L72.5,28 M68.8,24 L71.2,24" stroke="#f28c28" stroke-width="2.2"/>
      <path d="M66,32 L74,32 L73,29 L67,29 Z" fill="#ffd23f"/>
    `,
  };

  // Gesamte Waggon-Inhalts-Liste: vier feste + Personen + optional
  // Freitext (Anzahl/Positionen wurden weiter oben schon berechnet).
  const endMarkerCargo = `
    <rect x="15" y="10" width="53" height="20" rx="3" fill="#3a3a3a" stroke="#1a1a1a" stroke-width="1.5"/>
    <circle class="end-lamp-a" cx="28" cy="20" r="7" fill="#ff2222" stroke="#1a1a1a" stroke-width="1.5"/>
    <circle class="end-lamp-b" cx="55" cy="20" r="7" fill="#22cc44" stroke="#1a1a1a" stroke-width="1.5"/>
    <circle cx="28" cy="20" r="3" fill="#ffffff" opacity="0.6"/>
    <circle cx="55" cy="20" r="3" fill="#ffffff" opacity="0.6"/>
  `;

  const allCargo = [
    { cargo: endMarkerCargo, window: "", wheels: 2 },
    ...customCargoList,
    ...[...personCargoList].reverse(),
    { cargo: CARGO[cargo0], window: "" },
    { cargo: CARGO[cargo1], window: "" },
    { cargo: CARGO[cargo2], window: "" },
    { cargo: CARGO[cargo3], window: "" },
  ];

  const wagon = (x, cargoContent, windowContent = "", wheelCount = 3) => {
    const wheelXs = wheelCount === 2 ? [22, 65] : [15, 43, 71];
    return `
    <g transform="translate(${x},0)">
      ${cargoContent}
      <path d="M0,32 L83,32 Q87,32 87,38 L87,48 Q87,52 83,52 L4,52 Q0,52 0,48 Z" fill="#ee1c1c" stroke="#1a1a1a" stroke-width="2.5"/>
      <rect x="8" y="39" width="71" height="9" fill="#ffd966"/>
      ${windowContent}
      ${wheelXs.map((wx) => wheel(wx, 58, 6.5)).join("")}
    </g>
  `;
  };

  const couplingsHtml = WAGON_X
    .map((x, i) => {
      const nextX = i < WAGON_X.length - 1 ? WAGON_X[i + 1] : LOCO_X;
      return `M${x + 87},50 L${nextX},50`;
    })
    .map((d) => `<path d="${d}" stroke="#1a1a1a" stroke-width="2"/>`)
    .join("");

  // Die komplette Lok in lokalen Koordinaten (0 = eigener Anfang), wird
  // per translate(LOCO_X,0) an die richtige Stelle geschoben.
  const locoHtml = `
    <g transform="translate(${LOCO_X},0)">
      <!-- Fahrgestell-Rahmen -->
      <rect x="0" y="42" width="96" height="8" fill="#3a3a3a"/>
      <!-- Roter Kessel -->
      <rect x="2" y="18" width="60" height="26" rx="10" fill="#ee1c1c" stroke="#1a1a1a" stroke-width="2.5"/>
      <path d="M18,18 L18,8 M25,18 L23,10" stroke="#ee1c1c" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Kabinen-Aufbau mit Fähnchen -->
      <path d="M56,8 L56,2 L62,8 Z" fill="#ee1c1c"/>
      <rect x="34" y="6" width="24" height="22" rx="2" fill="#ffd966" stroke="#1a1a1a" stroke-width="2.5"/>
      <path d="M38,22 L42,12" stroke="#c9a227" stroke-width="2"/>
      <!-- Schwarze runde Nase -->
      <path d="M60,18 Q86,13 100,24 Q100,37 90,42 Q72,44 60,40 Z" fill="#1a1a1a"/>
      <!-- Kleine Frontlampe -->
      <circle cx="97" cy="25" r="4" fill="#fff3c4" stroke="#c9a227" stroke-width="1.3"/>
      <circle cx="97" cy="25" r="1.6" fill="#ffffff"/>
      <!-- Schornstein -->
      <path d="M73,17 L69,5 Q69,1 75,1 L86,1 Q92,1 92,5 L88,17 Z" fill="#f5f0e6" stroke="#1a1a1a" stroke-width="2.5"/>
      <!-- Dampf -->
      <g>${smokeHtml}</g>
      <!-- Hupen-Sprechblase, taucht kurz während der Fahrt auf -->
      <g class="train-hoot">
        <path d="M26,-6 Q26,-17 37,-17 L61,-17 Q72,-17 72,-6 Q72,4 61,4 L44,4 L38,9 L39,4 Q26,4 26,-6 Z" fill="#ffffff" stroke="#1a1a1a" stroke-width="1.8"/>
        <text x="49" y="-2.5" font-size="9" font-family="Georgia, serif" font-weight="bold" fill="#1a1a1a" text-anchor="middle">TUUT</text>
      </g>
      <!-- Kuhfänger -->
      <path d="M99,42 Q110,46 116,54 L94,54 Z" fill="#ee1c1c" stroke="#1a1a1a" stroke-width="2"/>
      <!-- Räder Lok -->
      <path d="M22,50 L56,50" stroke="#1a1a1a" stroke-width="3"/>
      ${wheel(20, 54, 10)}
      ${wheel(56, 54, 10)}
      ${wheel(88, 56, 7)}
    </g>
  `;

  const html = `
    <div class="train-container" style="opacity:${finalOpacity};" aria-hidden="true">
      <div class="train-box" style="width:${boxWidth}px; height:${boxHeight}px; left:-${boxWidth + 24}px;">
        <svg viewBox="0 ${svgTop} ${svgWidth} ${svgHeight}" preserveAspectRatio="xMidYMid meet">
          <!-- Boden-/Gleislinie -->
          <path d="M2,58 L${svgWidth - 4},58" stroke="#1a1a1a" stroke-width="2"/>

          <!-- Alle Waggons: vier feste plus optional Personen- und Freitext-Waggons -->
          ${allCargo.map((item, i) => wagon(WAGON_X[i], item.cargo, item.window, item.wheels || 3)).join("\n")}

          <!-- Kupplungen zwischen allen Waggons und zur Lok -->
          ${couplingsHtml}

          ${locoHtml}
        </svg>
      </div>
    </div>
  `;
  return { css, html };
}

function renderDog(cfg, hass, hostEl) {
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const isHigh = (cfg.opacity_preset || "medium") === "high";
  const finalOpacity = isHigh ? 1 : opacity;
  const interval = { low: 340, medium: 210, high: 100 }[cfg.count_preset || "medium"] || 210;
  const walkPct = Math.min(30, (20 / interval) * 100);
  const startHeight = typeof cfg._startHeight === "number" ? cfg._startHeight : Math.random() * 70 + 10;
  const drift = typeof cfg._drift === "number" ? cfg._drift : (Math.random() * 16 - 8);
  const delaySec = periodicDelaySec(interval, "dog");

  // Schnüffel-Pause: kurzes Anhalten + Kopf senken, bei ca. 40% der Laufstrecke.
  const sniffFrac = 0.4;
  const sniffStart = (walkPct * sniffFrac).toFixed(2);
  const sniffMid = (walkPct * sniffFrac + 0.8).toFixed(2);
  const sniffEnd = (walkPct * sniffFrac + 1.6).toFixed(2);

  // Schütteln bei Regen: nur wenn eine echte Wetter-Entity angegeben ist UND
  // diese aktuell Regen meldet - sonst passiert nichts (kein erfundener
  // Zustand). Wichtig: das prüft die Entity direkt, unabhängig davon, ob
  // irgendwo eine andere Karte gerade den Regen-Effekt zeigt - zwei Karten
  // können sich sonst nicht gegenseitig "sehen".
  const rainStates = ["rainy", "pouring", "lightning-rainy", "snowy-rainy"];
  const isRaining = cfg.weather_entity && rainStates.includes(hass?.states?.[cfg.weather_entity]?.state);
  // 🎃 An Halloween im Kostüm: Teufelshörnchen und oranges Halstuch.
  const inCostume = isHalloweenTime(cfg, hass);

  const css = `
    .dog-container {
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      pointer-events: none; z-index: 9999; overflow: hidden;
    }
    .dog-walk-box {
      position: absolute; top: ${startHeight.toFixed(2)}vh; left: -185px; width: 165px; height: 55px;
      animation: dog-walk ${interval}s linear infinite; animation-delay: ${delaySec}s; will-change: transform;
    }
    @keyframes dog-walk {
      0% { transform: translate(0, 0); }
      ${sniffStart}% { transform: translate(calc((100vw + 300px) * ${sniffFrac}), ${(drift * sniffFrac).toFixed(2)}vh); }
      ${sniffEnd}% { transform: translate(calc((100vw + 300px) * ${sniffFrac}), ${(drift * sniffFrac).toFixed(2)}vh); }
      ${walkPct.toFixed(2)}% { transform: translate(calc(100vw + 300px), ${drift.toFixed(2)}vh); }
      100% { transform: translate(calc(100vw + 300px), ${drift.toFixed(2)}vh); }
    }
    .dog-bob {
      animation: dog-bob 0.55s ease-in-out infinite alternate;
    }
    @keyframes dog-bob {
      0% { transform: translateY(0); }
      100% { transform: translateY(-3px); }
    }
    .dog-leg-a { animation: dog-leg-swing-a 0.55s ease-in-out infinite alternate; }
    .dog-leg-b { animation: dog-leg-swing-b 0.55s ease-in-out infinite alternate; }
    @keyframes dog-leg-swing-a {
      0% { transform: rotate(-14deg); }
      100% { transform: rotate(14deg); }
    }
    @keyframes dog-leg-swing-b {
      0% { transform: rotate(14deg); }
      100% { transform: rotate(-14deg); }
    }
    .dog-tail {
      animation: dog-tail-wag 0.35s ease-in-out infinite alternate;
      transform-box: fill-box; transform-origin: 100% 50%;
    }
    @keyframes dog-tail-wag {
      0% { transform: rotate(-8deg); }
      100% { transform: rotate(12deg); }
    }
    .dog-sniff-pose {
      animation: dog-sniff-cycle ${interval}s ease-in-out infinite;
      animation-delay: ${delaySec}s;
      transform-box: fill-box; transform-origin: 90% 60%;
    }
    @keyframes dog-sniff-cycle {
      0% { transform: rotate(0deg) translateY(0); }
      ${sniffStart}% { transform: rotate(0deg) translateY(0); }
      ${sniffMid}% { transform: rotate(16deg) translateY(3px); }
      ${sniffEnd}% { transform: rotate(0deg) translateY(0); }
      100% { transform: rotate(0deg) translateY(0); }
    }
    .dog-head-bounce {
      animation: dog-head-nod 0.55s ease-in-out infinite alternate;
      transform-box: fill-box; transform-origin: center;
    }
    @keyframes dog-head-nod {
      0% { transform: translateY(0); }
      100% { transform: translateY(-2px); }
    }
    .dog-ear {
      /* Schwingen entfernt (Ressourcen-Ersparnis) - Ohr bleibt fest */
    }
    .dog-tongue {
      /* Wackeln entfernt (Ressourcen-Ersparnis) - Zunge bleibt fest */
    }
    .dog-print {
      animation: dog-print-fade 1.1s ease-out infinite;
    }
    @keyframes dog-print-fade {
      0% { opacity: 0; }
      15% { opacity: 0.45; }
      60% { opacity: 0.22; }
      100% { opacity: 0; }
    }
    ${isRaining ? `
    .dog-shake {
      animation: dog-shake-cycle 9s ease-in-out infinite;
      transform-box: fill-box; transform-origin: 50% 70%;
    }
    @keyframes dog-shake-cycle {
      0%, 92% { transform: rotate(0deg); }
      93% { transform: rotate(-6deg); }
      94% { transform: rotate(6deg); }
      95% { transform: rotate(-5deg); }
      96% { transform: rotate(5deg); }
      97% { transform: rotate(-3deg); }
      98%, 100% { transform: rotate(0deg); }
    }
    ` : ""}
  `;

  const html = `
    <div class="dog-container" style="opacity:${finalOpacity};" aria-hidden="true">
      <div class="dog-walk-box">
        <div class="dog-bob">
          <svg viewBox="-25 0 145 55" preserveAspectRatio="xMidYMid meet">
            <g class="${isRaining ? "dog-shake" : ""}">
              <g class="dog-leg-a" style="transform-origin: 88px 36px;">
                <path d="M88,36 Q92,42 95,48" stroke="#c68a3d" stroke-width="5" stroke-linecap="round" fill="none"/>
              </g>
              <g class="dog-leg-b" style="transform-origin: 78px 36px;">
                <path d="M78,36 Q76,42 74,48" stroke="#c68a3d" stroke-width="5" stroke-linecap="round" fill="none"/>
              </g>
              <g class="dog-leg-b" style="transform-origin: 35px 36px;">
                <path d="M35,36 Q39,42 42,48" stroke="#c68a3d" stroke-width="5" stroke-linecap="round" fill="none"/>
              </g>
              <g class="dog-leg-a" style="transform-origin: 25px 36px;">
                <path d="M25,36 Q21,42 18,48" stroke="#c68a3d" stroke-width="5" stroke-linecap="round" fill="none"/>
              </g>
              <ellipse class="dog-print" cx="20" cy="49.5" rx="2.8" ry="1.3" fill="#8a6f45"/>
              <ellipse class="dog-print" cx="40" cy="49.5" rx="2.8" ry="1.3" fill="#8a6f45" style="animation-delay:0.55s;"/>
              <g class="dog-tail">
                <path d="M24,22 Q4,8 -14,14 Q-8,24 2,26 Q10,28 24,24 Z" fill="#d4a25c"/>
              </g>
              <ellipse cx="55" cy="25" rx="35" ry="14" fill="#d4a25c"/>
              ${inCostume ? `
              <path d="M80,12 Q86,16 92,23" stroke="#f28c28" stroke-width="5" fill="none" stroke-linecap="round"/>
              <path d="M80,15 L91,23 L82,35 Z" fill="#f28c28" stroke="#a84a0c" stroke-width="1.2" stroke-linejoin="round"/>
              <circle cx="84" cy="23" r="1.5" fill="#1f1a2a"/><circle cx="83" cy="29" r="1.2" fill="#1f1a2a"/><circle cx="87" cy="25" r="1.1" fill="#1f1a2a"/>` : ""}
              <g class="dog-sniff-pose">
                <g class="dog-head-bounce">
                  <ellipse cx="95" cy="18" rx="13" ry="11" fill="#d4a25c"/>
                  <g class="dog-ear">
                    <path d="M90,12 Q80,10 82,22 Q86,26 92,20 Z" fill="#a67c3d"/>
                  </g>
                  <ellipse cx="106" cy="23" rx="7" ry="5.5" fill="#e8c78a"/>
                  <circle cx="112" cy="23" r="2" fill="#2a1a10"/>
                  <circle cx="97" cy="15" r="1.6" fill="#2a1a10"/>
                  <path class="dog-tongue" d="M105,27 Q107,33 109,27 Q107,29.5 105,27 Z" fill="#e8879a"/>
                  ${inCostume ? `
                  <path d="M88,10 Q84,1 88,-3 Q88,4 93,8 Z" fill="#d81f26" stroke="#7a0f12" stroke-width="1"/>
                  <path d="M98,8 Q98,-1 103,-3 Q101,3 103,9 Z" fill="#d81f26" stroke="#7a0f12" stroke-width="1"/>` : ""}
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  `;
  return { css, html };
}

function renderComet(cfg, hass, hostEl) {
  const color = resolveDynamicColor(cfg.color, hass, "#1a3a5c", "#bfe9ff", hostEl);
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const isHigh = (cfg.opacity_preset || "medium") === "high";
  const finalOpacity = isHigh ? 1 : opacity;
  const interval = { low: 340, medium: 210, high: 100 }[cfg.count_preset || "medium"] || 210;
  const flightSeconds = 3.5;
  const flightPct = Math.min(30, (flightSeconds / interval) * 100).toFixed(2);
  // Ein- und Ausblenden MÜSSEN sich auf die Flugdauer beziehen, nicht auf
  // feste Prozentwerte des Gesamtzyklus: bei seltenen Durchflügen ist der
  // Flug nur ~1,7% des Zyklus lang, ein fest verdrahtetes "1%" hätte davon
  // fast alles zum Einblenden verbraucht - der Komet wäre nur den letzten
  // Sekundenbruchteil überhaupt zu sehen gewesen.
  const cometFadeInPct = (parseFloat(flightPct) * 0.12).toFixed(3);
  const fadePct = (parseFloat(flightPct) * 1.2).toFixed(2);
  const delaySec = periodicDelaySec(interval, "comet");

  const css = `
    .comet-container {
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      pointer-events: none; z-index: 9999; overflow: hidden;
    }
    .comet-box {
      position: absolute; top: -10vh; left: -20vw; width: 220px; height: 5px;
      animation-name: comet-fly; animation-timing-function: linear; animation-iteration-count: infinite;
      animation-duration: ${interval}s; animation-delay: ${delaySec}s;
      will-change: transform, opacity;
    }
    .comet-trail {
      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(90deg, transparent, ${color});
      border-radius: 50%; filter: blur(1px);
    }
    .comet-head {
      position: absolute; right: -3px; top: 50%; transform: translateY(-50%);
      width: 8px; height: 8px; border-radius: 50%; background: ${color};
      box-shadow: 0 0 14px 4px ${color};
    }
    @keyframes comet-fly {
      0% { transform: translate(0, 0) rotate(35deg); opacity: 0; }
      ${cometFadeInPct}% { opacity: ${finalOpacity}; }
      ${flightPct}% { transform: translate(130vw, 100vh) rotate(35deg); opacity: ${finalOpacity}; }
      ${fadePct}% { opacity: 0; }
      100% { opacity: 0; transform: translate(130vw, 100vh) rotate(35deg); }
    }
  `;
  const html = `
    <div class="comet-container" aria-hidden="true">
      <div class="comet-box">
        <div class="comet-trail"></div>
        <div class="comet-head"></div>
      </div>
    </div>
  `;
  return { css, html };
}

function renderBats(cfg, hass, hostEl) {
  // Verbesserung (Bugfix): Fledermäuse waren fest schwarz - auf einem
  // dunklen Theme-Hintergrund praktisch unsichtbar (gleiches Problem wie
  // vorher bei den Wolken). Jetzt theme-abhängig: dunkles Grau-Violett auf
  // hellem Hintergrund, helleres Grau-Violett auf dunklem Hintergrund -
  // bleibt dabei bewusst "nächtlich" statt bunt.
  const color = resolveDynamicColor(cfg.color, hass, "#2a2530", "#cbc4d9", hostEl);
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const isHigh = (cfg.opacity_preset || "medium") === "high";
  const count = getParticleCount(cfg.count_preset || "medium", "bats");

  const bats = getCachedRandomSet("bats", count, () => ({
    top: (Math.random() * 85).toFixed(2),
    dur: (Math.random() * 6 + 9).toFixed(2),
    delay: (Math.random() * -12).toFixed(2),
    flapDur: (Math.random() * 0.2 + 0.25).toFixed(2),
    baseOp: (Math.random() * 0.3 + 0.5).toFixed(2),
    wobble: Math.floor(Math.random() * 10) + 6,
  }));

  const batHtml = bats.map((b) => {
    const op = isHigh ? Math.max(parseFloat(b.baseOp), 0.85) : (parseFloat(b.baseOp) * opacity);
    return `
    <div class="bat" style="top:${b.top}vh; animation-duration:${b.dur}s; animation-delay:${b.delay}s; opacity:${op.toFixed(2)}; --wobble:${b.wobble}vh;">
      <svg viewBox="0 0 40 20" class="bat-wings" style="animation-duration:${b.flapDur}s;">
        <path d="M20,10 L2,0 L9,7 L0,10 L9,13 L2,20 Z" fill="${color}"/>
        <path d="M20,10 L38,0 L31,7 L40,10 L31,13 L38,20 Z" fill="${color}"/>
        <ellipse cx="20" cy="10" rx="3" ry="4" fill="${color}"/>
        <path d="M17,7 L14,3 M23,7 L26,3" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </div>`;
  }).join("\n");

  const css = `
    ${overlayBaseCss("bats-container")}
    .bat {
      position: absolute; left: -10vw; width: 40px;
      animation-name: bat-fly; animation-timing-function: linear; animation-iteration-count: infinite;
      will-change: transform;
    }
    .bat-wings {
      width: 100%; height: auto; display: block;
      animation-name: bat-flap; animation-timing-function: ease-in-out; animation-iteration-count: infinite; animation-direction: alternate;
      transform-origin: center;
    }
    @keyframes bat-fly {
      0%   { transform: translateX(0) translateY(0); }
      25%  { transform: translateX(30vw) translateY(calc(-1 * var(--wobble))); }
      50%  { transform: translateX(60vw) translateY(var(--wobble)); }
      75%  { transform: translateX(90vw) translateY(calc(-1 * var(--wobble))); }
      100% { transform: translateX(120vw) translateY(0); }
    }
    @keyframes bat-flap {
      0% { transform: scaleY(1); }
      100% { transform: scaleY(0.4); }
    }
  `;
  return { css, html: `<div class="bats-container" aria-hidden="true">${batHtml}</div>` };
}

function renderBirdhouse(cfg, hass, hostEl) {
  // Vogelhäuschen: sitzt fest oben links (kleiner als die Eule), immer
  // sichtbar. Periodisch fliegt ein kleiner Vogel von links ins Bild,
  // "landet" kurz am Einflugloch (kurze Pause + Flügelschlag), fliegt dann
  // weiter nach rechts aus dem Bild. Nutzt dieselbe Startzeit-Technik wie
  // Weihnachtsmann/Komet/Dampflok, damit ein Neu-Rendern den Anflug nicht
  // unterbricht.
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const isHigh = (cfg.opacity_preset || "medium") === "high";
  const finalOpacity = isHigh ? 1 : opacity;
  const interval = { low: 100, medium: 60, high: 30 }[cfg.count_preset || "medium"] || 60;
  const delaySec = periodicDelaySec(interval, "birdhouse");
  // 🎃 An Halloween: Kürbis vor dem Häuschen, Spinnwebe unterm Dach,
  // und der Vogel fliegt mit Mini-Hexenhut vorbei.
  const spooky = isHalloweenTime(cfg, hass);
  // Anteil des Zyklus für den kompletten Anflug+Vorbeiflug (Rest ist Pause,
  // in der der Vogel unsichtbar wartet).
  const flightPct = Math.min(35, (9 / interval) * 100).toFixed(2);
  const birdFadeInPct = (parseFloat(flightPct) * 0.15).toFixed(3);
  const landPct = (flightPct * 0.4).toFixed(2);
  const leavePct = (flightPct * 0.6).toFixed(2);

  const css = `
    .birdhouse-box {
      position: fixed; top: 2vh; left: 1vw; width: 58px; height: 78px;
      pointer-events: none; z-index: 999997;
    }
    .bird-fly-container {
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      pointer-events: none; z-index: 999999; overflow: hidden;
    }
    .bird-fly-box {
      position: absolute; top: 6vh; left: -6vw; width: 30px; height: 24px;
      animation-name: bird-visit; animation-timing-function: ease-in-out; animation-iteration-count: infinite;
      animation-duration: ${interval}s; animation-delay: ${delaySec}s; will-change: transform;
    }
    @keyframes bird-visit {
      0%   { transform: translate(0, 4vh); opacity: 0; }
      ${birdFadeInPct}%   { opacity: ${finalOpacity}; }
      ${landPct}% { transform: translate(9vw, 0); opacity: ${finalOpacity}; }
      ${leavePct}% { transform: translate(9vw, 0); opacity: ${finalOpacity}; }
      ${flightPct}% { transform: translate(112vw, -3vh); opacity: ${finalOpacity}; }
      100% { transform: translate(112vw, -3vh); opacity: 0; }
    }
    .bird-wing {
      animation: bird-wing-flap 0.15s ease-in-out infinite alternate;
      transform-origin: 15px 10px;
    }
    @keyframes bird-wing-flap {
      0% { transform: scaleY(1) rotate(0deg); }
      100% { transform: scaleY(0.5) rotate(-15deg); }
    }
    ${spooky ? `
    .birdhouse-box .pk-face-glow { animation: bh-pk-flicker 1.9s steps(1) infinite; }
    @keyframes bh-pk-flicker {
      0% { opacity: 1; } 13% { opacity: 0.65; } 21% { opacity: 0.95; } 34% { opacity: 0.55; }
      45% { opacity: 1; } 61% { opacity: 0.75; } 72% { opacity: 0.5; } 84% { opacity: 0.9; } 100% { opacity: 1; }
    }` : ""}
  `;
  const html = `
    <div class="birdhouse-box" style="opacity:${finalOpacity};" aria-hidden="true">
      <svg viewBox="0 0 58 78" style="width:100%; height:100%;">
        <g transform="translate(5.941,9.941) scale(0.8235)">
        <path d="M-6,68 Q26,58 62,68 L62,74 Q26,66 -6,74 Z" fill="#5a3d24"/>
        <path d="M4,10 L29,-6 L54,10 Z" fill="#a83a2a" stroke="#6b2015" stroke-width="2"/>
        <path d="M6,12 L52,12 L48,54 Q48,58 44,58 L14,58 Q10,58 10,54 Z" fill="#c68a3d" stroke="#6b4a2f" stroke-width="2"/>
        <circle cx="29" cy="32" r="8" fill="#3a2712"/>
        <path d="M20,44 L38,44" stroke="#6b4a2f" stroke-width="3" stroke-linecap="round"/>
        <path d="M29,58 L29,64" stroke="#6b4a2f" stroke-width="3"/>
        ${spooky ? `
        <g stroke="#f2f2f6" fill="none" stroke-linecap="round" opacity="0.9">
          <path d="M51,13 L51,29 M51,13 L43,27 M51,13 L38,21 M51,13 L36,13" stroke-width="0.7"/>
          <path d="M51,18 L48.5,17.5 L46.5,15.5 L45,13" stroke-width="0.6"/>
          <path d="M51,23 L46,22.5 L42,19 L40.5,13" stroke-width="0.6"/>
        </g>
        <g transform="translate(36,51) scale(0.3)">${pumpkinShapes(true)}</g>` : ""}
        </g>
      </svg>
    </div>
    <div class="bird-fly-container" aria-hidden="true">
      <div class="bird-fly-box">
        <svg viewBox="0 0 33 24" style="width:100%; height:100%; overflow:visible;">
          <ellipse cx="15" cy="12" rx="9" ry="6.5" fill="#4a90d9"/>
          <circle cx="24" cy="9" r="4.5" fill="#4a90d9"/>
          <path d="M28,8 L32,9 L28,11 Z" fill="#e8952a"/>
          <circle cx="25" cy="8" r="1" fill="#1a1a1a"/>
          <path class="bird-wing" d="M15,10 Q6,4 3,12 Q9,14 15,10 Z" fill="#3a7ab8"/>
          ${spooky ? `
          <path d="M20.5,5.5 L23,-4 Q24,-7 19,-8 Q26,-7.5 25.5,-3 L27.5,5.5 Z" fill="#1f1a2a" stroke="#000" stroke-width="0.6"/>
          <path d="M21,3.6 L27,3.6 L27.3,5.2 L20.7,5.2 Z" fill="#8a2a8a"/>
          <ellipse cx="24" cy="5.6" rx="5.6" ry="1.3" fill="#1f1a2a" stroke="#000" stroke-width="0.5"/>` : ""}
        </svg>
      </div>
    </div>
  `;
  return { css, html };
}

function renderMoon(cfg, hass, hostEl) {
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const isHigh = (cfg.opacity_preset || "medium") === "high";
  const finalOpacity = isHigh ? 1 : opacity;

  // 🎃 An Halloween: der Mond behält seine echte Phase, wird aber orange.
  const halloweenMoon = isHalloweenTime(cfg, hass);
  const phase = getMoonPhase(new Date());
  const lightPath = moonPhasePath(29, 39, 24, phase);
  const litFill = halloweenMoon ? "#f5a142" : "#f0e6c8";

  // Der unbeleuchtete Mondteil braucht auf hellem und dunklem Hintergrund
  // unterschiedliche Farben: auf Dunkel darf er kräftig dunkel sein (wirkt
  // wie ein echter Nachthimmel-Mond), auf Hell würde dieselbe Farbe wie
  // ein unpassender dunkler Fleck wirken - dort lieber ein dezentes,
  // helles Grau mit dunklerem Rand zur Abgrenzung.
  const dark = isDarkModeActive(hass, hostEl);
  const unlitFill = dark ? "#2a3a4a" : "#d8dce0";
  const unlitStroke = dark ? "#5a6a7a" : "#a8b0b8";

  const css = `
    .moon-container {
      position: fixed; top: 2vh; right: 1vw; width: 58px; height: 78px;
      pointer-events: none; z-index: 999998;
    }
    .moon-glow {
      animation: moon-glow-pulse 6s ease-in-out infinite;
    }
    @keyframes moon-glow-pulse {
      0%, 100% { opacity: 0.75; }
      50% { opacity: 1; }
    }
  `;

  // Fünf Krater über die ganze Mondscheibe verteilt - werden per
  // clipPath auf den jeweils beleuchteten Bereich begrenzt, damit sie
  // bei jeder Phase (nicht nur Vollmond) nur dort auftauchen, wo gerade
  // wirklich Licht drauf fällt.
  const craterStyle = halloweenMoon
    ? `fill="#d9822b" stroke="#b8651a" stroke-width="0.7"`
    : `fill="#cfbf8c" stroke="#b09d68" stroke-width="0.7"`;
  const cratersSvg = `
    <circle cx="20" cy="29" r="4" ${craterStyle}/>
    <circle cx="37" cy="44" r="3" ${craterStyle}/>
    <circle cx="25" cy="50" r="2.4" ${craterStyle}/>
    <circle cx="41" cy="29" r="2.2" ${craterStyle}/>
    <circle cx="14" cy="41" r="2" ${craterStyle}/>
    <circle cx="45" cy="40" r="2.3" ${craterStyle}/>
    <circle cx="31" cy="34" r="1.6" ${craterStyle}/>
  `;

  let moonSvg;
  if (lightPath === null) {
    // Neumond: fast nichts zu sehen, nur der dunkle Umriss - realistisch.
    moonSvg = `<circle cx="29" cy="39" r="24" fill="${unlitFill}" stroke="${unlitStroke}" stroke-width="1"/>`;
  } else if (lightPath === "full") {
    moonSvg = `
      ${halloweenMoon ? `<circle cx="29" cy="39" r="31" fill="#ff8a1e" opacity="0.18"/><circle cx="29" cy="39" r="27.5" fill="#ff8a1e" opacity="0.22"/>` : ""}
      <circle cx="29" cy="39" r="24" fill="${litFill}" stroke="${halloweenMoon ? "#c96a1a" : unlitStroke}" stroke-width="1"/>
      ${cratersSvg}
    `;
  } else {
    moonSvg = `
      <defs>
        <clipPath id="moon-light-clip">
          <path d="${lightPath}"/>
        </clipPath>
      </defs>
      <circle cx="29" cy="39" r="24" fill="${unlitFill}" stroke="${unlitStroke}" stroke-width="1"/>
      <path d="${lightPath}" fill="${litFill}"/>
      <g clip-path="url(#moon-light-clip)">
        ${cratersSvg}
      </g>
    `;
  }

  const html = `
    <div class="moon-container" style="opacity:${finalOpacity};" aria-hidden="true">
      <svg viewBox="0 0 58 78" style="width:100%; height:100%;">
        <g transform="translate(-4.143,-12.571) scale(1.1429)">
        <g class="moon-glow">
          ${moonSvg}
        </g>
        </g>
      </svg>
    </div>
  `;
  return { css, html };
}

function renderSun(cfg, hass, hostEl) {
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const isHigh = (cfg.opacity_preset || "medium") === "high";
  const finalOpacity = isHigh ? 1 : opacity;

  const css = `
    .sun-container {
      position: fixed; top: 2vh; right: 1vw; width: 58px; height: 78px;
      pointer-events: none; z-index: 999998;
    }
    .sun-halo {
      animation: sun-glow 4s ease-in-out infinite;
    }
    .sun-core {
      animation: sun-pulse 4s ease-in-out infinite;
      transform-box: fill-box; transform-origin: center;
    }
    @keyframes sun-glow {
      0%, 100% { opacity: 0.75; }
      50% { opacity: 1; }
    }
    @keyframes sun-pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.04); }
    }
  `;

  // Lichtschein bewusst per Farbverlauf statt Weichzeichner-Filter:
  // Filter können auf schwächeren Browsern (z. B. Fire TV) ein
  // sichtbares Rechteck um die Figur erzeugen.
  const html = `
    <div class="sun-container" style="opacity:${finalOpacity};" aria-hidden="true">
      <svg viewBox="0 0 58 78" style="width:100%; height:100%;">
        <g transform="translate(0,-7) scale(1)">
        <defs>
          <radialGradient id="sun-halo-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ffd93d" stop-opacity="0.9"/>
            <stop offset="55%" stop-color="#ffc233" stop-opacity="0.45"/>
            <stop offset="100%" stop-color="#ffb020" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="sun-core-grad" cx="42%" cy="40%" r="65%">
            <stop offset="0%" stop-color="#fff4b0"/>
            <stop offset="55%" stop-color="#ffcb3d"/>
            <stop offset="100%" stop-color="#f5a623"/>
          </radialGradient>
        </defs>
        <circle class="sun-halo" cx="29" cy="39" r="28" fill="url(#sun-halo-grad)"/>
        <circle class="sun-core" cx="29" cy="39" r="16" fill="url(#sun-core-grad)" stroke="#d98a1a" stroke-width="2"/>
        </g>
      </svg>
    </div>
  `;
  return { css, html };
}

function renderOwl(cfg, hass, hostEl) {
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const isHigh = (cfg.opacity_preset || "medium") === "high";
  const finalOpacity = isHigh ? 1 : opacity;
  // 🎃 An Halloween trägt die Eule einen Hexenhut (dreht sich mit dem Kopf).
  const witchHat = isHalloweenTime(cfg, hass);

  const css = `
    .owl-container {
      position: fixed; top: 2vh; left: 1vw; width: 58px; height: 78px;
      pointer-events: none; z-index: 999999;
    }
    .owl-head {
      animation: owl-turn 9s ease-in-out infinite;
      transform-box: fill-box; transform-origin: 50% 62%;
    }
    .owl-body {
      animation: owl-breathe 4s ease-in-out infinite;
      transform-box: fill-box; transform-origin: 50% 72%;
    }
    .owl-eye-lid.left {
      animation: owl-blink-left 9s ease-in-out infinite;
      transform-origin: center;
      transform-box: fill-box;
    }
    .owl-eye-lid.right {
      animation: owl-blink-right 9s ease-in-out infinite;
      transform-origin: center;
      transform-box: fill-box;
    }
    @keyframes owl-turn {
      0%, 40% { transform: rotate(0deg); }
      50% { transform: rotate(-8deg); }
      60%, 90% { transform: rotate(0deg); }
      95% { transform: rotate(6deg); }
      100% { transform: rotate(0deg); }
    }
    @keyframes owl-breathe {
      0%, 100% { transform: scale(1, 1); }
      50% { transform: scale(1.02, 0.98); }
    }
    @keyframes owl-blink-left {
      0%, 18%, 26%, 100% { transform: scaleY(0); }
      22% { transform: scaleY(1); }
    }
    @keyframes owl-blink-right {
      0%, 58%, 66%, 100% { transform: scaleY(0); }
      62% { transform: scaleY(1); }
    }
  `;
  const html = `
    <div class="owl-container" style="opacity:${finalOpacity};" aria-hidden="true">
      <svg viewBox="0 0 58 78" style="width:100%; height:100%; overflow:visible;">
        <g transform="translate(1,2.133) scale(0.4667)">
        <path d="M92,10 A14,14 0 1,0 92,38 A11,11 0 1,1 92,10 Z" fill="#f4ecd8" opacity="0.8"/>
        <path d="M0,112 Q60,102 120,112 L120,120 Q60,110 0,120 Z" fill="#5a3d24"/>
        <path d="M14,108 L4,100 M100,108 L112,100" stroke="#5a3d24" stroke-width="3" stroke-linecap="round"/>
        <g class="owl-body">
          <path d="M28,58 Q16,78 24,103 Q30,105 36,98 Q32,78 38,60 Z" fill="#5a3d24"/>
          <path d="M92,58 Q104,78 96,103 Q90,105 84,98 Q88,78 82,60 Z" fill="#5a3d24"/>
          <ellipse cx="60" cy="82" rx="32" ry="30" fill="#6b4a2f"/>
          <ellipse cx="60" cy="88" rx="20" ry="22" fill="#8a6238"/>
          <path d="M48,74 L60,82 L72,74 M46,84 L60,92 L74,84 M48,96 L60,104 L72,96"
                fill="none" stroke="#6b4a2f" stroke-width="2.2" stroke-linecap="round"/>
          <path d="M50,110 L46,118 M50,110 L50,120 M50,110 L54,118
                    M70,110 L66,118 M70,110 L70,120 M70,110 L74,118"
                stroke="#e8952a" stroke-width="2.5" stroke-linecap="round"/>
        </g>
        <g class="owl-head">
          <path d="M40,24 L32,4 L48,20 Z" fill="#5a3d24"/>
          <path d="M80,24 L88,4 L72,20 Z" fill="#5a3d24"/>
          <circle cx="60" cy="47" r="28" fill="#8a6238"/>
          <circle cx="48" cy="46" r="13" fill="#f4ead9"/>
          <circle cx="72" cy="46" r="13" fill="#f4ead9"/>
          <circle cx="48" cy="46" r="8" fill="#e8952a"/>
          <circle cx="72" cy="46" r="8" fill="#e8952a"/>
          <circle cx="48" cy="46" r="4" fill="#1a1a1a"/>
          <circle cx="72" cy="46" r="4" fill="#1a1a1a"/>
          <circle cx="46" cy="43" r="1.6" fill="#ffffff"/>
          <circle cx="70" cy="43" r="1.6" fill="#ffffff"/>
          <circle class="owl-eye-lid left" cx="48" cy="46" r="13" fill="#8a6238"/>
          <circle class="owl-eye-lid right" cx="72" cy="46" r="13" fill="#8a6238"/>
          <path d="M54,56 L66,56 L60,66 Z" fill="#e8952a"/>
          ${witchHat ? `
          <path d="M40,22 L56,-22 Q60,-30 74,-26 Q62,-22 66,-12 L80,22 Z" fill="#1f1a2a" stroke="#000" stroke-width="2"/>
          <path d="M43,15 L77,15 L79,21 L41,21 Z" fill="#8a2a8a"/>
          <rect x="56" y="14" width="8" height="8" fill="#ffd23f" stroke="#a87a10" stroke-width="1"/>
          <ellipse cx="60" cy="22" rx="32" ry="6" fill="#1f1a2a" stroke="#000" stroke-width="2"/>` : ""}
        </g>
        </g>
      </svg>
    </div>
  `;
  return { css, html };
}

function renderBee(cfg, hass, hostEl) {
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const isHigh = (cfg.opacity_preset || "medium") === "high";
  const count = getParticleCount(cfg.count_preset || "medium", "bee");

  const bees = getCachedRandomSet("bee", count, () => ({
    top: (Math.random() * 80).toFixed(2),
    dur: (Math.random() * 8 + 14).toFixed(2),
    delay: (Math.random() * -20).toFixed(2),
    wobble: Math.floor(Math.random() * 14) + 6,
    baseOp: (Math.random() * 0.2 + 0.75).toFixed(2),
  }));

  const beeHtml = bees.map((b) => {
    const op = isHigh ? Math.max(parseFloat(b.baseOp), 0.9) : (parseFloat(b.baseOp) * opacity);
    return `
    <div class="bee" style="top:${b.top}vh; animation-duration:${b.dur}s; animation-delay:${b.delay}s; opacity:${op.toFixed(2)}; --wobble:${b.wobble}vh;">
      <svg viewBox="0 0 34 26" preserveAspectRatio="xMidYMid meet">
        <ellipse class="bee-wing" cx="13" cy="6" rx="8" ry="5" fill="#eef6ff" opacity="0.85" stroke="#c3d6ea" stroke-width="0.6"/>
        <ellipse class="bee-wing" cx="27" cy="6" rx="8" ry="5" fill="#eef6ff" opacity="0.85" stroke="#c3d6ea" stroke-width="0.6"/>
        <ellipse cx="20" cy="14" rx="11" ry="8" fill="#2a1a05"/>
        <rect x="12" y="10" width="4" height="8" fill="#f5c518"/>
        <rect x="20" y="10" width="4" height="8" fill="#f5c518"/>
        <rect x="28" y="10" width="3" height="8" fill="#f5c518"/>
        <circle cx="9" cy="14" r="4" fill="#1a1a1a"/>
      </svg>
    </div>`;
  }).join("\n");

  const css = `
    ${overlayBaseCss("bee-container")}
    .bee {
      position: absolute; left: -8vw; width: 34px;
      animation-name: bee-zigzag; animation-timing-function: linear; animation-iteration-count: infinite;
      will-change: transform;
    }
    .bee-wing {
      animation: bee-wing-flap 0.12s ease-in-out infinite alternate;
      transform-origin: 20px 9px;
    }
    @keyframes bee-zigzag {
      0%   { transform: translateX(0) translateY(0); }
      20%  { transform: translateX(24vw) translateY(calc(-1 * var(--wobble))); }
      40%  { transform: translateX(48vw) translateY(var(--wobble)); }
      60%  { transform: translateX(72vw) translateY(calc(-0.6 * var(--wobble))); }
      80%  { transform: translateX(96vw) translateY(var(--wobble)); }
      100% { transform: translateX(120vw) translateY(0); }
    }
    @keyframes bee-wing-flap {
      0% { transform: scaleY(1); }
      100% { transform: scaleY(0.55); }
    }
  `;
  return { css, html: `<div class="bee-container" aria-hidden="true">${beeHtml}</div>` };
}

// Verbesserung: erzeugt ein verzweigtes Eisblumen-/Raureif-Muster
// mathematisch (wie schon beim Spinnennetz), das von einer Ecke (0,0)
// diagonal ins Bild hineinwächst - Hauptäste mit kleinen Seitenzweigen.

function renderClouds(cfg, hass, hostEl) {
  // Verbesserung (Bugfix): Wolken waren fest hellgrau/weiß - auf einem
  // hellen Theme-Hintergrund praktisch unsichtbar. Jetzt wie die anderen
  // Wetter-Effekte theme-abhängig: dunkles Grau auf hellem Hintergrund,
  // helles Grau auf dunklem Hintergrund.
  const color = resolveDynamicColor(cfg.color, hass, "#57626f", "#e8edf2", hostEl);
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const isHigh = (cfg.opacity_preset || "medium") === "high";
  const count = getParticleCount(cfg.count_preset || "medium", "clouds");

  const clouds = getCachedRandomSet("clouds", count, (_, i) => {
    // Verbesserung: Zeit-Versatz gleichmäßig über den Zyklus verteilt
    // (Basis-Position nach Index) statt komplett zufällig - sonst können
    // sich alle Wolken zufällig häufen und es entstehen Lücken ganz ohne
    // sichtbare Wolke. Etwas Zufalls-Jitter obendrauf, damit es trotzdem
    // nicht "maschinell" gleichmäßig aussieht.
    const jitter = Math.random() * 12 - 6;
    return {
      top: (Math.random() * 82).toFixed(2),
      scale: (Math.random() * 0.7 + 0.7).toFixed(2),
      dur: (Math.random() * 40 + 60).toFixed(2),
      delay: (-(i / count) * 85 + jitter).toFixed(2),
      baseOp: (Math.random() * 0.18 + 0.28).toFixed(2),
    };
  });

  const cloudHtml = clouds.map((c) => {
    const op = isHigh ? Math.max(parseFloat(c.baseOp), 0.65) : (parseFloat(c.baseOp) * opacity);
    return `<div class="cloud" style="top:${c.top}vh; transform:scale(${c.scale}); animation-duration:${c.dur}s; animation-delay:${c.delay}s; opacity:${op.toFixed(2)}; background:${color}; box-shadow: 6vw 1vh 0 -1vh ${color}, -5vw 1.5vh 0 -1.5vh ${color}, 3vw -1vh 0 -0.5vh ${color};"></div>`;
  }).join("\n");

  const css = `
    ${overlayBaseCss("clouds-container")}
    .cloud {
      position: absolute; left: -30vw; width: 22vw; height: 8vh;
      border-radius: 50%;
      filter: blur(4px);
      animation-name: cloud-drift; animation-timing-function: linear; animation-iteration-count: infinite;
      will-change: transform;
    }
    @keyframes cloud-drift {
      0% { transform: translateX(0) scale(var(--s, 1)); }
      100% { transform: translateX(160vw) scale(var(--s, 1)); }
    }
  `;
  return { css, html: `<div class="clouds-container" aria-hidden="true">${cloudHtml}</div>` };
}

function renderWishStar(cfg, hass, hostEl) {
  const color = resolveDynamicColor(cfg.color, hass, "#1a1a2e", "#ffffff", hostEl);
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const isHigh = (cfg.opacity_preset || "medium") === "high";
  const peak = isHigh ? 1 : Math.max(opacity, 0.5);
  const pos = cfg._wishstarPos || { top: 30, left: 50 };

  const css = `
    .wishstar {
      position: fixed; top: ${pos.top.toFixed(2)}vh; left: ${pos.left.toFixed(2)}vw; width: 70px; height: 70px;
      pointer-events: none; z-index: 9999;
      animation: wishstar-flash 3s ease-in-out 1 forwards;
      will-change: opacity, transform;
    }
    .wishstar-halo {
      position: absolute; inset: 0; border-radius: 50%;
      background: radial-gradient(circle, ${color} 0%, ${color}99 30%, transparent 72%);
      filter: blur(5px);
    }
    .wishstar-ray {
      position: absolute; top: 50%; left: 50%; filter: blur(2.5px); opacity: 0.55;
    }
    .wishstar-ray.v { width: 2.5px; height: 100%; background: linear-gradient(${color}, transparent 38%, transparent 62%, ${color}); transform: translate(-50%, -50%); }
    .wishstar-ray.h { width: 100%; height: 2.5px; background: linear-gradient(90deg, ${color}, transparent 38%, transparent 62%, ${color}); transform: translate(-50%, -50%); }
    .wishstar-core {
      position: absolute; top: 50%; left: 50%; width: 16px; height: 16px; margin: -8px;
      border-radius: 50%; background: #ffffff;
      box-shadow: 0 0 14px 5px ${color};
    }
    @keyframes wishstar-flash {
      0% { opacity: 0; transform: scale(0.3); }
      30% { opacity: ${peak}; transform: scale(1.2); }
      55% { opacity: ${peak}; transform: scale(1); }
      100% { opacity: 0; transform: scale(0.3); }
    }
  `;
  const html = `
    <div class="wishstar" aria-hidden="true">
      <div class="wishstar-halo"></div>
      <div class="wishstar-ray v"></div>
      <div class="wishstar-ray h"></div>
      <div class="wishstar-core"></div>
    </div>
  `;
  return { css, html };
}

function renderStars(cfg, hass, hostEl) {
  // Sterne "teleportieren" zwischen 4 zufälligen Positionen, unsichtbar
  // während des Sprungs (Deckkraft VOR und NACH dem Sprung explizit auf 0
  // gehalten, damit der Browser die Bewegung nicht mit-interpoliert).
  //
  // Verbesserung (Ressourcen): Die Position läuft jetzt über
  // "transform: translate()" statt über "top"/"left". Das ist ein
  // wichtiger Unterschied: top/left-Animationen zwingen den Browser bei
  // JEDEM Bild zu einer Layout-Neuberechnung alle anderen Elemente
  // betreffend, während transform rein von der GPU zusammengesetzt wird
  // (kein Layout-Reflow). Zusätzlich teilen sich jetzt ALLE Sterne EIN
  // einziges Keyframe (vorher hatte jeder Stern sein eigenes, 25 Schritte
  // langes Keyframe) - die individuellen Positionen/Helligkeiten kommen
  // stattdessen aus CSS-Variablen pro Stern. Bei z. B. 55 Sternen spart
  // das enorm an CSS-Größe und Browser-Rechenaufwand.
  const color = resolveDynamicColor(cfg.color, hass, "#000000", "#ffffff", hostEl);
  const count = getParticleCount(cfg.count_preset || "medium", "stars");
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const isHigh = (cfg.opacity_preset || "medium") === "high";

  const stars = getCachedRandomSet("stars", count, () => ({
    waypoints: Array.from({ length: 4 }, () => ({
      top: (Math.random() * 85).toFixed(2),
      left: (Math.random() * 100).toFixed(2),
    })),
    size: (Math.random() * 2.5 + 2).toFixed(2),
    dur: (Math.random() * 8 + 20).toFixed(2),
    delay: (Math.random() * -28).toFixed(2),
    baseOp: (Math.random() * 0.4 + 0.55).toFixed(2),
  }));

  const starHTML = stars.map((s) => {
    const peak = isHigh
      ? Math.max(parseFloat(s.baseOp), 0.95)
      : Math.max(parseFloat(s.baseOp) * opacity, 0.35);
    const glow = (parseFloat(s.size) * 2.5).toFixed(2);
    const [p1, p2, p3, p4] = s.waypoints;
    // Jede Position wird relativ zur eigenen Startposition (top/left als
    // normale, EINMALIGE Platzierung - keine Animation) über eine
    // Verschiebung (translate) in vw/vh ausgedrückt. Da top1/left1 der
    // Basispunkt ist, ist die erste Verschiebung (0,0).
    const dx2 = (parseFloat(p2.left) - parseFloat(p1.left)).toFixed(2);
    const dy2 = (parseFloat(p2.top) - parseFloat(p1.top)).toFixed(2);
    const dx3 = (parseFloat(p3.left) - parseFloat(p1.left)).toFixed(2);
    const dy3 = (parseFloat(p3.top) - parseFloat(p1.top)).toFixed(2);
    const dx4 = (parseFloat(p4.left) - parseFloat(p1.left)).toFixed(2);
    const dy4 = (parseFloat(p4.top) - parseFloat(p1.top)).toFixed(2);
    const vars = `--peak:${peak}; --dx2:${dx2}vw; --dy2:${dy2}vh; --dx3:${dx3}vw; --dy3:${dy3}vh; --dx4:${dx4}vw; --dy4:${dy4}vh;`;
    return `<div class="star" style="top:${p1.top}vh; left:${p1.left}vw; width:${s.size}px; height:${s.size}px; background:${color}; box-shadow: 0 0 ${glow}px ${color}, 0 0 1.5px rgba(160,160,160,0.9); animation-duration:${s.dur}s; animation-delay:${s.delay}s; ${vars}"></div>`;
  }).join("\n");

  const css = `
    ${overlayBaseCss("stars-container")}
    .star {
      position: absolute; border-radius: 50%;
      animation-name: star-teleport-cycle; animation-timing-function: linear; animation-iteration-count: infinite;
      will-change: opacity, transform;
    }
    /* Ein einziges gemeinsames Keyframe für ALLE Sterne. Sanft aufblitzen
       (4%), lange ruhig halten (14%), sanft verblassen (3%), dann in
       einem winzigen 0,4%-Fenster mit Deckkraft explizit auf 0 vor UND
       nach dem Sprung lautlos zur nächsten Position (translate) springen. */
    @keyframes star-teleport-cycle {
      0%     { opacity: 0; transform: translate(0,0) scale(0.3); }
      4%     { opacity: var(--peak); transform: translate(0,0) scale(1.1); }
      18%    { opacity: var(--peak); transform: translate(0,0) scale(1); }
      21%    { opacity: 0; transform: translate(0,0) scale(0.3); }
      23.8%  { opacity: 0; transform: translate(0,0) scale(0.3); }
      24.2%  { opacity: 0; transform: translate(var(--dx2),var(--dy2)) scale(0.3); }
      25%    { opacity: 0; transform: translate(var(--dx2),var(--dy2)) scale(0.3); }
      29%    { opacity: var(--peak); transform: translate(var(--dx2),var(--dy2)) scale(1.1); }
      43%    { opacity: var(--peak); transform: translate(var(--dx2),var(--dy2)) scale(1); }
      46%    { opacity: 0; transform: translate(var(--dx2),var(--dy2)) scale(0.3); }
      48.8%  { opacity: 0; transform: translate(var(--dx2),var(--dy2)) scale(0.3); }
      49.2%  { opacity: 0; transform: translate(var(--dx3),var(--dy3)) scale(0.3); }
      50%    { opacity: 0; transform: translate(var(--dx3),var(--dy3)) scale(0.3); }
      54%    { opacity: var(--peak); transform: translate(var(--dx3),var(--dy3)) scale(1.1); }
      68%    { opacity: var(--peak); transform: translate(var(--dx3),var(--dy3)) scale(1); }
      71%    { opacity: 0; transform: translate(var(--dx3),var(--dy3)) scale(0.3); }
      73.8%  { opacity: 0; transform: translate(var(--dx3),var(--dy3)) scale(0.3); }
      74.2%  { opacity: 0; transform: translate(var(--dx4),var(--dy4)) scale(0.3); }
      75%    { opacity: 0; transform: translate(var(--dx4),var(--dy4)) scale(0.3); }
      79%    { opacity: var(--peak); transform: translate(var(--dx4),var(--dy4)) scale(1.1); }
      93%    { opacity: var(--peak); transform: translate(var(--dx4),var(--dy4)) scale(1); }
      96%    { opacity: 0; transform: translate(var(--dx4),var(--dy4)) scale(0.3); }
      98.8%  { opacity: 0; transform: translate(var(--dx4),var(--dy4)) scale(0.3); }
      99.2%  { opacity: 0; transform: translate(0,0) scale(0.3); }
      100%   { opacity: 0; transform: translate(0,0) scale(0.3); }
    }
  `;
  return { css, html: `<div class="stars-container" aria-hidden="true">${starHTML}</div>` };
}

function renderBirthday(cfg, hass, hostEl) {
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const isHigh = (cfg.opacity_preset || "medium") === "high";

  const balloonCount = getParticleCount(cfg.count_preset || "medium", "balloons");
  const balloons = spreadSample(BALLOONS, balloonCount);
  const balloonHTML = balloons.map((b) => `
    <div class="bday-balloon-wrapper" style="left:${b.l}vw; animation-duration:${b.dur}s; animation-delay:${b.d}s; opacity:${opacity};">
      <div class="bday-balloon" style="width:${b.size}px; height:${(b.size * 1.6)}px; color:${b.color};">
        ${BALLOON_SVG}
      </div>
    </div>
  `).join("\n");

  const confettiColors = ["#ff4b4b", "#ffb703", "#8ecae6", "#06d6a0", "#f72585", "#ffd60a"];
  const confettiCount = getParticleCount(cfg.count_preset || "medium", "confetti");
  const confetti = getCachedRandomSet("birthday-confetti", confettiCount, () => ({
    l: (Math.random() * 100).toFixed(2),
    size: (Math.random() * 6 + 5).toFixed(1),
    dur: (Math.random() * 3 + 3).toFixed(2),
    delay: (Math.random() * -6).toFixed(2),
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    baseOp: (Math.random() * 0.3 + 0.6).toFixed(2),
  }));
  const confettiHtml = confetti.map((c) => {
    const op = isHigh ? Math.max(parseFloat(c.baseOp), 0.9) : (parseFloat(c.baseOp) * opacity);
    return `<div class="confetti-piece" style="left:${c.l}vw; width:${c.size}px; height:${(c.size * 0.6).toFixed(1)}px; background:${c.color}; animation-duration:${c.dur}s; animation-delay:${c.delay}s; opacity:${op.toFixed(2)};"></div>`;
  }).join("\n");

  const text = (cfg.birthday_text && cfg.birthday_text.trim()) || "Happy Birthday!";
  const safeText = escapeHtml(text);
  const flagColors = ["#ff4b4b", "#ffb703", "#8ecae6", "#06d6a0", "#f72585"];
  let flagsHtml = "";
  const flagCount = 16;
  for (let i = 0; i < flagCount; i++) {
    const left = (i / (flagCount - 1)) * 100;
    const color = flagColors[i % flagColors.length];
    flagsHtml += `<div class="banner-flag" style="left:${left}%; background:${color};"></div>`;
  }

  const css = `
    .bday-balloons-container, .confetti-container {
      position: fixed; top: 0; left: 50%; transform: translateX(-50%);
      width: 100vw; height: 100vh; pointer-events: none; z-index: 9999; overflow: hidden;
    }
    .bday-balloon-wrapper { position:absolute; bottom:-20%; animation:bday-balloon-rise linear infinite; will-change: transform; }
    .bday-balloon { display:flex; align-items:center; justify-content:center; }
    .bday-balloon svg { width:100%; height:100%; filter:drop-shadow(2px 4px 6px rgba(0,0,0,0.25)); }
    @keyframes bday-balloon-rise { 0% { transform: translateY(10vh); } 100% { transform: translateY(-120vh); } }

    .confetti-piece {
      position: absolute; top: -5%;
      animation-name: confetti-fall; animation-timing-function: linear; animation-iteration-count: infinite;
      will-change: transform;
    }
    @keyframes confetti-fall {
      0%   { transform: translateY(0) rotate(0deg); }
      100% { transform: translateY(115vh) rotate(540deg); }
    }

    .birthday-banner {
      position: fixed; top: 0; left: 0; width: 100vw; height: 60px;
      pointer-events: none; z-index: 9999;
    }
    .banner-string {
      position: absolute; top: 8px; left: 0; width: 100%; height: 1px;
      background: rgba(255,255,255,0.4);
    }
    .banner-flag {
      position: absolute; top: 8px; width: 16px; height: 20px;
      clip-path: polygon(0 0, 100% 0, 50% 100%);
      animation: banner-flag-sway 2.4s ease-in-out infinite;
      transform-origin: top center;
    }
    @keyframes banner-flag-sway {
      0%, 100% { transform: rotate(-4deg); }
      50% { transform: rotate(4deg); }
    }
    .banner-text {
      position: absolute; top: 26px; left: 50%; transform: translateX(-50%);
      font-size: 28px; font-weight: 800; color: #ffffff;
      text-shadow: 0 0 8px rgba(0,0,0,0.5), 2px 2px 0 #ff4b4b, -2px -2px 0 #06d6a0;
      font-family: system-ui, -apple-system, sans-serif;
      white-space: nowrap;
      animation: banner-bounce 2s ease-in-out infinite;
    }
    @keyframes banner-bounce {
      0%, 100% { transform: translateX(-50%) translateY(0); }
      50% { transform: translateX(-50%) translateY(-4px); }
    }
  `;
  // Welche Bestandteile angezeigt werden, wird im Editor angekreuzt.
  // Ohne gesetzten Wert ist alles an (wie bisher), damit bestehende
  // Konfigurationen unverändert aussehen.
  const showBalloons = cfg.birthday_balloons !== false;
  const showConfetti = cfg.birthday_confetti !== false;
  const showBanner = cfg.birthday_banner !== false;
  const showLights = cfg.birthday_lights !== false;

  const lightsPart = showLights ? renderLights(cfg, hass, hostEl) : null;

  const html = `
    ${showBalloons ? `<div class="bday-balloons-container" aria-hidden="true">${balloonHTML}</div>` : ""}
    ${showConfetti ? `<div class="confetti-container" aria-hidden="true">${confettiHtml}</div>` : ""}
    ${showBanner ? `
    <div class="birthday-banner" aria-hidden="true">
      <div class="banner-string"></div>
      ${flagsHtml}
      <div class="banner-text">${safeText}</div>
    </div>` : ""}
    ${lightsPart ? lightsPart.html : ""}
  `;
  return { css: css + (lightsPart ? "\n" + lightsPart.css : ""), html };
}

/* ============================== HALLOWEEN ============================== */

// 🎃 Kürbisse mit flackerndem Kerzenlicht. Stehen fest unten in den Ecken
// (links und rechts), damit sie nicht mitten im Bild stören. Das Flackern
// läuft endlos und unregelmäßig - pro Kürbis mit eigener Dauer, damit
// nicht alle im Gleichtakt zucken.
const PUMPKIN_SPOTS = [
  { side: "left", pos: 1, size: 66, flicker: 1.9, delay: -0.3 },
  { side: "right", pos: 1, size: 70, flicker: 2.3, delay: -1.1 },
  { side: "right", pos: 7, size: 50, flicker: 1.6, delay: -0.7 },
  { side: "left", pos: 6.5, size: 48, flicker: 2.1, delay: -1.6 },
  { side: "right", pos: 12, size: 40, flicker: 1.8, delay: -0.2 },
  { side: "left", pos: 11, size: 38, flicker: 2.5, delay: -0.9 },
  { side: "right", pos: 16, size: 34, flicker: 2.0, delay: -1.3 },
];

// Gesicht: große Dreiecks-Augen, Nase, breiter Mund mit zwei Zähnen.
// Wird zweimal gezeichnet - dunkel mit dickem Rand, darüber gelb leuchtend.
const PUMPKIN_FACE = `
  <path d="M13,27 L26,27 L19.5,14 Z"/>
  <path d="M38,27 L51,27 L44.5,14 Z"/>
  <path d="M29,34 L35,34 L32,29 Z"/>
  <path d="M10,36 Q32,60 54,36 Q47,41 43,39 L41,45 L37,40.5 Q32,41.5 27,40.5 L23,45 L21,39 Q17,41 10,36 Z"/>
`;

// Nur die Zeichnung (ohne <svg>-Rahmen) - so passt sie auch in den Zug-Waggon.
function pumpkinShapes(face = true) {
  return `
      <path d="M30,10 Q29,2 35,0 L37,3 Q33,5 34,10 Z" fill="#4a6b22" stroke="#2e4515" stroke-width="1.2"/>
      <path d="M36,4 Q44,0 47,6 Q41,5 37,8" fill="#5f8a2a"/>
      <ellipse cx="18" cy="33" rx="15" ry="20" fill="#e8741c" stroke="#a84a0c" stroke-width="1.6"/>
      <ellipse cx="46" cy="33" rx="15" ry="20" fill="#e8741c" stroke="#a84a0c" stroke-width="1.6"/>
      <ellipse cx="32" cy="33" rx="15" ry="22" fill="#f28c28" stroke="#a84a0c" stroke-width="1.6"/>
      ${face ? `
      <g class="pk-face-dark" fill="#2a0e00" stroke="#2a0e00" stroke-width="3" stroke-linejoin="round">${PUMPKIN_FACE}</g>
      <g class="pk-face-glow" fill="#ffd23f">${PUMPKIN_FACE}</g>` : ""}`;
}

function pumpkinSvg(face = true) {
  return `<svg viewBox="0 0 64 56" style="width:100%; height:100%; overflow:visible;">${pumpkinShapes(face)}</svg>`;
}

function renderPumpkins(cfg, hass, hostEl, finalOpacity) {
  const count = { low: 3, medium: 5, high: 7 }[cfg.count_preset || "medium"] || 5;
  const spots = PUMPKIN_SPOTS.slice(0, count);
  const css = `
    .pumpkin-container {
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      pointer-events: none; z-index: 9999; overflow: hidden;
    }
    .pumpkin { position: absolute; bottom: 0.5vh; }
    .pk-glow {
      position: absolute; left: 10%; top: 25%; width: 80%; height: 70%;
      border-radius: 50%;
      background: radial-gradient(closest-side, rgba(255,200,70,0.35), rgba(255,140,20,0) 100%);
      animation-name: pk-glow-flicker; animation-iteration-count: infinite; animation-timing-function: steps(1);
    }
    .pk-face-glow {
      animation-name: pk-flicker; animation-iteration-count: infinite; animation-timing-function: steps(1);
    }
    @keyframes pk-flicker {
      0% { opacity: 1; } 11% { opacity: 0.72; } 17% { opacity: 0.95; } 29% { opacity: 0.6; }
      36% { opacity: 1; } 52% { opacity: 0.82; } 58% { opacity: 0.55; } 64% { opacity: 0.9; }
      79% { opacity: 0.7; } 86% { opacity: 1; } 93% { opacity: 0.78; } 100% { opacity: 1; }
    }
    @keyframes pk-glow-flicker {
      0% { opacity: 0.9; } 11% { opacity: 0.5; } 17% { opacity: 0.8; } 29% { opacity: 0.35; }
      36% { opacity: 0.95; } 52% { opacity: 0.6; } 58% { opacity: 0.3; } 64% { opacity: 0.75; }
      79% { opacity: 0.45; } 86% { opacity: 1; } 93% { opacity: 0.55; } 100% { opacity: 0.9; }
    }
  `;
  const html = `
    <div class="pumpkin-container" style="opacity:${finalOpacity};" aria-hidden="true">
      ${spots.map((p) => `
        <div class="pumpkin" style="${p.side}:${p.pos}vw; width:${p.size}px; height:${Math.round(p.size * 0.875)}px;">
          <div style="position:absolute; inset:0;">
            ${pumpkinSvg(true).replace('class="pk-face-glow"', `class="pk-face-glow" style="animation-duration:${p.flicker}s; animation-delay:${p.delay}s;"`)}
          </div>
          <div class="pk-glow" style="animation-duration:${p.flicker}s; animation-delay:${p.delay}s;"></div>
        </div>`).join("")}
    </div>`;
  return { css, html };
}

// 👻 Gespenst: schwebt periodisch von links nach rechts durchs Bild.
// Etwa in der Mitte bleibt es kurz stehen, dreht sich um und ruft "Buh!".
// Startzeit wie bei allen Figuren aus der absoluten Uhrzeit (übersteht
// jedes Neu-Rendern), alle Zwischenschritte als Anteil der Flugdauer.
function renderGhost(cfg, hass, hostEl, finalOpacity) {
  const interval = { low: 180, medium: 120, high: 70 }[cfg.count_preset || "medium"] || 120;
  const f = Math.min(30, (PERIODIC_FLIGHT_SEC.ghost / interval) * 100);
  const delaySec = periodicDelaySec(interval, "ghost");
  const at = (frac) => (f * frac).toFixed(3);

  const css = `
    .ghost-container {
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      pointer-events: none; z-index: 9999; overflow: hidden;
    }
    .ghost-box {
      position: absolute; top: 34vh; left: -110px; width: 72px; height: 86px;
      animation: ghost-float ${interval}s linear infinite; animation-delay: ${delaySec}s; will-change: transform;
    }
    @keyframes ghost-float {
      0% { transform: translate(0, 0); }
      ${at(0.22)}% { transform: translate(calc((100vw + 220px) * 0.22), -5vh); }
      ${at(0.45)}% { transform: translate(calc((100vw + 220px) * 0.45), 1vh); }
      ${at(0.62)}% { transform: translate(calc((100vw + 220px) * 0.45), 1vh); }
      ${at(0.8)}% { transform: translate(calc((100vw + 220px) * 0.75), -4vh); }
      ${at(1)}% { transform: translate(calc(100vw + 220px), 0); }
      100% { transform: translate(calc(100vw + 220px), 0); }
    }
    .ghost-bob { width: 100%; height: 100%; animation: ghost-bob 2.6s ease-in-out infinite alternate; }
    @keyframes ghost-bob { 0% { transform: translateY(0); } 100% { transform: translateY(-9px); } }
    .ghost-turn {
      width: 100%; height: 100%;
      animation: ghost-turn ${interval}s linear infinite; animation-delay: ${delaySec}s;
    }
    @keyframes ghost-turn {
      0%, ${at(0.47)}% { transform: scaleX(1); }
      ${at(0.49)}%, ${at(0.59)}% { transform: scaleX(-1); }
      ${at(0.61)}%, 100% { transform: scaleX(1); }
    }
    .ghost-boo {
      position: absolute; left: -58px; top: -30px; width: 66px; height: 40px;
      transform-origin: 85% 100%;
      animation: ghost-boo ${interval}s linear infinite; animation-delay: ${delaySec}s;
    }
    @keyframes ghost-boo {
      0%, ${at(0.49)}% { opacity: 0; transform: scale(0.3); }
      ${at(0.51)}% { opacity: 1; transform: scale(1.12); }
      ${at(0.53)}% { opacity: 1; transform: scale(1); }
      ${at(0.58)}% { opacity: 1; transform: scale(1); }
      ${at(0.6)}%, 100% { opacity: 0; transform: scale(0.3); }
    }
  `;
  const html = `
    <div class="ghost-container" style="opacity:${finalOpacity};" aria-hidden="true">
      <div class="ghost-box">
        <div class="ghost-bob">
          <div class="ghost-turn">
            <svg viewBox="0 0 60 72" style="width:100%; height:100%; overflow:visible;">
              <path d="M8,66 L8,30 Q8,4 30,4 Q52,4 52,30 L52,66 Q47,60 42,66 Q37,72 32,66 Q27,60 22,66 Q17,72 12,66 Q10,63 8,66 Z"
                    fill="#9aa3b5" opacity="0.35" transform="translate(2,3)"/>
              <path d="M8,66 L8,30 Q8,4 30,4 Q52,4 52,30 L52,66 Q47,60 42,66 Q37,72 32,66 Q27,60 22,66 Q17,72 12,66 Q10,63 8,66 Z"
                    fill="#f7f8ff" stroke="#9aa3b5" stroke-width="1.6"/>
              <path d="M8,36 Q0,40 2,48 Q6,44 9,44" fill="#f7f8ff" stroke="#9aa3b5" stroke-width="1.4"/>
              <path d="M52,36 Q60,38 59,46 Q55,43 51,44" fill="#f7f8ff" stroke="#9aa3b5" stroke-width="1.4"/>
              <ellipse cx="25" cy="26" rx="4" ry="5.5" fill="#1a1a2a"/>
              <ellipse cx="38" cy="26" rx="4" ry="5.5" fill="#1a1a2a"/>
              <circle cx="26.3" cy="24" r="1.3" fill="#ffffff"/>
              <circle cx="39.3" cy="24" r="1.3" fill="#ffffff"/>
              <ellipse cx="32" cy="40" rx="4.5" ry="6" fill="#1a1a2a"/>
              <ellipse cx="18" cy="34" rx="3.5" ry="2" fill="#ffb3c6" opacity="0.7"/>
              <ellipse cx="45" cy="34" rx="3.5" ry="2" fill="#ffb3c6" opacity="0.7"/>
            </svg>
          </div>
          <div class="ghost-boo">
            <svg viewBox="0 0 66 40" style="width:100%; height:100%; overflow:visible;">
              <path d="M6,4 Q2,4 2,8 L2,26 Q2,30 6,30 L44,30 L56,38 L52,30 L60,30 Q64,30 64,26 L64,8 Q64,4 60,4 Z"
                    fill="#ffffff" stroke="#1a1a2a" stroke-width="1.8"/>
              <text x="33" y="23" font-size="17" font-family="Georgia, serif" font-weight="bold" fill="#1a1a2a" text-anchor="middle">Buh!</text>
            </svg>
          </div>
        </div>
      </div>
    </div>`;
  return { css, html };
}

// 🧙 Hexe auf dem Besen: fliegt periodisch von links nach rechts oben
// durchs Bild (wie der Weihnachtsmann, nur andersrum). Etwa jeder dritte
// Flug: der Hut weht ihr vom Kopf und trudelt nach unten.
function renderWitch(cfg, hass, hostEl, finalOpacity) {
  const interval = { low: 340, medium: 210, high: 100 }[cfg.count_preset || "medium"] || 210;
  const f = Math.min(30, (PERIODIC_FLIGHT_SEC.witch / interval) * 100);
  const delaySec = periodicDelaySec(interval, "witch");
  const losesHat = periodicCycle(interval, "witch") % 3 === 0;
  const at = (frac) => (f * frac).toFixed(3);

  const css = `
    .witch-container {
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      pointer-events: none; z-index: 9999; overflow: hidden;
    }
    .witch-box {
      position: absolute; top: 13vh; left: -200px; width: 170px; height: 90px;
      animation: witch-fly ${interval}s linear infinite; animation-delay: ${delaySec}s; will-change: transform;
    }
    @keyframes witch-fly {
      0% { transform: translate(0, 4vh) rotate(-4deg); }
      ${at(0.25)}% { transform: translate(calc((100vw + 380px) * 0.25), -2vh) rotate(-8deg); }
      ${at(0.5)}% { transform: translate(calc((100vw + 380px) * 0.5), 3vh) rotate(-2deg); }
      ${at(0.75)}% { transform: translate(calc((100vw + 380px) * 0.75), -3vh) rotate(-9deg); }
      ${at(1)}% { transform: translate(calc(100vw + 380px), 0) rotate(-5deg); }
      100% { transform: translate(calc(100vw + 380px), 0) rotate(-5deg); }
    }
    .witch-cape { animation: witch-cape 0.5s ease-in-out infinite alternate; transform-box: fill-box; transform-origin: 100% 0%; }
    @keyframes witch-cape { 0% { transform: rotate(0deg) scaleX(1); } 100% { transform: rotate(6deg) scaleX(0.9); } }
    ${losesHat ? `
    .witch-hat {
      transform-box: fill-box; transform-origin: center;
      animation: witch-hat-fall ${interval}s linear infinite; animation-delay: ${delaySec}s;
    }
    @keyframes witch-hat-fall {
      0%, ${at(0.4)}% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
      ${at(0.5)}% { transform: translate(-60px, 10px) rotate(-70deg); opacity: 1; }
      ${at(0.72)}% { transform: translate(-150px, 120px) rotate(-260deg); opacity: 1; }
      ${at(0.8)}% { transform: translate(-190px, 170px) rotate(-320deg); opacity: 0; }
      100% { transform: translate(-190px, 170px) rotate(-320deg); opacity: 0; }
    }` : ""}
  `;
  const html = `
    <div class="witch-container" style="opacity:${finalOpacity};" aria-hidden="true">
      <div class="witch-box">
        <svg viewBox="0 0 170 90" style="width:100%; height:100%; overflow:visible;">
          <!-- Besen -->
          <path d="M28,70 L160,52" stroke="#7a4a22" stroke-width="4" stroke-linecap="round"/>
          <path d="M30,68 Q12,62 0,58 Q4,70 2,82 Q14,78 30,74 Z" fill="#e0b450" stroke="#9a7420" stroke-width="1.5"/>
          <path d="M28,68 L6,62 M28,71 L4,70 M29,73 L6,78" stroke="#9a7420" stroke-width="1.2"/>
          <rect x="27" y="66" width="6" height="9" rx="1.5" fill="#8a2a8a" transform="rotate(-8 30 70)"/>
          <!-- Umhang -->
          <path class="witch-cape" d="M88,34 Q60,40 46,58 Q62,54 70,60 Q78,52 92,52 Z" fill="#6a2a8a" stroke="#3a1050" stroke-width="1.4"/>
          <!-- Kleid / Körper -->
          <path d="M84,30 Q76,48 80,62 L108,60 Q106,44 98,30 Z" fill="#1f1a2a" stroke="#000" stroke-width="1.4"/>
          <!-- Beine & Stiefel -->
          <path d="M98,60 L112,70" stroke="#5a2a7a" stroke-width="4" stroke-linecap="round"/>
          <path d="M110,66 L120,70 L118,74 L108,72 Z" fill="#1a1a1a"/>
          <!-- Arme zum Besen -->
          <path d="M96,38 Q110,46 120,58" stroke="#1f1a2a" stroke-width="5" stroke-linecap="round" fill="none"/>
          <circle cx="121" cy="58" r="3.5" fill="#7cc04a" stroke="#3f7a1f" stroke-width="1"/>
          <!-- Kopf -->
          <path d="M84,22 Q78,30 80,40 M86,24 Q82,32 84,40" stroke="#ff8a1e" stroke-width="2.4" fill="none" stroke-linecap="round"/>
          <circle cx="92" cy="22" r="9.5" fill="#7cc04a" stroke="#3f7a1f" stroke-width="1.4"/>
          <path d="M100,22 L106,25 L100,26 Z" fill="#7cc04a" stroke="#3f7a1f" stroke-width="1"/>
          <circle cx="96" cy="20" r="1.5" fill="#1a1a1a"/>
          <path d="M93,27 Q96,29 99,27" stroke="#1a1a1a" stroke-width="1.2" fill="none" stroke-linecap="round"/>
          <!-- Hut -->
          <g class="witch-hat">
            <ellipse cx="91" cy="14" rx="15" ry="3.5" fill="#1f1a2a" stroke="#000" stroke-width="1.2"/>
            <path d="M82,14 L88,-10 Q90,-16 80,-20 Q94,-18 96,-8 L100,14 Z" fill="#1f1a2a" stroke="#000" stroke-width="1.2"/>
            <path d="M83.5,10 L99,10 L99.5,13 L83,13 Z" fill="#8a2a8a"/>
            <rect x="89" y="9.5" width="4" height="4" fill="#ffd23f"/>
          </g>
        </svg>
      </div>
    </div>`;
  return { css, html };
}

// 🕸️ Spinnweben in beiden oberen Ecken, an der linken hängt eine kleine
// Spinne, die sich gemütlich auf und ab bewegt.
function renderHalloweenWebs(cfg, hass, hostEl, finalOpacity) {
  const webColor = resolveDynamicColor(cfg.color, hass, "#000000", "#ffffff", hostEl);
  const webSvg = buildCornerWebSvg(6, 4);
  const css = `
    .hw-web-container {
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      pointer-events: none; z-index: 9998; overflow: hidden; color: ${webColor};
    }
    .hw-web { position: absolute; top: 0; width: 150px; height: 150px; opacity: 0.6; }
    .hw-web.right { right: 0; }
    .hw-web.left { left: 0; transform: scaleX(-1); }
    .hw-spider {
      position: absolute; top: 0; left: 96px; width: 16px; height: 16px;
      animation: hw-spider-drop 9s ease-in-out infinite; will-change: transform;
    }
    .hw-thread { position: absolute; bottom: 50%; left: 50%; width: 1px; height: 400px; background: ${webColor}; opacity: 0.6; }
    @keyframes hw-spider-drop {
      0%, 100% { transform: translateY(40px); }
      45%, 60% { transform: translateY(120px); }
    }
  `;
  const html = `
    <div class="hw-web-container" style="opacity:${finalOpacity};" aria-hidden="true">
      <svg class="hw-web right" viewBox="0 0 100 100">${webSvg}</svg>
      <svg class="hw-web left" viewBox="0 0 100 100">${webSvg}</svg>
      <div class="hw-spider">
        <div class="hw-thread"></div>
        <svg viewBox="0 0 40 40" style="position:absolute; inset:0; width:100%; height:100%; overflow:visible;">
          <path d="M14,16 Q6,10 2,4 M14,20 Q5,20 0,18 M14,24 Q6,28 2,34 M26,16 Q34,10 38,4 M26,20 Q35,20 40,18 M26,24 Q34,28 38,34"
                stroke="#111" stroke-width="2.6" fill="none" stroke-linecap="round"/>
          <ellipse cx="20" cy="22" rx="8" ry="9" fill="#111"/>
          <circle cx="20" cy="12" r="5.5" fill="#111"/>
          <circle cx="18" cy="11" r="1.4" fill="#ff7a1a"/>
          <circle cx="22" cy="11" r="1.4" fill="#ff7a1a"/>
        </svg>
      </div>
    </div>`;
  return { css, html };
}

// 🎃 Sammel-Effekt "Halloween": Kürbisse, Gespenst, Hexe, Spinnweben und
// Fledermäuse - jeder Teil im Editor einzeln an- und abwählbar.
function renderHalloween(cfg, hass, hostEl) {
  const opacity = getOpacityValue(cfg.opacity_preset || "medium");
  const isHigh = (cfg.opacity_preset || "medium") === "high";
  const finalOpacity = isHigh ? 1 : opacity;
  const parts = [];
  if (cfg.halloween_webs !== false) parts.push(renderHalloweenWebs(cfg, hass, hostEl, finalOpacity));
  if (cfg.halloween_bats !== false) parts.push(renderBats(cfg, hass, hostEl));
  if (cfg.halloween_witch !== false) parts.push(renderWitch(cfg, hass, hostEl, finalOpacity));
  if (cfg.halloween_ghost !== false) parts.push(renderGhost(cfg, hass, hostEl, finalOpacity));
  if (cfg.halloween_pumpkins !== false) parts.push(renderPumpkins(cfg, hass, hostEl, finalOpacity));
  return {
    css: parts.map((p) => p.css).join("\n"),
    html: parts.map((p) => p.html).join("\n"),
  };
}

// Sammel-Effekt "Nachthimmel": bündelt Sternschnuppen, Wunschstern und
// Komet. Welche Bestandteile laufen, wird im Editor angekreuzt. Der
// Sternenhimmel selbst gehört bewusst NICHT dazu, der kommt weiterhin
// automatisch über die Wetter-Automatik bei klarer Nacht.
function renderNightSky(cfg, hass, hostEl) {
  const parts = [];
  if (cfg.night_shooting_stars !== false) parts.push(renderShootingStars(cfg, hass, hostEl));
  if (cfg.night_wishstar !== false) parts.push(renderWishStar(cfg, hass, hostEl));
  if (cfg.night_comet !== false) parts.push(renderComet(cfg, hass, hostEl));
  return {
    css: parts.map((p) => p.css).join("\n"),
    html: parts.map((p) => p.html).join("\n"),
  };
}

// Sammel-Effekt "Eule & Vogelhäuschen": beide teilen sich denselben Platz
// oben links und lösen sich nach Sonnenstand ab - tagsüber das
// Vogelhäuschen, nachts die Eule. Ohne sun.sun-Entity wird das
// Vogelhäuschen gezeigt.
function renderOwlBirdhouse(cfg, hass, hostEl) {
  const sunState = hass?.states?.["sun.sun"]?.state;
  const isNight = sunState === "below_horizon";
  return isNight ? renderOwl(cfg, hass, hostEl) : renderBirdhouse(cfg, hass, hostEl);
}

const RENDERERS = {
  rain: renderRain,
  snow: renderSnow,
  leaves: renderLeaves,
  lightning: renderLightning,
  fog: renderFog,
  hail: renderHail,
  storm: renderStorm,
  clouds: renderClouds,
  stars: renderStars,
  moon: renderMoon,
  sun: renderSun,
  night_sky: renderNightSky,
  owl_birdhouse: renderOwlBirdhouse,
  santa: renderSanta,
  spider: renderSpider,
  dog: renderDog,
  train: renderTrain,
  bee: renderBee,
  birthday: renderBirthday,
  halloween: renderHalloween,
};

/* ============================== HAUPT-KARTE ============================== */

class AmbientOverlayCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._onThemeChange = this._onThemeChange.bind(this);
    this._onVisibilityChange = this._onVisibilityChange.bind(this);
    this._snowLevel = 0;
    this._snowTimer = null;
    this._portalHost = null;
    this._portalShadow = null;
    this._visibilityPollTimer = null;
    this._periodicStartTimes = {};
    this._wishstarTimer = null;
    this._wishstarPos = null;
    this._starsReshuffleTimer = null;
    // Verbesserung: statt einen Effekt beim Beenden sofort komplett aus
    // dem DOM zu entfernen, merkt sich diese Map, welche Effekte gerade
    // "aktiv" sind und welche gerade "ausblenden" (mit Startzeitpunkt des
    // Ausblendens). So kann jeder Effekt sanft verblassen statt abrupt zu
    // verschwinden - siehe _updateEffectLayers() weiter unten.
    this._effectLayers = new Map();
    this._fadeRemovalTimers = new Map();
  }

  _ensurePortal() {
    if (this._portalHost) return;
    this._portalHost = document.createElement("div");
    // Verbesserung (Bugfix): "position: fixed" allein reicht nicht immer -
    // manche Custom Cards (z. B. Swipe-/Karussell-Karten mit Fade-Übergang)
    // nutzen selbst einen hohen z-index für ihre eigenen Übergangs-
    // Animationen und können dadurch über unseren Effekten liegen. Ein
    // extrem hoher, praktisch nie überbotener z-index-Wert stellt sicher,
    // dass unser Effekt-Container IMMER ganz oben liegt, egal was sonst
    // noch auf der Seite ist.
    // Verbesserung: läuft die Dampflok als EIGENE Karte gleichzeitig mit
    // einem anderen Effekt, der ebenfalls unten am
    // Rand sitzt), sollen sich beide nicht zufällig überdecken je nachdem
    // welche Karte zuerst geladen wurde - die Lok bekommt deshalb einen
    // minimal höheren Wert und fährt dadurch IMMER sichtbar davor her.
    this._portalHost.style.cssText = `position:fixed; top:0; left:0; width:0; height:0; pointer-events:none;`;
    this._applyPortalZIndex();
    this._portalShadow = this._portalHost.attachShadow({ mode: "open" });
    document.body.appendChild(this._portalHost);
  }

  // Muss bei JEDEM Rendern neu gesetzt werden, nicht nur beim Anlegen:
  // wird eine bestehende Karte im Editor nachträglich auf die Dampflok
  // umgestellt (oder umgekehrt), bliebe der Wert sonst auf dem Stand von
  // damals stehen und die Lok läge plötzlich hinter einem anderen Effekt.
  _applyPortalZIndex() {
    if (!this._portalHost) return;
    this._portalHost.style.zIndex = this._config?.event === "train" ? "2147483647" : "2147483646";
  }

  _syncPortalVisibility() {
    if (!this._portalHost) return;

    const checkIsVisible = () => {
      if (!this.isConnected) return false;

      // Traversierung durch das Root-Dom sowie durch alle Shadow DOM Grenzen hinweg
      let node = this;
      while (node) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const style = window.getComputedStyle(node);
          if (style.display === "none" || style.visibility === "hidden" || style.opacity === "0") {
            return false;
          }
        }
        if (node.parentElement) {
          node = node.parentElement;
        } else if (node.parentNode && node.parentNode.host) {
          node = node.parentNode.host;
        } else {
          node = null;
        }
      }

      // Prüfen, ob die Karte eine echte Position im Layout hat
      const rect = this.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0 && this.offsetParent === null) {
        // Falls die Karte durch HA als Container ausgeblendet wird
        const parent = this.parentElement || (this.getRootNode() && this.getRootNode().host);
        if (parent) {
          const pStyle = window.getComputedStyle(parent);
          if (pStyle.display === "none" || pStyle.visibility === "hidden") return false;
        }
      }

      return true;
    };

    const isVisible = checkIsVisible() && !document.hidden;
    this._portalHost.style.display = isVisible ? "" : "none";
  }

  connectedCallback() {
    window.addEventListener("set-theme", this._onThemeChange);
    window.addEventListener("resize", this._onThemeChange);
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", this._onThemeChange);
    document.addEventListener("visibilitychange", this._onVisibilityChange);

    this._ensurePortal();
    this._syncPortalVisibility();
    this._visibilityPollTimer = setInterval(() => this._syncPortalVisibility(), 700);
    this._render();
  }

  disconnectedCallback() {
    window.removeEventListener("set-theme", this._onThemeChange);
    window.removeEventListener("resize", this._onThemeChange);
    window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", this._onThemeChange);
    document.removeEventListener("visibilitychange", this._onVisibilityChange);
    if (this._snowTimer) {
      clearInterval(this._snowTimer);
      this._snowTimer = null;
    }
    if (this._wishstarTimer) {
      clearInterval(this._wishstarTimer);
      this._wishstarTimer = null;
    }
    if (this._starsReshuffleTimer) {
      clearInterval(this._starsReshuffleTimer);
      this._starsReshuffleTimer = null;
    }
    for (const timer of this._fadeRemovalTimers.values()) {
      clearTimeout(timer);
    }
    this._fadeRemovalTimers.clear();
    if (this._visibilityPollTimer) {
      clearInterval(this._visibilityPollTimer);
      this._visibilityPollTimer = null;
    }
    if (this._portalHost && this._portalHost.parentNode) {
      this._portalHost.parentNode.removeChild(this._portalHost);
    }
    this._portalHost = null;
    this._portalShadow = null;
  }

  _onThemeChange() {
    this._render();
  }

  _onVisibilityChange() {
    const root = this._portalShadow;
    if (!root) return;
    const hidden = document.hidden;
    let pauseStyle = root.getElementById("pause-style");
    if (!pauseStyle) {
      pauseStyle = document.createElement("style");
      pauseStyle.id = "pause-style";
      root.appendChild(pauseStyle);
    }
    pauseStyle.textContent = hidden ? "* { animation-play-state: paused !important; }" : "";
  }

  setConfig(config) {
    this._config = {
      event: "off",
      count_preset: "medium",
      opacity_preset: "medium",
      color: "auto",
      color_mode: "auto",
      leaf_colors: ["#c9a227", "#a83232", "#d9812c"],
      weather_entity: "",
      birthday_text: "Happy Birthday!",
      birthday_balloons: true,
      birthday_confetti: true,
      birthday_banner: true,
      birthday_lights: true,
      night_shooting_stars: true,
      night_wishstar: true,
      night_comet: true,
      halloween_pumpkins: true,
      halloween_ghost: true,
      halloween_witch: true,
      halloween_webs: true,
      halloween_bats: true,
      halloween_sensor: "",
      santa_sensor: "",
      dinner_sensor: "",
      person_entities: "",
      custom_wagon_text: "",
      custom_wagon_entity: "",
      ...config,
    };
    this._render();
  }

  set hass(hass) {
    const weatherEntity = this._config?.weather_entity;
    const oldWeatherState = weatherEntity ? this._hass?.states?.[weatherEntity]?.state : undefined;

    // Zusätzlich auf Änderungen bei santa_sensor/dinner_sensor prüfen -
    // sonst würde die Karte nie neu rendern, wenn sich NUR einer von
    // diesen beiden ändert (z. B. Abendessen-Schalter an/aus), ohne dass
    // sich gleichzeitig auch der Wetter-Zustand ändert.
    const santaEntity = this._config?.santa_sensor;
    const oldSantaState = santaEntity ? this._hass?.states?.[santaEntity]?.state : undefined;
    const dinnerEntity = this._config?.dinner_sensor;
    const oldDinnerState = dinnerEntity ? this._hass?.states?.[dinnerEntity]?.state : undefined;
    // Zusätzlich auf sun.sun prüfen - sonst erscheint der Mond (bzw. die
    // Sonne) nicht direkt bei Sonnenauf-/untergang, sondern erst beim
    // nächsten Neu-Rendern aus einem ganz anderen Grund (z. B. der
    // nächsten Wetter-Aktualisierung) - man müsste sonst manuell die
    // Seite neu laden, damit es rechtzeitig auftaucht.
    const oldSunState = this._hass?.states?.["sun.sun"]?.state;

    // Zusätzlich auf Änderungen bei ALLEN konfigurierten person_entities
    // prüfen - sonst würde der Zug nicht mitbekommen, wenn jemand nach
    // Hause kommt oder geht, solange nicht zufällig gleichzeitig auch
    // Wetter/Sensoren sich ändern.
    const personEntitiesForWatch = typeof this._config?.person_entities === "string"
      ? this._config.person_entities.split(",").map((s) => s.trim()).filter(Boolean)
      : [];
    const oldPersonStates = personEntitiesForWatch.map((eid) => this._hass?.states?.[eid]?.state);

    // Ebenso den Gäste-Sensor überwachen - sonst würden neu eingetragene
    // Namen erst beim nächsten Rendern aus einem anderen Grund auftauchen.
    const guestEntity = this._config?.custom_wagon_entity;
    const oldGuestState = guestEntity ? this._hass?.states?.[guestEntity]?.state : undefined;

    // 🎃 Halloween-Look: Schalter UND Datum (31.10.) beobachten. Das Datum
    // wird bei jedem Update aus Home Assistant neu geprüft - so wechselt
    // der Look um Mitternacht von selbst, ohne die Seite neu zu laden.
    const oldHalloween = this._lastHalloween;

    this._hass = hass;
    const newWeatherState = weatherEntity ? hass?.states?.[weatherEntity]?.state : undefined;
    const newSantaState = santaEntity ? hass?.states?.[santaEntity]?.state : undefined;
    const newDinnerState = dinnerEntity ? hass?.states?.[dinnerEntity]?.state : undefined;
    const newSunState = hass?.states?.["sun.sun"]?.state;
    const newGuestState = guestEntity ? hass?.states?.[guestEntity]?.state : undefined;
    const newPersonStates = personEntitiesForWatch.map((eid) => hass?.states?.[eid]?.state);
    const personsChanged = oldPersonStates.some((s, i) => s !== newPersonStates[i]);
    const newHalloween = isHalloweenTime(this._config, hass);
    this._lastHalloween = newHalloween;
    const halloweenChanged = oldHalloween !== undefined && oldHalloween !== newHalloween;

    const weatherChanged = oldWeatherState !== newWeatherState;
    const sensorChanged = oldSantaState !== newSantaState || oldDinnerState !== newDinnerState || oldSunState !== newSunState || oldGuestState !== newGuestState || personsChanged || halloweenChanged;

    // Sanftes Ausblenden nur bei einer ECHTEN automatischen Wetteränderung
    // (nicht beim allerersten Rendern - da gibt's ja noch nichts, von dem
    // aus geblendet werden könnte).
    const isRealWeatherChange = this._hasRenderedOnce && weatherChanged;

    if (!this._hasRenderedOnce || weatherChanged || sensorChanged) {
      this._render(isRealWeatherChange);
      this._hasRenderedOnce = true;
    }
    this._syncPortalVisibility();
  }

  _resolveEvents() {
    const cfg = this._config || {};
    if (cfg.event === "weather_auto") {
      let events;
      if (cfg.weather_entity && this._hass) {
        const entityState = this._hass.states?.[cfg.weather_entity];
        events = entityState ? mapWeatherStateToEvents(entityState.state) : ["off"];
      } else {
        events = ["off"];
      }
      // Mond zusätzlich einblenden, sobald die Sonne untergegangen ist -
      // unabhängig vom eigentlichen Wetter-Zustand (also auch bei
      // bewölkter Nacht, nicht nur bei "clear-night"). Nutzt die in jeder
      // Home-Assistant-Installation vorhandene eingebaute sun.sun-Entity,
      // kein zusätzlicher Sensor oder Konfiguration nötig.
      const sunState = this._hass?.states?.["sun.sun"]?.state;
      if (sunState === "below_horizon") {
        // Die Sonne darf nachts nicht stehenbleiben: manche Wetter-
        // Integrationen melden den TAGES-Zustand und bleiben auch nach
        // Sonnenuntergang auf "sunny". Ohne diese Zeile lägen Sonne und
        // Mond exakt übereinander (beide sitzen oben rechts) und ergäben
        // ein seltsames Mischbild.
        events = events.filter((e) => e !== "off" && e !== "sun");
        if (!events.includes("moon")) events.push("moon");
      }
      return events.length > 0 ? events : ["off"];
    }
    return [cfg.event || "off"];
  }

  getCardSize() { return 0; }

  static getStubConfig() {
    // Muss ein im Dropdown WAEHLBARER Effekt sein (siehe EVENT_CAPABILITIES),
    // sonst steht eine frisch hinzugefuegte Karte ohne Auswahl und ohne
    // Regler da. "night_sky" laeuft sofort, ganz ohne weitere Einstellungen.
    return { event: "night_sky", count_preset: "medium", opacity_preset: "medium", color: "auto" };
  }

  static getConfigElement() {
    return document.createElement("ambient-overlay-card-editor");
  }

  _updateSnowAccumulation(events) {
    const snowActive = events.includes("snow");
    if (snowActive) {
      if (!this._snowTimer) {
        this._snowTimer = setInterval(() => {
          this._snowLevel = Math.min(100, this._snowLevel + 1);
          this._render();
        }, 15000);
      }
    } else {
      if (this._snowTimer) {
        clearInterval(this._snowTimer);
        this._snowTimer = null;
      }
      this._snowLevel = 0;
    }
  }

  _updateWishstar(events) {
    // Der Wunschstern steckt jetzt im Sammel-Effekt "Nachthimmel" und
    // läuft nur, wenn er dort auch angehakt ist.
    const wishstarActive = events.includes("night_sky") && this._config?.night_wishstar !== false;
    if (wishstarActive) {
      if (!this._wishstarTimer) {
        const cycle = { low: 12000, medium: 8000, high: 5000 }[this._config?.opacity_preset || "medium"] || 8000;
        const regen = () => {
          this._wishstarPos = {
            top: Math.random() * 60 + 8,
            left: Math.random() * 80 + 10,
          };
          this._render();
        };
        this._wishstarTimer = setInterval(regen, cycle);
        regen();
      }
    } else {
      if (this._wishstarTimer) {
        clearInterval(this._wishstarTimer);
        this._wishstarTimer = null;
      }
      this._wishstarPos = null;
    }
  }

  // Verbesserung (Ressourcen): statt jede Sekunde zu prüfen, welcher Stern
  // "fällig" ist, mischt dieser Timer alle 4 Minuten AUF EINMAL die
  // Positionen aller Sterne komplett neu (per Cache-Löschung + Neu-Rendern).
  // Zwischen den Reshuffles läuft alles rein über CSS, ganz ohne
  // JavaScript-Beteiligung - das spart 239 von 240 Sekunden komplett den
  // Timer-Aufwand, verglichen mit einer Sekunden-Prüfung.
  _updateStarsReshuffle(events) {
    if (events.includes("stars")) {
      if (!this._starsReshuffleTimer) {
        this._starsReshuffleTimer = setInterval(() => {
          const count = getParticleCount(this._config?.count_preset || "medium", "stars");
          _randomCache.delete(`stars:${count}`);
          this._render();
        }, 240000);
      }
    } else {
      if (this._starsReshuffleTimer) {
        clearInterval(this._starsReshuffleTimer);
        this._starsReshuffleTimer = null;
      }
    }
  }

  // Verbesserung: sorgt dafür, dass ein Effekt beim Beenden nicht sofort
  // verschwindet, sondern erst als "ausblendend" markiert und nach der
  // Fade-Dauer (FADE_DURATION_MS) endgültig entfernt wird. Wird ein Effekt
  // während des Ausblendens wieder aktiviert (z. B. schnell wechselndes
  // Wetter), springt er sofort zurück auf voll sichtbar.
  _updateEffectLayers(events, allowFade) {
    for (const ev of events) {
      const existing = this._effectLayers.get(ev);
      if (!existing || existing.fadeStartedAt !== null) {
        this._effectLayers.set(ev, { fadeStartedAt: null });
      }
    }
    for (const [key, state] of this._effectLayers.entries()) {
      if (!events.includes(key) && state.fadeStartedAt === null) {
        if (!allowFade) {
          // Manueller Wechsel (Editor-Dropdown) oder interner Timer -
          // sofort entfernen, kein Ausblenden. Sanftes Ausblenden gibt's
          // nur, wenn sich das Wetter selbstständig ändert (siehe set
          // hass() weiter oben) - dort schaut man ja nicht zwangsläufig
          // gerade auf den Bildschirm.
          this._effectLayers.delete(key);
          if (this._fadeRemovalTimers.has(key)) {
            clearTimeout(this._fadeRemovalTimers.get(key));
            this._fadeRemovalTimers.delete(key);
          }
          continue;
        }
        state.fadeStartedAt = Date.now();
        if (this._fadeRemovalTimers.has(key)) {
          clearTimeout(this._fadeRemovalTimers.get(key));
        }
        const timer = setTimeout(() => {
          const cur = this._effectLayers.get(key);
          if (cur && cur.fadeStartedAt !== null) {
            this._effectLayers.delete(key);
            this._fadeRemovalTimers.delete(key);
            this._render();
          }
        }, FADE_DURATION_MS + 150);
        this._fadeRemovalTimers.set(key, timer);
      }
    }
  }

  _render(allowFade = false) {
    if (!this._config) return;
    if (!this._portalShadow) return;
    this._applyPortalZIndex();

    const events = this._resolveEvents();
    this._updateSnowAccumulation(events);

    this._updateWishstar(events);

    this._updateStarsReshuffle(events);
    this._updateEffectLayers(events, allowFade);

    // Verbesserung: Startzeiten periodischer Effekte (Hund, Weihnachtsmann,
    // Komet) erst aufräumen, wenn der Effekt WIRKLICH komplett weg ist
    // (auch aus den Fade-Layern) - sonst würde die Position/Startzeit
    // während des sanften Ausblendens plötzlich zurückgesetzt und der
    // Effekt würde beim Verblassen sichtbar "springen".
    for (const key of Object.keys(this._periodicStartTimes)) {
      if (!this._effectLayers.has(key)) delete this._periodicStartTimes[key];
    }

    let combinedCss = `
      @keyframes fx-fade-out { from { opacity: 1; } to { opacity: 0; } }
    `;
    let combinedHtml = "";
    for (const [event, state] of this._effectLayers.entries()) {
      const renderer = RENDERERS[event];
      if (!renderer) continue;
      let cfgForRender = this._config;
      if (event === "snow") {
        cfgForRender = { ...this._config, _snowLevel: this._snowLevel };
      } else if (event === "night_sky") {
        // Der Wunschstern steckt im Sammel-Effekt "Nachthimmel" - die
        // zufällige Position muss also unter DIESEM Namen durchgereicht
        // werden, sonst landet der Stern immer auf dem Standardwert.
        cfgForRender = { ...this._config, _wishstarPos: this._wishstarPos };
      } else if (event === "dog") {
        if (!this._periodicStartTimes[event]) {
          const ranges = {
            dog: [10, 80],
          };
          const [min, max] = ranges[event] || [10, 80];
          this._periodicStartTimes[event] = {
            startHeight: Math.random() * (max - min) + min,
            drift: Math.random() * 16 - 8,
          };
        }
        const pState = this._periodicStartTimes[event];
        cfgForRender = {
          ...this._config,
          _startHeight: pState.startHeight,
          _drift: pState.drift,
        };
      }
      const { css, html } = renderer(cfgForRender, this._hass, this);
      combinedCss += css;
      // Fading-Layer bekommen eine "resume mid-animation"-Verzögerung wie
      // bei santa/dog/comet: negativer animation-delay aus der bereits
      // verstrichenen Ausblend-Zeit, damit ein Neu-Rendern während des
      // Verblassens (z. B. durch andere laufende Timer) den Fade nicht
      // wieder von vorne beginnen lässt.
      const layerStyle = state.fadeStartedAt !== null
        ? `animation: fx-fade-out ${(FADE_DURATION_MS / 1000).toFixed(2)}s linear forwards; animation-delay: -${((Date.now() - state.fadeStartedAt) / 1000).toFixed(2)}s;`
        : "opacity: 1;";
      combinedHtml += `<div style="${layerStyle}">${html}</div>`;
    }

    this._portalShadow.innerHTML = `<style>${combinedCss}</style>${combinedHtml}`;
    this._onVisibilityChange();
  }
}

/* ============================== VISUELLER EDITOR ============================== */

// Die Effekte als Kacheln: [Schlüssel, Symbol, Kurzname, voller Name]
const EFFECT_TILES = [
  ["weather_auto", "🌦️", "Wetter", "Wetter-Automatik"],
  ["night_sky", "🌠", "Nacht", "Nachthimmel"],
  ["birthday", "🎂", "Geburtstag", "Geburtstag"],
  ["halloween", "🎃", "Halloween", "Halloween"],
  ["santa", "🎅", "Weihnacht", "Weihnachtsmann"],
  ["leaves", "🍂", "Laub", "Herbstlaub"],
  ["train", "🚂", "Zug", "Dampflok"],
  ["dog", "🐕", "Hund", "Labrador"],
  ["owl_birdhouse", "🦉", "Eule", "Eule & Vogelhaus"],
  ["spider", "🕷️", "Spinne", "Spinne"],
  ["bee", "🐝", "Bienen", "Bienen"],
  ["off", "⭘", "Aus", "Aus"],
];

// Teile der Sammel-Effekte: [Schlüssel, Symbol, Name, kurze Erklärung]
const EFFECT_PARTS = {
  birthday: [
    ["birthday_balloons", "🎈", "Luftballons", "Steigen von unten auf"],
    ["birthday_confetti", "🎊", "Konfetti", "Rieselt von oben"],
    ["birthday_banner", "🚩", "Wimpelkette", "Oben, mit deinem Text"],
    ["birthday_lights", "💡", "Lichterkette", "Blinkt am oberen Rand"],
  ],
  night_sky: [
    ["night_shooting_stars", "🌠", "Sternschnuppen", "Huschen schräg übers Bild"],
    ["night_wishstar", "⭐", "Wunschstern", "Funkelt und springt weiter"],
    ["night_comet", "☄️", "Komet", "Selten, mit langem Schweif"],
  ],
  halloween: [
    ["halloween_pumpkins", "🎃", "Kürbisse", "Flackern unten in den Ecken"],
    ["halloween_ghost", "👻", "Gespenst", "Schwebt vorbei und ruft „Buh!“"],
    ["halloween_witch", "🧙", "Hexe auf dem Besen", "Verliert ab und zu den Hut"],
    ["halloween_webs", "🕸️", "Spinnweben", "Oben in beiden Ecken"],
    ["halloween_bats", "🦇", "Fledermäuse", "Flattern durchs Bild"],
  ],
};

// Text auf dem Start-Knopf der Vorschau (nur bei Figuren, die selten kommen)
const PREVIEW_PLAY_TEXT = {
  train: "Zug jetzt losfahren lassen",
  dog: "Hund jetzt loslaufen lassen",
};

// Jeder Effekt erklärt nur, was sich bei IHM an Halloween verkleidet
const HALLOWEEN_HINTS = {
  train: "Am 31. Oktober tragen vier Waggons automatisch Kürbisse, Hexenkessel, Sarg und Süßigkeiten. Ist dieser Schalter 'an', auch an anderen Tagen. Weihnachten und Abendessen haben Vorrang.",
  dog: "Am 31. Oktober trägt der Hund automatisch Teufelshörnchen und ein Halstuch. Ist dieser Schalter 'an', auch an anderen Tagen.",
  owl_birdhouse: "Am 31. Oktober trägt die Eule nachts automatisch einen Hexenhut. Tagsüber steht ein Kürbis vor dem Vogelhäuschen, unterm Dach hängt eine Spinnwebe und der Vogel fliegt mit Hexenhut vorbei. Ist dieser Schalter 'an', auch an anderen Tagen.",
  weather_auto: "Am 31. Oktober leuchtet der Mond automatisch orange - in seiner echten Mondphase. Ist dieser Schalter 'an', auch an anderen Tagen.",
};

const EDITOR_CSS = `
  :host { display: block; }
  .wrap { padding: 4px 0 8px; color: var(--primary-text-color, #212121); font-family: inherit; }

  /* Vorschau */
  .pv { position: relative; width: 100%; height: 180px; overflow: hidden; border-radius: 14px; margin-bottom: 6px;
    background: linear-gradient(180deg, #16202e, #2c3e50); box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08); }
  .pv-stage { position: absolute; top: 0; left: 0; transform-origin: top left; }
  .pv-msg { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
    color: rgba(255,255,255,0.6); font-size: 13px; text-align: center; padding: 0 20px; }
  .pv-tag { position: absolute; left: 10px; top: 10px; background: rgba(0,0,0,.45); color: #fff;
    font-size: 11px; padding: 3px 8px; border-radius: 10px; pointer-events: none; }
  .play { position: absolute; right: 10px; top: 8px; display: none; align-items: center; gap: 6px;
    background: rgba(255,255,255,0.93); color: #1a1a1a; border: none; border-radius: 16px; padding: 6px 12px;
    font: 500 13px inherit; font-family: inherit; cursor: pointer; box-shadow: 0 2px 6px rgba(0,0,0,.3); }
  .play.show { display: flex; }
  .play svg { width: 16px; height: 16px; }

  /* Aufklapp-Bereiche */
  .panel { border-top: 1px solid var(--divider-color, rgba(127,127,127,.25)); }
  .head { display: flex; align-items: center; gap: 12px; width: 100%; padding: 14px 4px; background: none; border: none;
    color: inherit; font: inherit; font-size: 16px; font-weight: 500; cursor: pointer; text-align: left; }
  .head .ic { width: 24px; text-align: center; font-size: 18px; }
  .head .sum { margin-left: auto; color: var(--secondary-text-color, #727272); font-weight: 400; font-size: 13px;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 55%; }
  .head .sum.warn { color: var(--error-color, #db4437); font-weight: 500; }
  .head .chev { color: var(--secondary-text-color, #727272); transition: transform .2s; font-size: 14px; width: 16px; text-align: center; }
  .panel.open .chev { transform: rotate(180deg); }
  .body { display: none; padding: 0 4px 14px; }
  .panel.open .body { display: block; }

  /* Effekt-Kacheln */
  .tiles { display: grid; grid-template-columns: repeat(6, 1fr); gap: 6px; }
  .tile { background: var(--secondary-background-color, rgba(127,127,127,.12)); border: 2px solid transparent; border-radius: 10px;
    padding: 6px 2px 5px; text-align: center; font: inherit; font-size: 11px; line-height: 1.15; color: inherit; cursor: pointer; min-height: 50px; }
  .tile .em { font-size: 19px; display: block; margin-bottom: 2px; }
  .tile.sel { border-color: var(--primary-color, #03a9f4); background: rgba(3,169,244,.15); font-weight: 600; }
  @media (max-width: 420px) { .tiles { grid-template-columns: repeat(4, 1fr); } }

  /* Schalter-Zeilen */
  .sw-row { display: flex; align-items: center; gap: 12px; padding: 8px 2px; cursor: pointer; }
  .sw-row .em { font-size: 20px; width: 26px; text-align: center; }
  .sw-row .txt { flex: 1; font-size: 15px; }
  .sw-row .txt small { display: block; color: var(--secondary-text-color, #727272); font-size: 12px; margin-top: 1px; }
  .sw-row input { position: absolute; opacity: 0; pointer-events: none; }
  .sw { width: 36px; height: 14px; border-radius: 7px; background: var(--switch-unchecked-track-color, #9e9e9e); position: relative; flex: none; transition: background .15s; }
  .sw::after { content: ""; position: absolute; top: -3px; left: -2px; width: 20px; height: 20px; border-radius: 50%;
    background: var(--switch-unchecked-button-color, #fafafa); box-shadow: 0 1px 3px rgba(0,0,0,.4); transition: left .15s, background .15s; }
  .sw-row input:checked + .sw { background: rgba(3,169,244,.5); }
  .sw-row input:checked + .sw::after { left: 18px; background: var(--primary-color, #03a9f4); }

  /* Beschriftung + Info-Knopf */
  .lbl { display: flex; align-items: center; gap: 6px; font-size: 14px; margin: 12px 2px 8px; }
  .info { width: 20px; height: 20px; border-radius: 50%; border: 1.5px solid var(--secondary-text-color, #727272);
    color: var(--secondary-text-color, #727272); background: none; font: 600 11px Georgia, serif; cursor: pointer; padding: 0;
    display: inline-flex; align-items: center; justify-content: center; }
  .info.on { background: var(--primary-color, #03a9f4); border-color: var(--primary-color, #03a9f4); color: #fff; }
  .hint { display: none; background: var(--secondary-background-color, rgba(127,127,127,.12)); border-radius: 10px;
    padding: 9px 12px; font-size: 12.5px; line-height: 1.45; color: var(--secondary-text-color, #727272); margin: -2px 2px 10px; }
  .hint.on { display: block; }

  /* Segment-Knöpfe */
  .seg { display: flex; border: 1px solid var(--outline-color, rgba(127,127,127,.6)); border-radius: 20px; overflow: hidden; }
  .seg button { flex: 1; background: none; border: none; border-left: 1px solid var(--outline-color, rgba(127,127,127,.6));
    color: inherit; font: inherit; font-size: 13px; padding: 9px 4px; cursor: pointer; }
  .seg button:first-child { border-left: none; }
  .seg button.on { background: rgba(3,169,244,.15); color: var(--primary-color, #03a9f4); font-weight: 600; }
  .seg button.on::before { content: "✓ "; }

  /* Textfelder */
  .field { width: 100%; box-sizing: border-box; padding: 12px; font: inherit; font-size: 15px; color: inherit;
    background: var(--secondary-background-color, rgba(127,127,127,.12)); border: none;
    border-bottom: 1px solid var(--outline-color, rgba(127,127,127,.6)); border-radius: 4px 4px 0 0; }
  .field:focus { outline: none; border-bottom: 2px solid var(--primary-color, #03a9f4); }
  input[type=color].field { height: 44px; padding: 4px; cursor: pointer; }
  .picker-slot { margin-bottom: 4px; }

  /* Personen-Knöpfe */
  .chips { display: flex; flex-wrap: wrap; gap: 8px; }
  .chip { display: flex; align-items: center; gap: 6px; border: 1px solid var(--outline-color, rgba(127,127,127,.6));
    border-radius: 16px; padding: 4px 12px 4px 4px; font: inherit; font-size: 13px; background: none; color: inherit; cursor: pointer; }
  .chip .av { width: 24px; height: 24px; border-radius: 50%; background: #8a9bb0; color: #fff; font-size: 11px; font-weight: 600;
    display: flex; align-items: center; justify-content: center; background-size: cover; background-position: center; }
  .chip.on { border-color: var(--primary-color, #03a9f4); background: rgba(3,169,244,.15); }
  .chip.on::after { content: "✓"; color: var(--primary-color, #03a9f4); }
`;

class AmbientOverlayCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._open = null;         // welche Bereiche aufgeklappt sind
    this._hintsOpen = new Set(); // welche ⓘ-Hinweise offen sind
  }

  setConfig(config) {
    // Frisch hinzugefügte Karte erkennen (nur die Standardwerte aus
    // getStubConfig) - dann ist die Effekt-Auswahl gleich aufgeklappt.
    if (this._open === null) {
      const stub = AmbientOverlayCard.getStubConfig();
      const keys = Object.keys(config || {}).filter((k) => k !== "type");
      const fresh = keys.every((k) => stub[k] === config[k]);
      this._open = {
        effekt: fresh || !config?.event || config.event === "off",
        teile: true,
        aussehen: true,
        einstellungen: true,
        ueber: false,
      };
    }
    this._config = {
      event: "off",
      count_preset: "medium",
      opacity_preset: "medium",
      color: "auto",
      color_mode: "auto",
      leaf_colors: ["#c9a227", "#a83232", "#d9812c"],
      weather_entity: "",
      birthday_text: "Happy Birthday!",
      birthday_balloons: true,
      birthday_confetti: true,
      birthday_banner: true,
      birthday_lights: true,
      night_shooting_stars: true,
      night_wishstar: true,
      night_comet: true,
      halloween_pumpkins: true,
      halloween_ghost: true,
      halloween_witch: true,
      halloween_webs: true,
      halloween_bats: true,
      halloween_sensor: "",
      santa_sensor: "",
      dinner_sensor: "",
      person_entities: "",
      custom_wagon_text: "",
      custom_wagon_entity: "",
      ...config,
    };
    if (this._suppressNextRender) {
      this._suppressNextRender = false;
      return;
    }
    this._render();
  }

  set hass(hass) {
    const first = !this._hass;
    this._hass = hass;
    if (first) {
      this._render();
      return;
    }
    // Offene Suchfelder aktuell halten, ohne alles neu aufzubauen
    this.shadowRoot.querySelectorAll(".picker-slot > ha-selector, .picker-slot > ha-entity-picker")
      .forEach((el) => { el.hass = hass; });
  }

  connectedCallback() {
    this._render();
    this._loadHaPickers();
  }

  disconnectedCallback() {
    if (this._resizeObs) this._resizeObs.disconnect();
  }

  // Home Assistant lädt sein Suchfeld erst, wenn es irgendwo gebraucht wird.
  // Damit es im Editor sicher da ist, lassen wir HA einmal den Editor der
  // eingebauten "Entitäten"-Karte vorbereiten - der bringt es mit.
  async _loadHaPickers() {
    if (customElements.get("ha-selector") || customElements.get("ha-entity-picker")) return;
    try {
      if (!window.loadCardHelpers) return;
      const helpers = await window.loadCardHelpers();
      const card = await helpers.createCardElement({ type: "entities", entities: [] });
      if (card?.constructor?.getConfigElement) await card.constructor.getConfigElement();
    } catch (e) { /* kein Problem: dann bleibt das einfache Textfeld */ }
    if (customElements.get("ha-selector") || customElements.get("ha-entity-picker")) this._render();
  }

  /* ---------- kleine Bausteine ---------- */

  _panel(id, icon, title, summary, body, warn = false) {
    const open = this._open[id];
    return `
      <div class="panel ${open ? "open" : ""}" data-panel="${id}">
        <button class="head" type="button" data-toggle="${id}">
          <span class="ic">${icon}</span>${title}
          <span class="sum ${warn ? "warn" : ""}">${summary}</span>
          <span class="chev">▾</span>
        </button>
        <div class="body">${body}</div>
      </div>`;
  }

  _label(text, hintId, hintText) {
    if (!hintText) return `<div class="lbl">${text}</div>`;
    const on = this._hintsOpen.has(hintId);
    return `
      <div class="lbl">${text}<button class="info ${on ? "on" : ""}" type="button" data-hint="${hintId}" aria-label="Erklärung">i</button></div>
      <div class="hint ${on ? "on" : ""}" data-hint-text="${hintId}">${hintText}</div>`;
  }

  _seg(key, options, value) {
    return `<div class="seg">${options.map(([val, label]) =>
      `<button type="button" class="${value === val ? "on" : ""}" data-seg="${key}" data-val="${val}">${label}</button>`).join("")}</div>`;
  }

  _picker(label, key, domains, hint, placeholder) {
    return `${this._label(label, key, hint)}
      <div class="picker-slot" data-key="${key}" data-domains="${domains.join(",")}" data-placeholder="${escapeHtml(placeholder)}"></div>`;
  }

  _friendly(eid) {
    return this._hass?.states?.[eid]?.attributes?.friendly_name || eid;
  }

  /* ---------- Aufbau ---------- */

  _render() {
    if (!this._config || !this._open) return;
    const c = this._config;
    const ev = c.event || "off";
    const caps = EVENT_CAPABILITIES[ev] || { count: false, opacity: false, color: false };
    const tile = EFFECT_TILES.find((t) => t[0] === ev) || EFFECT_TILES[EFFECT_TILES.length - 1];
    const colorMode = c.color_mode || (c.color === "auto" ? "auto" : "custom");

    // 1) Effekt
    const effektBody = `<div class="tiles">${EFFECT_TILES.map(([key, em, short]) =>
      `<button type="button" class="tile ${key === ev ? "sel" : ""}" data-event="${key}"><span class="em">${em}</span>${short}</button>`).join("")}</div>`;
    let html = this._panel("effekt", "✨", "Effekt", `${tile[1]} ${tile[3]}`, effektBody);

    // 2) Teile (Geburtstag, Nachthimmel, Halloween)
    const parts = EFFECT_PARTS[ev];
    if (parts) {
      const onCount = parts.filter(([k]) => c[k] !== false).length;
      let teileBody = parts.map(([key, em, name, sub]) => `
        <label class="sw-row"><span class="em">${em}</span><span class="txt">${name}<small>${sub}</small></span>
          <input type="checkbox" data-part="${key}" ${c[key] !== false ? "checked" : ""}/><span class="sw"></span></label>`).join("");
      if (onCount === 0) teileBody += `<div class="hint on">Alles ausgeschaltet - dann bleibt der Bildschirm leer.</div>`;
      if (ev === "birthday") {
        teileBody += this._label("Text auf der Wimpelkette", "birthday_text", "Zum Beispiel „Happy Birthday, Max!“ für eine persönliche Note.")
          + `<input class="field" data-text="birthday_text" type="text" placeholder="Happy Birthday!" value="${escapeHtml(c.birthday_text || "")}"/>`;
      }
      html += this._panel("teile", "🧩", "Was soll gezeigt werden?", `${onCount} von ${parts.length}`, teileBody, onCount === 0);
    }

    // 3) Aussehen
    if (caps.count || caps.opacity || caps.color) {
      const countLabels = { low: "Wenig", medium: "Mittel", high: "Viel" };
      const opLabels = { low: "Zart", medium: "Dezent", high: "Kräftig" };
      let body = "";
      const sum = [];
      if (caps.count) {
        const hint = ev === "weather_auto"
          ? "Ein Wert für ALLE automatisch erkannten Wetter-Effekte gemeinsam."
          : (COUNT_IS_INTERVAL_TEXT[ev] || "Wie viele Teile gleichzeitig zu sehen sind.");
        body += this._label("Anzahl / Häufigkeit", "count", hint) + this._seg("count_preset", [["low", "Wenig"], ["medium", "Mittel"], ["high", "Viel"]], c.count_preset || "medium");
        sum.push(countLabels[c.count_preset || "medium"]);
      }
      if (caps.opacity) {
        body += this._label("Deckkraft", "opacity", "Zart = 30 %, Dezent = 60 %, Kräftig = 100 % (dann wird jeder Effekt spürbar kräftiger).")
          + this._seg("opacity_preset", [["low", "Zart"], ["medium", "Dezent"], ["high", "Kräftig"]], c.opacity_preset || "medium");
        sum.push(opLabels[c.opacity_preset || "medium"]);
      }
      if (caps.color) {
        const hint = ev === "weather_auto"
          ? "Gilt für Regen, Schnee, Hagel, Nebel und Sturm (Blitz bleibt immer weiß). Automatisch = passend zu Hell/Dunkel."
          : "Automatisch = passend zu Hell/Dunkel. Oder du suchst dir selbst eine Farbe aus.";
        body += this._label("Farbe", "color", hint) + this._seg("color_mode", [["auto", "Automatisch"], ["custom", "Eigene Farbe"]], colorMode);
        if (colorMode === "custom") {
          body += `<div style="margin-top:10px;"><input class="field" data-color type="color" value="${c.color === "auto" ? "#ffffff" : escapeHtml(c.color)}"/></div>`;
        }
        if (colorMode === "custom") sum.push("eigene Farbe");
      }
      html += this._panel("aussehen", "🎨", "Aussehen", sum.join(" · "), body);
    }

    // 4) Einstellungen (Sensoren, Schalter, Personen, Gäste)
    const B = ["input_boolean", "binary_sensor", "switch"];
    let set = "";
    const sum = [];
    let warn = false;
    if (ev === "weather_auto") {
      set += this._picker("🌦️ Wetter-Sensor", "weather_entity", ["weather"], "Diese Wetter-Entity bestimmt, welcher Effekt gerade läuft (regnet, schneit, …).", "Wetter suchen, z. B. weather.home");
      if (c.weather_entity) sum.push(this._friendly(c.weather_entity)); else { sum.push("Wetter fehlt!"); warn = true; }
    }
    if (ev === "dog") {
      set += this._picker("🌦️ Wetter-Sensor (optional)", "weather_entity", ["weather"], "Meldet diese Wetter-Entity gerade Regen, schüttelt sich der Hund kurz.", "Wetter suchen, z. B. weather.home");
      if (c.weather_entity) sum.push("Wetter");
    }
    if (ev === "train") {
      set += this._picker("🎅 Weihnachts-Schalter", "santa_sensor", B, "Ist er 'an', werden die Waggons festlich beladen: Schneemann, Weihnachtsmann, Geschenke und ein Geschenke-Sack.", "Schalter suchen, z. B. Weihnachten");
      set += this._picker("🍽️ Abendessen-Schalter", "dinner_sensor", B, "Ist er 'an', tragen die Waggons Geschirr, Braten, Nachtisch und Getränke. Weihnachten hat Vorrang.", "Schalter suchen, z. B. Abendessen");
      if (c.santa_sensor) sum.push("Weihnachten");
      if (c.dinner_sensor) sum.push("Abendessen");
    }
    if (HALLOWEEN_HINTS[ev]) {
      set += this._picker("🎃 Halloween-Schalter", "halloween_sensor", B, HALLOWEEN_HINTS[ev], "Schalter suchen, z. B. Halloween");
      if (c.halloween_sensor) sum.push("Halloween");
    }
    if (ev === "train") {
      const people = this._hass?.states ? Object.keys(this._hass.states).filter((e) => e.startsWith("person.")).sort() : [];
      const chosen = (c.person_entities || "").split(",").map((s) => s.trim()).filter(Boolean);
      set += this._label("👥 Wer zuhause ist, fährt mit", "persons", "Für jede ausgewählte Person, die gerade zuhause ist, hängt hinten ein Waggon mit Profilbild (oder Anfangsbuchstabe). Reihenfolge = Reihenfolge beim Antippen.");
      if (people.length) {
        set += `<div class="chips">${people.map((eid) => {
          const st = this._hass.states[eid];
          const name = st?.attributes?.friendly_name || eid;
          const pic = st?.attributes?.entity_picture;
          const av = pic ? `<span class="av" style="background-image:url('${escapeHtml(pic)}')"></span>` : `<span class="av">${escapeHtml(name.trim().charAt(0).toUpperCase())}</span>`;
          return `<button type="button" class="chip ${chosen.includes(eid) ? "on" : ""}" data-person="${eid}">${av}${escapeHtml(name)}</button>`;
        }).join("")}</div>`;
      } else {
        set += `<input class="field" data-text="person_entities" type="text" placeholder="person.anna, person.ben" value="${escapeHtml(c.person_entities || "")}"/>`;
      }
      if (chosen.length) sum.push(`${chosen.length} ${chosen.length === 1 ? "Person" : "Personen"}`);
      set += this._picker("🎟️ Gäste-Sensor", "custom_wagon_entity", ["input_text", "input_select", "sensor"], "Ein Sensor mit Namen und Komma (z. B. „Oma, Opa“) - pro Name ein Waggon. Hat Vorrang vor dem Text darunter.", "Sensor suchen, z. B. Gäste");
      set += this._label("✏️ Gäste als Text", "guest_text", "Fester Text, falls kein Gäste-Sensor gewählt ist. Mehrere Namen mit Komma trennen.")
        + `<input class="field" data-text="custom_wagon_text" type="text" maxlength="60" placeholder="z. B. Oma, Opa" value="${escapeHtml(c.custom_wagon_text || "")}"/>`;
      if (c.custom_wagon_entity || c.custom_wagon_text) sum.push("Gäste");
    }
    if (set) {
      if (warn) this._open.einstellungen = true;
      html += this._panel("einstellungen", "⚙️", "Einstellungen", sum.join(" · ") || "nichts eingestellt", set, warn);
    }

    // 5) Über die Karte
    html += this._panel("ueber", "💙", "Über die Karte", `v${CARD_VERSION} · Mister-M`, creditsHtml());

    this.shadowRoot.innerHTML = `
      <style>${EDITOR_CSS}</style>
      <div class="wrap">
        <div class="pv">
          <div class="pv-stage"></div>
          <div class="pv-msg"></div>
          <span class="pv-tag">Live-Vorschau</span>
          <button class="play" type="button"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg><span>${PREVIEW_PLAY_TEXT[ev] || "Jetzt vorbeifliegen lassen"}</span></button>
        </div>
        ${html}
      </div>`;

    this._wire();
    this._mountPickers();
    this._updatePreview();
  }

  /* ---------- Bedienung ---------- */

  _wire() {
    const root = this.shadowRoot;
    root.querySelectorAll("[data-toggle]").forEach((b) => b.addEventListener("click", () => {
      const id = b.dataset.toggle;
      this._open[id] = !this._open[id];
      b.closest(".panel").classList.toggle("open", this._open[id]);
    }));
    root.querySelectorAll("[data-hint]").forEach((b) => b.addEventListener("click", () => {
      const id = b.dataset.hint;
      const on = !this._hintsOpen.has(id);
      if (on) this._hintsOpen.add(id); else this._hintsOpen.delete(id);
      b.classList.toggle("on", on);
      root.querySelector(`[data-hint-text="${id}"]`)?.classList.toggle("on", on);
    }));
    root.querySelectorAll("[data-event]").forEach((b) => b.addEventListener("click", () => {
      this._open.effekt = false;  // nach der Auswahl zuklappen
      if (b.dataset.event !== this._config.event) this._update("event", b.dataset.event, true);
      else this._render();
    }));
    root.querySelectorAll("[data-part]").forEach((box) => box.addEventListener("change", () => {
      this._update(box.dataset.part, box.checked, true);
    }));
    root.querySelectorAll("[data-seg]").forEach((b) => b.addEventListener("click", () => {
      const key = b.dataset.seg;
      const val = b.dataset.val;
      if (key === "color_mode") {
        this._updateConfig(val === "auto" ? { color_mode: "auto", color: "auto" } : { color_mode: "custom", color: "#ffffff" }, true);
      } else {
        this._update(key, val, true);
      }
    }));
    root.querySelectorAll("[data-text]").forEach((inp) => {
      const key = inp.dataset.text;
      const handler = () => this._update(key, key === "birthday_text" ? inp.value : inp.value.trim(), false);
      inp.addEventListener("change", handler);
      if (key === "birthday_text") inp.addEventListener("input", handler);
    });
    const color = root.querySelector("[data-color]");
    if (color) {
      color.addEventListener("input", (e) => this._update("color", e.target.value, false));
      color.addEventListener("change", (e) => this._update("color", e.target.value, false));
    }
    root.querySelectorAll("[data-person]").forEach((b) => b.addEventListener("click", () => {
      const current = (this._config.person_entities || "").split(",").map((s) => s.trim()).filter(Boolean);
      const eid = b.dataset.person;
      const idx = current.indexOf(eid);
      if (idx === -1) current.push(eid); else current.splice(idx, 1);
      this._update("person_entities", current.join(", "), true);
    }));
    root.querySelector(".play").addEventListener("click", () => this._playPreview());

    // Vorschau an die Breite anpassen (auch wenn sich das Fenster ändert)
    const pv = root.querySelector(".pv");
    if (this._resizeObs) this._resizeObs.disconnect();
    if (window.ResizeObserver) {
      this._resizeObs = new ResizeObserver(() => this._fitPreview());
      this._resizeObs.observe(pv);
    }
  }

  _mountPickers() {
    this.shadowRoot.querySelectorAll(".picker-slot").forEach((slot) => {
      const key = slot.dataset.key;
      const domains = slot.dataset.domains.split(",");
      const value = this._config[key] || "";
      const onValue = (v) => this._update(key, (v || "").trim(), true);

      // 1. Wahl: Original-Suchfeld von Home Assistant (mit Symbol + Name)
      if (customElements.get("ha-selector") && this._hass) {
        const el = document.createElement("ha-selector");
        el.hass = this._hass;
        el.selector = { entity: { domain: domains } };
        el.value = value;
        el.required = false;
        el.style.display = "block";
        el.addEventListener("value-changed", (e) => { e.stopPropagation(); onValue(e.detail?.value); });
        slot.appendChild(el);
        return;
      }
      if (customElements.get("ha-entity-picker") && this._hass) {
        const el = document.createElement("ha-entity-picker");
        el.hass = this._hass;
        el.includeDomains = domains;
        el.value = value;
        el.allowCustomEntity = true;
        el.style.display = "block";
        el.addEventListener("value-changed", (e) => { e.stopPropagation(); onValue(e.detail?.value); });
        slot.appendChild(el);
        return;
      }

      // Sicherung: Textfeld mit Vorschlägen zum Tippen (Browser-Suche)
      const listId = "aoc-list-" + key;
      const matches = this._hass?.states
        ? Object.keys(this._hass.states).filter((eid) => domains.some((d) => eid.startsWith(d + "."))).sort()
        : [];
      slot.innerHTML = `
        <input class="field" type="search" list="${listId}" value="${escapeHtml(value)}" placeholder="${slot.dataset.placeholder}" autocomplete="off"/>
        <datalist id="${listId}">
          ${matches.map((eid) => `<option value="${escapeHtml(eid)}">${escapeHtml(this._friendly(eid))}</option>`).join("")}
        </datalist>`;
      const input = slot.querySelector("input");
      input.addEventListener("change", (e) => onValue(e.target.value));
      input.addEventListener("search", (e) => onValue(e.target.value));
    });
  }

  /* ---------- Vorschau ---------- */

  // Die Bühne ist so groß wie das echte Fenster und wird passend verkleinert,
  // damit nichts abgeschnitten wird (z. B. Zug und Kürbisse ganz unten).
  _fitPreview() {
    const pv = this.shadowRoot.querySelector(".pv");
    const stage = this.shadowRoot.querySelector(".pv-stage");
    if (!pv || !stage) return;
    const vw = window.innerWidth || 1280;
    const vh = window.innerHeight || 720;
    const w = pv.clientWidth;
    if (!w) return;
    // Erst nach der Breite verkleinern. Würde die Vorschau dadurch zu hoch
    // (z. B. Handy im Hochformat), stattdessen nach der Höhe verkleinern und
    // mittig setzen - so ist immer das GANZE Bild zu sehen, nichts abgeschnitten.
    const MAX_H = 300;
    let s = w / vw;
    if (vh * s > MAX_H) s = MAX_H / vh;
    const left = Math.max(0, (w - vw * s) / 2);
    stage.style.width = vw + "px";
    stage.style.height = vh + "px";
    stage.style.left = left + "px";
    stage.style.transform = `scale(${s})`;
    pv.style.height = Math.round(vh * s) + "px";
  }

  _updatePreview() {
    const stage = this.shadowRoot.querySelector(".pv-stage");
    const msg = this.shadowRoot.querySelector(".pv-msg");
    const play = this.shadowRoot.querySelector(".play");
    if (!stage || !msg) return;
    this._fitPreview();
    const c = this._config;
    play.classList.remove("show");
    if (!c || c.event === "off") {
      stage.innerHTML = "";
      msg.textContent = "Kein Effekt ausgewählt.";
      return;
    }
    if (c.event === "weather_auto") {
      stage.innerHTML = "";
      msg.textContent = "Keine Vorschau bei der Wetter-Automatik - der Effekt hängt vom echten Wetter ab.";
      return;
    }
    const renderer = RENDERERS[c.event];
    if (!renderer) {
      stage.innerHTML = "";
      msg.textContent = "";
      return;
    }
    msg.textContent = "";
    // Die Vorschau hat immer einen dunklen Hintergrund. Bei "automatischer"
    // Farbe würde der Effekt sonst die Farbe des (evtl. hellen) Editor-
    // Fensters übernehmen und wäre unsichtbar - deshalb hier immer hell.
    const caps = EVENT_CAPABILITIES[c.event] || {};
    const previewCfg = ((caps.color || c.event === "halloween") && (c.color_mode || "auto") === "auto")
      ? { ...c, color: "#ffffff" }
      : c;
    const { css, html } = renderer(previewCfg, this._hass, this);
    stage.innerHTML = `<style>${css}</style>${html}`;
    // Start-Knopf nur, wenn es Figuren gibt, die selten vorbeikommen
    const hasPeriodic = this._periodicAnims().length > 0;
    play.classList.toggle("show", hasPeriodic);
  }

  // Alle "seltenen" Animationen der Vorschau (Zyklus ab 25 Sekunden)
  _periodicAnims() {
    const stage = this.shadowRoot.querySelector(".pv-stage");
    if (!stage || !stage.getAnimations) return [];
    return stage.getAnimations({ subtree: true }).filter((a) => {
      const d = a.effect?.getTiming?.().duration;
      return typeof d === "number" && d >= 25000;
    });
  }

  // ▶ Spult alle seltenen Figuren an den Anfang ihres Durchlaufs - sie
  // kommen dann sofort ins Bild statt erst in ein paar Minuten.
  _playPreview() {
    for (const a of this._periodicAnims()) {
      const t = a.effect.getTiming();
      a.currentTime = (((t.delay || 0) % t.duration) + t.duration) % t.duration;
      a.play();
    }
  }

  _update(key, value, rerender) {
    this._suppressNextRender = !rerender;
    this._config = { ...this._config, [key]: value };
    fireEvent(this, "config-changed", { config: this._config });
    if (rerender) {
      this._render();
    } else {
      this._updatePreview();
    }
  }

  _updateConfig(newValues, rerender) {
    this._suppressNextRender = !rerender;
    this._config = { ...this._config, ...newValues };
    fireEvent(this, "config-changed", { config: this._config });
    if (rerender) {
      this._render();
    } else {
      this._updatePreview();
    }
  }
}

/* ============================== REGISTRIERUNG ============================== */

// 🌙 Zeigt in der Browser-Konsole, welche Version wirklich geladen ist
console.info(
  `%c 🌙 AMBIENT OVERLAY CARD %c v${CARD_VERSION} `,
  "color:#fde68a; background:#1e3a8a; font-weight:700;",
  "color:#1e3a8a; background:#fde68a; font-weight:700;"
);

if (!customElements.get("ambient-overlay-card")) {
  customElements.define("ambient-overlay-card", AmbientOverlayCard);
}
if (!customElements.get("ambient-overlay-card-editor")) {
  customElements.define("ambient-overlay-card-editor", AmbientOverlayCardEditor);
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: "ambient-overlay-card",
  name: "Ambient Overlay Card",
  description: "Stimmungsvolle Overlay-Effekte fürs Dashboard: Wetter, Himmel, Tiere, Deko und Anlässe - mit universellem Theme-Support.",
  preview: false,
});
