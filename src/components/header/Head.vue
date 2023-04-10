<script setup>
import { ref } from "vue";
import ImgLogo from "./menuheader/ImgLogo.vue";
import BannerMenu from "./menuheader/BannerMenu.vue"

import { LockOpenIcon } from '@heroicons/vue/24/solid'
import { useRouter } from 'vue-router';

const router = useRouter()
const promos = ref("Q hay pa' tomar 🍸")
const openRoute = () => { router.push({name: "home"}); }

</script>

<template>

    <div class="flex justify-between my-4 mx-1 items-center pl-2 md:px-5 px-4">
      <ImgLogo/>
      <div>
        <ul class="flex items-center gap-4 text-primary">
          <li @click="openRoute()" class="cursor-pointer text-lg font-normal">{{promos}}</li>
          <BannerMenu/>
        </ul>
      </div>
    </div>

</template>

<style scoped>
</style>
