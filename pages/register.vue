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
        <form action="#" class="flex flex-col space-y-8">
          <div class="flex flex-col space-y-12">
            <div class="text-field">
              <input
                name="nama"
                type="text"
                class="text-field-input"
                placeholder=" "
              />
              <label for="nama" class="text-field-label">Nama</label>
            </div>
            <div class="text-field">
              <input
                name="email"
                type="text"
                class="text-field-input"
                placeholder=" "
              />
              <label for="email" class="text-field-label">Email</label>
            </div>
            <div class="text-field">
              <input
                name="password"
                type="password"
                class="text-field-input"
                placeholder=" "
              />
              <label for="password" class="text-field-label">Password</label>
            </div>
            <div class="text-field">
              <input
                name="confirm password"
                type="password"
                class="text-field-input"
                placeholder=" "
              />
              <label for="confirm password" class="text-field-label"
                >Confirm Password</label
              >
            </div>
          </div>
          <div class="w-full mt-8">
            <button class="w-full btn">DAFTAR</button>
          </div>
        </form>
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
export default {}
</script>
