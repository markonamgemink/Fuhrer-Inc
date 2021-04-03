<template>
  <transition
    enter-active-class="transition ease-out duration-200"
    enter-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-200"
    leave-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-95"
  >
    <div
      class="w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-white shadow-xl z-30"
      :class="sideBarOpen ? '' : 'hidden'"
    >
      <div class="w-full h-16 border-b flex px-4 items-center mb-8">
        <p class="font-semibold text-3xl pl-4">LOGO</p>
      </div>

      <ul class="mb-4 px-4 h-full">
        <li @click="toggleActiveMenu('DASHBOARD')">
          <nuxt-link
            to="/admin"
            exact
            class="w-full flex items-center h-10 pl-4 text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            <span class="mr-2 h-6 w-6 text-center">
              <Icon icon="home" class="text-lg text-primary" />
            </span>

            <span class="font-medium">Dashboard</span>
          </nuxt-link>
        </li>
        <li @click="toggleActiveMenu('PRODUK')">
          <nuxt-link
            to="/admin/product"
            class="w-full flex items-center h-10 pl-4 text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            <span class="mr-2 h-6 w-6 text-center">
              <Icon icon="tshirt" class="text-lg text-primary"
            /></span>
            <span class="font-medium">Produk</span>
          </nuxt-link>
        </li>
        <li @click="toggleActiveMenu('TRANSAKSI')">
          <nuxt-link
            to="/admin/transaction"
            class="w-full flex items-center h-10 pl-4 text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            <span class="mr-2 h-6 w-6 text-center">
              <Icon icon="money-check" class="text-lg text-primary"
            /></span>
            <span class="font-medium">Transaksi</span>
          </nuxt-link>
        </li>
        <li @click="toggleActiveMenu('PENGGUNA')">
          <nuxt-link
            to="/admin/user"
            class="w-full flex items-center h-10 pl-4 text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            <span class="mr-2 h-6 w-6 text-center">
              <Icon icon="user" class="text-lg text-primary" />
            </span>
            <span class="font-medium">Pengguna</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/admin/login"
            class="w-full flex items-center h-10 pl-4 text-gray-700 hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            <span class="mr-2 h-6 w-6 text-center">
              <Icon icon="sign-out-alt" class="text-lg text-primary" />
            </span>
            <span class="font-medium">Keluar</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      sideBarOpen: 'admin/sideBarOpen',
    }),
  },
  methods: {
    toggleActiveMenu(menu) {
      this.$store.commit('admin/toggleActiveMenu', menu)
    },
  },
}
</script>
<style scoped>
.active-link {
  @apply bg-gray-200 text-primary;
}

.exact-active-link {
  @apply bg-gray-200 text-primary;
}
</style>
