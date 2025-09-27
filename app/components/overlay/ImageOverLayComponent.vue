<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  imageSrc: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    default: ''
  },
  showCloseButton: {
    type: Boolean,
    default: true
  },
  closeOnOverlayClick: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

function closeOnBackFromBrowser(e: PopStateEvent) {
  e.preventDefault()
  emit('update:modelValue', false)
}

watch(props, () => {
  if (props.modelValue) {
    window.addEventListener('popstate', closeOnBackFromBrowser)
  } else {
    window.removeEventListener('popstate', closeOnBackFromBrowser)
  }
}, {
  immediate: true
})

</script>

<template>
  <Teleport to="body">
    <Transition name="overlay-fade">
      <div v-if="modelValue" class="overlay" @click="closeOnOverlayClick && $emit('update:modelValue', false)">
        <div class="image-container" @click.stop>
          <button v-if="showCloseButton" class="close-button" @click="$emit('update:modelValue', false)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <img :src="imageSrc" :alt="imageAlt" class="gallery-image" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.image-container {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.gallery-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.close-button {
  position: absolute;
  top: -40px;
  right: -40px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  color: white;
  transition: background-color 0.2s ease;
}

.close-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Fade transition */
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 0.3s ease;
}

.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}
</style>