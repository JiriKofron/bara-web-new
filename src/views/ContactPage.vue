<template>
  <section class="contact">
    <ThankYouMsg v-if="messageSent" />

    <form v-else class="contact-form" ref="contactForm">
      <div class="p-0 m-0">
        <label for="name" class="form-label">Jméno:</label>
        <input
          type="text"
          id="name"
          class="form-control"
          v-model="contact.name"
        />
        <div v-if="v$.name.$errors.length" class="contact-form__error-msg">
          <font-awesome-icon
            icon="fa-solid fa-circle-exclamation"
            size="lg"
            class="pe-2"
          />
          Zadejte své jméno
        </div>

        <label for="email" class="form-label">Email:</label>
        <input
          type="email"
          id="email"
          class="form-control"
          v-model="contact.email"
        />
        <div v-if="v$.email.$errors.length" class="contact-form__error-msg">
          <font-awesome-icon
            icon="fa-solid fa-circle-exclamation"
            size="lg"
            class="pe-2"
          />
          Zadejte svůj platný email
        </div>

        <label for="mobile" class="form-label">Telefon: (nepovinné)</label>
        <input
          type="number"
          id="mobile"
          class="form-control"
          v-model="contact.mobile"
        />
        <label for="message" class="form-label">S čím vám mohu pomoci:</label>
        <textarea
          type="text"
          id="message"
          class="form-control"
          rows="5"
          v-model="contact.text"
        />
        <div v-if="v$.text.$errors.length" class="contact-form__error-msg">
          <font-awesome-icon
            icon="fa-solid fa-circle-exclamation"
            size="lg"
            class="pe-2"
          />
          Zapomněl/a jste napsat svou zprávu...
        </div>

        <VueRecaptcha
          class="contact-form__recaptcha"
          ref="recaptcha"
          :sitekey="captcha"
          :load-recaptcha-script="true"
          @verify="handleSuccess"
          @error="handleError"
        ></VueRecaptcha>

        <button
          class="btn contact-form__btn"
          type="submit"
          @click.prevent="sendForm"
          :disabled="!isFormReady"
        >
          <span
            v-if="isSending"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <span v-else>Odeslat zprávu</span>
        </button>
      </div>
    </form>

    <div class="contact__details">
      <div class="contact__details__detail">
        <svg viewBox="0 0 200 150" class="contact__details__detail__circle">
          <circle r="50" cx="100" cy="75" fill="#e63946"></circle>
        </svg>
        <font-awesome-icon
          class="contact__details__detail__icon contact__details__detail__icon--phone"
          icon="fa-solid fa-mobile"
        ></font-awesome-icon>
        <div class="contact__details__detail__link">
          <a href="#">+420 728 242 002</a>
        </div>
      </div>
      <div class="contact__details__detail">
        <svg viewBox="0 0 200 150" class="contact__details__detail__circle">
          <circle r="50" cx="100" cy="75" fill="#e63946"></circle>
        </svg>
        <font-awesome-icon
          class="contact__details__detail__icon contact__details__detail__icon--email"
          icon="fa-solid fa-at"
        ></font-awesome-icon>
        <div class="contact__details__detail__link">
          <a href="mailto:b.psenicova@gmail.com">b.psenicova@gmail.com</a>
        </div>
      </div>

      <div class="contact__details__detail">
        <svg viewBox="0 0 200 150" class="contact__details__detail__circle">
          <circle r="50" cx="100" cy="75" fill="#e63946"></circle>
        </svg>
        <font-awesome-icon
          class="contact__details__detail__icon contact__details__detail__icon--address"
          icon="fa-solid fa-map-marker"
        ></font-awesome-icon>
        <div class="contact__details__detail__address">
          <address>
            kanceláře Freya z.s., 2. patro
            <br />
            Bolzanova 1, Praha 1 - Nové Město, 110 00
          </address>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { Ref } from "vue";
import axios from "axios";
import { VueRecaptcha } from "vue-recaptcha";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import ThankYouMsg from "@/components/ThankYouMsg.vue";

