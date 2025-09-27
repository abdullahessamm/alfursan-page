<script lang="ts" setup>
const { elementRef: projectDefinition } = useAnimateOnScroll('sc_animated__fadeInLeft', false, '0.5s', 0, {
  threshold: 1
})
const { elementRef: map } = useAnimateOnScroll('sc_animated__fadeInUp', false, '1s', 0, {
  threshold: 0.2,
})
const { elementRef: teasterImg } = useAnimateOnScroll('sc_animated__fadeInUp', false, '1s', 300, {
  threshold: 0.5,
})
const { elementRef: teasterText } = useAnimateOnScroll('sc_animated__fadeInRight', false, '0.5s', 0, {
  threshold: 1,
})
</script>

<template>
  <nuxt-layout name="section" class="bg-white">
    <!-- project definition -->
    <div class="grid grid-nogutter">
      <div class="col-12 md:col-6">
        <div ref="projectDefinition" class="md:px-2 lg:px-3 font-family-cairo opacity-0">
          <!-- title -->
          <text-title-with-star-component>
            <template #default>عوالى</template>
            <template #colored-text>الفرسان</template>
          </text-title-with-star-component>
          <!-- paragraph -->
          <p class="mr-5 md:mr-6">
            مشروع سكني تجاري متكامل يقع في وجهة الفرسان، إحدى الوجهات المتميزة
            التابعة لـ NHC، ويضم 23 عمارة سكنية بتصميم معماري مستوحى من الطراز
            السلماني العريق الذي يجمع بين الأصالة والحداثة. يوفر المشروع خيارات
            متنوعة من الوحدات بمساحات تبدأ من 54 م² وتصل حتى 221 م²، لتناسب
            احتياجات الأفراد والعائلات على اختلاف متطلباتهم. يمتاز المشروع بموقع
            استراتيجي حيوي يتيح سهولة الوصول إلى المرافق الخدمية والترفيهية،
            ويحتضن مجتمعًا متكاملًا يضم مساحات خضراء واسعة، مرافق تجارية حديثة،
            وخدمات يومية تجعل الحياة أكثر راحة ورفاهية.
          </p>
          <!-- location button -->
          <div class="mt-5 hidden md:block mr-5 md:mr-6">
              <a href="https://www.google.com/maps/d/edit?mid=1LinIMS1QUpqNFTr3gRd-qvd5kc75OvU&usp=sharing" target="_blank">
                <buttons-button-component>فتح الموقع</buttons-button-component>
              </a>
          </div>
        </div>
      </div>
      <!-- map -->
      <div class="col-12 md:col-6">
        <div
          class="md:px-2 lg:px-3 mt-4 md:mt-0 flex justify-content-center h-full"
          style="min-height: 22rem"
        >
          <div ref="map" class="w-full overflow-hidden border-round-2xl shadow-3 opacity-0">
            <map-component />
          </div>
        </div>
      </div>
    </div>
    <!-- teaser block -->
    <div class="grid grid-nogutter flex-wrap-reverse" style="margin-top: 10rem">
      <!-- image -->
      <div class="col-12 md:col-6">
        <div ref="teasterImg" class="md:px-2 lg:px-3 h-full mt-5 opacity-0">
          <img
            src="/assets/imgs/teaster-img.png"
            class="w-full h-full lg:h-25rem border-round-2xl overflow-hidden shadow-3"
            style="object-fit: cover"
          />
        </div>
      </div>
      <!-- teaser -->
      <div class="col-12 md:col-6">
        <div ref="teasterText" class="md:px-2 lg:px-3 font-family-cairo opacity-0">
          <!-- title -->
          <text-title-with-star-component>
            <template #default>حياة</template>
            <template #colored-text>راقية</template>
          </text-title-with-star-component>
          <!-- paragraph -->
          <p class="mr-5 md:mr-6">
            استمتع بأسلوب حياة يجمع بين الراحة والفخامة، بمساحات تبدأ من 54 م²
            حتى 221 م² بتصميمات عصرية وموقع استراتيجي قريب من الجامعات والمراكز
            التجارية. يضم المشروع مجتمعًا متكاملًا يوفر مساحات خضراء، مناطق
            للأطفال، نادي اجتماعي ورياضي، ومساجد، مع خدمات وصيانة على مدار
            الساعة. وبأنظمة دفع مرنة وخطط تقسيط ميسرة، أصبح امتلاك منزلك الجديد
            أقرب وأسهل من أي وقت.
          </p>
          <!-- button -->
          <div class="mt-5 hidden md:block mr-5 md:mr-6">
            <buttons-button-component>
              <div class="flex gap-2 align-items-center">
                <span>استكشف المزيد</span>
                <svg-left-arrow-shape-component class="w-2rem" />
              </div>
            </buttons-button-component>
          </div>
        </div>
      </div>
    </div>
  </nuxt-layout>
</template>
