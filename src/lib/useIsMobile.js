import { ref, onMounted, onUnmounted } from 'vue';

export function useIsMobile(breakpoint = 1024) {
  const isMobile = ref(false);

  const checkScreenSize = () => {
    if (typeof window === 'undefined') {
      isMobile.value = false;
      return;
    }

    isMobile.value = window.innerWidth < breakpoint;
  };

  onMounted(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkScreenSize);
  });

  return { isMobile };
}
