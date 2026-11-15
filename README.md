# Portfolio: Anthony Kubeka

Source for https://anthonykubeka.com. A fast, dependency-free personal site: hand-written
HTML and CSS, no framework, no build step. Deployed on Firebase Hosting.

The Normandy section links to https://demo.anthonykubeka.com and reads four live numbers
from that site's public `data/snapshot.json`. The HTML holds fallback values, so the page
is correct when that fetch fails.

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

A push to `main` deploys to the live site (`.github/workflows/firebase-hosting-merge.yml`).
A pull request gets its own preview URL, posted as a comment on the PR.
