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
        spjatých s lidskými právy. Věnuji se i výzkumné a evaluační činnosti,
        spolupracovala jsem výzkumně na tématech dětského duševní zdraví v České
        republice, dopady práce se sexualitou v zařízeních sociálních služeb
        nebo na tématu násilí v sexbyznysu.
      </p>
      <p>
        Absolvovala jsem pětiletý výcvik Terapie v postmoderně pod odborným
        vedením MUDr. Olgy Kunertové. Díky tomu mě oslovují různé druhy práce,
        jako například narativní, krátká terapie orientovaná na řešení nebo
        zakázkový přístup. Mám základy krizové intervence, komplexní výcvik v
        mediaci a kariérovém poradenství. Absolvovala jsem mnoho různých dílčích
        školení, například Úvod do práce s traumatizovanou osobou nebo Kids
        Skills zaměřené na řešení problémů při práci s dětmi, jejich rodiči a
        celou komunitou. Jsem pod supervizí.
      </p>
      <p>
        Vycházím hodně ze systemické terapie a konstruktivistických teorií.
        Inspirují mě psychoterapeutické školy a osobnosti jako jsou Insoo Kim
        Berg, Erik Erikson, Kurt Ludewig, Harlene Anderson nebo Michael White.
        Ze současných terapeutů a terapeutek si vážím práce Sabine Vermeire.
      </p>
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
}
</style>
