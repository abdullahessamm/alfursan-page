<template>
  <div id="map" style="height: 100%; width: 100%;" />
</template>

<script setup>

const { $leaflet, $omnivore } = useNuxtApp()

onMounted(() => {
  const map = $leaflet.map("map").setView([24.959, 46.835], 13);

  // add tile layer
  $leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; Swift Care Programming Team'
  }).addTo(map);

  // add kml layer
  $omnivore.kml("assets/map/fursan.kml").addTo(map);
});
</script>
