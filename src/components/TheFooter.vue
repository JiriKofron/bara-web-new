<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <footer>
      <nav>
        <a class="nav-link nav-item" href="#" @click="router.push('/#services')">
          Hlavní strana
        </a>
        <a class="nav-link nav-item" href="#" @click="router.push('/pricelist')">
          Ceník
        </a>
        <a class="nav-link nav-item" href="#" @click="router.push('/#codex')">
          Kodex
        </a>
        <a class="nav-link nav-item" href="#" @click="router.push('/media')">
          Média
        </a>
        <a class="nav-link nav-item" href="#" @click="router.push('/#about')">
          O mně
        </a>
      </nav>

    <div class="cap">
      <span>Jsem řádnou členkou</span>
      <img src="/cap-logo-barevne.png" alt="Česká asociace pro psychoterapy" width="200">
    </div>
      <div class="copyright">
        <address>
          Václavské náměstí 837/11, Praha 1, 110 00 (mezi Kobe a McDonalds)
        </address>
        <span>IČO: 06753493</span>
        <a href="#" @click="router.push('/')">www.psenicova.cz</a>
        <span>&copy; Copyright {{ new Date().getFullYear() }}</span>
      </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0;
  padding: 1rem;
  gap: 2rem;
  background-color: $dark-blue;
  border: none;
  font-family: $header-text;
  font-size: 1.1rem;
  color: white;

  @include lg {
    flex-direction: row;
    font-size: 0.85rem;
  }
}


nav {
  display: flex;
  flex-flow: column nowrap;
  gap: 0.3rem;
}

.cap {
  display: flex;
  flex-flow: column nowrap;
  gap: 0.4rem;
}

address {
  max-width: 15rem;
}

.copyright {
  display: flex;
  flex-flow: column nowrap;
  margin: 0;
  gap: 0.3rem;
  font-family: $header-text;
  color: white;

  a {
    color: white;
  }
}
</style>
