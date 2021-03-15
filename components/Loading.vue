<template>
  <transition name="fade">
    <div class="py-16 flex flex-col justify-center items-center">
      <Icon
        icon="circle-notch"
        class="text-primary text-6xl my-0 mx-auto animate-spin"
      />
      <span class="text-primary text-2xl font-semibold mt-4">Loading</span>
    </div>
  </transition>
</template>

<script>
export default {}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity ease-out duration-300;
}

.fade-enter,
.fade-leave-to {
  @apply opacity-0;
}
</style>
