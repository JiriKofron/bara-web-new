<template>
  <div class="collapse navbar-collapse navbar__ham" id="navbarToggle">
    <div class="navbar-nav me-auto navbar__ham__links">
      <a
        href="#"
        class="nav-link nav-item"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggle"
        @click="$router.push('/')"
      >
        Domu
      </a>
      <a
        class="nav-link nav-item"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggle"
        href="#"
        @click="$router.push('/#services')"
      >
        Služby
      </a>
      <a
        class="nav-link nav-item"
        href="#"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggle"
        @click="$router.push('/pricelist')"
      >
        Ceník
      </a>
      <a
        class="nav-link nav-item"
        href="#"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggle"
        @click="$router.push('/#codex')"
      >
        Kodex
      </a>
      <a
        class="nav-link nav-item"
        href="#"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggle"
        @click="$router.push('/media')"
      >
        Média
      </a>
      <a
        class="nav-link nav-item"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggle"
        href="#"
        @click="$router.push('/#about')"
      >
        O mně
      </a>
      <button
        class="btn btn-outline-danger nav-item btn-lg navbar__contact mt-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggle"
        @click="$router.push('/contact')"
      >
        Kontakt
      </button>
      <button
        type="button"
        class="close btn-close btn-lg"
        aria-label="Close"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggle"
        aria-controls="navbarToggle"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
  <nav class="navbar fixed-top navbar-light flex-nowrap mx-4">
    <a
      class="navbar-brand px-3 pt-2 text-wrap"
      href="#"
      @click="$router.push('/')"
      >Barbora Pšenicová
    </a>

    <button
      class="navbar-toggler d-md-none me-2"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarToggle"
      aria-controls="navbarToggle"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <div class="navbar-toggler-menu">Menu</div>
    </button>

    <div class="navbar-nav d-none d-md-flex navbar__expanded">
      <a class="nav-link nav-item" href="#" @click="$router.push('/#services')">
        Služby
      </a>
      <a class="nav-link nav-item" href="#" @click="$router.push('/pricelist')">
        Ceník
      </a>
      <a class="nav-link nav-item" href="#" @click="$router.push('/#codex')">
        Kodex
      </a>
      <a class="nav-link nav-item" href="#" @click="$router.push('/media')">
        Média
      </a>
      <a class="nav-link nav-item" href="#" @click="$router.push('/#about')">
        O mně
      </a>
    </div>
    <router-link to="contact" class="nav-item d-none d-md-flex">
      <button
        class="btn btn-outline-danger"
        type="button"
        @click="$router.push('/contact')"
      >
        Kontakt
      </button>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
};
</script>

<style scoped lang="scss">
.navbar {
  max-width: 1600px;

  &__ham {
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 4000;

    &__links {
      background: $darkest-blue;
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      .nav-link {
        color: white !important;
        font-family: $header-text;
        font-weight: 700;
        font-size: 2.5rem;
      }
    }
  }

  .navbar-toggler {
    border: 1px solid $contract-red;

    &-menu {
      font-family: $header-text;
      color: $contract-red;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.4rem 0;
      font-size: 1.2rem;
    }
  }

  &__expanded {
    flex-direction: row;
    align-items: center;
    justify-content: end;
    width: 60%;
    margin-right: 1rem;
    background: rgba(white, 0.9);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 10%,
      rgba(255, 255, 255, 0.8) 94%,
      rgba(255, 255, 255, 0) 100%
    );

    @include lg {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 20%,
        rgba(255, 255, 255, 0.9) 40%,
        rgba(255, 255, 255, 0.8) 94%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    a:hover {
      color: $contract-red !important;
    }

    .nav-link {
      margin: 0 1rem;
      font-family: $header-text;
      font-weight: 400;
      font-size: 1rem;
      color: $darkest-blue;
    }
  }

  .btn {
    font-family: $header-text;
    font-size: 1.2rem;
  }

  &__contact {
    font-size: 2.5rem;
    font-family: $header-text;
    color: $contract-red;
  }
}

.navbar-brand {
  font-family: $header-text;
  font-weight: 700;
  font-size: 1.7rem;
  max-width: 15rem;
  color: $darkest-blue !important;

  @include sm {
    max-width: 75%;
  }
}

.close {
  background: transparent;
  color: white;
  position: absolute;
  right: 2rem;
  top: 2rem;
  font-size: 2rem;
}
</style>
