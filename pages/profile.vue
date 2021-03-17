<template>
  <main>
    <Loading
      v-if="$fetchState.pending"
      class="w-screen min-h-screen fixed bg-gray-50 z-10"
    />
    <div
      v-else
      class="container mx-auto md:p-8 flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0"
    >
      <section class="w-full md:w-1/3 h-full bg-white shadow-xl rounded-xl p-4">
        <img
          src=""
          alt="Gambar Profil"
          class="bg-gray-500 rounded-lg h-64 w-64 object-cover object-center mx-auto"
        />
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
      <section
        class="w-full bg-white shadow-xl min-h-screen rounded-xl px-4 md:px-16 py-8"
      >
        <div class="flex space-x-8">
          <nuxt-link to="/profile" exact=""
            ><span class="menu">Profil</span></nuxt-link
          >
          <nuxt-link to="/profile/pesanan">
            <span class="menu">Pesanan Saya</span>
          </nuxt-link>
          <nuxt-link to="/profile/keranjang">
            <span class="menu">Keranjang Saya</span>
          </nuxt-link>
        </div>
        <div class="py-8">
          <nuxt-child :user="user" />
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
      await this.$store.dispatch('user/getUser')
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

.active-link {
  @apply text-gray-900 border-b-4 border-primary;
}

.exact-active-link {
  @apply text-primary;
}
</style>
