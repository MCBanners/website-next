<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Panzoom from '@panzoom/panzoom'

const canvasContainer = ref(null)

onMounted(() => {
    console.log("Initializing panzoom")

    const element = (canvasContainer.value as unknown) as HTMLElement;
    const panzoom = Panzoom(element, {
        animate: true,
        excludeClass: 'banner-block',
        maxScale: 3,
        minScale: 0.75
    });

    element.addEventListener('wheel', panzoom.zoomWithWheel);
    console.log("Panzoom initialized");
})
</script>

<template>
    <section id="workspace" ref="canvasContainer" class="flex w-full justify-center items-center overflow-hidden">
        <StudioBannerCanvas />
    </section>
</template>

<style lang="scss">
#workspace {
    background: url('~/assets/image/pattern/studio/dot-grid.webp');
    background-repeat: repeat;
}
</style>