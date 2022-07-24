# Astro Google Fonts Optimizer 🚀

This [Astro](https://astro.build/) integration optimizes the performance of included Google Fonts.  
It downloads the CSS of a Google Fonts stylesheet and inlines it directly into the page.  
This can improve your Lighthouse score significantly.

The project is inspied by the [NextJS Google Fonts automatic optimization](https://nextjs.org/blog/next-10-2#automatic-webfont-optimization) feature.

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

    <style type="text/css">@font-face { font-family: 'Inter'; font-style: normal; font-weight: 200; font-display: swap; src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfMZg.ttf) format('truetype'); } @font-face { font-family: 'Inter'; font-style: normal; font-weight: 400; font-display: swap; src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZg.ttf) format('truetype'); } @font-face { font-family: 'Inter'; font-style: normal; font-weight: 500; font-display: swap; src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZg.ttf) format('truetype'); } @font-face { font-family: 'Inter'; font-style: normal; font-weight: 700; font-display: swap; src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZg.ttf) format('truetype'); } </style>
</head>
```

You can read about this performance optimization in [this excellent blog post](https://dev.to/ekafyi/first-impressions-on-next-js-automatic-font-optimization-32a1).