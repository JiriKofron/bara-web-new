<script setup lang="ts">
import { defineModel } from "vue";
import { scrollLock } from "@/composables/useSrollLock";

const showMenu = defineModel({ type: Boolean });
const { openModal } = scrollLock();

const open = () => {
  showMenu.value = true;
  openModal();
};
</script>

<template>
  <button
    class="btn btn-outline-info btn-sm btn__more"
    type="button"
    @click="open"
  >
    více o mně...
  </button>
</template>

<style lang="scss" scoped>
.btn__more {
  width: 70%;
  max-width: 20rem;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: $header-text;
  color: $light-blue;
}
</style>
