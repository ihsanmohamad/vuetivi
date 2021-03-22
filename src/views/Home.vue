<template>

   <div class="container mt-16">

        

        <h3 class="text-yellow-600 font-semibold text-3xl font-roboto tracking-wider">Popular Shows</h3>
          <div  v-if="state.loading">
            <Spinner/>
            </div>
          <p v-if="!state.shows" class="text-white w-full text-center mt-16">Looks like there is an error in fetching data.</p>
        <div class="w-full my-10 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
            
            <ShowsList v-for="show in popularShows" :key="show.id" :show="show"/>
            <!-- <p class="text-white w-full text-center ">Nothing to show</p> -->
        </div>

        <h3 class="text-yellow-600 font-semibold text-3xl font-roboto tracking-wider">Currently Airing Shows</h3>
          <div v-if="state.loading">
            <Spinner/>
            </div>
        <div class="w-full my-10 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
            <ShowsList v-for="show in runningShows" :key="show.id" :show="show"/>
            <!-- <p class="text-white w-full text-center">Nothing to show</p> -->
        </div>
        </div>
</template>

<script>
import { reactive, onBeforeMount, computed} from 'vue'
import Header from '@/components/Header.vue'
import ShowsList from '@/components/ShowsList.vue'
import axios from 'axios'

export default {
  components: { Header, ShowsList },
  setup(){
    const state = reactive({
      shows:[
        
      ],
      loading: false
    })
    const fetchShows = async () =>{
      state.loading =true;
      
      const res = await axios.get(`https://api.tvmaze.com/shows`)

      if (res.data) {
        state.shows = res?.data
      }
      state.loading = false
    }


    const popularShows = computed(() => 
      state.shows.filter((shows) => shows.weight >= 100 )
    )
    
    const runningShows = computed(() => 
      state.shows.filter((shows) => shows.status === "Running" )
    )

    onBeforeMount(() =>{
      fetchShows()
    })

    return { state, popularShows, runningShows }
  }
}
</script>
