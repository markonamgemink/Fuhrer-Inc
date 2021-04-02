<template>
  <div class="w-full h-full flex flex-col space-y-4 my-8">
    <div class="flex space-x-4 items-center">
      <span class="text-gray-700 text-xl">Cari:</span>
      <input
        v-debounce:500.unlock="onSearch"
        type="text"
        class="px-4 py-1 text-lg text-gray-700 rounded-xl shadow-lg focus:outline-none"
      />
      <select
        name="search_by"
        class="rounded-xl bg-gray-200 font-semibold p-2 focus:outline-none"
        @change="onSearchByChange"
      >
        <option
          v-for="(column, index) in columns"
          :key="index"
          :value="column.field"
          class="bg-white text-gray-700 p-4"
        >
          {{ column.label }}
        </option>
      </select>
    </div>
    <table
      class="table-auto border border-gray-200 rounded-xl overflow-hidden shadow-xl w-full"
    >
      <thead>
        <tr>
          <th
            v-for="(column, index) in columns"
            :key="index"
            class="px-4 py-3 bg-gray-100 text-gray-700 font-semibold uppercase border-b-2 border-gray-200 tracking-wider"
            @click="onSort(column)"
          >
            <div class="flex justify-between">
              <span>
                {{ column.label }}
              </span>
              <span>
                <Icon
                  icon="angle-up"
                  class="transition-transform duration-500"
                  :class="{
                    'transform rotate-180':
                      sortDirection === 'desc' && sortBy === column.field,
                  }"
                />
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in rows"
          :key="index"
          class="hover:bg-gray-200 transition-colors duration-100"
          @dblclick="onDoubleClick(row)"
        >
          <td
            v-for="(data, i) in row"
            :key="i"
            class="p-3 text-gray-700 border-b border-gray-200"
          >
            {{ data }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-between items-center">
      <div>
        <span class="text-gray-700 text-xl">Data Per Halaman:</span>
        <select
          name="per_page"
          class="rounded-xl bg-gray-200 font-semibold p-2 focus:outline-none"
          @change="onPerPageChange"
        >
          <option class="bg-white text-gray-700 p-4">10</option>
          <option class="bg-white text-gray-700 p-4">25</option>
          <option class="bg-white text-gray-700 p-4">50</option>
          <option class="bg-white text-gray-700 p-4">100</option>
        </select>
      </div>
      <Pagination
        :total="totalRows"
        :per-page="perPage"
        :max-visible-pages="5"
        :current-page.sync="currentPage"
        @on-page-change="onPageChange"
      />
    </div>
  </div>
</template>

<script>
import Pagination from './Pagination.vue'
export default {
  components: {
    Pagination,
  },
  props: {
    columns: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
    totalRows: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      searchKey: null,
      searchBy: this.columns[0].field,
      sortDirection: 'asc',
      sortBy: null,
      perPage: 10,
      currentPage: 1,
    }
  },
  methods: {
    onSearch($event) {
      this.searchKey = $event
      this.currentPage = 1
      this.$emit('on-search', {
        searchKey: this.searchKey,
        searchBy: this.searchBy,
      })
    },
    onSearchByChange(event) {
      this.searchBy = event.target.value
      this.currentPage = 1
      this.$emit('on-search', {
        searchKey: this.searchKey,
        searchBy: this.searchBy,
      })
    },
    onSort(column) {
      switch (this.sortDirection) {
        case 'asc':
          this.sortDirection = 'desc'
          break
        case 'desc':
          this.sortDirection = 'asc'
          break
      }
      this.sortBy = column.field
      this.currentPage = 1
      this.$emit('on-sort-change', {
        sortDirection: this.sortDirection,
        sortBy: this.sortBy,
      })
    },
    onPerPageChange(event) {
      this.perPage = Number(event.target.value)
      this.currentPage = 1
      this.$emit('on-per-page-change', { perPage: this.perPage })
    },
    onPageChange(params) {
      this.$emit('on-page-change', params)
    },
    onDoubleClick(params) {
      this.$emit('on-double-click', { data: params })
    },
  },
}
</script>
