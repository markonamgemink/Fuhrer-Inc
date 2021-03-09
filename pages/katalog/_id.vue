<template>
  <main>
    <div class="container mx-auto py-16 flex">
      <div class="flex-1"></div>
      <div class="flex-1 p-8 text-white bg-gray-900 rounded-xl">
        <h3 class="text-3xl font-bold">Nama baju - 1231</h3>
        <p class="text-xl font-semibold my-2">Rp. 150.000,00</p>
        <ul class="flex space-x-4 my-4">
          <li><span class="font-semibold text-base size-btn">S</span></li>
          <li><span class="font-semibold text-base size-btn">M</span></li>
          <li>
            <span class="font-semibold text-base size-btn active-size">L</span>
          </li>
          <li><span class="font-semibold text-base size-btn">XL</span></li>
          <li><span class="font-semibold text-base size-btn">XXL</span></li>
        </ul>
        <div class="flex space-x-8 my-2">
          <div class="flex items-center space-x-6">
            <Icon
              icon="plus"
              class="box-content p-1 text-xl bg-primary rounded-full cursor-pointer"
              @click="qty++"
            />
            <p class="font-semibold xl">{{ qty }}</p>
            <Icon
              icon="minus"
              class="box-content p-1 bg-primary text-xl rounded-full cursor-pointer"
              @click="qty--"
            />
          </div>
          <button class="btn bg-white text-black rounded">+ Keranjang</button>
          <button class="btn bg-primary rounded">Beli Langsung</button>
        </div>
        <div class="flex flex-col space-y-4 my-8">
          <div class="flex space-x-8">
            <span class="detail-menu detail-menu-active">Detail</span>
            <span class="detail-menu">Ulasan</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            nihil, quisquam quia nesciunt a pariatur sequi dolore explicabo
            quos. Aut sint esse dolorum tempora ex nemo id sunt quidem
            obcaecati? Reiciendis voluptates odit cupiditate sed nostrum
            architecto similique deserunt et quisquam distinctio in, adipisci
            illum suscipit maxime vel. Laboriosam laborum rem officiis cum
            distinctio ipsam quod a praesentium est molestias! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ipsa reprehenderit eligendi
            sunt voluptate ut iure in pariatur? Officiis magnam pariatur hic
            quaerat mollitia culpa, aliquam tempore corporis placeat,
            consequatur dolorum. Voluptatem recusandae nesciunt blanditiis
            exercitationem illum vitae quo ad doloribus? Soluta atque facilis
            sint recusandae magni, repellendus reprehenderit animi! Iste odio
            tempore animi ex. Quam quod labore veritatis sapiente iste.
          </p>
          <ul class="text-base font-semibold">
            <li>
              <pre>Bahan    : Cotton</pre>
            </li>
            <li>
              <pre>Kategori : Baju</pre>
            </li>
            <li>
              <pre>Berat    : 0.2 KG</pre>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      qty: 0,
    }
  },
}
</script>
<style scoped>
.active-size {
  @apply bg-primary;
}

.size-btn {
  @apply cursor-pointer px-2 py-1 rounded-full hover:bg-primary transition-colors ease-in-out duration-200;
}

.detail-menu {
  @apply text-left pr-6 font-semibold text-lg border-b-4 border-white;
}

.detail-menu-active {
  @apply border-primary;
}
</style>
