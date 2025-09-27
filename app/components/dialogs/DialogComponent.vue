<script lang="ts" setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value: string) => ['small', 'medium', 'large', 'full'].includes(value)
  },
  showCloseButton: {
    type: Boolean,
    default: true
  },
  closeOnOverlayClick: {
    type: Boolean,
    default: true
  }
});

defineEmits(['update:modelValue']);
</script>

<template>
  <Teleport to="body">
    <Transition name="dialog-fade">
      <div v-if="modelValue" class="dialog-overlay" @click="closeOnOverlayClick && $emit('update:modelValue', false)">
        <div class="dialog-container" :class="[size]" @click.stop>
          <div class="dialog-header">
            <h3 class="dialog-title">{{ title }}</h3>
            <button v-if="showCloseButton" class="dialog-close" @click="$emit('update:modelValue', false)">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div class="dialog-content">
            <slot />
          </div>
          <div v-if="$slots.footer" class="dialog-footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="css" scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.dialog-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.dialog-container.small {
  width: 300px;
}

.dialog-container.medium {
  width: 500px;
}

.dialog-container.large {
  width: 800px;
}

.dialog-container.full {
  width: 90%;
  height: 90vh;
}

.dialog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid #eee;
  background-color: var(--primary-color, #253D6D);
  color: white;
}

.dialog-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.dialog-close {
  background: transparent;
  border: none;
  cursor: pointer;
  color: white;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 150ms linear;
}

.dialog-close:hover {
  transform: scale(1.1);
}

.dialog-content {
  padding: 20px;
  overflow-y: auto;
  flex: 1;
}

.dialog-footer {
  padding: 16px 20px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

/* Transition effects */
.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.3s ease;
}

.dialog-fade-enter-from,
.dialog-fade-leave-to {
  opacity: 0;
}

.dialog-fade-enter-active .dialog-container {
  animation: dialog-zoom-in 0.3s ease forwards;
}

.dialog-fade-leave-active .dialog-container {
  animation: dialog-zoom-out 0.3s ease forwards;
}

@keyframes dialog-zoom-in {
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
}

@keyframes dialog-zoom-out {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.9);
  }
}
</style>