<template>
  <!-- give the sidebar z-50 class so its higher than the navbar if you want to see the logo -->
  <!-- you will need to add a little "X" button next to the logo in order to close it though -->
  <div
    class="w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-white shadow-xl z-30"
    :class="sideBarOpen ? '' : 'hidden'"
  >
    <div class="w-full h-20 border-b flex px-4 items-center mb-8">
      <p class="font-semibold text-3xl text-blue-400 pl-4">LOGO</p>
    </div>

    <div class="mb-4 px-4 h-full flex flex-col">
      <div
        class="w-full flex items-center text-blue-400 h-10 pl-4 bg-gray-200 hover:bg-gray-200 rounded-lg cursor-pointer"
      >
        <span class="mr-2 h-6 w-6 text-center">
          <Icon icon="home" class="text-lg text-primary" />
        </span>
        <nuxt-link to="/fuhrer-admin/"
          ><span class="text-gray-700 font-medium">Dashboard</span></nuxt-link
        >
      </div>
      <div
        class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
      >
        <span class="mr-2 h-6 w-6 text-center">
          <Icon icon="tshirt" class="text-lg text-primary"
        /></span>
        <nuxt-link to="/fuhrer-admin/product"
          ><span class="text-gray-700 font-medium">Produk</span></nuxt-link
        >
      </div>
      <div
        class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
      >
        <span class="mr-2 h-6 w-6 text-center">
          <Icon icon="money-check" class="text-lg text-primary"
        /></span>
        <nuxt-link to="/fuhrer-admin/transaction"
          ><span class="text-gray-700 font-medium">Transaksi</span></nuxt-link
        >
      </div>
      <div
        class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"
      >
        <span class="mr-2 h-6 w-6 text-center">
          <Icon icon="user" class="text-lg text-primary" />
        </span>
        <nuxt-link to="/fuhrer-admin/user"
          ><span class="text-gray-700 font-medium">Pengguna</span></nuxt-link
        >
      </div>
      <div
        class="w-full flex items-center h-10 pl-4 self-end place-self-end justify-self-end hover:bg-gray-200 rounded-lg cursor-pointer"
      >
        <span class="mr-2 h-6 w-6 text-center">
          <Icon icon="sign-out-alt" class="text-lg text-primary" />
        </span>
        <nuxt-link to="/fuhrer-admin/user"
          ><span class="text-gray-700 font-medium">Keluar</span></nuxt-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      sideBarOpen: 'admin/sideBarOpen',
    }),
  },
}
</script>
