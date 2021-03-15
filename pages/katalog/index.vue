<template>
  <main>
    <section>
      <div class="flex justify-center items-center bg-gray-900">
        <div
          class="py-32 flex justify-center items-center flex-col w-2/5 space-y-4"
        >
          <p class="text-5xl text-white font-bold">FUHRER INDUSTRI</p>
          <div class="flex w-full items-center">
            <input
              type="text"
              class="rounded-full py-2 px-4 w-full focus:outline-none"
              placeholder="Cari"
            />
            <Icon
              :icon="['fas', 'search']"
              class="ml-4 text-xl text-white"
            ></Icon>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container px-8 py-16 mx-auto">
        <div class="flex justify-between">
          <ul class="flex items-center space-x-4">
            <li>
              <span
                ><nuxt-link
                  to="/katalog"
                  exact
                  class="text-gray-900 font-semibold text-xl"
                  >All</nuxt-link
                ></span
              >
            </li>
            <li>
              <span
                ><nuxt-link to="/" class="text-gray-500 font-semibold text-xl"
                  >T-Shirt</nuxt-link
                ></span
              >
            </li>
            <li>
              <span
                ><nuxt-link to="/" class="text-gray-500 font-semibold text-xl"
                  >Hoodie</nuxt-link
                ></span
              >
            </li>
          </ul>
          <div class="flex items-center">
            <p class="text-gray-900 pr-2 text-base font-medium">
              Urut Berdasarkan
            </p>
            <select
              id="orders"
              name="order"
              class="rounded-full bg-white border border-gray-900 p-2 focus:outline-none"
            >
              <option value="newest">Terbaru</option>
              <option value="newest">Terlama</option>
              <option value="populer">Terpopuler</option>
              <option value="expensive">Harga Termurah</option>
              <option value="cheapest">Harga Termahal</option>
            </select>
          </div>
        </div>
        <Loading v-if="$fetchState.pending" />
        <div else class="mt-4 grid grid-cols-4 gap-8">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product-id="product.id"
            :title="product.name"
            :description="product.desc"
            :price="product.price"
            :image="product.image"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCard from '~/components/ProductCard.vue'
import Loading from '~/components/Loading.vue'
export default {
  components: {
    ProductCard,
    Loading,
  },
  async fetch() {
    await this.$store.dispatch('product/getAllProduct')
  },
  computed: {
    ...mapGetters({
      products: 'product/getProducts',
    }),
  },
}
</script>
