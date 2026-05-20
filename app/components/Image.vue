<template>
    <UModal v-model:open="showPreviewModal" fullscreen>
        <!-- THUMBNAIL: Added @click to trigger the modal -->
        <NuxtImg 
            @click="showPreviewModal = true"
            :src="props.src" 
            :placeholder="img(props.src, { width: 20, blur: 16, quality: 90 })" 
            fit="cover"
            class="w-full h-full object-center object-cover cursor-pointer transform-gpu transition-all ease-in-out duration-300 will-change-transform group-hover:scale-105"
            alt="2600 Studios - Gallery Work" 
            loading="lazy" 
        />
        
        <template #content>
            <!-- MODAL WRAPPER: Pure black background for high contrast -->
            <div class="h-dvh relative p-4 bg-black dark:bg-black">
                <div class="absolute top-6 right-6 z-50">
                    <!-- CLOSE BUTTON: Removed blue ring, added #E4002B red hover -->
                    <UButton 
                        aria-label="Close full preview" 
                        variant="ghost" 
                        icon="i-lucide-x"
                        class="text-white hover:text-[#E4002B] hover:bg-transparent transition-colors duration-200 size-10" 
                        @click="showPreviewModal = false" 
                    />
                </div>
                
                <!-- FULL PREVIEW: Changed to object-contain so photos aren't cropped -->
                <NuxtImg 
                    :src="props.src" 
                    :placeholder="img(props.src, { width: 20, blur: 16, quality: 90 })"
                    fit="contain" 
                    class="size-full object-center object-contain" 
                    loading="lazy" 
                />
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
