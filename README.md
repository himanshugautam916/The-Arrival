# Meru Studios — GitHub Pages Starter

A responsive single-page website inspired by the supplied parchment / dark-red mythology game website reference.

## Files

- `index.html` — page structure and content
- `styles.css` — complete visual design
- `script.js` — mobile menu + active navigation
- `assets/` — put your game artwork, logo, trailer thumbnails, etc. here

## Replace the temporary character

The hero currently uses a CSS placeholder so the page works immediately.

When you have your final character artwork:

1. Put it in `assets/hero-character.png`.
2. In `index.html`, replace the `.character-placeholder` block with:
   `<img class="hero-character" src="assets/hero-character.png" alt="ARRIVAL main character">`
3. Add:
   `.hero-character { max-height: 82vh; max-width: 90%; object-fit: contain; }`

## Publish on GitHub Pages

1. Create a new GitHub repository, e.g. `meru-studios-website`.
2. Upload `index.html`, `styles.css`, `script.js`, and the `assets` folder.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose `main` and `/ (root)`.
6. Save. GitHub will provide the public Pages URL.

## Recommended next assets

- `assets/logo.png`
- `assets/hero-character.png`
- `assets/gameplay-01.jpg`
- `assets/gameplay-02.jpg`
- `assets/world-village.jpg`
- `assets/world-meru.jpg`
- `assets/world-lanka.jpg`
- `assets/trailer-poster.jpg`

No framework or build step is required.
