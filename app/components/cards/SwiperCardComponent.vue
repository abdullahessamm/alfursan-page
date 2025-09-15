<script lang="ts" setup>
defineProps<{
  imgSrc: string
  text?: string
}>()
</script>

<template>
  <div class="sc-swiper-card w-full h-15rem lg:h-20rem relative border-round-2xl overflow-hidden">
    <img :src="imgSrc" class="w-full h-full" style="object-fit: cover">
    <div class="absolute bottom-0 w-full py-4 text-center" style="background-color: #253D6Dc0;">
      <slot name="text">
        <span class="font-bold">{{ text }}</span>
      </slot>
    </div>
  </div>
</template>