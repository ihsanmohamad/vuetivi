<template>
   <div class="container mt-16">
        <p v-if="!state.shows" class="text-white">Nothing to show</p>
        <div v-if="state.loading">
            <Spinner/>
            </div>
        <div class="w-full my-10 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        <ShowsList v-for="show in state.shows" :key="show.id" :show="show" />
        </div> 
    </div>
</template>

<script>
import { reactive, onBeforeMount } from 'vue'
import axios from 'axios'
import ShowsList from '@/components/ShowsList.vue'
export default {
    components: { ShowsList },
    setup() {
       const state = reactive({
      shows:[
        
      ],
      loading: false
    })
    const fetchShows = async () =>{
      state.loading =true;
      
      const res = await axios.get(`http://api.tvmaze.com/shows`)

      if (res.data) {
        state.shows = res?.data
      }
      state.loading = false
    }

    onBeforeMount(() =>{
      fetchShows()
    })

        return { state }
    }
}
</script>

<style>

</style>