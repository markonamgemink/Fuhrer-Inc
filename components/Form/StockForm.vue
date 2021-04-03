<template>
  <ValidationObserver>
    <form class="flex flex-col space-y-2 p-4">
      <div
        v-for="(stock, index) in forms"
        :key="stock.id"
        class="py-2 border-b-2 border-gray-200 flex space-x-2"
      >
        <span class="text-lg font-semibold text-gray-900 w-1/2"
          >Ukuran {{ stock.size }} :
        </span>
        <div class="flex flex-col space-y-2 flex-grow">
          <ValidationProvider v-slot="{ errors }" rules="required">
            <div class="flex flex-col space-y-1 text-lg">
              <label :for="`Stock ${stock.size}`" class="font-semibold"
                >Stok</label
              >
              <input
                v-model="forms[index].stock"
                :name="`Stock ${stock.size}`"
                type="text"
                :class="{ 'border-red-500': errors[0] }"
                class="border-2 border-gray-500 rounded"
                :placeholder="`Stok ${stock.size}`"
              />
              <span class="error-text">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" rules="required">
            <div class="flex flex-col space-y-1 text-lg">
              <label :for="`Price ${stock.size}`" class="font-semibold"
                >Harga</label
              >
              <input
                v-model="forms[index].price"
                :name="`Price ${stock.size}`"
                type="text"
                :class="{ 'border-red-500': errors[0] }"
                class="border-2 border-gray-500 rounded"
                :placeholder="`Stok ${stock.size}`"
              />
              <span class="error-text">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
        </div>
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
  props: {
    stocks: {
      required: false,
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      forms: [
        { size: 'S', stock: 0, price: 0 },
        { size: 'M', stock: 0, price: 0 },
        { size: 'L', stock: 0, price: 0 },
        { size: 'XL', stock: 0, price: 0 },
        { size: 'XXL', stock: 0, price: 0 },
      ],
    }
  },
  watch: {
    stocks(newVal, oldVal) {
      if (newVal != null) {
        this.forms = newVal
      } else {
        Object.assign(this.$data, this.$options.data())
      }
    },
  },
}
</script>
