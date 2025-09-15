export function useAnimateOnScroll(
  animation: string = "animate__fadeInUp",
  repeat: boolean = false,
  duration: string = "1s",
  delay: number = 0,
  options: IntersectionObserverInit = { threshold: 0.2 },
) {
  const elementRef: Ref<HTMLElement | null> = ref(null);
  let observer: IntersectionObserver | null = null;

  watch(
    elementRef,
    () => {
      if (!elementRef.value) return;

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              const el = entry.target as HTMLElement;
              el.classList.remove("opacity-0");
              el.classList.add("animate__animated", animation);
              el.style.setProperty("animation-duration", duration);
            }, delay)

            if (!repeat) {
              observer?.unobserve(entry.target);
            }
          } else if (repeat) {
            const el = entry.target as HTMLElement;
            el.classList.remove("animate__animated", animation);
            el.classList.add("opacity-0");
          }
        });
      }, options);

      observer.observe(elementRef.value);
    },
    { immediate: true }
  );

  onBeforeUnmount(() => {
    if (observer && elementRef.value) {
      observer.unobserve(elementRef.value);
    }
  });

  return { elementRef };
}
