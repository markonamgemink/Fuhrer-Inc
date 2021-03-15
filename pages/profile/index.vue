<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form
      class="flex flex-col space-y-8"
      @submit.prevent="handleSubmit(obSubmit)"
    >
      <h1 class="text-2xl font-bold text-gray-900">Profil Pengguna</h1>
      <div class="grid grid-cols-2 gap-x-8 mx-8">
        <ValidationProvider v-slot="{ errors }" rules="required|alpha_num">
          <div class="flex flex-col space-y-1 text-lg">
            <label for="Nama" class="font-semibold">Nama</label>
            <input
              v-model="form.name"
              name="Nama"
              type="text"
              :class="{ 'border-red-500': errors[0] }"
              class="border-2 border-gray-500 rounded"
              placeholder="Nama"
            />
            <span class="error-text">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required|email">
          <div class="flex flex-col space-y-1 text-lg">
            <label for="Email" class="font-semibold">Email</label>
            <input
              v-model="form.email"
              name="Email"
              type="text"
              :class="{ 'border-red-500': errors[0] }"
              class="border-2 border-gray-500 rounded"
              placeholder="Email"
            />
            <span class="error-text">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required|alpha_num">
          <div class="flex flex-col space-y-1 text-lg">
            <label for="Telepon" class="font-semibold">Telepon</label>
            <input
              v-model="form.name"
              name="Telepon"
              type="text"
              :class="{ 'border-red-500': errors[0] }"
              class="border-2 border-gray-500 rounded"
              placeholder="Telepon"
            />
            <span class="error-text">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
      },
    }
  },
}
</script>
