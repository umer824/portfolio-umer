# Umer Jahangir Portfolio

A responsive personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Run locally

```sh
npm install
npm run dev
```

## Verify a production build

```sh
npm run build
npm run preview
```

There is no separate automated test script configured. After previewing the build, manually check navigation, mobile menu, profile links, project repository/demo links, resume download, contact form validation, and the email draft link. The contact form opens a prefilled `mailto:` draft; it does not submit to a server.

## Customize content

- Update the verified name, title, location, email, LinkedIn, and GitHub values in [`src/data/profile.ts`](./src/data/profile.ts).
- Edit project titles, copy, verified destinations, and preview assets in [`src/data/selectedProjects.ts`](./src/data/selectedProjects.ts).
- Edit skills, education, certifications, and development journey in [`src/data/portfolioData.ts`](./src/data/portfolioData.ts).
- Replace static image assets and the resume in `public/assets/`.

## Deploy

Push the project to a Git provider and import that repository in Vercel or Netlify. Use the repository root as the project root and set:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Output / publish directory | `dist` |

Both platforms can also detect Vite projects automatically. Follow the platform prompts to connect the repository, select the production branch, and deploy. Subsequent commits to that branch can trigger new builds. Deployment is not configured from this repository yet.

Platform references: [Vercel: Vite](https://vercel.com/docs/frameworks/frontend/vite) · [Netlify: Vite](https://docs.netlify.com/build/frameworks/framework-setup-guides/vite/)

## Project structure

```text
public/assets/        Profile image, project previews, favicon, and resume PDF
src/components/       Reusable page sections and interface components
src/data/profile.ts   Canonical contact and social profile details
src/data/             Project, skill, education, and journey content
src/types/            Shared TypeScript data types
src/App.tsx           Page composition and global interactions
src/main.tsx          React application entry point
src/index.css         Tailwind directives and global styles
index.html            Page metadata and document shell
```
