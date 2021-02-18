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
      <ul class="flex items-center space-x-4">
        <li>
          <span
            ><Icon name="brands/facebook" scale="1.2" class="foot-link"></Icon
          ></span>
        </li>
        <li>
          <span
            ><Icon name="brands/instagram" scale="1.2" class="foot-link"></Icon
          ></span>
        </li>
        <li>
          <span
            ><Icon name="brands/tiktok" scale="1.2" class="foot-link"></Icon
          ></span>
        </li>
        <li>
          <span
            ><Icon name="brands/youtube" scale="1.2" class="foot-link"></Icon
          ></span>
        </li>
      </ul>
    </div>
    <div>
      <ul class="flex items-center space-x-8">
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
</style>
