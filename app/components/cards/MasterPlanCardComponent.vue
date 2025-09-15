<script lang="ts" setup>
defineProps<{
  title: string
  unit?: string
  number?: number|string
}>()
</script>

<template>
  <p
    class="sc-master-plan-card flex flex-column py-4 justify-content-center align-items-center border-round-xl"
    style="cursor: default"
  >
    <h2><slot name="number">{{ number }}</slot> {{ unit }}</h2>
    <span class="text-xs">{{ title }}</span>
  </p>
</template>

<style lang="css" scoped>
.sc-master-plan-card {
  color: #f4f4f4;
  border: 1px solid #f4f4f4;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
}

.sc-master-plan-card:hover {
  color: #f4f4f4;
  border-color: var(--primary-color);
  background-color: var(--primary-color);
}
</style>
