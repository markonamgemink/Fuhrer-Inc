<template>
  <modal name="product-modal" :adaptive="true">
    <Loading v-if="$fetchState.pending" />
    <ValidationObserver v-else v-slot="{ handleSubmit }">
      <form
        class="flex flex-col space-y-8"
        @submit.prevent="handleSubmit(onSubmit)"
      >
        <ValidationProvider v-slot="{ errors }" rules="required|alpha_num">
          <div class="flex flex-col space-y-1 text-lg">
            <label for="Nama Depan" class="font-semibold">Nama</label>
            <input
              v-model="form.name"
              name="Nama Depan"
              type="text"
              :class="{ 'border-red-500': errors[0] }"
              class="border-2 border-gray-500 rounded"
              placeholder="Nama Produk"
            />
            <span class="error-text">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
      </form>
    </ValidationObserver>
  </modal>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import Loading from '../Loading.vue'
export default {
  components: {
    Loading,
    ValidationProvider,
    ValidationObserver,
  },
  props: {
    productId: {
      required: false,
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      form: {
        name: '',
      },
    }
  },
  async fetch() {
    await this.$store
      .dispatch('product/getProduct', this.productId)
      .then((data) => {
        this.form = { ...data.data }
      })
  },
  watch: {
    productId(newVal, oldVal) {
      if (newVal != null) {
        this.$fetch()
      } else {
        this.form = null
      }
      console.log(this.form.name)
    },
  },
}
</script>
