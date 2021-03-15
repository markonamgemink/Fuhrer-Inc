<template>
  <div class="container mx-auto flex py-16 md:py-24 md:space-x-16">
    <div class="hidden md:flex-1 md:flex justify-center">
      <img src="~/assets/svg/login_illustration.svg" alt="Login Illustration" />
    </div>
    <div class="flex-1 md:border-l-8 border-primary">
      <div class="h-full bg-white shadow-xl mx-4 p-8 rounded-xl">
        <h2 class="text-3xl font-semibold text-gray-900 mb-12">Masuk</h2>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form
            class="flex flex-col space-y-8"
            @submit.prevent="handleSubmit(onSubmit)"
          >
            <div class="flex flex-col space-y-12">
              <ValidationProvider v-slot="{ errors }" rules="required|min:8">
                <div class="text-field">
                  <input
                    v-model="form.email"
                    name="email"
                    type="text"
                    class="text-field-input"
                    placeholder=" "
                  />
                  <label for="email" class="text-field-label">Email</label>
                </div>
                <span class="error-text">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider v-slot="{ errors }" rules="required|min:8">
                <div class="text-field">
                  <input
                    v-model="form.password"
                    name="password"
                    type="password"
                    class="text-field-input"
                    placeholder=" "
                  />
                  <label for="password" class="text-field-label"
                    >Password</label
                  >
                </div>
                <span class="error-text">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div>
              <div>
                <nuxt-link to="/" class="text-primary"
                  >Lupa Password?</nuxt-link
                >
              </div>
              <div class="w-full mt-4">
                <button type="submit" class="w-full btn btn-primary">
                  MASUK
                </button>
              </div>
            </div>
          </form>
        </ValidationObserver>
        <div class="mt-8">
          <p class="text-gray-900 text-center">
            Belum Punya Akun?
            <nuxt-link to="/register" class="text-primary text-base"
              >Daftar</nuxt-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  middleware: 'unauth',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/getUser',
      token: 'user/getToken',
    }),
  },
  methods: {
    async onSubmit() {
      const response = await this.$store.dispatch('user/login', this.form)
      if (response.status === 400) {
        this.$toast.show('Email dan Password salah!', {
          position: 'top-center',
          theme: 'bubble',
          type: 'error',
          duration: 3000,
        })
      } else {
        this.$toast.show('Berhasil masuk!', {
          position: 'top-center',
          theme: 'bubble',
          type: 'success',
          duration: 3000,
        })
        this.$router.push({ path: '/' })
      }
    },
  },
}
</script>