interface Contact {
  name: string;
  email: string;
  mobile: string;
  text: string;
}

const contact: Ref<Contact> = ref({
  name: "",
  email: "",
  mobile: "",
  text: "",
});

const isSending = ref(false);
const messageSent = ref(false);
const formReady = ref(false);
const captcha = "6LcgwZwhAAAAAEUE78LrBlcRk2TMTYhLVThG-xao";

const recaptcha = ref();
const contactForm = ref();

const isFormReady = computed(() => formReady.value && !isSending.value);

const rules = {
  name: { required },
  text: { required },
  email: { required, email },
};

const v$ = useVuelidate(rules, contact);

const handleError = (response: any) => {
  formReady.value = false;

  if (!response) {
    return;
  }

  console.log("captcha error", response);
  setTimeout(function () {
    recaptcha.value.reset();
  }, 300);
};

const handleSuccess = (response: any) => {
  if (!response) {
    return (formReady.value = false);
  }
  return (formReady.value = true);
};

const sendForm = async () => {
  isSending.value = true;
  const isFormCorrect = await v$.value.$validate();

  if (!isFormCorrect) {
    isSending.value = false;
    formReady.value = false;
    recaptcha.value.reset();
    return;
  }

  let body = JSON.stringify({
    name: contact.value?.name,
    email: contact.value?.email,
    mobile: contact.value?.mobile,
    message: contact.value?.text,
  });

  try {
    axios({
      method: "POST",
      url: "https://qve84d0ly2.execute-api.eu-central-1.amazonaws.com/{proxy+}",
      data: body,
      headers: {
        "Content-Type": "application/json",
      },
    });

    formReady.value = false;
    messageSent.value = true;
    contactForm.value.reset();
  } catch (error) {
    console.log("form error", error);
  } finally {
    isSending.value = false;
  }
};
</script>

<style lang="scss" scoped>
.contact {
  margin-top: 6rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @include md {
    flex-direction: row;
    justify-content: space-between;
  }

  @include lg {
    align-items: flex-start;
  }

  &__details {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;

    &__detail {
      width: 100%;
      position: relative;
      max-width: 20rem;

      &__circle {
        max-width: 20rem;
      }

      &__icon {
        position: absolute;
        color: white;
        font-size: 5rem;
        top: calc(40% - 65px / 2);

        &--phone {
          left: calc(50% - 55px / 2);

          @include lg {
            left: calc(50% - 70px / 2);
          }
        }

        &--email {
          left: calc(50% - 75px / 2);

          @include lg {
            left: calc(50% - 90px / 2);
          }
        }

        &--address {
          top: 5rem;
          left: calc(50% - 55px / 2);

          @include lg {
            left: calc(50% - 70px / 2);
          }
        }
      }

      &__link {
        margin: 0;
        padding: 0;
        width: 100%;
        text-align: center;

        a {
          font-size: 1.5rem;
          font-family: $header-text;
          color: $contract-red;
          text-decoration: none;
        }
      }

      address {
        font-size: 1.2rem;
        font-family: $header-text;
        color: $contract-red;
        text-decoration: none;
      }
    }
  }
}

.contact-form {
  width: 100%;
  max-width: 25rem;
  margin-top: 3rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba($contract-red, 0.9);
  z-index: 1;

  @include md {
    margin-left: 3rem;
  }

  &__error-msg {
    color: white;
    padding: 0.4rem;
    background-color: $darkest-blue;
    font-size: 0.6rem;
    font-family: $header-text;
  }

  .form-label {
    color: white;
    font-size: 1.5rem;
    font-family: $header-text;
    padding: 0.3rem 0;
    margin-top: 1.5rem;
  }

  &__recaptcha {
    margin: 2rem auto 0 auto;
  }

  &__btn {
    background-color: $darkest-blue;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: $header-text;
    width: 100%;
    margin: 3rem auto;
    color: white;
  }
}
</style>
