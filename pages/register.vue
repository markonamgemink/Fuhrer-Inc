<template>
  <div class="container mx-auto flex py-16 md:py-24 md:space-x-16">
    <div class="hidden md:flex-1 md:flex justify-center">
      <img
        src="~/assets/svg/register_illustration.svg"
        alt="Register Illustratoon"
      />
    </div>
    <div class="flex-1 md:border-l-8 border-primary">
      <div class="h-full bg-white shadow-xl mx-4 p-8 rounded-xl">
        <h2 class="text-3xl font-semibold text-gray-900 mb-12">Daftar</h2>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form
            class="flex flex-col space-y-8"
            @submit.prevent="handleSubmit(onSubmit)"
          >
            <!-- <span
              v-if="errors"
              class="error-text rounded bg-red-200 p-2 w-full"
              >{{ errors }}</span
            > -->
            <div class="flex flex-col space-y-12">
              <ValidationProvider v-slot="{ errors }" rules="required">
                <div class="text-field">
                  <input
                    v-model="form.name"
                    name="nama"
                    type="text"
                    class="text-field-input"
                    placeholder=" "
                  />
                  <label for="nama" class="text-field-label">Nama</label>
                </div>
                <span class="error-text">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider v-slot="{ errors }" rules="required|email">
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
              <ValidationProvider
                v-slot="{ errors }"
                rules="required|min:8|confirmed:password_confirmation"
              >
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
              <ValidationProvider
                v-slot="{ errors }"
                vid="password_confirmation"
                rules="required|min:8"
              >
                <div class="text-field">
                  <input
                    v-model="form.password_confirmation"
                    name="konfirmasi password"
                    type="password"
                    class="text-field-input"
                    placeholder=" "
                  />
                  <label for="confirm password" class="text-field-label"
                    >Konfirmasi Password</label
                  >
                </div>
                <span class="error-text">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="w-full mt-8">
              <button type="submit" class="w-full btn btn-primary">
                DAFTAR
              </button>
            </div>
          </form>
        </ValidationObserver>
        <div class="mt-8">
          <p class="text-gray-900 text-center">
            Sudah Punya Akun?
            <nuxt-link to="/login" class="text-primary text-base"
              >Masuk</nuxt-link
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
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
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
      const response = await this.$store.dispatch('user/register', this.form)
      if (response.email) {
        this.$toast.show('Email telah digunakan!', {
          position: 'top-center',
          theme: 'bubble',
          type: 'error',
          duration: 3000,
        })
        this.errors = 'Email telah digunakan!'
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
