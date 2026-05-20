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
  title: '2600 Studios by Charles Dupilpil',
  ogTitle: '2600 Studios by Charles Dupilpil',
  description:
    'Portfolio of Charles Dupilpil, specializing in minimalist, high-contrast brand identities and professional photography.',
  ogDescription:
    'Portfolio of Charles Dupilpil, specializing in minimalist, high-contrast brand identities and professional photography.',
  ogImage: "https://images.ctfassets.net/45juk84rr26h/2mBmdMuLl0t15J3Ck8F74p/5b4af1bdf943464302a3694f41baed5b/1.jpg",
  ogImageSecureUrl: 'https://images.ctfassets.net/45juk84rr26h/2mBmdMuLl0t15J3Ck8F74p/5b4af1bdf943464302a3694f41baed5b/1.jpg',
  ogUrl: 'https://2600studios.com',
  twitterImage: "https://images.ctfassets.net/45juk84rr26h/2mBmdMuLl0t15J3Ck8F74p/5b4af1bdf943464302a3694f41baed5b/1.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: '2600 Studios by Charles Dupilpil',
  twitterDescription: 'Portfolio of Charles Dupilpil, specializing in minimalist, high-contrast brand identities and professional photography.',
  ogImageWidth: 1810,
  ogImageHeight: 1792,
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
