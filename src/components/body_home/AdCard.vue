<script setup >
import {defineProps, toRefs } from "vue"
import {  TruckIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'

const router = useRouter();
const props = defineProps({
    id:         {type: String},
    name_ad:    {type: String},
    full_price: {type: Number},
    hood_ad:    {type: String},
    city_ad:    {type: String},
    imgHash:    {type: String}
    });

const {id, name_ad, full_price, hood_ad, city_ad, imgHash} = toRefs(props);

function displayCharacters(description){
  let result;
  result = description.slice(0, 90) + '...';
  return result;
}

const currencyFormater = new Intl.NumberFormat(("en-US"), {
  currency: "COP",
  maximumFractionDigits: 0
});

function openProduct(value){
    router.push({name:"product",params:{pId:value}});
}

</script>
<template>
<div @click="openProduct(id)" class=" rounded-lg w-46 h-90 border border-terciary shadow-lg bg-terciary/50 cursor-pointer" >
    <div class=" w-full h-1/5 relative">
        <div class="flex flex-col text-start">
                    <img class="md:rounded-lg rounded-xl object-cover w-full"
                v-bind="{'src':`https://warocolombia.infura-ipfs.io/ipfs/${imgHash}`, 'alt':imgHash}">
            <div class="px-4 py-2 flex flex-col gap-0.5">
                            <p class="text-fuchsia-800 text-m font-semibold">$ {{currencyFormater.format(full_price)}}</p>
                    <div class="flex flex-col">
                        <p class=" my-0.5 text-primary text-sm font-normal">{{name_ad}}</p>
                        <div class="flex items-center gap-2">
                            <TruckIcon class="h-6 w-6 text-primary"/>
                            <p class="text-primary text-sm">Envio gratis</p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</div>
</template>


<style scoped>
</style>
