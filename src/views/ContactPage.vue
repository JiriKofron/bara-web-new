<template>
  <section class="contact">
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
    </div>

    <ThankYouMsg v-if="messageSent" />

    <form v-else class="contact-form" ref="contact-form">
      <div class="p-0 m-0">
        <label for="name" class="form-label">Jméno:</label>
        <input
          type="text"
          id="name"
          class="form-control"
          v-model="contact.name"
        />
        <div v-if="v$.contact.name.$error" class="contact-form__error-msg">
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
        <div v-if="v$.contact.email.$error" class="contact-form__error-msg">
          <font-awesome-icon
            icon="fa-solid fa-circle-exclamation"
            size="lg"
            class="pe-2"
          />
          Zadejte svůj email
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
        <div v-if="v$.contact.text.$error" class="contact-form__error-msg">
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
          :sitekey="getKey"
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
  </section>
</template>

<script>
import axios from "axios";
import { VueRecaptcha } from "vue-recaptcha";
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import ThankYouMsg from "@/components/ThankYouMsg.vue";

export default {
  name: "ContactPage",
  components: { ThankYouMsg, VueRecaptcha },
  data() {
    return {
      contact: {
        name: "",
        email: "",
        mobile: "",
        text: "",
      },
      isSending: false,
      messageSent: false,
      formReady: false,
      // captcha: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
      captcha: "6LcgwZwhAAAAAEUE78LrBlcRk2TMTYhLVThG-xao",
    };
  },
  setup() {
    return {
      v$: useValidate(),
    };
  },
  validations() {
    return {
      contact: {
        name: { required },
        email: { required },
        text: { required },
      },
    };
  },
  computed: {
    getKey() {
      return this.captcha;
    },
    isFormReady() {
      return this.formReady && !this.isSending;
    },
  },
  methods: {
    handleError: function (response) {
      this.formReady = false;
      if (!response) {
        return;
      }
      console.log("captcha error", response);
      setTimeout(function () {
        this.$refs.recaptcha.reset();
      }, 300);
    },
    handleSuccess: function (response) {
      if (!response) {
        return (this.formReady = false);
      }
      return (this.formReady = true);
    },
    async sendForm() {
      this.isSending = true;
      const isFormCorrect = await this.v$.$validate();

      if (!isFormCorrect) {
        this.isSending = false;
        this.formReady = false;
        this.$refs.recaptcha.reset();
        return;
      }

      let body = JSON.stringify({
        name: this.contact.name,
        email: this.contact.email,
        mobile: this.contact.mobile,
        message: this.contact.text,
      });

      axios({
        method: "POST",
        url: "https://qve84d0ly2.execute-api.eu-central-1.amazonaws.com/{proxy+}",
        data: body,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          this.isSending = false;
          this.isFormReady = false;
          this.messageSent = true;
          this.$refs["contact-form"].reset();
        })
        .catch((err) => {
          console.log("form error", err);
          this.isSending = false;
        });
    },
  },
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
    margin-right: 3rem;
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
