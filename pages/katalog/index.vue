<template>
  <main>
    <section>
      <div class="flex justify-center items-center bg-gray-900">
        <div
          class="py-32 flex justify-center items-center text-center flex-col w-4/5 md:w-3/5 lg:w-2/5 space-y-4"
        >
          <p class="text-5xl text-white font-bold">FUHRER INDUSTRI</p>
          <div class="flex w-full items-center">
            <input
              v-debounce:500.unlock="onSearch"
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
                  >Kaos</nuxt-link
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
          <div class="flex flex-col lg:flex-row items-center">
            <p class="text-gray-900 pr-2 text-base font-medium">
              Urut Berdasarkan
            </p>
            <select
              id="orders"
              name="order"
              class="rounded-full bg-white border border-gray-900 p-2 focus:outline-none"
              @change="onOrderChange"
            >
              <option value="newest">Terbaru</option>
              <option value="oldest">Terlama</option>
              <!-- <option value="expensive">Harga Termurah</option>
              <option value="cheapest">Harga Termahal</option> -->
            </select>
          </div>
        </div>
        <Loading v-if="$fetchState.pending" />
        <div
          else
          class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
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
        <div class="flex justify-end my-4">
          <Pagination
            :total="totalData"
            :per-page="16"
            :max-visible-pages="3"
            :current-page.sync="filter.page"
            @on-page-change="onPageChange"
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
import Pagination from '~/components/Pagination.vue'
export default {
  components: {
    ProductCard,
    Loading,
    Pagination,
  },
  data() {
    return {
      filter: {
        page: 1,
        sort_by: null,
        sort_direction: 'desc',
        search: null,
        search_by: 'name',
      },
      totalData: null,
    }
  },
  async fetch() {
    await this.fetchProducts()
  },
  computed: {
    ...mapGetters({
      products: 'product/getProducts',
    }),
  },
  methods: {
    async fetchProducts() {
      await this.$store
        .dispatch('product/getAllProduct', this.filter)
        .then((data) => {
          this.totalData = data.meta.total
        })
    },
    async onOrderChange(event) {
      switch (event.target.value) {
        case 'newest':
          this.filter.sort_direction = 'desc'
          this.filter.sort_by = 'created_at'
          break
        case 'oldest':
          this.filter.sort_direction = 'asc'
          this.filter.sort_by = 'created_at'
          break
        case 'cheapest':
          this.filter.sort_direction = 'desc'
          this.filter.sort_by = 'price'
          break
        case 'expensive':
          this.filter.sort_direction = 'asc'
          this.filter.sort_by = 'price'
          break
      }
      await this.fetchProducts()
    },
    async onSearch($event) {
      this.filter.search = $event
      await this.fetchProducts()
    },
    async onPageChange(params) {
      this.filter.page = params.currentPage
      await this.fetchProducts()
    },
  },
}
</script>
