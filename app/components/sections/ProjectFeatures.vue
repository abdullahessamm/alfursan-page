<script setup lang="ts">
import { Swiper, SwiperSlide, } from "swiper/vue";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const modules = [EffectCoverflow, Pagination, Autoplay];

const features = ref<{img: string, text: string}[]>([
  {
    img: '/assets/imgs/num-of-buildings.jpg',
    text: 'عدد العمائر 23'
  },
  {
    img: '/assets/imgs/gym.png',
    text: 'أندية رجالية ونسائية مستقلة'
  },
  {
    img: '/assets/imgs/green-space.png',
    text: 'جلسات خارجية'
  },
  {
    img: '/assets/imgs/parking.png',
    text: 'مواقف سيارات مظلة'
  },
  {
    img: '/assets/imgs/elevators.png',
    text: 'عدد المصاعد 42 - 2 مصعد لكل عمارة'
  },
  {
    img: '/assets/imgs/trash.png',
    text: 'مكب نفايات مركزى'
  },
  {
    img: '/assets/imgs/civil-defence.png',
    text: 'نظام دفاع مدنى متكامل'
  },
])
</script>

<template>
  <NuxtLayout name="section" class="text-white font-family-cairo">
    <div class="flex flex-column gap-3 align-items-center">
      <text-title-with-star-component theme-color="#f4f4f4">
        <template #default> مزايا </template>
        <template #colored-text> المشروع </template>
      </text-title-with-star-component>
      <p class="text-center text-white-alpha-70">
        كل ما تحتاجه من العمارات السكنية الحديثة إلى الخدمات المتميزة والمساحات
        الخضراء، استمتع بحياة متكاملة في قلب مجتمع نابض بالحياة.
      </p>
    </div>

    <div class="my-8" />

    <div>
      <Swiper
        effect="coverflow"
        :modules="modules"
        :slides-per-view="'auto'"
        :space-between="30"
        :breakpoints="{
          0: { slidesPerView: 1.5, spaceBetween: 5 },
          768: { slidesPerView: 2.5, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }"
        :coverflow-effect="{
          rotate: 0,
          stretch: 0,
          scale: 0.8,
          modifier: 1,
          slideShadows: true,
        }"
        grab-cursor
        centered-slides
        loop
        autoplay
        :pagination="{el: '.sc-pf-swiper-paginator', clickable: true}"
        class="sc-pf-swiper"
      >
        <SwiperSlide v-for="(feature, i) in features" :key="i">
          <cards-swiper-card-component
            :img-src="feature.img"
            :text="feature.text"
          />
        </SwiperSlide>
      </Swiper>
      <div class="sc-pf-swiper-paginator flex justify-content-center gap-3 mt-6" />
    </div>
  </NuxtLayout>
</template>

<style lang="css">
.sc-pf-swiper-paginator .swiper-pagination-bullet {
  width: 30px;
  height: 4px;
  border-radius: 2px;
  background-color: #ccc;
  opacity: 0.5;
  transition: all 0.3s ease;
  cursor: pointer;
}

.sc-pf-swiper-paginator .swiper-pagination-bullet-active {
  background-color: #f4f4f4;
  opacity: 1;
  transform: scaleX(1.2);
}
</style>