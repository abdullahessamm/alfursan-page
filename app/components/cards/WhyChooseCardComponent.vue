<script lang="ts" setup>
defineProps<{
  subtitle: string
}>()
</script>

<template>
    <div class="sc-wcu-card px-4 border-round-2xl" style="background-color: #fff">
      <span class="text-4xl font-bold" style="color: #292E3D"><slot name="title" /></span>
      <div class="px-2 pb-3">
        <span class="pr-2 pl-5" :style="{
          borderRight: '5px solid #F9995D',
          color: '#667299',
          wordSpacing: '2px',
        }">{{ subtitle }}</span>
      </div>
    </div>
</template>

<style lang="css">
.sc-wcu-card {
  box-shadow: 0px 4px 122px 0px #C7DAFF;
}
</style>