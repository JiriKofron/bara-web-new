<template>
  <div class="card thanks">
    <div class="card-body thanks__body">
      <h3>Zpráva byla odeslána</h3>
      <hr />
      <div class="card-subtitle">
        <h4>Děkuji za vaší důvěru!</h4>
      </div>
      <div class="card-img-top thanks__svg">
        <div class="thanks__svg__animation">
          <TheMailSendAnim />
        </div>
      </div>
      <div class="card-text thanks__text">
        <p>
          Budu vás co nejdříve kontaktovat s návrhem na další postup, případně s
          termíny na první schůzku.
        </p>
      </div>
      <button
        type="button"
        class="btn btn-outline-info thanks__btn"
        @click="$router.push('/')"
      >
        Zpět na úvod
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheMailSendAnim from "@/components/icons/TheMailSendAnim.vue";
</script>

<style lang="scss" scoped>
.thanks {
  width: 100%;
  max-width: 25rem;
  margin-top: 3rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border: 2px solid $contract-red;

  @include md {
    margin-right: 3rem;
  }

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3,
    .card-subtitle {
      font-family: $header-text;
      font-size: 2rem;
      color: $darkest-blue;
      margin: 2rem 0 0 0;
      text-align: center;
    }

    .card-subtitle {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }

    hr {
      width: 80%;
    }

    .thanks__svg {
      width: 100%;
      height: 100%;
      background-color: $darkest-blue;
      display: flex;
      align-items: center;
      justify-content: center;

      &__animation {
        width: 10rem;
        height: 10rem;
      }
    }
  }

  &__text {
    font-family: $body-text;
    font-size: 1.1rem;
    padding: 1rem;
  }

  &__btn {
    width: 70%;
    max-width: 15rem;
    padding: 1rem;
    margin-bottom: 3rem;
    font-size: 1.2rem;
    font-weight: 700;
    font-family: $header-text;
    color: $light-blue;
  }
}
</style>
