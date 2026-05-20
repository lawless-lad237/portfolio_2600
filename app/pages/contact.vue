<template>
  <div class="min-h-dvh bg-dark-50 dark:bg-dark-950 pt-12">
    <LazySwitchMode />
    <UContainer class="relative z-20">
      <div class="mx-auto max-w-2xl text-center">
        <h1 class="font-sans font-bold uppercase tracking-widest text-3xl md:text-5xl text-black dark:text-white">Contact</h1>
        <p class="mt-4 text-zinc-700 dark:text-zinc-300">Let's build your next visual story.</p>

        <div class="mt-10 grid gap-4 text-left">
          <UCard>
            <template #header>Email</template>
            <NuxtLink :to="`mailto:${email}`" class="text-primary-600 dark:text-primary-400">{{ email }}</NuxtLink>
          </UCard>
          <UCard>
            <template #header>Phone</template>
            <NuxtLink :to="`tel:${phone}`" class="text-primary-600 dark:text-primary-400">{{ phone }}</NuxtLink>
          </UCard>
        </div>

        <UButton to="/" class="mt-8" variant="soft" color="neutral" label="Back to portfolio" />
      </div>
    </UContainer>
  </div>
</template>

<script setup>
const app = useAppConfig()
const { data: { email, phone } } = app

useSeoMeta({ title: 'Contact | 2600 Studios', description: 'Contact 2600 Studios for events and branding photography.' })
</script>
