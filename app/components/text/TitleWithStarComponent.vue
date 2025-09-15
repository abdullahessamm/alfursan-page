<script lang="ts" setup>
defineProps<{
  themeColor?: string;
}>();
</script>

<template>
  <div class="flex relative">
    <svg-star-shape-component
      class="w-2rem md:w-3rem h-2rem md:h-3rem"
      :fill-color="themeColor"
    />
    <h3 class="font-bold mt-3 md:mt-4 text-xl md:text-3xl">
      <slot /> <span :style="{ color: themeColor || '#2e4881' }"><slot name="colored-text"/></span>
    </h3>
  </div>
</template>
