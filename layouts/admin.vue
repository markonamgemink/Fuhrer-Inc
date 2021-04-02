<template>
  <main class="flex flex-wrap">
    <Sidebar />

    <div
      class="w-full bg-gray-50 pl-0 lg:pl-64 min-h-screen"
      :class="sideBarOpen ? 'overlay' : ''"
    >
      <Navbar />
      <div class="p-6 bg-gray-50 mb-20">
        <Nuxt />
      </div>

      <Footer />
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '~/components/Admin/Navbar.vue'
import Footer from '~/components/Admin/Footer.vue'
import Sidebar from '~/components/Admin/Sidebar.vue'

export default {
  components: {
    Navbar,
    Footer,
    Sidebar,
  },
  data() {
    return {
      dropDownOpen: false,
    }
  },
  computed: {
    ...mapGetters({ sideBarOpen: 'admin/sideBarOpen' }),
  },

  methods: {
    toggleSidebar() {
      this.$store.commit('admin/toggleSideBar')
    },
  },
}
</script>
