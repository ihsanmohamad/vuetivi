<template>
  <div>
  <Header />
  <router-view class="container w-11/12 mx-auto sm:w-11/12 md:w-8/12"></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
    components: { Header }
}
</script>

<style>

</style>