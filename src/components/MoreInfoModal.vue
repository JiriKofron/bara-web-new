<script setup lang="ts">
import { defineModel, onUnmounted } from "vue";
import { scrollLock } from "@/composables/useSrollLock";
import { useRouter } from "vue-router";

const showMoreInfo = defineModel({ type: Boolean });
const { closeModal } = scrollLock();
const router = useRouter();

const close = () => {
  showMoreInfo.value = false;
  closeModal();
  router.push("/#about");
};

onUnmounted(() => {
  if (showMoreInfo.value) {
    closeModal();
  }
});
</script>

<template>
  <section class="more-about">
    <button class="close-btn" @click="close">Zavřít</button>

    <article class="more-about__content">
      <p>
        V současné době pracuji v neziskovém sektoru, kde se zabývám změnou jako
        aktivní součástí procesu rozvoje a snažím se být hybatelkou sociálních
        inovací. Využívám nástroje human centered design, které pomáhají hledat
        možnosti a prostor pro zlepšování sociálních služeb a zaměřují se
        především na potřeby klientů a klientek.
      </p>
      <p>
        Velmi dobře si rozumím s projektovým řízením a lektoruji v oblastech
        spjatých se sociálními službami. Věnovala jsem se i výzkumné činnosti,
        například v tématu násilí v sexbyznysu. Vycházím hodně ze systemické
        terapie a konstruktivistických teorií.
      </p>
      <p>
        Procházím výcvikem Terapie v postmoderně pod odborným vedením MUDr. Olgy
        Kunertové. Díky tomu mě oslovují různé druhy práce, jako například
        narativní, krátká terapie orientovaná na řešení nebo zakázkový přístup.
      </p>
      <p>
        Vycházím z postmoderních psychoterapeutických škol a pracuji s teoriemi
        předních psychoterapeutických osobností, jako jsou Insoo Kim Berg, Kurt
        Ludewig nebo Harlene Anderson. Mou velkou inspirací je práce terapeutky
        Sabine Vermeire nebo Michaela Whita.
      </p>
    </article>

    <article class="more-about__education">
      <h3>Specializované kurzy a workshopy</h3>

      <ul>
        <li>Komplexní výcvik v mediaci</li>
        <li>Kurz kariérového poradenství</li>
        <li>Práce s traumatizovanou osobou</li>
        <li>Pracovník v sociálních službách</li>
        <li>Narativní práce v terapii</li>
        <li>Motivační rozhovory</li>
        <li>Individuální plánování</li>
      </ul>
    </article>
  </section>
</template>

<style scoped lang="scss">
.more-about {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: white;
  z-index: 1200;
  padding-top: 1rem;
  overflow: auto;

  .close-btn {
    border: 1px solid $contract-red;
    border-radius: 0.375rem;
    background-color: white;
    font-family: $header-text;
    color: $contract-red;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem 0.75rem;
    font-size: 1.2rem;
    width: fit-content;
    align-self: flex-end;
    margin-right: 2rem;
  }

  &__content {
    padding: 1.5rem;

    p {
      font-family: $body-text;
      color: $darkest-blue;
      font-size: 1.4rem;
      margin: 1rem auto;
      max-width: 40rem;

      @include lg {
        font-size: 1.2rem;
      }
    }
  }

  &__education {
    padding: 1.5rem;

    h3 {
      font-family: $header-text;
      font-size: 2rem;
      color: $darkest-blue;
      padding: 0.5rem 0;
    }

    ul {
      margin-top: 1rem;
      display: flex;
      flex-flow: column nowrap;
      gap: 0.5rem;
      list-style: none;

      li {
        font-family: $body-text;
        font-size: 1.2rem;
        color: $darkest-blue;
      }
    }
  }
}
</style>
