<script setup>
// Setup Vue3 - Composition API
import { ref } from "vue"

import tiktok from "/src/assets/tiktok.svg";
import instagram from "/src/assets/instagram.svg";
import twitter from "/src/assets/twitter.svg";

const msgsocial = ref('Nuestras redes');

const socialMedia = ref([
  {
    name : "titok",
    img : tiktok,
    link: "https://www.tiktok.com/@uno0uno_"
  },
    {
    name : "instagram",
    img : instagram,
    link: "https://www.instagram.com/waro_colombia/"
  },
    {
    name : "twitter",
    img : twitter,
    link: "https://twitter.com/warocolombia"
  }
]);

function openSocialLink(value){
  window.open(value);
}

</script>

<template>
        <div class="flex flex-col gap-2 items-center md:items-start cursor-pointer">
          <p class="text-white">{{msgsocial}}</p>
          <div class="flex gap-4">
            <div
            class="hover:bg-slate-800 p-2 rounded-lg relative"
            v-for="item in socialMedia" :key="item.name"
            @click="openSocialLink(item.link)"
            >
              <img v-bind="{'src':item.img, 'alt':item.name}" class="w-6">
            </div>
          </div>
        </div>
</template>

<style scoped>

</style>
