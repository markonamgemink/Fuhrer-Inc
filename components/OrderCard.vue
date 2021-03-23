<template>
  <div class="flex shadow-lg rounded-lg justify-between">
    <div class="flex">
      <img src="" alt="Gambar Produk" class="h-48 w-48" />
      <div class="flex flex-col justify-between p-4">
        <div class="flex items-center space-x-2">
          <h3 class="text-lg font-semibold text-gray-900">Kaos Bolong</h3>
          <p class="text-sm text-gray-500">x1</p>
        </div>
        <p class="text-xs text-gray-500">KSO/01-02-2021</p>
        <div class="items-end">
          <p>Total</p>
          <p class="font-semibold text-gray-900">RP. 150.000</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between p-4">
      <p class="text-sm text-gray-500">3 Maret 2021</p>
      <button class="btn text-primary border-2 border-primary rounded">
        Detail Pembelian
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: 'product',
}
</script>
