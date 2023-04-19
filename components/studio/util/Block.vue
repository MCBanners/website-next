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
    mouseOver: false
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
        const parentRect = element.value.parentNode.getBoundingClientRect();
        const elementRect = element.value.getBoundingClientRect();
        const maxHorizontal = parentRect.width - elementRect.width;
        const maxVertical = parentRect.height - elementRect.height;
        
        const newX = element.value.offsetLeft - (clientX - event.clientX);
        const newY = element.value.offsetTop - (clientY - event.clientY);

        if ((newX >= 0 && newX <= maxHorizontal) && 
                (newY >= 0 && newY <= maxVertical)) {

            state.x = newX;
            state.y = newY;
        }

        clientX = event.clientX;
        clientY = event.clientY;
    }
}

function handleMouseUp(event: MouseEvent) {
    state.isSelected = false;
    state.mouseOver = false;
}

function handleMouseOver(event: MouseEvent) {
    state.mouseOver = true;
}

function handleMouseLeave(event: MouseEvent) {
    if (state.isSelected) {
        handleMouseMove(event);
    } else {
        // mouse left, mouse is up; user no longer wants this element
        state.mouseOver = false;
    }
}

const innerBlockClasses = computed(() => {
    return `hover:cursor-grab active:cursor-grabbing ${(state.mouseOver || state.isSelected) ? "p-0.5 border border-dashed border-black" : ""}`
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
