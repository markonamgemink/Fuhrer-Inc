<template>
  <main>
    <Loading
      v-if="$fetchState.pending"
      class="w-screen h-screen fixed bg-gray-50 z-10"
    />
    <div v-else class="container mx-auto py-16 flex">
      <div class="flex-1"></div>
      <div class="flex-1 p-8 text-white bg-gray-900 rounded-xl shadow-xl">
        <h3 class="text-3xl font-bold">{{ product.name }}</h3>
        <p class="text-xl font-semibold my-2">
          Rp.
          {{
            product.price
              .toFixed(2)
              .replace('.', ',')
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
          }}
        </p>
        <ul class="flex space-x-4 my-4">
          <li>
            <span class="font-semibold text-base size-btn">S</span>
          </li>
          <li><span class="font-semibold text-base size-btn">M</span></li>
          <li>
            <span class="font-semibold text-base size-btn active-size">L</span>
          </li>
          <li><span class="font-semibold text-base size-btn">XL</span></li>
          <li><span class="font-semibold text-base size-btn">XXL</span></li>
        </ul>
        <div class="flex space-x-8 my-2">
          <div class="flex items-center space-x-6">
            <Icon
              icon="minus"
              class="box-content p-1 text-xl rounded-full cursor-pointer"
              :class="[qty > 0 ? 'bg-primary' : 'bg-gray-500']"
              @click="qty > 0 ? qty-- : null"
            />
            <p class="font-semibold xl">{{ qty }}</p>

            <Icon
              icon="plus"
              class="box-content p-1 text-xl rounded-full cursor-pointer"
              :class="[qty < product.stock ? 'bg-primary' : 'bg-gray-500']"
              @click="qty < product.stock ? qty++ : null"
            />
          </div>
          <button class="btn bg-white text-black rounded">+ Keranjang</button>
          <button class="btn bg-primary rounded">Beli Langsung</button>
        </div>
        <div class="flex flex-col space-y-4 my-8">
          <div class="flex space-x-8">
            <span class="detail-menu detail-menu-active">Detail</span>
            <span class="detail-menu">Ulasan</span>
          </div>
          <p>{{ product.desc }}</p>
          <ul class="text-base font-semibold flex space-x-8">
            <div>
              <li>
                <pre>Bahan    : Cotton</pre>
              </li>
              <li>
                <pre>Kategori : {{ product.category }}</pre>
              </li>
            </div>
            <div>
              <li>
                <pre>Berat    : 0.2 KG {{ product.id }}</pre>
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
    }
  },

  async fetch() {
    if (this.product == null || this.product.id !== this.$route.params.id) {
      await this.$store.dispatch('product/getProduct', this.$route.params.id)
    }
  },

  computed: {
    ...mapGetters({
      product: 'product/getProduct',
    }),
  },
}
</script>
<style scoped>
.active-size {
  @apply bg-primary;
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
