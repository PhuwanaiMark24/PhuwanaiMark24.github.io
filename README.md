This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy

Every push to `main` runs `.github/workflows/ci.yml`: lint, test, build, then
`scripts/check-output.sh`, then deploy to GitHub Pages. Pull requests and other
branches only lint, test and build.

The deploy is blocked if the build output has a `[[TODO` Placeholder, has no
`resume.pdf`, marks the home page noindex, or does not mark the Styleguide
noindex. Run the same checks locally:

```bash
npm run build
bash scripts/check-output.sh out
```

**Manual step (once):** in the repo's Settings → Pages, set Source to
"GitHub Actions".
