<template>
  <div>
    <ul class="flex text-gray-700 font-semibold">
      <li
        class="cursor-pointer px-4 py-2 border bg-white border-gray-200 rounded-l-xl overflow-hidden"
        :disabled="currentPage < 2"
        :class="{ 'disabled text-gray-500': currentPage < 2 }"
        @click="currentPage < 2 ? null : onPageChange(currentPage - 1)"
      >
        <Icon icon="angle-up" class="transform -rotate-90" />
      </li>
      <li
        v-for="page in visiblePages"
        :key="page"
        :class="{ 'text-primary bg-gray-200': currentPage === page }"
        class="cursor-pointer px-4 py-2 border bg-white border-gray-200 hover:bg-gray-200 transition-colors duration-200"
        @click="onPageChange(page)"
      >
        {{ page }}
      </li>
      <li
        class="cursor-pointer px-4 py-2 border bg-white border-gray-200 rounded-r-xl overflow-hidden"
        :disabled="currentPage >= totalPages"
        :class="{ 'disabled text-gray-500': currentPage == totalPages }"
        @click="
          currentPage === totalPages ? null : onPageChange(currentPage + 1)
        "
      >
        <Icon icon="angle-up" class="transform rotate-90" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      required: true,
      type: Number,
    },
    perPage: {
      required: true,
      type: Number,
    },
    maxVisiblePages: {
      required: false,
      type: Number,
      default: 5,
    },
    currentPage: {
      required: true,
      type: Number,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.perPage)
    },
    startPage() {
      if (this.currentPage <= Math.ceil(this.maxVisiblePages / 2)) {
        return 1
      }

      if (
        this.currentPage >=
        this.totalPages - Math.ceil(this.maxVisiblePages / 2)
      ) {
        return this.totalPages - this.maxVisiblePages + 1
      }

      return this.currentPage - Math.floor(this.maxVisiblePages / 2)
    },
    endPage() {
      return Math.min(
        this.startPage + this.maxVisiblePages - 1,
        this.totalPages
      )
    },
    visiblePages() {
      const range = []

      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push(i)
      }

      return range
    },
  },
  watch: {
    currentPage(newVal, oldVal) {
      this.$emit('on-page-change', { currentPage: this.currentPage })
    },
  },
  methods: {
    async onPageChange(page) {
      await this.$emit('update:currentPage', page)
    },
  },
}
</script>
