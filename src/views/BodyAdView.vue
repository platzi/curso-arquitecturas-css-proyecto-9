<script setup >

import { ref } from "vue"
import BannerBody from "@/components/body_home/BannerBody.vue"; // ready
import { useRouter } from 'vue-router'
const router = useRouter();
const categories = ref(["Aguardiente", "Aperitivo", "Cerveza","Cremas", "Coctelería", "Cognac", "Champagne","Brandy","Ginebra", "Ron", "Vino", "Vodka", "Whisky"]);
const text = ref("Bebidas para que la pases delicioso 👀");

function openCategory(value){
    router.push({name:"category",params:{category:value}});
}

</script>

<template>
<div class="flex flex-col">
      <div class="relative flex flex-col gap-4 md:gap-6">
        <BannerBody
        v-bind:text="text"
        />
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 md:gap-4 gap-2">
              <div class=" rounded-lg w-46 h-90 border border-terciary shadow-lg bg-terciary/50 cursor-pointer" 
               v-for=" item in categories"
              :key="item"
              @click="openCategory(item)"
              >
                  <div class=" w-full h-1/5 relative p-4 md:p-6">
                      <div class="flex flex-col text-center">
                          <div class="px-4 py-2 flex flex-col gap-0.5">
                          <p class="text-primary font-semibold text-xl md:text-3xl">{{item}}</p>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
      </div>
</div>

</template>

<style scoped>
</style>
