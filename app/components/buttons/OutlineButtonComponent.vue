<template>
  <span
    class="btn inline-block py-2 px-5 border-round-xl border-1 text-white text-sm cursor-pointer"
    :style="{ backgroundColor: 'transparent' }"
  >
    <slot />
  </span>
</template>

<style lang="css" scoped>
.btn {
  transition: color 150ms linear, background-color 150ms linear;
}

.btn:hover {
  color: #333 !important;
  background-color: #fff !important;
}

.btn:active {
  transition-duration: 0ms;
  transform: scale(0.95);
}

.btn::selection {
  background-color: transparent;
}
</style>