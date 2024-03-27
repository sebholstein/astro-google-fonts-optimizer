# Astro Google Fonts Optimizer 🚀

This [Astro](https://astro.build/) integration optimizes the performance of included Google Fonts.  
It downloads the CSS of a Google Fonts stylesheet and inlines it directly into the page.  
This can improve your Lighthouse score significantly.

The project is inspired by the [NextJS Google Fonts automatic optimization](https://nextjs.org/blog/next-10-2#automatic-webfont-optimization) feature.

## Installation

```bash
npm install astro-google-fonts-optimizer
## or yarn
yarn add astro-google-fonts-optimizer
## or pnpm
pnpm add astro-google-fonts-optimizer
```

## Usage

The `GoogleFontsOptimizer` astro component does all the work for you to use a Google font efficiently.  
It's recommended to include the component inside the `<head>` tag of your page. This could be inside a layout or in a normal page.  
Just copy the URL of the google fonts stylesheet and use the component like this:

```astro
---
import { GoogleFontsOptimizer } from "astro-google-fonts-optimizer";
---
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />

    <GoogleFontsOptimizer url="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500;700&display=swap">
    </GoogleFontsOptimizer>
</head>
```

This will create the following output:

```html
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">

    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <style type="text/css">@font-face {font-family: 'Inter';font-style: normal;font-weight: 200;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfMZs.woff) format('woff');}@font-face {font-family: 'Inter';font-style: normal;font-weight: 400;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZs.woff) format('woff');}@font-face {font-family: 'Inter';font-style: normal;font-weight: 500;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZs.woff) format('woff');}@font-face {font-family: 'Inter';font-style: normal;font-weight: 700;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZs.woff) format('woff');} /* cyrillic-ext */@font-face {font-family: 'Inter';font-style: normal;font-weight: 200;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfAZJhiI2B.woff2) format('woff2');unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}/* cyrillic */@font-face {font-family: 'Inter';font-style: normal;font-weight: 200;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfAZthiI2B.woff2) format('woff2');unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}/* greek-ext */@font-face {font-family: 'Inter';font-style: normal;font-weight: 200;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfAZNhiI2B.woff2) format('woff2');unicode-range: U+1F00-1FFF;}/* greek */@font-face {font-family: 'Inter';font-style: normal;font-weight: 200;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfAZxhiI2B.woff2) format('woff2');unicode-range: U+0370-03FF;}/* vietnamese */@font-face {font-family: 'Inter';font-style: normal;font-weight: 200;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfAZBhiI2B.woff2) format('woff2');unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;}/* latin-ext */@font-face {font-family: 'Inter';font-style: normal;font-weight: 200;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfAZFhiI2B.woff2) format('woff2');unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}/* latin */@font-face {font-family: 'Inter';font-style: normal;font-weight: 200;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfAZ9hiA.woff2) format('woff2');unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}/* cyrillic-ext */@font-face {font-family: 'Inter';font-style: normal;font-weight: 400;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZJhiI2B.woff2) format('woff2');unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}/* cyrillic */@font-face {font-family: 'Inter';font-style: normal;font-weight: 400;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZthiI2B.woff2) format('woff2');unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}/* greek-ext */@font-face {font-family: 'Inter';font-style: normal;font-weight: 400;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZNhiI2B.woff2) format('woff2');unicode-range: U+1F00-1FFF;}/* greek */@font-face {font-family: 'Inter';font-style: normal;font-weight: 400;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZxhiI2B.woff2) format('woff2');unicode-range: U+0370-03FF;}/* vietnamese */@font-face {font-family: 'Inter';font-style: normal;font-weight: 400;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZBhiI2B.woff2) format('woff2');unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;}/* latin-ext */@font-face {font-family: 'Inter';font-style: normal;font-weight: 400;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZFhiI2B.woff2) format('woff2');unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}/* latin */@font-face {font-family: 'Inter';font-style: normal;font-weight: 400;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2) format('woff2');unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}/* cyrillic-ext */@font-face {font-family: 'Inter';font-style: normal;font-weight: 500;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZJhiI2B.woff2) format('woff2');unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}/* cyrillic */@font-face {font-family: 'Inter';font-style: normal;font-weight: 500;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZthiI2B.woff2) format('woff2');unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}/* greek-ext */@font-face {font-family: 'Inter';font-style: normal;font-weight: 500;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZNhiI2B.woff2) format('woff2');unicode-range: U+1F00-1FFF;}/* greek */@font-face {font-family: 'Inter';font-style: normal;font-weight: 500;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZxhiI2B.woff2) format('woff2');unicode-range: U+0370-03FF;}/* vietnamese */@font-face {font-family: 'Inter';font-style: normal;font-weight: 500;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZBhiI2B.woff2) format('woff2');unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;}/* latin-ext */@font-face {font-family: 'Inter';font-style: normal;font-weight: 500;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZFhiI2B.woff2) format('woff2');unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}/* latin */@font-face {font-family: 'Inter';font-style: normal;font-weight: 500;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hiA.woff2) format('woff2');unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}/* cyrillic-ext */@font-face {font-family: 'Inter';font-style: normal;font-weight: 700;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZJhiI2B.woff2) format('woff2');unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}/* cyrillic */@font-face {font-family: 'Inter';font-style: normal;font-weight: 700;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZthiI2B.woff2) format('woff2');unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}/* greek-ext */@font-face {font-family: 'Inter';font-style: normal;font-weight: 700;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZNhiI2B.woff2) format('woff2');unicode-range: U+1F00-1FFF;}/* greek */@font-face {font-family: 'Inter';font-style: normal;font-weight: 700;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZxhiI2B.woff2) format('woff2');unicode-range: U+0370-03FF;}/* vietnamese */@font-face {font-family: 'Inter';font-style: normal;font-weight: 700;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZBhiI2B.woff2) format('woff2');unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;}/* latin-ext */@font-face {font-family: 'Inter';font-style: normal;font-weight: 700;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZFhiI2B.woff2) format('woff2');unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}/* latin */@font-face {font-family: 'Inter';font-style: normal;font-weight: 700;font-display: swap;src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hiA.woff2) format('woff2');unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}</style>
</head>
```

If you're using a Google Fonts compatible drop-in such as [Bunny Fonts](https://fonts.bunny.net/), you can specify the `preconnect`-URL via the `preconnectUrl` prop like this:

```jsx
<GoogleFontsOptimizer
  url="https://fonts.bunny.net/css2?family=Inter:wght@200;400;500;700&display=swap"
  preconnectUrl="https://fonts.bunny.net"
/>
```

If left empty, the preconnect-URL will default to `https://fonts.gstatic.com`. Otherwise, the given value is used:

```jsx
<link rel="preconnect" href="https://fonts.bunny.net" crossorigin="anonymous">
```

If first fetch of a font will fail, it'll be refetched three times by default in 100 milliseconds intervals
You can configure this by setting `retryInterval` and `retryAttempts` props

```jsx
<GoogleFontsOptimizer
  url="https://fonts.bunny.net/css2?family=Inter:wght@200;400;500;700&display=swap"
  preconnectUrl="https://fonts.bunny.net"
  retryInterval="200"
  retryAttempts="5"
/>
```

You can read about this performance optimization in [this excellent blog post](https://dev.to/ekafyi/first-impressions-on-next-js-automatic-font-optimization-32a1).
