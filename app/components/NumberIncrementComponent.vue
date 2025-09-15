<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

interface Props {
  target: number;
  duration?: number;
}

const props = defineProps<Props>();

const count = ref<number>(0);
const el = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

const animateCount = () => {
  const start = count.value;
  const end = props.target;
  const duration = props.duration ?? 1000;
  const increment = (end - start) / (duration / 16); // frame ≈ 16ms
  let current = start;

  const step = () => {
    current += increment;
    if ((increment > 0 && current < end) || (increment < 0 && current > end)) {
      count.value = Math.ceil(current);
      requestAnimationFrame(step);
    } else {
      count.value = end;
    }
  };

  step();
};

const initObserver = () => {
  if (!el.value) return;

  observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount();
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(el.value);
};

onMounted(() => {
  initObserver();
});

onBeforeUnmount(() => {
  if (observer && el.value) {
    observer.unobserve(el.value);
  }
});

watch(
  () => props.target,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      animateCount();
    }
  }
);
</script>

<template>
  <span ref="el">{{ count }}</span>
</template>
