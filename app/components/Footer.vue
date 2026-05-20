<template>
    <UContainer>
        <footer class="flex flex-col md:flex-row items-center justify-evenly py-12 gap-6 relative z-20">
            <NuxtLink :to="`mailto:${email}`"
                class="font-sans font-bold uppercase tracking-widest text-xs text-black hover:text-[#E4002B] dark:text-white dark:hover:text-[#E4002B] transition-colors duration-200">
                {{ email }}
            </NuxtLink>

            <NuxtLink to="https://github.com/cesswhite/hato-minimal-template" target="_blank"
                class="font-sans font-bold uppercase tracking-widest text-xs text-black hover:text-[#E4002B] dark:text-white dark:hover:text-[#E4002B] transition-colors duration-200">
                2600 Studios
            </NuxtLink>

            <NuxtLink :to="`tel:${phone}`"
                class="font-sans font-bold uppercase tracking-widest text-xs text-black hover:text-[#E4002B] dark:text-white dark:hover:text-[#E4002B] transition-colors duration-200">
                {{ phone }}
            </NuxtLink>
        </footer>
    </UContainer>
</template>

<script setup>
const app = useAppConfig();
const { data: { email, phone } } = app;
</script>
