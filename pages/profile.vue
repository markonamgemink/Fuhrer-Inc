<template>
  <main>
    <Loading
      v-if="$fetchState.pending"
      class="w-screen h-screen fixed bg-gray-50 z-10"
    />
    <div class="container mx-auto p-8 flex space-x-8">
      <section class="w-1/3 h-full bg-white shadow-xl rounded-xl p-4">
        <img src="" alt="Gambar Product" class="bg-gray-500 rounded-lg h-64" />
        <ul class="pt-4 font-semibold text-gray-900">
          <li>
            <pre>Nama    : {{ user.name }} </pre>
          </li>
          <li>
            <pre>Email   : {{ user.email }} </pre>
          </li>
          <li>
            <pre>Telepon : {{ user.id }} </pre>
          </li>
          <li>
            <pre>Alamat  : {{ user.role }} </pre>
          </li>
        </ul>
      </section>
      <section class="w-full bg-white shadow-xl h-screen rounded-xl px-16 py-8">
        <div class="flex space-x-8">
          <span class="menu menu-active">Profil</span>
          <span class="menu">Ulasan</span>
        </div>
        <div class="py-8">
          <nuxt-child />
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from '../components/Loading.vue'
export default {
  components: { Loading },
  middleware: 'auth',
  async fetch() {
    if (this.user == null) {
      this.user = await this.$store.dispatch('user/getUser')
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/getUser',
    }),
  },
}
</script>

<style scoped>
.menu {
  @apply text-gray-500 text-xl font-semibold;
}

.menu-active {
  @apply text-gray-900 border-b-4 border-primary;
}
</style>
