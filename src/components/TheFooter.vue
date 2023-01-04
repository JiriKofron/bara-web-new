<template>
  <footer class="card">
    <div class="copyright container-fluid">
      <a href="#" @click="$router.push('/')">www.psenicova.cz</a>
      <span>IČO: 06753493</span>
      <span>&copy Copyright {{ year }}</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: $dark-blue;
  font-family: $header-text;
  font-size: 0.85rem;
  color: white;
}

.copyright {
  width: 100%;
  padding: 0 1rem;
  margin: 0;
  height: 2rem;
  font-size: 0.9rem;
  font-family: $body-text;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $darkest-blue;
}
</style>
