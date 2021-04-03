<template>
  <div
    class="sticky top-0 z-40"
    :class="{
      scrolled: !atTopOfPage,
    }"
  >
    <div
      class="w-full h-16 px-6 bg-white border-b lg:border-none lg:bg-transparent flex items-center justify-between"
    >
      <!-- left navbar -->
      <div class="flex">
        <!-- mobile hamburger -->
        <div class="lg:hidden flex items-center mr-4">
          <button
            class="hover:text-blue-500 hover:border-white focus:outline-none navbar-burger"
            @click="toggleSidebar()"
          >
            <svg
              class="h-5 w-5"
              :style="{ fill: 'black' }"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="text-2xl font-bold text-primary">
          <span>{{ activeMenu }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      atTopOfPage: true,
    }
  },
  computed: {
    ...mapGetters({
      sideBarOpen: 'admin/sideBarOpen',
      activeMenu: 'admin/activeMenu',
    }),
  },
  mounted() {
    window.addEventListener('scroll', this.updateScrollPosititon)
  },
  methods: {
    updateScrollPosititon() {
      if (window.pageYOffset > 0) {
        if (this.atTopOfPage) this.atTopOfPage = false
      } else if (!this.atTopOfPage) this.atTopOfPage = true
    },
    toggleSidebar() {
      this.$store.commit('admin/toggleSideBar')
    },
  },
}
</script>
<style scoped>
.scrolled {
  @apply w-full bg-white shadow-lg z-40;
}
</style>
