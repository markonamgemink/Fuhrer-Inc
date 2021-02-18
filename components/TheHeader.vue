<template>
  <nav
    class="fixed flex justify-between items-center w-full py-4 px-8"
    :class="{
      scrolled: !atTopOfPage,
    }"
  >
    <div>
      <span class="text-xl text-gray-900">
        <nuxt-link to="/">Home</nuxt-link>
      </span>
    </div>
    <div>
      <ul class="flex items-center space-x-8">
        <li>
          <span class="nav-link"> <nuxt-link to="/">Katalog</nuxt-link></span>
        </li>
        <li>
          <span class="nav-link">
            <nuxt-link to="/">Kustom Kaos</nuxt-link></span
          >
        </li>
        <li>
          <span class="nav-link"> <nuxt-link to="/">Gallery</nuxt-link></span>
        </li>
        <li>
          <span class="nav-link"> <nuxt-link to="/">About Us</nuxt-link></span>
        </li>
        <li>
          <span class="nav-link">
            <nuxt-link to="/login">Masuk/Daftar</nuxt-link></span
          >
        </li>
        <li><Icon name="bars" scale="1.2" class="text-primary"></Icon></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      atTopOfPage: true,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScrollPosititon)
  },
  methods: {
    updateScrollPosititon() {
      if (window.pageYOffset > 0) {
        if (this.atTopOfPage) this.atTopOfPage = false
      } else if (!this.atTopOfPage) this.atTopOfPage = true
    },
  },
}
</script>

<style scoped>
.nav-link {
  @apply text-base text-gray-900 hover:text-primary transition-colors duration-300;
}

.scrolled {
  @apply w-full bg-white shadow-lg z-40;
}
</style>
