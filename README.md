# EV Insights — EV Market Intelligence Website

A static, responsive project showcase website built with HTML, CSS and vanilla JavaScript. No npm, build tools, server, or paid service is required.

## Included
- Responsive home page and project overview
- Tableau Public embed slot
- Three stakeholder scenario summaries
- Searchable PDF and Word resource library
- Demo video link slot
- Prepared PDF and Word documents in `downloads/`

## 1. Run locally on Linux
1. Extract the ZIP file.
2. Open a terminal in the extracted `ev-market-intelligence-website` folder.
3. Start a simple local web server:

   ```bash
   python3 -m http.server 8000
   ```

4. Open `http://localhost:8000` in Chrome or Firefox.
5. Press `Ctrl+C` in the terminal to stop the server.

You can also double-click `index.html`, but a local server is more reliable.

## 2. Connect your Tableau Public dashboard
1. Open `config.js` in a text editor.
2. Replace `PASTE_TABLEAU_PUBLIC_URL_HERE` with the published Tableau Public **view URL**.
   - Use the public view link, not the workbook editing URL.
   - The URL usually begins `https://public.tableau.com/views/...`
3. Save `config.js` and refresh the website.
4. If Tableau blocks embedding for your view, the direct link will still be available once the URL is configured.

## 3. Connect your demo video
1. Upload the video to Google Drive.
2. Set its sharing access to **Anyone with the link — Viewer** if your course rules allow public sharing.
3. Copy the share link.
4. Replace `PASTE_PUBLIC_GOOGLE_DRIVE_VIDEO_URL_HERE` in `config.js`.
5. Save and refresh.

The website currently opens the video link in a new tab. It does not upload files to Drive or make private files public automatically.

## 4. Free hosting with GitHub Pages
1. Sign in to GitHub and create a new public repository, for example `ev-market-intelligence`.
2. Upload the **contents** of this folder to the repository root (`index.html`, `styles.css`, `script.js`, `config.js`, `assets/`, `downloads/`, and this README).
3. In the repository, open **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to publish. The site URL will look like `https://YOUR-USERNAME.github.io/ev-market-intelligence/`.

If you edit `config.js` later, commit/upload the change and GitHub Pages will update the site.

## Important
- This is a static showcase website. It has no user accounts, backend, database, or admin upload system.
- Do not put passwords, private tokens, or personal data in `config.js`.
- Anyone who can access a public GitHub Pages site can download files included in its `downloads/` folder.
- The included project files are the prepared documents available in this workspace. Check them before submission and replace any unconfirmed team details or links.
