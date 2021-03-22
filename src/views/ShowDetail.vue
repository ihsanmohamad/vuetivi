<template>
   <div class="px-10 my-4 py-6 bg-gray-800 rounded-lg shadow-md">
      <div v-if="state.loading">
            <Spinner/>
            </div>
        <div v-else class="flex flex-wrap md:flex-nowrap  space-y-4">
            <img alt="testimonial" class="inline-block object-cover object-center w-56  bg-gray-100 rounded" :src="state.show.image?.original" /> 
            <span class="flex flex-col flex-grow pl-4 space-y-3">
            <span class="font-bold text-4xl text-gray-100 ">{{state.show?.name}} <h3 class="text-white text-2xl"><span class="bg-indigo-700  px-3 py-2 rounded-md text-sm "> {{ state.show.status }} </span></h3></span>
            <p class="flex flex-row text-lg text-gray-100 mt-4">{{state.show.rating?.average}}<svg class="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15" fill='#FFFF00'>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            </p>
            <div class="flex flex-row">
            <p v-for="genre in state.show?.genres" :key="genre" class="pr-2 text-white text-xs md:text-sm">{{ genre }}</p>
            </div>
            <p class="text-white">
            {{ summary}}
            </p>
            


            </span>
        </div>
        <div class="flex flex-row space-y-4 mt-12">
            
        </div>
    </div>
</template>

<script>
import { reactive, computed, onBeforeMount, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
export default {
    setup() {
        const route = useRoute();

        const id = route.params.slug

        const state = reactive({
            show: Object,
            loading: false
        })

        const getSummary = async () => {
            state.loading = true
             const res = await axios.get(`http://api.tvmaze.com/shows/${id}`)

            if(res.data){
                state.show = res?.data
            }
            var strippedText = state.show.summary.replace(/<[^>]+>/g, '')
            state.show.summary = strippedText
            state.loading = false
        }

        const summary = computed(() => state.show.summary)

        const fetchShow = async () =>{
            state.loading = true
            const res = await axios.get(`http://api.tvmaze.com/shows/${id}`)

            if(res.data){
                state.show = res?.data
            }
            state.loading = false
        }

        onBeforeMount( () => {
            fetchShow()
        })
        onMounted( () => {
            getSummary(state.show.summary)
        })

        return { state, summary }
    }
}
</script>

<style>

</style>