<template>
  <div class="size-40 md:size-52 rounded-full overflow-hidden ring-2 ring-zinc-900/10 dark:ring-zinc-100/20 shadow-lg">
    <NuxtImg
      :src="photo"
      alt="Profile photo"
      class="h-full w-full object-cover object-center"
      loading="eager"
      width="320"
      height="320"
    />
  </div>
</template>

<script setup lang="ts">
const app = useAppConfig()
const { data: { photo } } = app
</script>
