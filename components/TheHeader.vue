<template>
  <nav
    class="fixed flex justify-between items-center w-full py-4 px-8"
    :class="{
      scrolled: !atTopOfPage,
    }"
  >
    <div>
      <span class="text-xl text-gray-900">
        <nuxt-link to="/" exact>Home</nuxt-link>
      </span>
    </div>
    <div class="hidden md:flex">
      <ul class="flex items-center space-x-8">
        <li>
          <span class="link">
            <nuxt-link to="/katalog">Katalog</nuxt-link></span
          >
        </li>
        <li>
          <span class="link">
            <nuxt-link to="/kustom-kaos">Kustom Kaos</nuxt-link></span
          >
        </li>
        <li>
          <span class="link">
            <nuxt-link to="/aboutus">Tentang Kami</nuxt-link></span
          >
        </li>
        <li v-if="$cookies.get('token')">
          <span class="link"> <nuxt-link to="/profile">Profil</nuxt-link></span>
        </li>
        <li v-else>
          <span class="link">
            <nuxt-link to="/login">Masuk/Daftar</nuxt-link></span
          >
        </li>
        <li v-if="$cookies.get('token')">
          <Icon icon="shopping-cart" class="text-xl" />
        </li>
        <li v-else>
          <Icon icon="bars" class="text-xl text-primary" />
        </li>
      </ul>
    </div>
    <div class="flex md:hidden">
      <Icon
        icon="bars"
        class="text-primary text-xl"
        @click="isShowDropdown = !isShowDropdown"
      />
    </div>
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-200"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <ul
        v-if="isShowDropdown"
        class="flex flex-col space-y-2 origin-top absolute mt-56 py-2 px-8 w-full bg-white border-t-2 border-primary shadow-xl -mx-8"
      >
        <li @click="isShowDropdown = !isShowDropdown">
          <span class="link">
            <nuxt-link to="/katalog" exact>Katalog</nuxt-link></span
          >
        </li>
        <li @click="isShowDropdown = !isShowDropdown">
          <span class="link">
            <nuxt-link to="/kustom-kaos" exact>Kustom Kaos</nuxt-link></span
          >
        </li>
        <li @click="isShowDropdown = !isShowDropdown">
          <span class="link">
            <nuxt-link to="/about-us">Tentang Kami</nuxt-link></span
          >
        </li>
        <li @click="isShowDropdown = !isShowDropdown">
          <span class="link">
            <nuxt-link to="/about-us">Keranjang</nuxt-link></span
          >
        </li>
        <li
          v-if="$cookies.get('token')"
          @click="isShowDropdown = !isShowDropdown"
        >
          <span class="link"> <nuxt-link to="/profile">Profil</nuxt-link></span>
        </li>
        <li v-else @click="isShowDropdown = !isShowDropdown">
          <span class="link">
            <nuxt-link to="/login">Masuk/Daftar</nuxt-link></span
          >
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      atTopOfPage: true,
      isShowDropdown: false,
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
.scrolled {
  @apply w-full bg-white shadow-lg z-40;
}

.active-link {
  @apply text-primary;
}

.exact-active-link {
  @apply text-primary;
}
</style>
