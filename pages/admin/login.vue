<template>
  <main class="h-screen flex items-center justify-center">
    <div
      class="flex flex-col items-center w-1/4 p-8 bg-white shadow-xl rounded-xl space-y-8"
    >
      <h1 class="text-3xl text-primary font-semibold">LOGIN</h1>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form
          class="flex flex-col space-y-8"
          @submit.prevent="handleSubmit(onSubmit)"
        >
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
              <label for="password" class="text-field-label">Password</label>
            </div>
            <span class="error-text">{{ errors[0] }}</span>
          </ValidationProvider>
          <div class="w-full mt-4">
            <button type="submit" class="w-full btn btn-primary">MASUK</button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </main>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  layout: 'empty',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
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
      } else if (response.data.role !== 'admin') {
        this.$toast.show('Akses anda salah!', {
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
        this.$router.push({ path: '/admin' })
      }
    },
  },
}
</script>
