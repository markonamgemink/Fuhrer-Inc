<template>
  <footer
    class="flex flex-col space-y-8 justify-center items-center bg-gray-900 text-white p-8"
  >
    <div>
      <span class="text-2xl font-semibold"
        ><h1>Kepoin Kita Di Sosmed!</h1>
      </span>
    </div>
    <div>
      <ul class="flex items-center space-x-8">
        <li>
          <span
            ><Icon
              :icon="['fab', 'whatsapp']"
              class="foot-link foot-icon"
            ></Icon
          ></span>
        </li>
        <li>
          <span
            ><Icon
              :icon="['fab', 'facebook']"
              class="foot-link foot-icon"
            ></Icon
          ></span>
        </li>
        <li>
          <span
            ><Icon
              :icon="['fab', 'instagram']"
              class="foot-link foot-icon"
            ></Icon
          ></span>
        </li>
        <li>
          <span
            ><Icon :icon="['fab', 'youtube']" class="foot-link foot-icon"></Icon
          ></span>
        </li>
      </ul>
    </div>
    <div>
      <ul class="flex items-center space-x-4 md:space-x-8">
        <li><span class="foot-link text-white text-lg">Contact Us!</span></li>
        <li><span class="foot-link text-white text-lg">About Us!</span></li>
        <li><span class="foot-link text-white text-lg">Gallery!</span></li>
        <li><span class="foot-link text-white text-lg">FAQ</span></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {}
</script>
<style scoped>
.foot-link {
  @apply text-base text-white hover:text-primary ease-in transition-colors duration-200;
}

.foot-icon {
  @apply text-xl;
}
</style>
