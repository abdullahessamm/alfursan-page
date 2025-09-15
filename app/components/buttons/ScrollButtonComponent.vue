<script setup lang="ts">
defineEmits<{
  (e: "click"): void
}>()
</script>

<template>
  <div class="scroll-button" @click="$emit('click')">
    <div class="circle" />
  </div>
</template>

<style lang="css" scoped>
@keyframes scroll {
  from {
    top: -100%;
  }
  to {
    top: 120%;
  }
}

.scroll-button {
  width: 30px;
  height: 50px;
  border: 2px solid #f4f4f4;
  border-radius: 500px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.scroll-button .circle {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: #f4f4f4;
  position: absolute;
  top: -50%;
  animation: scroll 1500ms linear infinite;
}
</style>
