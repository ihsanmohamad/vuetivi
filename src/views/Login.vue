<template>
  <div class="w-full min-h-full max-w-xs m-auto bg-gray-700 rounded-xl p-5">

  <header>
  <img class="w-20 mx-auto mb-5" src="../logo.png" />
  </header>

  <form @submit.prevent="() => router.push('/home')">
   <div>
    <label class="block mb-2 text-gray-300 hover:text-gray-100" for="username">Username</label>
    <input class="w-full rounded-lg p-2 mb-6 text-white border-b-2 border-indigo-500 outline-none bg-gray-700 " type="text" name="username">
  </div>
  <div>
    <label class="block mb-2 text-gray-300 hover:text-gray-100" for="password">Password</label>
    <input class="w-full p-2 mb-6 rounded-lg text-white border-b-2 border-indigo-500 outline-none bg-gray-700 " type="password" name="password">
  </div>
  <div>          
    <input class="w-full bg-indigo-800 hover:bg-indigo-700 text-white font-bold py-2 px-4 mb-6 rounded-lg cursor-pointer" type="submit" value="Login">
  </div>       
</form>

<footer class="py-5">
  <a class="text-gray-300 hover:text-gray-100 text-sm float-left" href="#">Forgot Password?</a>
  <a class="text-gray-300 hover:text-gray-100 text-sm float-right" href="#">Create Account</a>
</footer> 

  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup() {

    const router = useRouter()

    return { router }
  }
}
</script>

<style>

</style>