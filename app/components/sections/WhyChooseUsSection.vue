<template>
  <NuxtLayout name="section" class="bg-white font-family-cairo">
    <!-- header -->
    <div class="flex flex-column gap-8 align-items-center">
      <TextTitleWithStarComponent>
        <template #default>لماذا</template>
        <template #colored-text>تختارنا؟</template>
      </TextTitleWithStarComponent>
      <!-- body -->
      <div class="grid grid-nogutter w-full">
        <!-- cards view -->
        <div class="col-12 md:col-6">
          <div class="px-2 lg:px-3 pb-8 flex flex-column align-items-center">
            <div class="relative" style="z-index: 2; margin-left: -115px;">
              <CardsWhyChooseCardComponent subtitle="عــمــلائــنــا">
                <template #title>+<NumberIncrementComponent :target="10000" :duration="2000" /></template>
              </CardsWhyChooseCardComponent>
              <!-- icon -->
              <img src="/assets/imgs/icons/clients.svg" class="w-5rem absolute" style="top: -30px; left: -20px" >
            </div>
            <div class="relative" style="z-index: 1; margin-right: -115px; margin-top: -18px;">
              <CardsWhyChooseCardComponent subtitle="مشاريع تم إنجازها">
                <template #title><NumberIncrementComponent :target="23" :duration="2000" /></template>
              </CardsWhyChooseCardComponent>
              <!-- icon -->
              <img src="/assets/imgs/icons/projects.svg" class="w-4rem absolute" style="top: -55px; right: -10px" >
            </div>
            <div class="relative" style="z-index: 2; margin-left: -115px; margin-top: -18px;">
              <CardsWhyChooseCardComponent subtitle="الــجــوائــز">
                <template #title><NumberIncrementComponent :target="3" :duration="2000" /></template>
              </CardsWhyChooseCardComponent>
              <!-- icon -->
              <img src="/assets/imgs/icons/awards.svg" class="w-4rem absolute" style="top: -20px; left: -12px" >
            </div>
            <div class="relative" style="z-index: 1; margin-right: -115px; margin-top: -18px;">
              <CardsWhyChooseCardComponent subtitle="عـــام خبــرة">
                <template #title>+<NumberIncrementComponent :target="20" :duration="2000" /></template>
              </CardsWhyChooseCardComponent>
              <!-- icon -->
              <img src="/assets/imgs/icons/experience.svg" class="w-4rem absolute" style="bottom: -20px; left: -25px" >
            </div>
          </div>
        </div>
        <!-- discription -->
        <div class="col-12 md:col-6">
          <div class="px-2 lg:px-3 mt-3">
            <h2 :style="{ color: useAppConfig().theme.colors.primary }">+20 عام خبرة</h2>
            <p class="text-justify text-black-alpha-80">
              ان شركة الرائم هي نتاج و محصلة خبرة طويلة في مجال التطوير العقاري و الانشاء نحن نفخر بكوننا نتصدر الكثير من شركات التطوير العقاري الحديثة و قد شهدت مشاريعنا نموا كبيرا في عدة مناطق يرجع ذلك لتوفيق الله ثم استراتيجية الشركة المستقبلية االتي تتركز على توفير الحلول و المنتجات السكنية في المنطقة الشرقية والرياض والقصيم مختلفة أماكن المملكة ونحرص على اكمال مسيرة العطاء التى بدات منذ ما يقارب العشرين عاما وذلك لاضافة قيمة جديدة للمجتمع وحرصا منا على التوسع فى النشاط العقارى السكنى تماشيا مع رؤية واستراتيجية المملكة2030
            </p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>