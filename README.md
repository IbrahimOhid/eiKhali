# CNGLagbe React Landing Page

A responsive Bengali-language single-page landing page inspired by the supplied CNGLagbe reference website.

## Run locally

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

## Stack
- React + Vite
- Tailwind CSS
- Lucide React
- Hind Siliguri Google Font

## Project structure

```text
src/
  components/
    Brand.jsx
    Header.jsx
    Hero.jsx
    Routes.jsx
    Drivers.jsx
    InfoSections.jsx
    BookingForm.jsx
    FAQ.jsx
    Footer.jsx
  App.jsx
  data.js
  index.css
  main.jsx
```

## Important implementation notes
- Route prices, durations, testimonials, statistics, and several driver entries are illustrative demo content. Verify/replace them with approved live data before publishing.
- Booking form currently performs client-side validation and displays a notice. Connect it to a backend, CRM, WhatsApp flow, or booking API for actual submission.
- Replace the generic Facebook link in the footer with the official CNGLagbe page URL.
- The hero background uses an Unsplash-hosted image; replace it with licensed brand photography if desired.
- Phone CTA currently uses `01783721411`, as shown on the reference site.
