<template>
   <div class="container mt-16">
       <h3 class="text-yellow-600 font-semibold text-base font-roboto tracking-wider">Recent Favorites</h3>
        <p v-if="!state.shows.length" class="text-white">Nothing to show</p>
        <div class="w-full my-10 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        <ShowsList v-for="show in state.shows" :key="show.id" :show="show" />
        </div> 
    </div>
</template>

<script>
import { reactive } from 'vue'
import ShowsList from '@/components/ShowsList.vue'
export default {
    components: { ShowsList },
    setup() {
        const state = reactive({
           shows:[
        {
          id: 21,
          name: "One Piece",
          rating: 9,
          genres: ["Action", "Adventure"]
        },
        {
          id: 22,
          name: "One Piece",
          rating: 9,
          genres: ["Action", "Adventure"]
        },
        {
          id: 23,
          name: "One Piece",
          rating: 9,
          genres: ["Action", "Adventure"]
        },
        {
          id: 24,
          name: "One Piece",
          rating: 9,
          genres: ["Action", "Adventure"]
        },
      ] 
        })

        return { state }
    }
}
</script>

<style>

</style>