<template>
    <div class="flex flex-col items-center justify-center">
        <h1 class="font-family-instrument italic font-bold text-2xl md:text-5xl text-dark-950/90 dark:text-dark-50/90">
            {{ name }}
        </h1>
        <h2 class="font-family-instrument italic text-xl font-bold text-dark-800/90 dark:text-dark-50/70 mt-4">{{
            title }}</h2>
        <p class="text-center text-lg text-dark-800/60 dark:text-dark-50/50 w-8/12 mx-auto">
            {{ bio }}
        </p>
    </div>
</template>

<script setup>
const app = useAppConfig();
const { data: { name, title, bio } } = app
</script>
