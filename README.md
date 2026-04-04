# Ruhama Glass Web

Marketing site for Ruhama Glass showcasing services, projects, and contact info.

## Getting started

```sh
npm install
npm run dev
```

## Supabase setup

1) Copy `.env.example` to `.env` and fill in your project URL + anon key.
2) Apply the database migrations with the Supabase CLI:

```sh
npx supabase db push
```

## Build

```sh
npm run build
npm run preview
```

## Notes

- Brand assets (logo and photos) live in `public/`.
- Typography uses Cormorant Garamond (display) and Manrope (body) via Google Fonts.
