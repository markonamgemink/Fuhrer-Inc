<template>
  <modal
    name="product-modal"
    :scrollable="true"
    height="auto"
    :width="900"
    :max-height="400"
  >
    <div class="flex">
      <div class="w-1/2">
        <h3 class="text-center font-semibold text-xl text-gray-900 p-2">
          {{ product != null ? product.name : 'Produk Baru' }}
        </h3>
      </div>
      <div>
        <ul class="flex">
          <li
            :class="{ 'border-b-4 border-primary': activeTab === 1 }"
            class="py-1 px-3 text-lg font-semibold text-gray-700 cursor-pointer"
            @click="activeTab = 1"
          >
            <span>Produk</span>
          </li>
          <li
            :class="{ 'border-b-4 border-primary': activeTab === 2 }"
            class="py-1 px-3 text-lg font-semibold text-gray-700 cursor-pointer"
            @click="activeTab = 2"
          >
            <span>Stock</span>
          </li>
        </ul>
        <Loading
          v-if="$fetchState.pending"
          class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent z-10"
        />
        <div>
          <ProductForm v-show="activeTab === 1" :product="product" />
          <StockForm v-show="activeTab === 2" :stocks="stocks" />
        </div>
        <div class="flex justify-end space-x-4 mb-4">
          <button
            type="button"
            class="btn bg-red-500 text-white rounded-xl"
            @click="$modal.hide('product-modal')"
          >
            Batal
          </button>
          <button type="submit" class="btn bg-blue-500 text-white rounded-xl">
            Simpan
          </button>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import Loading from '../Loading.vue'
import ProductForm from '../Form/ProductForm'
import StockForm from '../Form/StockForm.vue'
export default {
  components: {
    Loading,
    ProductForm,
    StockForm,
  },
  props: {
    productId: {
      required: false,
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      product: null,
      stocks: null,
      activeTab: 1,
    }
  },
  async fetch() {
    await this.$store
      .dispatch('product/getProduct', this.productId)
      .then((data) => {
        console.log(data)
        this.product = { ...data.data }
        this.stocks = [...data.stock]
      })
  },
  watch: {
    productId(newVal, oldVal) {
      if (newVal != null) {
        this.$fetch()
      } else {
        Object.assign(this.$data, this.$options.data())
      }
    },
  },
}
</script>
