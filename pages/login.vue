<template>
  <div class="container mx-auto flex py-16 md:py-24 md:space-x-16">
    <div class="hidden md:flex-1 md:flex justify-center">
      <img src="~/assets/svg/login_illustration.svg" alt="Login Illustration" />
    </div>
    <div class="flex-1 md:border-l-8 border-primary">
      <div class="h-full bg-white shadow-xl mx-4 p-8 rounded-xl">
        <h2 class="text-3xl font-semibold text-gray-900 mb-12">Masuk</h2>
        <form action="#" class="flex flex-col space-y-8">
          <div class="flex flex-col space-y-12">
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
          </div>
          <div>
            <div>
              <nuxt-link to="/" class="text-primary">Lupa Password?</nuxt-link>
            </div>
            <div class="w-full mt-4">
              <button class="w-full btn">MASUK</button>
            </div>
          </div>
        </form>
        <div class="mt-8">
          <p class="text-gray-900 text-center">
            Belum Punya Akun?
            <nuxt-link to="/register" class="text-primary text-base"
              >Daftar</nuxt-link
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
