# Portfolio — Anthony Kubeka

A fast, dependency-free personal portfolio. Hand-written HTML and CSS, no framework,
no build step. Deployed on Firebase Hosting.

Previously an Angular 17 app; rebuilt as a static site for near-instant loads.

## Structure

```
public/            # everything served
  index.html       # the whole site (one page)
  styles.css       # design tokens + layout, light/dark themes
  assets/          # profile image, CV PDF, favicon
firebase.json      # static hosting config
.firebaserc        # Firebase project (myportfolio-4391b)
```

## Develop

Open `public/index.html` in a browser, or serve it:

```bash
npx serve public      # or: python3 -m http.server -d public
```

## Deploy

```bash
firebase deploy --only hosting
```
