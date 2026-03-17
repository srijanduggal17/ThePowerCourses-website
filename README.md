## ThePowerCourses-website

Static website deployed on **Firebase Hosting**.

### Repo structure

- **`Development/`**: the human-editable source version of the site (HTML/CSS/JS).
- **`Production/`**: Firebase Hosting config + the deployable output.
  - **`Production/public/`** is the actual folder that gets deployed.
  - **`Production/firebase.json`** configures Hosting for this repo.

### How Development → Production works (in this repo)

This repo does **not** include a build pipeline (no `package.json`, webpack, gulp, etc.). Publishing is a manual process:

- Make changes in **`Development/`**
- Copy your updated files into **`Production/public/`**
- Deploy Hosting from **`Production/`**

Note: several files in `Production/public/` differ from `Development/` (for example, some CSS is minified in production). If you want a single-source workflow, consider adding a small script later to copy/minify automatically.

### Firebase Hosting configuration

Firebase Hosting is configured in `Production/firebase.json`:

- **`hosting.public`** is set to `public`, meaning Firebase will deploy **`Production/public/`** *when you run commands from inside `Production/`*.

### Deploying to Firebase Hosting

#### 1) Install and login (one-time per machine)

```bash
npm i -g firebase-tools
firebase login
```

#### 2) Deploy Hosting

```bash
cd Production
firebase deploy --only hosting --project <YOUR_FIREBASE_PROJECT_ID>
```

If you don’t know your project ID, find it in the Firebase Console under **Project settings** → **Project ID**.

#### 3) Preview locally (optional)

```bash
cd Production
firebase emulators:start --only hosting --project <YOUR_FIREBASE_PROJECT_ID>
```

### Notes

- The site is static HTML/CSS/JS, but it also loads Firebase (Realtime Database) in the browser to fetch some content (images/schedules) under the `website` path.
