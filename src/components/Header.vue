<template>
  <div class="w-full bg-gray-900 py-3 border-indigo-700 border-t-8" >
                <div class="container relative w-11/12 mx-auto sm:w-11/12 md:w-8/12">

                    <div v-if="state.mobileMenu === true" class="absolute z-20 p-4 space-y-4 bg-gray-800 rounded-md shadow-lg -right-1 -top-1 -left-1">
                        <div class="flex items-center justify-between text-white ">
                            <h3 class="text-lg font-medium">Menu</h3>

                            <div @click="mobileMenu = false">
                            <svg @click="state.mobileMenu = !state.mobileMenu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="block md:hidden h-6 w-6 cursor-pointer text-white">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                            </div>
                        </div>
                        
                        <div class="space-y-2">
                            <router-link class="flex justify-center px-4 py-2 text-white bg-gray-700 rounded-md "  to="/home">
                                Home
                            </router-link>
                            <router-link class="flex justify-center px-4 py-2 text-white bg-gray-700 rounded-md " to="/shows">
                                Shows
                            </router-link>
                            <router-link class="flex justify-center px-4 py-2 text-white bg-indigo-700 rounded-md " to="/login">
                                Login
                            </router-link>
                        </div>
                    </div>
                
                    <div class="flex items-center justify-between ">
                        <router-link to="/home"><img src="../logo.png" class="w-8 h-8 mr-2"/></router-link>
                        <div class="md:w-96">
                    
                            <div  class="relative text-gray-500 focus-within:text-gray-400">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                                <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </button>
                            </span>
                            <input  
                            type="search"  
                            class="w-full py-2 text-sm pr-2  rounded-md pl-10 outline-none bg-gray-700 text-gray-100" 
                            placeholder="Search..."
                            :value="state.lastSearch" @blur="isVisible()" @input="debounce(function () {
                                state.lastSearch = $event.target.value
                                fetchSearchResults(state.lastSearch)
                            })"
                            autoComplete="off" />
                            <div v-if="state.shows.length >0 " class="absolute z-20 w-full bg-gray-800">
                                
                            <SearchResult  v-for="show in state.shows" :key="show.id" :show="show" @goTo="goTo"/>
                            </div>
                            </div>
                        </div>
                    
                        <div class="hidden md:flex space-x-2 text-white font-semibold tracking-normal ">
                            <router-link to="/shows"><p  class="hover:bg-gray-800 px-3 py-2 rounded-md text-sm cursor-pointer">Shows</p></router-link>
                            <!-- <router-link to ="/favorites"><p class="hover:bg-gray-800 px-3 py-2 rounded-md text-sm cursor-pointer">Favorites</p></router-link> -->
                            <router-link to="/login"><p class="bg-indigo-700 hover:bg-indigo-600 px-3 py-2 rounded-md text-sm cursor-pointer">Login</p></router-link>
                        </div>
                        <svg @click="state.mobileMenu = !state.mobileMenu" class="block md:hidden h-6 w-6 cursor-pointer text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
                    </div>
                </div>
            </div>
</template>

<script>
import SearchResult from '@/components/SearchResult.vue'
import { useRouter } from 'vue-router'
import { reactive } from 'vue';
import axios from 'axios'


export default {
    components: {SearchResult },
    setup(){
        const router = useRouter();

        const isVisible = ()=> {
            state.shows =[]
        };

        const state = reactive({
            shows: Object,
            loading: false,
            lastSearch: "",
            mobileMenu: false,
        })

        const fetchSearchResults = async (searchTerm) => {
            state.shows = []
            state.lastSearch = "";
            state.loading = true;
            if(searchTerm) {
                state.lastSearch = searchTerm;
                state.test = [];
                
                const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)

                if (res.data) {
                    state.shows = res?.data
                }
            }
            state.loading = false
            if (!state.lastSearch || state.lastSearch === "" || isVisible === true) {
                state.shows = []
            }
        }

       

        function createDebounce() {
            let timeout = null;
            return function (fnc, delayMs) {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                fnc();
                }, delayMs || 1000);
            };
        }

        const goTo = () =>{
            router.push('/shows/5')
        }
        

        return { debounce: createDebounce() ,router, state, fetchSearchResults, isVisible, goTo }
    }
}
</script>

<style>

</style>