import { useScrollLock } from "@vueuse/core";
import { ref } from "vue";
import type { Ref, WritableComputedRef } from "vue";

const mainView: Ref<HTMLElement | null> = ref(null);
let isLocked: WritableComputedRef<boolean> | null = null;

export function addMainView(element: HTMLElement): void {
  mainView.value = element;
  isLocked = useScrollLock(mainView.value);
}

export function scrollLock() {
  const openModal = () => {
    (isLocked as WritableComputedRef<boolean>).value = true;
  };

  const closeModal = () => {
    (isLocked as WritableComputedRef<boolean>).value = false;
  };

  return {
    openModal,
    closeModal,
  };
}
