<template>
  <nuxt-layout name="section" class="text-white font-family-cairo">
    <div class="progress-section">
      <!-- title -->
      <text-title-with-star-component theme-color="#f4f4f4">مؤشر الإنجاز</text-title-with-star-component>

      <div class="charts-container">
        <!-- Total Project Progress Gauge -->
        <div class="total-progress">
          <canvas id="totalProgressChart" ref="totalProgressChart"></canvas>
          <div class="progress-label">
            <span class="progress-percentage">20%</span>
            <span class="progress-text">إجمالي المشروع</span>
          </div>
        </div>
        
        <!-- Specific Progress Charts -->
        <div class="specific-progress">
          <div class="progress-card">
            <canvas id="finishingChart" ref="finishingChart"></canvas>
            <div class="progress-info">
              <span class="progress-percentage">10%</span>
              <span class="text-xs font-bold">التشطيبات</span>
            </div>
          </div>
          
          <div class="progress-card">
            <canvas id="concreteChart" ref="concreteChart"></canvas>
            <div class="progress-info">
              <span class="progress-percentage">45%</span>
              <span class="text-xs font-bold">نسبة اعمال الخرسانات</span>
            </div>
          </div>
          
          <div class="progress-card">
            <canvas id="mechanicalChart" ref="mechanicalChart"></canvas>
            <div class="progress-info">
              <span class="progress-percentage">8%</span>
              <span class="text-xs font-bold">الميكانيكيه والكهربية</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nuxt-layout>
</template>

<script setup>
import Chart from 'chart.js/auto'

// References to canvas elements
const totalProgressChart = ref(null)
const finishingChart = ref(null)
const concreteChart = ref(null)
const mechanicalChart = ref(null)

// Progress data
const totalProgress = 20
const finishingProgress = 10
const concreteProgress = 45
const mechanicalProgress = 8

// Primary color from theme
const secondaryColor = '#f4f4f454'

watch(totalProgressChart, () => {
  if (!totalProgressChart.value || !finishingChart.value || !concreteChart.value || !mechanicalChart.value) return

  // Create gauge chart for total progress
  new Chart(totalProgressChart.value, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [totalProgress, 100 - totalProgress],
        backgroundColor: ['#C8A45D', secondaryColor],
        borderWidth: 0,
        circumference: 180,
        rotation: 270
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      cutout: '75%',
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        }
      }
    }
  })

  // Create chart for finishing progress
  createProgressChart(finishingChart.value, finishingProgress, '#FF6384')

  // Create chart for concrete progress
  createProgressChart(concreteChart.value, concreteProgress, '#36A2EB')

  // Create chart for mechanical progress
  createProgressChart(mechanicalChart.value, mechanicalProgress, '#4BC0C0')
}, { immediate: true })

// Function to create progress charts
function createProgressChart(canvas, progress, color) {
  new Chart(canvas, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [progress, 100 - progress],
        backgroundColor: [color, secondaryColor],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      cutout: '70%',
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        }
      }
    }
  })
}
</script>

<style scoped>
.progress-section {
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.charts-container {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}

.total-progress {
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

.progress-label {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 100%;
}

.progress-percentage {
  display: block;
  font-size: 2.5rem;
  font-weight: bold;
  color: #C8A45D;
}

.progress-text {
  display: block;
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

.specific-progress {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
}

.progress-card {
  position: relative;
  width: 100%;
  max-width: 250px;
  background-color: transparent;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.progress-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
}

.progress-info .progress-percentage {
  font-size: 1.7rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .specific-progress {
    flex-direction: column;
    align-items: center;
  }
  
  .progress-card {
    max-width: 220px;
  }
}
</style>
