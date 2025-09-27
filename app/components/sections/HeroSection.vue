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
      class="flex-grow-1 flex flex-column gap-5 justify-content-center align-items-center text-white font-family-cairo"
    >
      <!-- title, paragraph, prices buttons -->
      <!-- <div class="text-center px-3">
        <h1 class="text-3xl lg:text-5xl animate__animated animate__fadeInUp">
          بأسعار تبدأ من
        </h1>
        <h2>
          <span class="ml-2">للمستفيدين من الدعم</span>
          <span
            :style="{
              backgroundColor: 'var(--primary-color)',
              padding: '0 1rem',
              borderRadius: '1rem',
              textWrap: 'nowrap',
            }"
            >541,790 ر.س لمساحة 127.48 م²</span
          >
          <span class="mx-2">لغير المستفيدين</span>
          <span
            :style="{
              backgroundColor: 'var(--primary-color)',
              padding: '0 1rem',
              borderRadius: '1rem',
              textWrap: 'nowrap',
            }"
            >415,173 ر.س لمساحة 78.04 م²</span
          >
        </h2>
        <p
          class="text-center text-md lg:text-xl animate__animated animate__fadeIn animate__delay-1s"
          :style="{
            maxWidth: '70rem',
          }"
        >
          مجتمع سكني متكامل بـ 23 عمارة حديثة، مساحات خضراء، مرافق متنوعة، وموقع استراتيجي قريب من الجامعات والمراكز التجارية والطرق الرئيسية، ليمنحك أسلوب حياة عصرية وراحة متكاملة. <br />
        </p>
      </div> -->
      <div class="hero-text text-center text-white">
        <h1 class="text-sm lg:text-3xl font-bold mb-2 md:mb-4 animate__animated animate__fadeInUp">
          مجتمع سكني متكامل يضم 23 عمارة حديثة، مساحات خضراء، مرافق متنوعة،
          وموقع استراتيجي قريب من الجامعات والمراكز التجارية والطرق الرئيسية،
          ليمنحك راحة عصرية وحياة متكاملة.
        </h1>

        <h2 class="text-xl lg:text-3xl font-bold mb-2 md:mb-4 animate__animated animate__fadeIn animate__delay-1s">بأسعار تبدأ من</h2>

        <div
          class="flex flex-column md:flex-row align-items-center justify-content-center gap-2 md:gap-4 mb-2 md:mb-4 animate__animated animate__fadeIn animate__delay-1s"
        >
          <div
            class="w-15rem py-3 border-round-2xl"
            style="background-color: var(--primary-color)"
          >
            <p class="font-semibold">للمستفيدين من الدعم</p>
            <p class="text-2xl font-bold text-blue-400">541,790 ر.س</p>
            <p class="text-sm">لمساحة 127.48م²</p>
          </div>

          <div
            class="w-15rem py-3 border-round-2xl"
            style="background-color: var(--primary-color)"
          >
            <p class="font-semibold">لغير المستفيدين</p>
            <p class="text-2xl font-bold text-blue-400">415,173 ر.س</p>
            <p class="text-sm">لمساحة 78.04م²</p>
          </div>
        </div>
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
