<template>
  <div class="flex flex-column w-full h-full">
    <header class="flex justify-content-between align-items-center py-3">
      <img
        src="/assets/imgs/araco-logo-white.png"
        class="w-7rem lg:w-11rem"
        :style="{
          animation:
            'slideInRight 0.5s linear forwards, fadeIn 0.5s linear forwards',
        }"
      />
      <div
        class="text-white text-center"
        :style="{
          animation:
            'slideInLeft 0.5s linear forwards, fadeIn 0.5s linear forwards',
        }"
      >
        <span class="font-family-cairo text-2xl lg:text-5xl">الفرسان</span>
        <br />
        <span class="font-family-montserrat text-sm lg:text-xl">AL-FURSAN</span>
        <br />
        <span class="font-family-montserrat text-sm lg:text-xl">BY NHC</span>
      </div>
    </header>
    <div
      class="flex-grow-1 flex flex-column gap-8 justify-content-center align-items-center text-white font-family-cairo"
    >
      <!-- title & paragraph -->
      <div class="text-center px-3">
        <h1 class="text-3xl lg:text-5xl animate__animated animate__fadeInUp">إطلالة مميزة</h1>
        <p
          class="text-center text-lg lg:text-xl animate__animated animate__fadeIn animate__delay-1s"
          :style="{
            maxWidth: '60rem',
          }"
        >
          تخيّل كل يوم يبدأ بإطلالة على مجتمع متكامل مصمم ليلبّي كل احتياجاتك.
          من العمارات الحديثة البالغ عددها 23 عمارة، إلى المساحات الخضراء
          والمرافق المتنوعة التي تضمن لك الراحة والرفاهية. يتمتع المشروع بموقع
          استراتيجي يسهّل وصولك إلى الجامعات، المراكز التجارية، والطرق الرئيسية،
          لتعيش تجربة سكنية متكاملة تمنحك راحة البال وحياة مليئة بالفرص.
        </p>
      </div>
      <!-- button -->
      <div class="animate__animated animate__fadeIn animate__delay-2s">
        <a href="#about">
          <buttons-scroll-button-component />
        </a>
      </div>
    </div>
  </div>
</template>
