<template>
  <div class="container h-full mx-auto px-8 space-y-16">
    <section class="h-full flex flex-col md:flex-row">
      <div class="flex-1 flex flex-col items-center space-y-4">
        <div class="flex flex-col md:hidden">
          <h1 class="text-5xl md:text-6xl font-bold text-primary">
            FUHRER INDUSTRI
          </h1>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900">
            KONVEKSI KAOS
          </h2>
        </div>
        <img src="~/static/images/hitler.png" alt="Hitler" />
      </div>
      <div class="my-auto flex-1 text-center md:text-left">
        <div class="hidden md:flex flex-col">
          <h1 class="text-5xl md:text-6xl font-bold text-primary">
            FUHRER INDUSTRI
          </h1>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900">
            KONVEKSI KAOS
          </h2>
        </div>
        <p class="text-gray-700 text-base font-light py-4 text-left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
          mollitia eius enim voluptate quae sit libero dolorem beatae dicta et,
          officia quaerat rerum aliquam ipsa tempore velit. Praesentium, ad
          unde?
        </p>
        <button class="btn btn-secondary">About Us!</button>
      </div>
    </section>
    <section class="relative h-full flex flex-col-reverse md:flex-row">
      <h1
        class="hidden md:block absolute text-9xl font-bold text-gray-900 opacity-5 top-8"
      >
        KUSTOM KAOS
      </h1>
      <div class="my-auto flex-1">
        <div>
          <h1
            class="hidden md:flex text-5xl md:text-6xl font-bold text-gray-900"
          >
            Kustom Kaos
          </h1>
          <p class="text-gray-700 text-base font-light py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque
            sit maxime ea, facere labore. Voluptas adipisci nostrum iste minima
            doloribus id blanditiis modi alias dolores sunt, sed ex culpa?
          </p>
        </div>
        <div class="border-t-2 pt-8 border-gray-900">
          <nuxt-link to="/" class="text-xl font-semibold link"
            >Kustom Kaos Sendiri Yuk!</nuxt-link
          >
        </div>
      </div>
      <div class="flex-1 flex flex-col items-center space-y-4">
        <h1 class="flex md:hidden text-5xl md:text-6xl font-bold text-gray-900">
          Kustom Kaos
        </h1>
        <img
          src="~/static/images/kaos.png"
          class="md:ml-8 bg-primary rounded-full"
          alt="Kaos"
        />
      </div>
    </section>
    <section class="flex flex-col items-center justify-center space-y-16">
      <h1 class="text-4xl md:text-5xl font-bold text-primary">Katalog</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officiis
        officia porro assumenda quibusdam qui reiciendis, omnis voluptatum
        consequatur laudantium autem cumque eaque unde ipsa iusto voluptates
        asperiores explicabo? Aperiam? Eveniet hic perferendis alias dolor
        laborum recusandae exercitationem corporis, animi laudantium vitae ex
        maiores quae minus iste facere consequuntur necessitatibus et nisi
        maxime fugiat dignissimos sit, accusantium, mollitia neque. Magni!
        Incidunt reiciendis quos possimus voluptatem, eos eius laudantium itaque
        pariatur, labore quas unde ullam sunt. Recusandae fugit quaerat at
        necessitatibus maxime. Iusto perferendis enim quasi totam neque, nostrum
        possimus amet.
      </p>
      <div class="relative w-full border-b-2 border-gray-900">
        <button
          class="btn btn-secondary bg-gray-50 absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        >
          Jelajahi Katalog!
        </button>
      </div>
    </section>
    <section
      class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 pb-16"
    >
      <div class="flex flex-col justify-center items-center space-y-8">
        <h3 class="font-bold text-xl">Kualitas Produk yang Terjamin</h3>
        <img
          src="~/assets/svg/check-mark.svg"
          class="w-32 h-32"
          alt="Check Mark"
        />
        <p class="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi
          magni fugiat pariatur quia vel doloribus quam asperiores error id!
          Aspernatur doloribus maxime molestiae asperiores accusamus nihil
          magnam totam vero.
        </p>
      </div>
      <div class="flex flex-col justify-center items-center space-y-8">
        <h3 class="font-bold text-xl">Harga yang Terjangkau</h3>
        <img
          src="~/assets/svg/indonesian-rupiah.svg"
          class="w-32 h-32"
          alt="Indonesian Rupiah"
        />
        <p class="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi
          magni fugiat pariatur quia vel doloribus quam asperiores error id!
          Aspernatur doloribus maxime molestiae asperiores accusamus nihil
          magnam totam vero.
        </p>
      </div>
      <div class="flex flex-col justify-center items-center space-y-8">
        <h3 class="font-bold text-xl">Bisa Desain Kaos Sendiri</h3>
        <img src="~/assets/svg/crop.svg" class="w-32 h-32" alt="Crop" />
        <p class="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi
          magni fugiat pariatur quia vel doloribus quam asperiores error id!
          Aspernatur doloribus maxime molestiae asperiores accusamus nihil
          magnam totam vero.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>
