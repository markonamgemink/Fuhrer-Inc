<template>
  <ValidationObserver>
    <form class="flex flex-col space-y-2 p-4">
      <ValidationProvider v-slot="{ errors }" rules="required">
        <div class="flex flex-col space-y-1 text-lg">
          <label for="Nama" class="font-semibold">Nama</label>
          <input
            v-model="form.name"
            name="Nama"
            type="text"
            :class="{ 'border-red-500': errors[0] }"
            class="border-2 border-gray-500 rounded"
            placeholder="Nama Produk"
          />
          <span class="error-text">{{ errors[0] }}</span>
        </div>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" rules="required">
        <div class="flex flex-col space-y-1 text-lg">
          <label for="Deskripsi" class="font-semibold">Deskripsi</label>
          <textarea
            v-model="form.desc"
            name="Deskripsi"
            cols="30"
            rows="5"
            placeholder="Deskripsi Produk"
            class="border-2 border-gray-500 rounded resize-none"
          ></textarea>

          <span class="error-text">{{ errors[0] }}</span>
        </div>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" rules="required">
        <div class="flex flex-col space-y-1 text-lg">
          <label for="Kategori" class="font-semibold">Kategori</label>
          <select
            v-model="form.category.id"
            name="Kategori"
            :class="{ 'border-red-500': errors[0] }"
            class="border-2 bg-white border-gray-500 rounded"
          >
            <option value="1">Kaos</option>
            <option value="2">Hoodie</option>
          </select>
          <span class="error-text">{{ errors[0] }}</span>
        </div>
      </ValidationProvider>
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
  props: {
    product: {
      required: false,
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      form: {
        name: '',
        desc: '',
        category: {
          id: null,
        },
      },
    }
  },
  watch: {
    product(newVal, oldVal) {
      if (newVal != null) {
        this.form = { ...newVal }
      } else {
        Object.assign(this.$data, this.$options.data())
      }
    },
  },
  methods: {
    onsubmit() {},
  },
}
</script>
