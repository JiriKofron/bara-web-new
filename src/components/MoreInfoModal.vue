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
    <button @click="close">Zavřít</button>

    <article>
      <p>
        V současné době pracuji v neziskovém sektoru, kde se zabývám změnou jako
        aktivní součástí procesu rozvoje a snažím se být hybatelkou sociálních
        inovací. Využívám nástroje human centered design, které pomáhají hledat
        možnosti a prostor pro zlepšování sociálních služeb a zaměřují se
        především na potřeby klientů a klientek. Velmi dobře si rozumím s
        projektovým řízením a lektoruji v oblastech spjatých se sociálními
        službami. Věnovala jsem se i výzkumné činnosti, například v tématu
        násilí v sexbyznysu. Vycházím hodně ze systemické terapie a
        konstruktivistických teorií. Procházím výcvikem Terapie v postmoderně
        pod odborným vedením MUDr. Olgy Kunertové. Díky tomu mě oslovují různé
        druhy práce, jako například narativní, krátká terapie orientovaná na
        řešení nebo zakázkový přístup. Vycházím z postmoderních
        psychoterapeutických škol a pracuji s teoriemi předních
        psychoterapeutických osobností, jako jsou Insoo Kim Berg, Kurt Ludewig
        nebo Harlene Anderson. Mou velkou inspirací je práce terapeutky Sabine
        Vermeire nebo Michaela Whita.
      </p>
    </article>

    <ul>
      <li>Komplexní výcvik v mediaci</li>
      <li>Kurz kariérového poradenství</li>
      <li>Práce s traumatizovanou osobou</li>
      <li>Pracovník v sociálních službách</li>
      <li>Narativní práce v terapii</li>
      <li>Motivační rozhovory</li>
      <li>Individuální plánování</li>
    </ul>
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
  background-color: white;
  z-index: 1000;
}
</style>
