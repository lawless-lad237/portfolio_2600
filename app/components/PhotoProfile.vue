<template>
    <NuxtImg :src="photo" alt="my-profile-photo" height="400" width="400" fit="cover"
        class="rounded-full size-26 object-cover object-center" />
</template>

<script setup>
const app = useAppConfig();
const { data: { photo } } = app
</script>
