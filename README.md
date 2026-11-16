# WRAPT STUDIO — website

A static multi-page website for the Wrapt Studio packaging design and production concept.

## Pages

- `index.html` — home page
- `about.html` — about the studio
- `services.html` — services and collaboration formats
- `products.html` — packaging categories and interactive product selector
- `materials.html` — material library
- `portfolio.html` — conceptual portfolio with category filters
- `process.html` — project workflow
- `contact.html` — project brief form (front-end demonstration only)

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- No framework, build step, or package installation required

## Run locally

Open `index.html` in a browser. For a local development server, run one of these commands from the project directory:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new repository on GitHub, for example `wrapt-studio`.
2. Upload all files and folders from this project to the repository root. Keep the `assets` folder in the same location as the HTML files.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then save.
6. Wait for GitHub Pages to publish the site. The public URL will appear in the Pages settings.

## Important notes before publishing

- The contact form is intentionally a demo: it validates the fields and displays a confirmation in the browser, but it does not send or store submissions. Connect a form service or backend before using it to receive real client enquiries.
- The hero image is AI-generated; the portfolio also includes CSS-based conceptual mockups. These visuals are not evidence of completed customer projects. Replace or supplement them with approved real project photographs when available.
- The layout is currently desktop-first and does not include dedicated mobile/tablet responsive optimization, as requested for this first version.
- The email address in the footer and contact section is the author contact supplied for this project.
- The language toggle switches between Ukrainian and English. The selected language is remembered in the browser.

## Project authorship

© 2026 Сагалай Валерія. Усі права захищені.
Website designed and developed by Valeriia Sagalay.
