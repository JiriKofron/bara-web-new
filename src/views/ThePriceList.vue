<template>
  <section style="margin-top: 7rem">
    <h2>Ceník pro rok 2022</h2>
    <div class="list-group">
      <div class="list-group-item p-3">
        <h3>Individuální konzultace</h3>
        <p>800 Kč / 50 minut</p>
      </div>
      <div class="list-group-item p-3">
        <h3>Skupinová konzultace</h3>
        <p>1000 Kč / 50 minut</p>
      </div>
      <div class="list-group-item p-3">
        <h3>Konzultace s reflektujícím týmem</h3>
        <p>
          Po dohodě s Vámi mohu na konzultaci přizvat další odborníky a
          odbornice, kteří po jeho skončení sdělí své postřehy. Mohou Vám tak
          nabídnout alternativní možnosti.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ThePriceList",
};
</script>

<style lang="scss" scoped>
section {
  max-width: 40rem;
  margin: 0 auto;
}

h2 {
  font-family: $header-text;
  font-size: 2rem;
  margin-bottom: 1rem;
}

h3 {
  font-family: $header-text;
  font-size: 1.4rem;
  color: $contract-red;
}

p {
  font-family: $body-text;
  color: $darkest-blue;
  font-size: 1.2rem;
  margin-top: 0.5rem;
}
</style>
