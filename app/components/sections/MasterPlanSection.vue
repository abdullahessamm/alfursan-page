<script lang="ts" setup>
interface BlockData {
  block: number | "total";
  lotArea: number;
  footPrint: number;
  footPrintPercentage: number;
  greenAreaPercentage: number;
  interlockPercentage: number;
  insideRoad: number;
  insideRoadPercentage: number;
  noOfParkings: number;
}

interface BuildingData {
  block: number;
  building: string;
  buildingArea: number;
  greenArea: number;
}

const blocksData: BlockData[] = [
  {
    block: 292,
    lotArea: 8705.89,
    footPrint: 3190.33,
    footPrintPercentage: 36.65,
    greenAreaPercentage: 7.663,
    interlockPercentage: 19.2,
    insideRoad: 1333.29,
    insideRoadPercentage: 15.31,
    noOfParkings: 106,
  },
  {
    block: 293,
    lotArea: 21273.2,
    footPrint: 7919.79,
    footPrintPercentage: 37.23,
    greenAreaPercentage: 9.971,
    interlockPercentage: 14.992,
    insideRoad: 3059.38,
    insideRoadPercentage: 14.38,
    noOfParkings: 221,
  },
  {
    block: 294,
    lotArea: 5232.64,
    footPrint: 1345.32,
    footPrintPercentage: 25.71,
    greenAreaPercentage: 8.003,
    interlockPercentage: 28.983,
    insideRoad: 720.45,
    insideRoadPercentage: 13.77,
    noOfParkings: 32,
  },
  {
    block: 295,
    lotArea: 11777.35,
    footPrint: 3954.54,
    footPrintPercentage: 33.58,
    greenAreaPercentage: 12.113,
    interlockPercentage: 14.604,
    insideRoad: 1773.48,
    insideRoadPercentage: 15.06,
    noOfParkings: 128,
  },
  {
    block: 296,
    lotArea: 6640.21,
    footPrint: 2315.7,
    footPrintPercentage: 34.87,
    greenAreaPercentage: 10.51,
    interlockPercentage: 15.826,
    insideRoad: 942.26,
    insideRoadPercentage: 14.19,
    noOfParkings: 75,
  },
  {
    block: "total",
    lotArea: 53629.3,
    footPrint: 18725.68,
    footPrintPercentage: 34.92,
    greenAreaPercentage: 9.94,
    interlockPercentage: 16.2,
    insideRoad: 7828.9,
    insideRoadPercentage: 14.6,
    noOfParkings: 562,
  },
];

const buildingsData: BuildingData[] = [
  {
    block: 292,
    building: "G1",
    buildingArea: 537.88,
    greenArea: 68.44,
  },
  {
    block: 292,
    building: "F1",
    buildingArea: 803.93,
    greenArea: 102.29,
  },
  {
    block: 292,
    building: "B1",
    buildingArea: 816.12,
    greenArea: 103.84,
  },
  {
    block: 292,
    building: "G2",
    buildingArea: 537.88,
    greenArea: 68.44,
  },
  // 293
  {
    block: 293,
    building: "A3",
    buildingArea: 575.99,
    greenArea: 107.84,
  },
  {
    block: 293,
    building: "C2",
    buildingArea: 803.8,
    greenArea: 105.5,
  },
  {
    block: 293,
    building: "C3",
    buildingArea: 803.8,
    greenArea: 105.5,
  },
  {
    block: 293,
    building: "A4",
    buildingArea: 575.99,
    greenArea: 107.84,
  },
  {
    block: 293,
    building: "C4",
    buildingArea: 803.8,
    greenArea: 150.5,
  },
  {
    block: 293,
    building: "C5",
    buildingArea: 803.8,
    greenArea: 150.5,
  },
  {
    block: 293,
    building: "A5",
    buildingArea: 575.99,
    greenArea: 107.84,
  },
  {
    block: 293,
    building: "F2",
    buildingArea: 803.93,
    greenArea: 150.52,
  },
  {
    block: 293,
    building: "E1",
    buildingArea: 575.99,
    greenArea: 107.84,
  },
  // 294
  {
    block: 294,
    building: "R1",
    buildingArea: 672.66,
    greenArea: 130.9,
  },
  {
    block: 294,
    building: "D2",
    buildingArea: 672.66,
    greenArea: 130.9,
  },
  // 295
  {
    block: 295,
    building: "G3",
    buildingArea: 537.88,
    greenArea: 145.99,
  },
  {
    block: 295,
    building: "F3",
    buildingArea: 803.93,
    greenArea: 218.2,
  },
  {
    block: 295,
    building: "G4",
    buildingArea: 537.88,
    greenArea: 145.99,
  },
  {
    block: 295,
    building: "F4",
    buildingArea: 803.93,
    greenArea: 218.2,
  },
  {
    block: 295,
    building: "G5",
    buildingArea: 537.88,
    greenArea: 145.99,
  },
  // 296
  {
    block: 296,
    building: "G6",
    buildingArea: 537.88,
    greenArea: 115.83,
  },
  {
    block: 296,
    building: "B2",
    buildingArea: 816.12,
    greenArea: 175.75,
  },
  {
    block: 296,
    building: "G7",
    buildingArea: 537.88,
    greenArea: 115.83,
  },
];

