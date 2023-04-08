<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import type { Ref } from 'vue'
import { BlockType } from './BlockType'

const element = ref<HTMLDivElement>();

interface BlockProps {
    type: BlockType
    initialHeight?: number,
    initialWidth: number,
    selected?: boolean,
    data: string
}

const props = withDefaults(defineProps<BlockProps>(), {
    initialHeight: 16,
    selected: false
})

const state = reactive({
    x: props.initialWidth / 2,
    y: props.initialHeight / 2,
    height: props.initialHeight,
    width: props.initialWidth,
    isSelected: props.selected,
    isHovered: false
})

function setHeight(height: number) {
    state.height = height;
}

function setWidth(width: number) {
    state.width = width;
}

let clientX: number, clientY: number;

function handleMouseDown(event: MouseEvent) {
    console.log("handling mouse down")

    clientX = event.clientX;
    clientY = event.clientY;

    state.isSelected = true;
}

function handleMouseMove(event: MouseEvent) {
    if (state.isSelected && element && element.value) {
        console.log("handling mouse move (is selected, and ref is available)")
        state.x = element.value.offsetLeft - (clientX - event.clientX);
        state.y = element.value.offsetTop - (clientY - event.clientY);

        clientX = event.clientX;
        clientY = event.clientY;
    }
}

function handleMouseUp(event: MouseEvent) {
    state.isSelected = false;
}

function handleMouseOver(event: MouseEvent) {
    state.isHovered = true
}

function handleMouseLeave(event: MouseEvent) {
    state.isSelected = false
    state.isHovered = false
}

const innerBlockClasses = computed(() => {
    return `hover:cursor-grab active:cursor-grabbing ${(state.isHovered || state.isSelected) ? "p-1 border border-dashed border-black" : ""}`
})

// truly dynamic properties cannot be tailwind classes (per docs)
const inlineStyles = computed(() => {
    return `position: absolute; top: ${state.y}px; left: ${state.x}px; height: ${state.height}px; width: ${state.width}px`;
})
</script>

<template>
    <div :style="inlineStyles" @mousedown.prevent="handleMouseDown" @mousemove.prevent="handleMouseMove" @mouseup.prevent="handleMouseUp" @mouseover.prevent="handleMouseOver" @mouseleave.prevent="handleMouseLeave" ref="element">
        <div :class="innerBlockClasses">
            <p v-if="props.type === BlockType.TEXT">{{ props.data }}</p>
            <img v-else-if="props.type === BlockType.IMAGE" :src="'data:image/png;base64,' + props.data" />
            <!-- leaving room for future block types (? don't know if we need them but, maybe) --> 
        </div>
    </div>
</template>