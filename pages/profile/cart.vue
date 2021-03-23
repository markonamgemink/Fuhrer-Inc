<template>
  <div>
    <Loading v-if="$fetchState.pending" />
    <div v-else class="flex flex-col">
      <button
        class="btn text-red-500 font-semibold text-lg self-end"
        @click="deleteAllCart"
      >
        Hapus Semua
      </button>
      <div class="flex flex-col space-y-8 mt-8">
        <CartCard v-for="cart in carts" :key="cart.id" :cart="cart" />
      </div>
      <div class="flex flex-col items-end mt-8">
        <p class="text-lg font-semibold text-gray-500">Total</p>
        <p class="text-xl font-semibold text-gray-900">
          Rp.
          {{
            total
              .toFixed(2)
              .replace('.', ',')
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
          }}
        </p>
        <button class="btn mt-4 text-xl text-primary border-2 border-primary">
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartCard from '~/components/CartCard.vue'
import Loading from '~/components/Loading.vue'
export default {
  components: {
    CartCard,
    Loading,
  },
  async fetch() {
    await this.$store.dispatch('cart/getAllCart')
  },
  computed: {
    ...mapGetters({
      carts: 'cart/getCarts',
      total: 'cart/getTotal',
    }),
  },
  methods: {
    async deleteAllCart() {
      await this.$store
        .dispatch('cart/deleteAllCart')
        .then(() => {
          this.$toast.show('Sukses Menghapus Semua Barang!', {
            position: 'top-center',
            theme: 'bubble',
            type: 'success',
            duration: 3000,
          })
        })
        .catch(() => {
          this.$toast.show('Gagal Menghapus Semua Barang!', {
            position: 'top-center',
            theme: 'bubble',
            type: 'error',
            duration: 3000,
          })
        })
    },
  },
}
</script>
