<template>
  <main>
    <Loading v-if="$fetchState.pending" />
    <div v-else>
      <div class="flex">
        <button
          class="btn bg-primary text-white uppercase rounded-xl"
          @click="onButtonCreateClick"
        >
          create
        </button>
      </div>
      <!-- <vue-good-table
        mode="remote"
        :total-rows="total"
        :columns="columns"
        :rows="rows"
        :search-options="{ enabled: true }"
        :pagination-options="{
          enabled: true,
          mode: 'pages',
        }"
        @on-page-change="onPageChange"
        @on-sort-change="onSortChange"
        @on-per-page-change="onPerPageChange"
        @on-search="onSearch"
      /> -->
      <TheTable
        :total-rows="total"
        :columns="columns"
        :rows="rows"
        @on-search="onSearch"
        @on-per-page-change="onPerPageChange"
        @on-page-change="onPageChange"
        @on-sort-change="onSortChange"
        @on-double-click="onDoubleClick"
      />
    </div>
    <ProductModal :product-id="currentProduct" />
  </main>
</template>

<script>
import Loading from '~/components/Loading.vue'
import TheTable from '~/components/TheTable.vue'
import ProductModal from '~/components/Modal/ProductModal.vue'
export default {
  components: {
    Loading,
    TheTable,
    ProductModal,
  },
  layout: 'admin',
  data() {
    return {
      columns: [
        {
          label: 'ID',
          field: 'id',
        },
        {
          label: 'Nama',
          field: 'name',
        },
        {
          label: 'Kategori',
          field: 'category',
          type: 'number',
        },
        // {
        //   label: 'Created On',
        //   field: 'created',
        //   type: 'date',
        //   dateInputFormat: 'yyyy-MM-dd',
        //   dateOutputFormat: 'MMM do yy',
        // },
      ],
      total: 0,
      rows: null,
      params: {
        page: 1,
        per_page: 10,
        sort_by: null,
        sort_direction: 'asc',
        search: null,
        search_by: null,
      },
      currentProduct: 0,
    }
  },
  async fetch() {
    await this.fetchProducts()
  },
  methods: {
    async fetchProducts() {
      await this.$store
        .dispatch('product/getAllProduct', this.params)
        .then((data) => {
          this.total = data.meta.total
          this.page = data.meta.current_page
          this.rows = data.data.map((product) => {
            const { id, name, category } = { ...product }
            return { id, name, category }
          })
        })
    },
    async onPerPageChange(params) {
      this.params.per_page = params.perPage
      this.params.page = 1
      await this.fetchProducts()
    },
    async onPageChange(params) {
      this.params.page = params.currentPage
      await this.fetchProducts()
    },

    async onSortChange(params) {
      this.params.sort_by = params.sortBy
      if (params.sortBy === 'category') this.params.sort_by = 'id_category'
      this.params.sort_direction = params.sortDirection
      await this.fetchProducts()
    },

    async onSearch(params) {
      this.params.search = params.searchKey
      this.params.search_by = params.searchBy
      if (params.searchBy === 'category') this.params.search_by = 'id_category'
      await this.fetchProducts()
    },
    onDoubleClick(params) {
      this.currentProduct = params.data.id
      this.$modal.show('product-modal')
    },
    onButtonCreateClick() {
      this.currentProduct = null
      this.$modal.show('product-modal')
    },
  },
}
</script>
