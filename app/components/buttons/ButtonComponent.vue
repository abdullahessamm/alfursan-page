<template>
  <span
    class="btn inline-block px-7 py-2 border-round-3xl text-white text-sm cursor-pointer"
    :style="{ backgroundColor: useAppConfig().theme.colors.primary }"
  >
    <slot />
  </span>
</template>

<style lang="css" scoped>
.btn {
  box-shadow: 0 0 0 var(--primary-color);
  transition: transform 150ms linear, box-shadow 150ms linear;
}

.btn:hover {
  transform: scale(1.03);
  box-shadow: 0 0 7px var(--primary-color);
}

.btn:active {
  transition-duration: 0ms;
  transform: scale(1);
  box-shadow: 0 0 0 var(--primary-color);
}

.btn::selection {
  background-color: transparent;
}
</style>