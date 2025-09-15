<script setup lang="ts">
const state = reactive({
  videoLoading: false,
});

///////////// cover video /////////////
const vidEndOfSplashTime = 8;
// video blob & url
const vidBlob = ref<Blob>();
const vidBlobUrl = computed(() =>
  vidBlob.value ? window.URL.createObjectURL(vidBlob.value) : null
);

// fetch video
async function loadVideo(isMobile: boolean = false) {
  try {
    const response = await fetch(
      isMobile
        ? "/assets/vids/cover-video-mobile.mp4"
        : "/assets/vids/cover-video.mp4"
    );
    vidBlob.value = await response.blob();
    vidBlob.value = new Blob([vidBlob.value], { type: "video/mp4" });
  } finally {
    state.videoLoading = false;
  }
}

onMounted(() => {
  if (state.videoLoading || vidBlob.value) return; // return if video existing or loading

  state.videoLoading = true;
  setTimeout(() => {
    loadVideo(window.innerWidth < 768);
  }, 6000);
}); // fetch video on mount

// video element & state
const videoEl = ref<HTMLVideoElement>();
const vidState = reactive({
  currentTime: 0,
  paused: false,
});

watch(vidState, (val) => {
  if (val.paused) {
    videoEl.value!.currentTime = vidEndOfSplashTime;
    videoEl.value!.play();
    vidState.paused = false;
  }
});
</script>

<template>
  <div class="w-full h-screen">
    <div
      v-if="vidBlobUrl && !state.videoLoading"
      class="w-full h-full relative"
    >
      <!-- background video layer -->
      <video
        ref="videoEl"
        class="w-full h-screen absolute top-0 left-0"
        :src="vidBlobUrl"
        autoplay
        muted
        playsinline
        :style="{ objectFit: 'cover' }"
        @timeupdate="
          vidState.currentTime = ($event.target as HTMLVideoElement).currentTime
        "
        @pause="vidState.paused = true"
      />
      <!-- page content -->
      <div
        v-if="vidState.currentTime >= vidEndOfSplashTime - 0.5"
        class="relative w-full h-screen bg-black-alpha-60"
        :style="{
          animation: 'fadeIn 500ms linear',
        }"
      >
        <!-- sections container -->
        <div
          v-if="vidState.currentTime >= vidEndOfSplashTime"
          class="w-full h-full overflow-x-hidden overflow-y-auto"
          data-simplebar
        >
          <!-- hero section -->
          <section class="sc-hero-section w-full h-screen px-2 lg:px-7">
            <sections-hero-section />
          </section>
          <!-- about section -->
          <section id="about" class="sc-about-section">
            <sections-about-section />
          </section>
          <!-- project features section -->
          <section id="features" class="sc-project-features-section">
            <sections-project-features />
          </section>
          <!-- business dev section -->
          <section class="sc-business-dev-section">
            <sections-business-development-section />
          </section>
          <!-- master plan section -->
          <section class="sc-master-plan-section">
            <sections-master-plan-section />
          </section>
          <!-- why choose us section -->
          <section class="sc-why-choose-us-section">
            <sections-why-choose-us-section />
          </section>
          <!-- footer section -->
          <section class="sc-footer-section">
            <sections-footer />
          </section>
        </div>
      </div>
    </div>
    <!-- loading animation -->
    <div
      v-else-if="state.videoLoading"
      class="w-full h-full flex flex-column gap-4 justify-content-center align-items-center relative"
      :style="{ backgroundColor: useAppConfig().theme.colors.primary }"
    >
      <img
        src="/assets/imgs/araco-logo-white.png"
        class="w-9rem lg:w-11rem animate__animated animate__fadeInUp animate__delay-4s"
        alt="ARACO LOGO"
      >
      <loaders-app-loader
        class="animate__animated animate__fadeIn animate__delay-5s"
      />
      <div class="absolute flex gap-3 align-items-center animate__animated animate__fadeOut animate__delay-3s" dir="ltr">
        <div
          class="sc-img-container flex justify-content-center align-items-center w-5rem h-5rem bg-white overflow-hidden"
          style="border-radius: 50%; animation: fadeInRight 1000ms ease-out forwards;"
        >
          <img
            src="/assets/imgs/swift-care.png"
            class="w-3rem"
            alt="swift care logo"
          >
        </div>
        <span class="text-white animate__animated animate__fadeIn animate__delay-1s">POWERED BY <br> SWIFT CARE</span>
      </div>
    </div>
  </div>
</template>
