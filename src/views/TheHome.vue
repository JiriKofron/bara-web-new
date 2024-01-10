<template>
  <TheMobileView v-if="width < 780" />
  <TheDesktopView v-else />
</template>

<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";

import TheMobileView from "./TheMobileView.vue";
import TheDesktopView from "./TheDesktopView.vue";

const { width } = useWindowSize();
</script>

<style scoped></style>
