<template>
  <nuxt-link :to="{ name: 'katalog-id', params: { id: productId } }">
    <div
      class="flex flex-col shadow-md rounded-xl transform hover:shadow-xl hover:scale-105 transition-all ease-out duration-300"
    >
      <img
        :src="image"
        alt="Gambar Product"
        class="bg-gray-700 rounded-lg h-64"
      />
      <div class="p-4">
        <h3 class="text-gray-900 font-semibold text-xl">{{ title }}</h3>
        <p class="text-gray-500 line-clamp-3">
          {{ description }}
        </p>
        <p class="text-gray-900 text-xl font-semibold">Rp. {{ price }}</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    productId: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
}
</script>
