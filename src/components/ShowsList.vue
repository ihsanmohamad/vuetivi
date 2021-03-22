<template>
  <div class="w-full">
            <router-link :to="`/shows/${show.id}`">
                <div class="w-2/4 md:w-full flex flex-row  md:flex-col cursor-pointer">
                <img v-lazy="{src: `${show.image?.original}` , loading: 'https://static.tvmaze.com/images/no-img/no-img-landscape-text.png'}"
                class="md:w-full rounded-lg md:aspect-w-1"
                :src="show.image?.original"
                alt="the shows poster"
                />
                <div class="w-full ml-4 md:ml-0 ">
                <h1 class="font-semibold text-gray-100 leading-none text-2xl py-2  mt-1 capitalize ">{{show?.name}}</h1>
                <p v-if="show.rating?.average" class="flex flex-row text-sm text-gray-100">{{ show.rating?.average }} <svg class="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15" fill='#FFFF00'>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg></p>
                <div class="flex flex-col md:flex-row flex-wrap mt-2 ">
                <p v-for="genre in show?.genres" :key="genre" class="pr-2 text-white text-xs md:text-sm">{{ genre ? genre : "" }}</p>
                </div>
                </div>
                </div>
                
            </router-link>
        </div>
</template>

<script>
export default {
    props: {
        show: Object
    },
    setup(props){

    }
}
</script>

<style>

</style>