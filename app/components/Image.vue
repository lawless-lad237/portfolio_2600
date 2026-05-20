<template>
    <UModal v-model:open="showPreviewModal" fullscreen>
        <NuxtImg :src="props.src" :placeholder="img(props.src, { width: 20, blur: 16, quality: 90 })" fit="cover"
            class="size-60 object-center object-cover cursor-pointer transform-gpu transition-all ease-in-out duration-150 will-change-transform group-hover:scale-102 group-hover:group-odd:rotate-2 group-hover:group-even:-rotate-2"
            alt="image-work" loading="lazy" />
        <template #content>
            <div class="h-dvh relative p-4">
                <div class="absolute top-4 right-4 z-10">
                    <UButton aria-label="button to close full preview" variant="ghost" color="neutral" icon="i-lucide-x"
                        class="ring-1 ring-blue-200 text-white" @click="showPreviewModal = false" />
                </div>
                <NuxtImg :src="props.src" :placeholder="img(props.src, { width: 20, blur: 16, quality: 90 })"
                    fit="cover" class="size-full object-center object-cover" loading="lazy" />
            </div>
        </template>
    </UModal>
</template>

<script setup lang="ts">
const showPreviewModal = ref(false)
const img = useImage()

const props = defineProps<{
    src: string
}>()
</script>
