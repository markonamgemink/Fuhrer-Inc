<template>
  <div>
    <TheHeader />
    <div class="pt-16">
      <Nuxt />
    </div>
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '~/components/TheFooter.vue'
export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>
