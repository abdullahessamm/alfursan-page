<script lang="ts" setup>
interface IModel {
  model: string;
  area: number;
  price: string;
}

// data
const modelsData: IModel[] = [
  {
    model: "F",
    area: 78.04,
    price: "415,173",
  },
  {
    model: "S",
    area: 109.09,
    price: "580,359",
  },
  {
    model: "B",
    area: 131.22,
    price: "698,090",
  },
  {
    model: "G",
    area: 134.73,
    price: "716,764",
  },
  {
    model: "F",
    area: 135.78,
    price: "722,350",
  },
  {
    model: "W",
    area: 147.31,
    price: "783,689",
  },
  {
    model: "D",
    area: 148.22,
    price: "788,530",
  },
  {
    model: "N",
    area: 149.83,
    price: "797,096",
  },
  {
    model: "V",
    area: 157.98,
    price: "840,454",
  },
  {
    model: "C",
    area: 195.39,
    price: "1,039,475",
  },
  {
    model: "H",
    area: 221.59,
    price: "1,178,859",
  },
];

// state
const state = reactive({
  collapsed: true,
  showPriceList: false,
});

const modelsToBeRendered = computed(() => {
  if (state.collapsed) return modelsData.slice(0, 4);
  return modelsData;
});

// price lists
const imageSrc = ref<string>("");
function showPriceList(imgSrc: string) {
  imageSrc.value = imgSrc;
  state.showPriceList = true;
}

watch(state, () => {
  if (state.collapsed) window.location.href = "#models-section-wrapper";
});

// animations
const { elementRef: cards } = useAnimateOnScroll(
  "sc_animated__fadeInUp",
  false,
  "1s",
  0,
  {
    threshold: 0.3,
  }
);
</script>

<template>
  <NuxtLayout name="section" class="text-white font-family-cairo">
    <div
      id="models-section-wrapper"
      ref=""
      class="flex flex-column gap-2 align-items-center"
    >
      <TextTitleWithStarComponent theme-color="#f4f4f4">
        <template #default>النماذج والأسعار</template>
      </TextTitleWithStarComponent>
      <!-- paragraph -->
      <p class="text-center text-white-alpha-70">
        اكتشف مجموعة مميزة من الوحدات السكنية بتصاميم عصرية تناسب احتياجات
        الأسرة، مع مساحات متنوعة وأسعار تنافسية. اختر النموذج اللي يناسبك.<br />
        كشف الأسعار للمستفيدين بالدعم
        <span
          class="underline font-bold cursor-pointer"
          style="color: #fff; text-wrap: nowrap"
          @click="showPriceList('/assets/imgs/price_list_support.jpg')"
          >اضغط هنا</span
        ><br />
        كشف الأسعار للغير مستفيدين بالدعم
        <span
          class="underline font-bold cursor-pointer"
          style="color: #fff; text-wrap: nowrap"
          @click="showPriceList('/assets/imgs/price_list.jpg')"
          >اضغط هنا</span
        >
      </p>
      <!-- cards -->
      <div ref="cards" class="mt-6 opacity-0">
        <div class="grid grid-nogutter">
          <div
            v-for="(model, index) in modelsToBeRendered"
            :key="index"
            class="col-12 md:col-6 lg:col-4 xl:col-3"
          >
            <div class="p-2 h-25rem">
              <CardsModelsCardComponent
                :thumbnail="`/assets/imgs/models/thumbnails/${model.model}_${model.area}.png`"
                :image="`/assets/imgs/models/${model.model}_${model.area}.jpg`"
                :model="model.model"
                :area="model.area"
                :price="model.price"
              />
            </div>
          </div>
        </div>
        <!-- button -->
        <div class="flex justify-content-center">
          <ButtonsOutlineButtonComponent
            class="mt-4"
            @click="state.collapsed = !state.collapsed"
          >
            {{ state.collapsed ? "عرض الكل" : "عرض أقل" }}
          </ButtonsOutlineButtonComponent>
        </div>
      </div>
    </div>
  </NuxtLayout>
  <!-- overlay image -->
  <OverlayImageOverLayComponent
    v-model="state.showPriceList"
    :image-src="imageSrc"
    image-alt="كشف أسعار"
    :show-close-button="false"
  />
</template>
