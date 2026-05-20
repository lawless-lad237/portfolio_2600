![2600-studios-cover](/public/images/portfolio-3.webp)

# 2600 Studios | Minimalist Portfolio Showcase

Look at [Nuxt docs](https://nuxt.com/docs/getting-started/introduction) and [Nuxt UI docs](https://ui.nuxt.com) to learn more about the underlying framework.

- [Live Website](https://2600studios.com)

## About

A high-contrast, strictly monochrome portfolio website designed and developed for **2600 Studios**. Built to showcase professional event photography, high-volume image curation, and geometric brand identities. 

Customized by Charles Dupilpil from the Hato template, this build prioritizes simplicity, high-resolution media handling, and a stark black-and-white aesthetic. Powered by Nuxt 4 and TailwindCSS.

- **Pages:** 1
- **Sections:** 1
- **Primary Configuration:** `app.config.ts`

## Features

- [Nuxt 4](https://nuxt.com/) - Open source framework that makes web development intuitive and powerful.
- [Nuxt UI v4](https://ui.nuxt.com/) - A UI Library for Modern Web Apps.
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework packed with classes.
- [VueUse/Motion](https://motion.vueuse.org/) - Composables putting your components in motion.
- [Nuxt Image](https://image.nuxt.com/) - Image optimization and dynamic rendering for high-resolution photography.
- [Vite](https://vitejs.dev/) - Powered by Vite, instant HMR.
- `<script setup lang="ts">` syntax with TypeScript support.

## Specifications

- **Project:** 2600 Studios Portfolio
- **Author:** Charles Dupilpil
- **Released date:** May 2026
- **Version:** 1.0.0
- **Tech Stack:** Nuxt 4, Nuxt UI v4, TailwindCSS
- **Aesthetic:** Minimalist, High-Contrast Monochrome
- **Compatibility:** Chrome, Firefox, Safari, Brave, Arc, Edge

## Folder and Component Structure

The dynamic data for this portfolio (including gallery images, contact info, and profile details) is managed centrally in `app.config.ts`. The UI components are located inside the `components` folder and injected into `app.vue`.

```bash
# src/components/
 - LazyPhotoProfile.vue
 - LazyMyInfo.vue
 - LazySocialNetwork.vue
 - LazyGallery.vue
 - LazyFooter.vue
