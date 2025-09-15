<script lang="ts" setup>

function mouseClick(e: MouseEvent) {
  console.log('x: ' + e.offsetX)
  console.log('y: ' + e.offsetY)
  console.log('==========================')
}

</script>

<template>
  <div class="flex justify-content-center align-items-center h-screen">
    <img src="/assets/imgs/master-plan.png" style="width: 1000px;" @click="mouseClick">
  </div>
</template>