<script lang="ts" setup>
defineProps<{
  thumbnail: string;
  image: string;
  model: string;
  area: number;
  price: string;
}>();

const showImage = ref(false);
</script>

<template>
  <div
    class="relative w-full h-full bg-white p-3 border-round-2xl shadow-7 overflow-hidden"
  >
    <div class="w-full h-full">
      <img :src="thumbnail" class="w-full h-full" style="object-fit: fill">
    </div>
    <div
      class="absolute flex flex-column gap-3 justify-content-center align-items-center top-0 right-0 w-full h-full bg-black-alpha-70"
      style="backdrop-filter: blur(1px);"
    >
      <div class="text-center">
        <h3
          class="text-2xl px-3 py-1 text-white border-round-3xl"
          :style="{ backgroundColor: useAppConfig().theme.colors.primary }"
        >
          {{ price }} ر.س
        </h3>
        <h3 class="text-xl">
          <span class="ml-2">نموذج</span>
          <span> {{ model }}</span>
        </h3>
        <h3 class="text-xl">{{ area }} م²</h3>
      </div>
      <ButtonsOutlineButtonComponent @click="showImage = true"
        >عرض التفاصيل</ButtonsOutlineButtonComponent
      >
    </div>
  </div>

  <!-- Model Image overlay -->
  <OverlayImageOverLayComponent v-model="showImage" :image-src="image" :image-alt="`نموذج ${model} - ${area} م²`" :show-close-button="false">
    <div class="model-image-container">
      <img :src="image" alt="صورة النموذج" class="model-image">
    </div>
  </OverlayImageOverLayComponent>
</template>

<style scoped>
.model-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.model-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
}
</style>
