<template>
    <div class="flex flex-col items-center justify-center">
        <h1 class="font-sans font-bold uppercase tracking-widest text-3xl md:text-6xl text-black dark:text-white">
            {{ name }}
        </h1>
        
        <h2 class="font-sans font-bold text-xl text-black dark:text-white mt-4">
            {{ title }}
        </h2>
        
        <p class="text-center text-lg text-zinc-900 dark:text-zinc-100 w-10/12 md:w-8/12 mx-auto mt-6">
            {{ bio }}
        </p>
    </div>
</template>

<script setup>
const app = useAppConfig();
const { data: { name, title, bio } } = app;
</script>
