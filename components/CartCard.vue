<template>
  <div class="flex shadow-lg rounded-lg justify-between">
    <div class="flex">
      <img src="" alt="Gambar Produk" class="h-48 w-48" />
      <div class="flex flex-col justify-between p-6">
        <div class="flex items-center space-x-2">
          <h3 class="text-lg font-semibold text-gray-900">
            {{ cart.product.name }}
          </h3>
        </div>
        <div>
          <p class="text-sm font-light text-gray-500 pb-2">Kuantitas</p>
          <div class="flex space-x-4">
            <Icon
              icon="minus"
              class="box-content p-1 text-white text-sm rounded-full cursor-pointer"
              :class="[qty > 1 ? 'bg-red-500' : 'bg-gray-500']"
              @click="updateCart('min')"
            />
            <p class="font-semibold xl">{{ qty }}</p>

            <Icon
              icon="plus"
              class="box-content p-1 text-sm rounded-full cursor-pointer text-white"
              :class="[qty < cart.stock.stock ? 'bg-primary' : 'bg-gray-500']"
              @click="updateCart('plus')"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between items-end p-6">
      <Icon
        icon="trash"
        class="text-red-500 text-lg cursor-pointer"
        @click="deleteCart"
      />
      <div>
        <p class="text-sm text-gray-500">Total</p>
        <p class="text-lg text-gray-900 font-semibold">Rp. {{ total }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  props: {
    cart: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      qty: this.cart.total,
    }
  },

  computed: {
    total() {
      const total = this.cart.stock.price * this.qty
      this.$store.commit('cart/setTotal', { id: this.cart.id, qty: this.qty })
      return total
        .toFixed(2)
        .replace('.', ',')
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
  },
  methods: {
    async updateCart(method) {
      if (method === 'plus' && this.qty < this.cart.stock.stock) {
        this.qty++
      } else if (method === 'min' && this.qty > 1) {
        this.qty--
      }

      await this.$store.dispatch('cart/updateCart', {
        user: this.$store.state.user.user.id || this.$cookies.get('user').id,
        id: this.cart.id,
        id_stock: this.cart.stock.id,
        total: this.qty,
      })
    },
    async deleteCart() {
      await this.$store
        .dispatch('cart/deleteCart', this.cart.id)
        .then(() => {
          this.$toast.show('Sukses Menghapus Barang!', {
            position: 'top-center',
            theme: 'bubble',
            type: 'success',
            duration: 3000,
          })
        })
        .catch(() => {
          this.$toast.show('Gagal Menghapus Barang!', {
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