const selectedPolygons = ref([] as { name: string; block: string }[]);

const isBuildingSelected = computed(() => selectedPolygons.value.length === 1);

const selectedBlockData = computed(() => {
  if (isBuildingSelected.value) return null;
  return (
    blocksData.find(
      (b) => b.block.toString() === selectedPolygons.value[0]?.block
    ) ?? blocksData[blocksData.length - 1]
  );
});

const selectedBuildingData = computed(() =>
  buildingsData.find(
    (b) =>
      b.building.toUpperCase() === selectedPolygons.value[0]?.name.toUpperCase()
  )
);

// section state
const state = reactive({
  showHint: true,
});
</script>

<template>
  <NuxtLayout
    name="section"
    class="text-white font-family-cairo justify-content-center"
  >
    <div style="max-width: 800px; margin: 0 auto">
      <!-- title -->
      <div class="flex justify-content-center">
        <TextTitleWithStarComponent theme-color="#f4f4f4">
          <template #default>استكشف</template>
          <template #colored-text>المساحات</template>
        </TextTitleWithStarComponent>
      </div>
      <!-- svg -->
      <div class="flex justify-content-center mt-4">
        <div class="w-full relative border-round-2xl shadow-3 overflow-hidden">
          <SvgMasterPlanComponent
            @update:selected-polygons="selectedPolygons = $event"
          />
          <!-- hint overlay -->
          <div
            v-if="state.showHint"
            class="absolute top-0 left-0 w-full h-full p-2 flex flex-column gap-4 justify-content-center align-items-center bg-black-alpha-70 text-white"
          >
            <div class="text-center">
              <h4>كيف يعمل هذا؟</h4>
              <p class="text-sm" style="color: #d4d4d4">
                يمكنك الضغط على رقم قطعة الأرض لعرض تفاصيل المساحات الخاصة بها،
                وكذلك مع كل مبنى.
              </p>
            </div>
            <ButtonsOutlineButtonComponent @click="state.showHint = false"
              >ابدأ الان !</ButtonsOutlineButtonComponent
            >
          </div>
        </div>
      </div>
      <!-- specifications -->
      <div class="mt-4 grid grid-nogutter font-family-cairo">
        <div class="col-6 md:col-3">
          <div class="p-1">
            <CardsMasterPlanCardComponent
              v-if="!isBuildingSelected"
              title="مساحة الأرض"
              unit="م²"
              :number="selectedBlockData?.lotArea"
            >
              <template #number>
                <NumberIncrementComponent
                  :target="selectedBlockData?.lotArea ?? 0"
                />
              </template>
            </CardsMasterPlanCardComponent>
            <CardsMasterPlanCardComponent v-else title="رقم قطعة الأرض">
              <template #number>
                <NumberIncrementComponent
                  :target="selectedBuildingData?.block ?? 0"
                />
              </template>
            </CardsMasterPlanCardComponent>
          </div>
        </div>
        <div class="col-6 md:col-3">
          <div class="p-1">
            <CardsMasterPlanCardComponent
              v-if="!isBuildingSelected"
              title="مساحة المباني"
              unit="م²"
            >
              <template #number>
                <NumberIncrementComponent
                  :target="selectedBlockData?.footPrint ?? 0"
                />
              </template>
            </CardsMasterPlanCardComponent>
            <CardsMasterPlanCardComponent
              v-else
              title="أسم المبنى"
              :number="selectedBuildingData?.building.toUpperCase()"
            />
          </div>
        </div>
        <div class="col-6 md:col-3">
          <div class="p-1">
            <CardsMasterPlanCardComponent
              v-if="!isBuildingSelected"
              title="نسبة المبانى"
              unit="%"
            >
              <template #number>
                <NumberIncrementComponent
                  :target="selectedBlockData?.footPrintPercentage ?? 0"
                />
              </template>
            </CardsMasterPlanCardComponent>
            <CardsMasterPlanCardComponent v-else title="مساحة المبنى" unit="م²">
              <template #number>
                <NumberIncrementComponent
                  :target="selectedBuildingData?.buildingArea ?? 0"
                />
              </template>
            </CardsMasterPlanCardComponent>
          </div>
        </div>
        <div class="col-6 md:col-3">
          <div class="p-1">
            <CardsMasterPlanCardComponent
              v-if="!isBuildingSelected"
              title="المساحات الخضراء"
              unit="%"
            >
              <template #number>
                <NumberIncrementComponent
                  :target="selectedBlockData?.greenAreaPercentage ?? 0"
                />
              </template>
            </CardsMasterPlanCardComponent>
            <CardsMasterPlanCardComponent
              v-else
              title="المساحات الخضراء"
              unit="م²"
            >
              <template #number>
                <NumberIncrementComponent
                  :target="selectedBuildingData?.greenArea ?? 0"
                />
              </template>
            </CardsMasterPlanCardComponent>
          </div>
        </div>
        <div v-if="!isBuildingSelected" class="col-6 md:col-3">
          <div class="p-1">
            <CardsMasterPlanCardComponent title="نسبة أنترلوك" unit="%">
              <template #number>
                <NumberIncrementComponent
                  :target="selectedBlockData?.interlockPercentage ?? 0"
                />
              </template>
            </CardsMasterPlanCardComponent>
          </div>
        </div>
        <div v-if="!isBuildingSelected" class="col-6 md:col-3">
          <div class="p-1">
            <CardsMasterPlanCardComponent title="مساحة ممرات المشاة" unit="م²">
              <template #number>
                <NumberIncrementComponent
                  :target="selectedBlockData?.insideRoad ?? 0"
                />
              </template>
            </CardsMasterPlanCardComponent>
          </div>
        </div>
        <div v-if="!isBuildingSelected" class="col-6 md:col-3">
          <div class="p-1">
            <CardsMasterPlanCardComponent title="نسبة ممرات المشاة" unit="%">
              <template #number>
                <NumberIncrementComponent
                  :target="selectedBlockData?.insideRoadPercentage ?? 0"
                />
              </template>
            </CardsMasterPlanCardComponent>
          </div>
        </div>
        <div v-if="!isBuildingSelected" class="col-6 md:col-3">
          <div class="p-1">
            <CardsMasterPlanCardComponent title="مواقف السيارات">
              <template #number>
                <NumberIncrementComponent
                  :target="selectedBlockData?.noOfParkings ?? 0"
                />
              </template>
            </CardsMasterPlanCardComponent>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
