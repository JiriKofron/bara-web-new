<template>
  <section class="carousel__container">
    <h2>Nejčastěji pracuji s lidmi, kteří:</h2>
    <vueper-slides
      class="no-shadow"
      :arrows="false"
      :bullets="false"
      fixed-height="10rem"
      autoplay
    >
      <vueper-slide v-for="slide in slides" :key="slide.id" :title="slide.text">
      </vueper-slide>
    </vueper-slides>
  </section>
</template>

<script setup lang="ts">
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

type Slides = {
  id: number;
  text: string;
};

const slides: Slides[] = [
  {
    id: 0,
    text: "mají ve svém životě něco, co tam nechtějí",
  },
  {
    id: 1,
    text: "mají obtíže, které jim ztrpčují život",
  },
  {
    id: 2,
    text: "mají vztahové nebo rodinné obtíže",
  },
  {
    id: 3,
    text: "zabývají se směřováním, únavou, rozhodnutím v pracovním životě",
  },
  {
    id: 4,
    text: "řeší nebo se připravují na velké změny",
  },
  {
    id: 5,
    text: "jsou trochu nesví, nemají radost a taky třeba vůbec neví, co to znamená",
  },
  {
    id: 6,
    text: "bojují se závislosti",
  },
  {
    id: 7,
    text: "potýkají se s nějakým druhem násilí",
  },
  {
    id: 8,
    text: "zažívají pocit ztráty",
  },
  {
    id: 9,
    text: "řeší svou identitu, zabývají se queer tématy",
  },
];
</script>

<style lang="scss" scoped>
.carousel__container {
  font-family: $body-text;
  font-size: 1.4rem;
  padding: 0 1rem;

  @include lg {
    font-size: 1.2rem;
  }

  h2 {
    text-align: center;
    font-family: $header-text;
    font-size: 2rem;
    background-color: $contract-red;
    color: white;
    padding: 2rem;

    @include lg {
      font-size: 1.5rem;
    }
  }
}
</style>
