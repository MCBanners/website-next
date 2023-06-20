<script setup lang="ts">
import { BlockType } from './util/BlockType'
</script>

<template>
    <div class="banner-container flex justify-center items-center min-w-[150px] min-h-[75px] w-[330px] h-[130px] max-w-[1024px] max-h-[720px] bg-slate-50 text-slate-600 border-2 border-black resize overflow-hidden">
        <div class="relative h-full w-full">
            <StudioUtilBlock :type="BlockType.TEXT" :initial-width="80" data="Yeehaw"></StudioUtilBlock>
        </div>
    </div>
</template>