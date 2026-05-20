<template>
  <div v-if="route.path === '/contact'" class="min-h-dvh">
    <NuxtPage />
  </div>
  <div v-else class="w-full relative h-full pt-12 bg-dark-50 dark:bg-dark-950 min-h-dvh">
    <div class="relative z-20">
      <LazySwitchMode />
      <UContainer>
        <div v-motion-fade class="flex flex-col gap-2 items-center justify-center">
          <LazyPhotoProfile />
          <LazyMyInfo />
          <div class="mt-3 flex items-center gap-4">
            <UButton to="/contact" variant="outline" color="neutral" label="Contact" />
          </div>
          <LazySocialNetwork />
          <LazyGallery />
        </div>
      </UContainer>
      <LazyFooter />
    </div>
    <div class="fixed bottom-0 left-0 z-10 size-full dark:mix-blend-soft-light dark:opacity-40">
      <NuxtImg
        src="/shadow.png"
        class="object-cover object-center w-full h-full"
        alt="shadow-background"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

useSeoMeta({
  title: '2600 Studios by Charles Dupilpil',
  ogTitle: '2600 Studios by Charles Dupilpil',
  description: 'Minimal portfolio landing page for events and branding photography.',
  ogDescription: 'Minimal portfolio landing page for events and branding photography.',
  ogImage: 'https://d3ynb031qx3d1.cloudfront.net/general-demos/demo-gallery-10.webp',
  ogImageSecureUrl: 'https://d3ynb031qx3d1.cloudfront.net/general-demos/demo-gallery-10.webp',
  ogUrl: 'https://2600studios.com',
  twitterImage: 'https://d3ynb031qx3d1.cloudfront.net/general-demos/demo-gallery-10.webp',
  twitterCard: 'summary_large_image',
  twitterTitle: '2600 Studios by Charles Dupilpil',
  twitterDescription: 'Minimal portfolio landing page for events and branding photography.',
  ogImageWidth: 1280,
  ogImageHeight: 720
})

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
