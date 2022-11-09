# Next.js Caching Fruit Machine

This app demonstrates the concept of **Segment-level Caching** using the **revalidate** property *(which sets the cache
lifetime / revalidation time for the route)*.

By default, the revalidation period is **10 seconds**.  This can be changed in `./app/page.tsx` by updating the
`revalidate` constant.

Please note that caching only occurs in production builds.

## Running a production build

```bash
yarn build
yarn start
```

Then open http://localhost:3000/

### Utilities

This repo also makes use of the following libraries:

+ [Tailwind](https://tailwindcss.com/) for styling.
+ [ESLint](https://eslint.org/) for code linting.
+ [Heroicons](https://heroicons.com/) for Light/Dark mode icons.
