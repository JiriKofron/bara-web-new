<template>
  <main class="container-fluid" ref="mainView">
    <TheNavbar />
    <div class="content">
      <router-view></router-view>
    </div>
    <TheFooter />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";

import { addMainView } from "@/composables/useSrollLock";

const mainView: Ref<HTMLElement | undefined> = ref();

onMounted(() => {
  mainView.value && addMainView(mainView.value);
});
</script>

<style lang="scss">
#app {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 0 !important;
  width: 100%;
  height: 100dvh;
}

.content {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-width: 1400px;
  margin: 0 auto;
}
</style>
