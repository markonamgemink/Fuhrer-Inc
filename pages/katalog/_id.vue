<template>
  <main>
    <Loading
      v-if="$fetchState.pending"
      class="w-screen h-screen fixed bg-gray-50 z-10"
    />
    <div v-else class="container mx-auto py-16 flex">
      <div class="flex-1"></div>
      <div class="flex-1 p-8 text-white bg-gray-900 rounded-xl shadow-xl">
        <h3 class="text-3xl font-bold">{{ product.data.name }}</h3>
        <p class="text-xl font-semibold my-2">
          Rp.
          {{
            currentProduct.price
              .toFixed(2)
              .replace('.', ',')
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
          }}
        </p>
        <ul class="flex space-x-4 my-4">
          <li v-for="stock in product.stock" :key="stock.id">
            <span
              :class="{
                'active-size': currentProduct.size === `${stock.size}`,
              }"
              class="font-semibold text-base size-btn"
              @click="changeProductStock(`${stock.size}`)"
              >{{ stock.size }}</span
            >
          </li>
        </ul>
        <div class="flex space-x-8 my-2">
          <div
            class="flex flex-col md:flex-row md:space-x-4 items-center justify-center"
          >
            <div class="flex items-center space-x-6">
              <Icon
                icon="minus"
                class="box-content p-1 text-xl rounded-full cursor-pointer"
                :class="[qty > 0 ? 'bg-red-500' : 'bg-gray-500']"
                @click="qty > 0 ? qty-- : null"
              />
              <p class="font-semibold xl">{{ qty }}</p>

              <Icon
                icon="plus"
                class="box-content p-1 text-xl rounded-full cursor-pointer"
                :class="[
                  qty < currentProduct.stock ? 'bg-primary' : 'bg-gray-500',
                ]"
                @click="qty < currentProduct.stock ? qty++ : null"
              />
            </div>
            <div>
              <p class="text-white font-semibold">
                Stok : {{ currentProduct.stock }}
              </p>
            </div>
          </div>

          <button class="btn bg-white text-black rounded" @click="addToCart">
            + Keranjang
          </button>
          <button class="btn bg-primary rounded">Beli Langsung</button>
        </div>
        <div class="flex flex-col space-y-4 my-8">
          <div class="flex space-x-8">
            <span class="detail-menu detail-menu-active">Detail</span>
            <span class="detail-menu">Ulasan</span>
          </div>
          <p>{{ product.data.desc }}</p>
          <ul class="text-base font-semibold flex space-x-8">
            <div>
              <li>
                <pre>Bahan    : Cotton</pre>
              </li>
              <li>
                <pre>Kategori : {{ product.data.category }}</pre>
              </li>
            </div>
            <div>
              <li>
                <pre>Berat    : 0.2 KG</pre>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from '~/components/Loading.vue'
export default {
  components: {
    Loading,
  },
  data() {
    return {
      qty: 0,
      currentProduct: null,
    }
  },
  async fetch() {
    if (this.product == null || this.product.id !== this.$route.params.id) {
      await this.$store.dispatch('product/getProduct', this.$route.params.id)
      this.currentProduct = this.product.stock[0]
    }
  },

  computed: {
    ...mapGetters({
      product: 'product/getProduct',
      user: 'user/getUser',
    }),
  },
  methods: {
    changeProductStock(size) {
      this.currentProduct = this.product.stock.find(
        (stock) => stock.size === size
      )
    },
    async addToCart() {
      await this.$store
        .dispatch('cart/insertCart', {
          id_user: this.user.id,
          id_stock: this.currentProduct.id,
          total: this.qty,
        })
        .then(() => {
          this.$toast.show('Berhasil Menambahkan Barang!', {
            position: 'top-center',
            theme: 'bubble',
            type: 'success',
            duration: 3000,
          })
        })
        .catch(() => {
          this.$toast.show('Gagal Menambahkan Barang', {
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
<style scoped>
.active-size {
  @apply bg-primary;
}

.disable-size {
  @apply hover:bg-gray-500;
}

.size-btn {
  @apply cursor-pointer px-2 py-1 rounded-full hover:bg-primary transition-colors ease-in-out duration-200;
}

.detail-menu {
  @apply text-left pr-6 font-semibold text-lg border-b-4 border-white cursor-pointer;
}

.detail-menu-active {
  @apply border-primary;
}
</style>
