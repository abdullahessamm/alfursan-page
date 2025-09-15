<script lang="ts" setup>
// title
const { elementRef: title } = useAnimateOnScroll(
  "sc_animated__fadeInUp",
  false,
  "1s",
  0,
  {
    threshold: 1,
  }
);
// points
const { elementRef: point1 } = useAnimateOnScroll(
  "sc_animated__fadeInUp",
  false,
  "0.4s",
  1000,
  {
    threshold: 0.2,
  }
)
const { elementRef: point2 } = useAnimateOnScroll(
  "sc_animated__fadeInUp",
  false,
  "0.4s",
  1200,
  {
    threshold: 0.2,
  }
)
const { elementRef: point3 } = useAnimateOnScroll(
  "sc_animated__fadeInUp",
  false,
  "0.4s",
  1400,
  {
    threshold: 0.2,
  }
)

// dividers
const { elementRef: divider1 } = useAnimateOnScroll(
  "animate__fadeIn",
  false,
  "1s",
  1800,
  {
    threshold: 1,
  }
)
const { elementRef: divider2 } = useAnimateOnScroll(
  "animate__fadeIn",
  false,
  "1s",
  1800,
  {
    threshold: 1,
  }
)

// image
const { elementRef: image } = useAnimateOnScroll(
  "animate__fadeIn",
  false,
  "1s",
  0,
  {
    threshold: 1,
  }
)

</script>

<template>
  <nuxt-layout name="section" class="text-white font-family-cairo">
    <!-- title -->
    <div ref="title" class="flex justify-content-center mb-8 opacity-0">
      <text-title-with-star-component theme-color="#f4f4f4">
        <template #default> تطورات </template>
        <template #colored-text> الأعمال </template>
      </text-title-with-star-component>
    </div>
    <!-- content -->
    <div class="grid grid-nogutter flex-wrap-reverse">
      <!-- points -->
      <div class="col-12 md:col-6">
        <div class="px-2 lg:px-3 mt-4 md:mt-0">
          <div ref="point1" class="opacity-0">
            <h3>عنوان 1</h3>
            <p class="text-white-alpha-80">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق.
            </p>
          </div>
          <!-- divider -->
          <div ref="divider1" class="w-4 border-bottom-1 border-white-alpha-50 my-4 opacity-0" />

          <div ref="point2" class="opacity-0">
            <h3>عنوان 2</h3>
            <p class="text-white-alpha-80">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق.
            </p>
          </div>

          <!-- divider -->
          <div ref="divider2" class="w-4 border-bottom-1 border-white-alpha-50 my-4 opacity-0" />

          <div ref="point3" class="opacity-0">
            <h3>عنوان 3</h3>
            <p class="text-white-alpha-80">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق.
            </p>
          </div>
        </div>
      </div>
      <!-- image -->
      <div class="col-12 md:col-6">
        <div ref="image" class="px-2 lg:px-3 h-full opacity-0">
          <img
            src="/assets/imgs/crane.png"
            class="w-full h-full"
            style="object-fit: cover"
          />
        </div>
      </div>
    </div>
  </nuxt-layout>
</template>
