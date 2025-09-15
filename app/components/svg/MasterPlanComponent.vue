<template>
  <div class="polygon-container">
    <svg
      :width="svgWidth"
      :height="svgHeight"
      :viewBox="`0 0 ${imageWidth} ${imageHeight}`"
      class="polygon-svg"
    >
      <!-- Background Image -->
      <image
        href="/assets/imgs/master-plan.png"
        :width="imageWidth"
        :height="imageHeight"
        x="0"
        y="0"
      />

      <!-- Polygons -->
      <template v-for="(items, block) in polygonData" :key="block">
        <polygon
          v-for="item in items"
          :key="`${block}-${item.name}`"
          :points="getPolygonPoints(item.polygon)"
          :fill="getPolygonFill({ ...item, block })"
          :stroke-width="strokeWidth"
          :data-name="item.name"
          :data-block="block"
          class="polygon-area"
          @click="onPolygonClick({ ...item, block })"
          @mouseover="onPolygonHover({ ...item, block })"
          @mouseout="onPolygonLeave({ ...item, block })"
        />
      </template>
      <!-- Block selection buttons -->
      <!-- 292 block -->
      <g @mouseover="onBlockHover('292')" @mouseout="onBlockLeave">
        <circle
          :cx="addBlockButton('292', -160).x"
          :cy="addBlockButton('292', 0, -20).y"
          r="25"
          :fill="addBlockButton('292').fill"
          class="block-select-button"
          @click="onBlockClick('292')"
        />
        <text
          :x="addBlockButton('292', -160).x"
          :y="addBlockButton('292', 0, -20).y"
          text-anchor="middle"
          dominant-baseline="middle"
          class="block-select-text"
          @click="onBlockClick('292')"
        >
          292
        </text>
        <text
          :x="addBlockButton('292', -160).x"
          :y="addBlockButton('292', 0, 30).y"
          text-anchor="middle"
          dominant-baseline="middle"
          class="block-select-text"
          @click="onBlockClick('292')"
        >
          قطعة رقم
        </text>
      </g>
      <!-- 293 block -->
      <g @mouseover="onBlockHover('293')" @mouseout="onBlockLeave">
        <circle
          :cx="addBlockButton('293', -220).x"
          :cy="addBlockButton('293', 0, -30).y"
          r="25"
          :fill="addBlockButton('293').fill"
          class="block-select-button"
          @click="onBlockClick('293')"
        />
        <text
          :x="addBlockButton('293', -220).x"
          :y="addBlockButton('293', 0, -30).y"
          text-anchor="middle"
          dominant-baseline="middle"
          class="block-select-text"
          @click="onBlockClick('293')"
        >
          293
        </text>
        <text
          :x="addBlockButton('293', -220).x"
          :y="addBlockButton('293', 0, 15).y"
          text-anchor="middle"
          dominant-baseline="middle"
          class="block-select-text"
          @click="onBlockClick('293')"
        >
          قطعة رقم
        </text>
      </g>
      <!-- 294 block -->
      <g @mouseover="onBlockHover('294')" @mouseout="onBlockLeave">
        <circle
          :cx="addBlockButton('294', -40).x"
          :cy="addBlockButton('294', 0, 130).y"
          r="25"
          :fill="addBlockButton('294').fill"
          class="block-select-button"
          @click="onBlockClick('294')"
        />
        <text
          :x="addBlockButton('294', -40).x"
          :y="addBlockButton('294', 0, 130).y"
          text-anchor="middle"
          dominant-baseline="middle"
          class="block-select-text"
          @click="onBlockClick('294')"
        >
          294
        </text>
        <text
          :x="addBlockButton('294', -40).x"
          :y="addBlockButton('294', 0, 180).y"
          text-anchor="middle"
          dominant-baseline="middle"
          class="block-select-text"
          @click="onBlockClick('294')"
        >
          قطعة رقم
        </text>
      </g>
      <!-- 295 block -->
      <g @mouseover="onBlockHover('295')" @mouseout="onBlockLeave">
        <circle
          :cx="addBlockButton('295', -160).x"
          :cy="addBlockButton('295', 0, 120).y"
          r="25"
          :fill="addBlockButton('295').fill"
          class="block-select-button"
          @click="onBlockClick('295')"
        />
        <text
          :x="addBlockButton('295', -160).x"
          :y="addBlockButton('295', 0, 120).y"
          text-anchor="middle"
          dominant-baseline="middle"
          class="block-select-text"
          @click="onBlockClick('295')"
        >
          295
        </text>
        <text
          :x="addBlockButton('295', -160).x"
          :y="addBlockButton('295', 0, 170).y"
          text-anchor="middle"
          dominant-baseline="middle"
          class="block-select-text"
          @click="onBlockClick('295')"
        >
          قطعة رقم
        </text>
      </g>
      <!-- 296 block -->
      <g @mouseover="onBlockHover('296')" @mouseout="onBlockLeave">
        <circle
          :cx="addBlockButton('296', -100).x"
          :cy="addBlockButton('296', 0, 100).y"
          r="25"
          :fill="addBlockButton('296').fill"
          class="block-select-button"
          @click="onBlockClick('296')"
        />
        <text
          :x="addBlockButton('296', -100).x"
          :y="addBlockButton('296', 0, 100).y"
          text-anchor="middle"
          dominant-baseline="middle"
          class="block-select-text"
          @click="onBlockClick('296')"
        >
          296
        </text>
        <text
          :x="addBlockButton('296', -100).x"
          :y="addBlockButton('296', 0, 150).y"
          text-anchor="middle"
          dominant-baseline="middle"
          class="block-select-text"
          @click="onBlockClick('296')"
        >
          قطعة رقم
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "PolygonSVG",
  props: {
    imageWidth: {
      type: Number,
      default: 1332,
    },
    imageHeight: {
      type: Number,
      default: 748,
    },
    svgWidth: {
      type: [String, Number],
      default: "100%",
    },
    svgHeight: {
      type: [String, Number],
      default: null,
    },
    showLabels: {
      type: Boolean,
      default: false,
    },
    strokeWidth: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      hoveredPolygon: [],
      selectedPolygons: [],
      polygonData: {
        292: [
          {
            name: "g1",
            block: "292",
            polygon: [
              { x: 0.938, y: 0.834 },
              { x: 0.994, y: 0.781 },
              { x: 0.976, y: 0.723 },
              { x: 0.921, y: 0.774 },
            ],
          },
          {
            name: "f1",
            block: "292",
            polygon: [
              { x: 0.921, y: 0.774 },
              { x: 0.977, y: 0.723 },
              { x: 0.949, y: 0.642 },
              { x: 0.894, y: 0.69 },
            ],
          },
          {
            name: "b1",
            block: "292",
            polygon: [
              { x: 0.894, y: 0.69 },
              { x: 0.948, y: 0.643 },
              { x: 0.921, y: 0.569 },
              { x: 0.871, y: 0.618 },
            ],
          },
          {
            name: "g2",
            block: "292",
            polygon: [
              { x: 0.921, y: 0.571 },
              { x: 0.904, y: 0.515 },
              { x: 0.854, y: 0.565 },
              { x: 0.872, y: 0.616 },
            ],
          },
        ],
        293: [
          {
            name: "a3",
            block: "293",
            polygon: [
              { x: 0.854, y: 0.565 },
              { x: 0.904, y: 0.516 },
              { x: 0.886, y: 0.457 },
              { x: 0.833, y: 0.512 },
            ],
          },
          {
            name: "c2",
            block: "293",
            polygon: [
              { x: 0.834, y: 0.512 },
              { x: 0.886, y: 0.457 },
              { x: 0.856, y: 0.382 },
              { x: 0.808, y: 0.44 },
            ],
          },
          {
            name: "c3",
            block: "293",
            polygon: [
              { x: 0.81, y: 0.437 },
              { x: 0.856, y: 0.382 },
              { x: 0.822, y: 0.309 },
              { x: 0.781, y: 0.378 },
            ],
          },
          {
            name: "a4",
            block: "293",
            polygon: [
              { x: 0.781, y: 0.378 },
              { x: 0.823, y: 0.309 },
              { x: 0.791, y: 0.262 },
              { x: 0.758, y: 0.346 },
            ],
          },
          {
            name: "c4",
            block: "293",
            polygon: [
              { x: 0.758, y: 0.345 },
              { x: 0.792, y: 0.262 },
              { x: 0.741, y: 0.222 },
              { x: 0.721, y: 0.31 },
            ],
          },
          {
            name: "c5",
            block: "293",
            polygon: [
              { x: 0.722, y: 0.309 },
              { x: 0.683, y: 0.295 },
              { x: 0.683, y: 0.198 },
              { x: 0.741, y: 0.222 },
            ],
          },
          {
            name: "a5",
            block: "293",
            polygon: [
              { x: 0.682, y: 0.294 },
              { x: 0.649, y: 0.297 },
              { x: 0.642, y: 0.202 },
              { x: 0.684, y: 0.198 },
            ],
          },
          {
            name: "f2",
            block: "293",
            polygon: [
              { x: 0.648, y: 0.294 },
              { x: 0.609, y: 0.313 },
              { x: 0.587, y: 0.223 },
              { x: 0.643, y: 0.202 },
            ],
          },
          {
            name: "e1",
            block: "293",
            polygon: [
              { x: 0.609, y: 0.318 },
              { x: 0.573, y: 0.346 },
              { x: 0.55, y: 0.255 },
              { x: 0.588, y: 0.226 },
            ],
          },
        ],
        294: [
          {
            name: "r1",
            block: "294",
            polygon: [
              { x: 0.572, y: 0.346 },
              { x: 0.529, y: 0.381 },
              { x: 0.507, y: 0.285 },
              { x: 0.55, y: 0.257 },
            ],
          },
          {
            name: "d2",
            block: "294",
            polygon: [
              { x: 0.507, y: 0.285 },
              { x: 0.529, y: 0.378 },
              { x: 0.482, y: 0.409 },
              { x: 0.456, y: 0.321 },
            ],
          },
        ],
        295: [
          {
            name: "g3",
            block: "295",
            polygon: [
              { x: 0.427, y: 0.301 },
              { x: 0.429, y: 0.404 },
              { x: 0.388, y: 0.401 },
              { x: 0.393, y: 0.299 },
            ],
          },
          {
            name: "f3",
            block: "295",
            polygon: [
              { x: 0.388, y: 0.4 },
              { x: 0.334, y: 0.385 },
              { x: 0.342, y: 0.283 },
              { x: 0.393, y: 0.301 },
            ],
          },
          {
            name: "g4",
            block: "295",
            polygon: [
              { x: 0.334, y: 0.384 },
              { x: 0.285, y: 0.359 },
              { x: 0.308, y: 0.262 },
              { x: 0.342, y: 0.283 },
            ],
          },
          {
            name: "f4",
            block: "295",
            polygon: [
              { x: 0.285, y: 0.357 },
              { x: 0.308, y: 0.265 },
              { x: 0.257, y: 0.233 },
              { x: 0.238, y: 0.324 },
            ],
          },
          {
            name: "g5",
            block: "295",
            polygon: [
              { x: 0.239, y: 0.321 },
              { x: 0.203, y: 0.293 },
              { x: 0.224, y: 0.207 },
              { x: 0.258, y: 0.233 },
            ],
          },
        ],
        296: [
          {
            name: "g6",
            block: "296",
            polygon: [
              { x: 0.203, y: 0.293 },
              { x: 0.224, y: 0.207 },
              { x: 0.186, y: 0.18 },
              { x: 0.166, y: 0.267 },
            ],
          },
          {
            name: "b2",
            block: "296",
            polygon: [
              { x: 0.166, y: 0.267 },
              { x: 0.187, y: 0.18 },
              { x: 0.138, y: 0.148 },
              { x: 0.118, y: 0.234 },
            ],
          },
          {
            name: "g7",
            block: "296",
            polygon: [
              { x: 0.118, y: 0.234 },
              { x: 0.137, y: 0.148 },
              { x: 0.102, y: 0.118 },
              { x: 0.081, y: 0.203 },
            ],
          },
        ],
      },
    };
  },
  methods: {
    // Convert decimal coordinates to pixel coordinates for SVG points
    getPolygonPoints(polygon) {
      return polygon
        .map(
          (point) =>
            `${point.x * this.imageWidth},${point.y * this.imageHeight}`
        )
        .join(" ");
    },

    // Get polygon fill color based on state
    getPolygonFill(item) {
      const isSelected = this.selectedPolygons.some(
        (p) => p.name === item.name && p.block === item.block
      );
      const isHovered = this.hoveredPolygon.find(
        (p) => p.name === item.name && p.block === item.block
      );
      if (isSelected) {
        return this.getBlockColor(item.block, 0.6);
      }
      if (isHovered) {
        return this.getBlockColor(item.block, 0.4);
      }
      return "rgba(0, 0, 0, 0.0)";
    },

    // Calculate polygon center for labels
    getPolygonCenter(polygon) {
      const sumX = polygon.reduce((sum, point) => sum + point.x, 0);
      const sumY = polygon.reduce((sum, point) => sum + point.y, 0);
      return {
        x: (sumX / polygon.length) * this.imageWidth,
        y: (sumY / polygon.length) * this.imageHeight,
      };
    },

    // Handle polygon click
    onPolygonClick(item) {
      this.selectedPolygons = [];
      this.selectedPolygons.push(item);
      this.$emit("update:selectedPolygons", this.selectedPolygons);
    },

    // Handle block click for selecting all items in a block
    onBlockClick(block) {
      const blockItems = this.polygonData[block];
      const allSelected = blockItems.every((item) =>
        this.selectedPolygons.some(
          (p) => p.name === item.name && p.block === block
        )
      );

      // Deselect all items in the block
      this.selectedPolygons = [];

      if (allSelected) return;

      // Select all items in the block
      const itemsToAdd = blockItems
        .filter(
          (item) =>
            !this.selectedPolygons.some(
              (p) => p.name === item.name && p.block === block
            )
        )
        .map((item) => ({ ...item, block }));
      this.selectedPolygons.push(...itemsToAdd);

      this.$emit("update:selectedPolygons", this.selectedPolygons);
    },

    // Get block color with opacity
    getBlockColor(block, opacity = 1) {
      const colors = {
        292: `rgba(0, 255, 0, ${opacity})`,
        293: `rgba(255, 0, 0, ${opacity})`,
        294: `rgba(240, 120, 231, ${opacity})`,
        295: `rgba(72, 129, 175, ${opacity})`,
        296: `rgba(255, 255, 0, ${opacity})`,
      };
      return colors[block] || "rgba(0, 0, 0, 0.0)";
    },

    // Add block selection button
    addBlockButton(block, translateX = 0, translateY = 0) {
      const blockPolygons = this.polygonData[block];
      const firstPolygon = blockPolygons[0];
      const center = this.getPolygonCenter(firstPolygon.polygon);

      return {
        x: center.x + 30 + translateX,
        y: center.y - 30 + translateY,
        fill: this.getBlockColor(block, 0.6),
      };
    },

    // handle hover block
    onBlockHover(block) {
      this.hoveredPolygon = this.polygonData[block];
      this.$emit("update:hoveredPolygon", this.hoveredPolygon);
    },

    // handle leave block
    onBlockLeave() {
      this.hoveredPolygon = [];
      this.$emit("update:hoveredPolygon", this.hoveredPolygon);
    },

    onPolygonHover(item) {
      this.hoveredPolygon.push(item);
      this.$emit("update:hoveredPolygon", this.hoveredPolygon);
    },

    onPolygonLeave() {
      this.hoveredPolygon = [];
      this.$emit("update:hoveredPolygon", this.hoveredPolygon);
    },
  },
};
</script>

<style scoped>
.polygon-container {
  position: relative;
  width: 100%;
  max-width: 1332px;
}

.polygon-svg {
  width: 100%;
  height: auto;
  display: block;
}

.polygon-area {
  cursor: pointer;
  transition: fill 0.2s ease, stroke 0.2s ease;
}

.polygon-area:hover {
  stroke-width: 3;
}

.polygon-label {
  font-size: 12px;
  font-weight: bold;
  fill: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  cursor: pointer;
  pointer-events: none; /* Prevents label from blocking polygon clicks */
}

.block-select-button {
  cursor: pointer;
  stroke: white;
  stroke-width: 2;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
}

.block-select-text {
  font-size: 20px;
  font-weight: bold;
  fill: white;
  cursor: pointer;
  pointer-events: none;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}

/* Responsive design */
@media (max-width: 768px) {
  .polygon-label {
    font-size: 10px;
  }
}
</style>
