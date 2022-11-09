# Next.js Caching Fruit Machine

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fharryjamesuk%2Fnextjs-caching-fruit-machine)\
[View demo](https://nextjs-caching-fruit-machine.vercel.app/)

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
