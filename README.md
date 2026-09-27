# Yapper — Portfolio (gratis Hosting)

Schicke, responsive Portfolio-Website. Komplett statisch = **0 € Hosting auf Netlify oder Vercel**.

## 1. Lokal ansehen
Einfach `index.html` im Browser öffnen. Oder:
```powershell
cd yapper-website
python -m http.server 8000
# -> http://localhost:8000
```

## 2. Gratis online stellen – Option A: Netlify (empfohlen, mit Formular)

1. Ordner als ZIP packen ODER auf GitHub pushen
2. Auf https://app.netlify.com/ kostenlos anmelden (mit GitHub)
3. **Add new site → Deploy manually** (ZIP reinziehen) ODER **Import from Git**
   - Build command: *(leer lassen)*
   - Publish directory: `.`
4. Fertig: `https://yapper.netlify.app` – HTTPS inklusive
5. Kontaktformular geht automatisch (Netlify Forms), Nachrichten unter *Forms* einsehbar.

Eigene Domain später: Site settings → Domain → Add custom domain (gratis mit Netlify DNS).

## 3. Option B: Vercel (ebenfalls gratis)

1. Auf https://vercel.com/ mit GitHub anmelden
2. **Add New → Project → Import** dein Repo
3. Framework: **Other**, Root: `yapper-website`, Build: leer
4. Deploy → `https://yapper.vercel.app`

> Hinweis: Kontaktformular braucht auf Vercel einen Gratis-Service wie https://formspree.io/ – im Code `action="https://formspree.io/f/DEIN-ID"` ergänzen.

## 4. Anpassen
- Name/Texte in `index.html` ändern
- Farben in `styles.css` unter `:root`
- Bild hinzufügen: Datei in Ordner legen + `<img src="foto.jpg">` einfügen

Viel Spaß! 🚀
