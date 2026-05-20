<template>
  <div class="w-full relative h-full pt-12 bg-dark-50 dark:bg-dark-950">
    <div class="relative z-20">
      <LazySwitchMode />
      <UContainer>
        <div v-motion-fade class="flex flex-col gap-2 items-center justify-center">
          <LazyPhotoProfile />
          <LazyMyInfo />
          <LazySocialNetwork />
          <LazyGallery />
        </div>
      </UContainer>
      <LazyFooter />
    </div>
    <div class="fixed bottom-0 left-0 z-10 size-full dark:mix-blend-soft-light dark:opacity-40">
      <NuxtImg src="./shadow.png" class="object-cover object-center w-full h-full" alt="shadow-background"
        loading="lazy" />
    </div>
  </div>
</template>

<script setup>

useSeoMeta({
  title: 'Hato | Minimal Portfolio Showcase',
  ogTitle: 'Hato | Minimal Portfolio Showcase',
  description:
    'Discover Hato, the sleek portfolio website perfect for freelancers, photographers, and artists made with Nuxt UI',
  ogDescription:
    'Discover Hato, the sleek portfolio website perfect for freelancers, photographers, and artists made with Nuxt UI',
  ogImage: "https://res.cloudinary.com/dkr1hluva/image/upload/v1713023084/og/og-hato_roec1l.jpg",
  ogImageSecureUrl: 'https://res.cloudinary.com/dkr1hluva/image/upload/v1713023084/og/og-hato_roec1l.jpg',
  ogUrl: 'https://res.cloudinary.com/dkr1hluva/image/upload/v1713023084/og/og-hato_roec1l.jpg',
  twitterImage: "https://res.cloudinary.com/dkr1hluva/image/upload/v1713023084/og/og-hato_roec1l.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: 'Hato | Minimal Portfolio Showcase',
  twitterDescription: 'Discover Hato, the sleek portfolio website perfect for freelancers, photographers, and artists made with Nuxt UI',
  ogImageWidth: 1280,
  ogImageHeight: 720,
});

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/svg',
      href: '/favicon.svg'
    }
  ]
})
</script>
