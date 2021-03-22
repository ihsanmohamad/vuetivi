<template>
    <div class="w-full">
    <router-view />
    </div>

</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: { Header },
  setup() {
    return { }
  }
}
</script>