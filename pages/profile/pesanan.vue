<template>
  <div>
    <ul
      class="flex border-b-4 py-2 border-primary space-x-2 items-center justify-between"
    >
      <li class="menu menu-active">Menunggu Pembayaran</li>
      <li class="menu">Menunggu Konfirmasi</li>
      <li class="menu">Sedang Diproses</li>
      <li class="menu">Sedang Dikirim</li>
      <li class="menu">Tiba di Tujuan</li>
      <li class="menu">Selesai</li>
    </ul>
    <div class="flex flex-col space-y-8 mt-8">
      <CheckoutCard v-for="index in 10" :key="index" />
    </div>
  </div>
</template>

<script>
import CheckoutCard from '~/components/CheckoutCard.vue'
export default {
  components: {
    CheckoutCard,
  },
}
</script>
<style scoped>
.menu {
  @apply text-sm text-center font-semibold text-gray-500;
}

.menu-active {
  @apply text-primary;
}
</style>
