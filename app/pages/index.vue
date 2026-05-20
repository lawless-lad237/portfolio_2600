<template>
  <div class="w-full relative h-full pt-12 bg-dark-50 dark:bg-dark-950 min-h-dvh">
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
      <NuxtImg src="/shadow.png" class="object-cover object-center w-full h-full" alt="shadow-background" loading="lazy" />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: '2600 Studios by Charles Dupilpil',
  ogTitle: '2600 Studios by Charles Dupilpil',
  description: 'Portfolio of Charles Dupilpil, specializing in minimalist, high-contrast brand identities and professional photography.',
  ogDescription: 'Portfolio of Charles Dupilpil, specializing in minimalist, high-contrast brand identities and professional photography.',
  ogImage: 'https://images.ctfassets.net/45juk84rr26h/2mBmdMuLl0t15J3Ck8F74p/5b4af1bdf943464302a3694f41baed5b/1.jpg',
  ogUrl: 'https://2600studios.com',
  twitterCard: 'summary_large_image'
})

useHead({
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
})
</script>
