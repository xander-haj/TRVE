# Hosting on GitHub Pages

This guide explains how to deploy the TRVE E-Learning site to GitHub Pages using a public repository.

## 1. Prepare the Repository

1. **Create a GitHub repository** for the project if you haven't already. Make sure the repository name matches the desired GitHub Pages URL (e.g., `username.github.io` for user pages or any name for project pages).
2. **Push your code** to the main branch of that repository.

```bash
# Example push
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

## 2. Set Up the Deployment Branch

For project pages (repository names other than `username.github.io`), GitHub Pages expects content to be served from the `gh-pages` branch:

```bash
# Create an orphan branch for GitHub Pages
git checkout --orphan gh-pages
# Remove all tracked files from the index
git reset --hard
# Bring the production build into this branch after building
```

For user or organization pages (`username.github.io`), keep the site in the `main` branch. Skip the branch creation and only commit the built files.

## 3. Build the Site

Run the production build to generate static files. The output will be placed in the `dist` directory by Vite.

```bash
npm run build
```

## 4. Deploy to GitHub Pages

1. **Copy the `dist` directory contents** into the root of the `gh-pages` branch (or `main` if using user/organization pages).
2. **Commit the built files**:

```bash
git add .
git commit -m "Deploy site"
```

3. **Push the branch**:

```bash
git push origin gh-pages
```

## 5. Configure GitHub Pages

1. Navigate to your repository on GitHub.
2. Go to **Settings > Pages**.
3. Under **Branch**, choose `gh-pages` (or `main` for user pages) and click **Save**.
4. GitHub will provide a public URL where the site is hosted. It usually takes a minute or two for the changes to propagate.

## 6. Automating Deployment (Optional)

For streamlined deployments, configure a GitHub Actions workflow:

1. Create `.github/workflows/deploy.yml` with a workflow that runs `npm install` and `npm run build`, then pushes the `dist` directory to `gh-pages`.
2. Commit and push the workflow file to the `main` branch. GitHub Actions will handle future deployments when you push changes.

## 7. Verify the Deployment

Visit the URL provided in GitHub Pages settings to confirm the site is live. If you encounter a 404 error, wait a few minutes and try again. Clear your browser cache if necessary.

---

Following these steps will publish your TRVE E-Learning site to GitHub Pages. Each time you update the main codebase, rebuild and redeploy using the same process to keep your live site in sync with the repository.
