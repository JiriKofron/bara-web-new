<template>
  <TheMobileView v-if="mobile" />
  <TheDesktopView v-else />
</template>

<script>
import TheMobileView from "./TheMobileView.vue";
import TheDesktopView from "./TheDesktopView.vue";
export default {
  name: "TheHome",
  components: { TheDesktopView, TheMobileView },
  data() {
    return {
      mobile: false,
      width: window.innerWidth,
    };
  },
  computed: {
    getWindowWidth() {
      return this.width;
    },
  },
  created() {
    this.setLayout();
  },
  methods: {
    setLayout() {
      if (this.getWindowWidth < 780) {
        return (this.mobile = true);
      }
      return (this.mobile = false);
    },
  },
};
</script>

<style scoped></style>
