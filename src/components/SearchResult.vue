<template>

    <div @click="$emit('goTo')" class="cursor-pointer h-full rounded-md text-left px-4 py-2 bg-gray-700 w-full justify-end border-t-2 border-gray-900">
        <div class="flex items-center flex-row">
            <img class="inline-block object-cover object-center w-9 h-16  bg-gray-100 rounded" :src="show.show.image?.original ? show.show.image?.original : `https://static.tvmaze.com/images/no-img/no-img-landscape-text.png`" /> <span class="flex flex-col flex-grow pl-4">
            <span  class="font-bold text-lg text-gray-100">{{ show.show.name ? show.show.name : "null" }}</span>
            <p v-if="show.show.rating.average" class="flex flex-row text-sm text-gray-100"> {{show.show.rating.average}}<svg class="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15" fill='#FFFF00'>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg></p>
             <div class="flex flex-row flex-wrap">
            <p v-for="genre in show.show.genres" :key="genre" class="pr-2 text-white text-xs md:text-sm">{{genre}}</p>
            </div>
            </span>
           
        </div>
    </div>
    
</template>

<script>
export default {
    props: {
        show: Object
    },
    emit: ['goTo'],
    setup(props, context){
        context.emit('goTo')

        const test = () => {
            console.log("test")
            router.push(`/shows/${show.show.id}`)
        }
        return { test }
    }
}
</script>

<style>

</style>