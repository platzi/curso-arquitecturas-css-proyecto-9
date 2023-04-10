<script setup>
import {defineProps, toRefs } from "vue"
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'

const router = useRouter();
const route = useRoute();
const props = defineProps({ full_price: {type: Number}, name_ad: {type: String} });
const { full_price, name_ad } = toRefs(props);

const currencyFormater = new Intl.NumberFormat(("en-US"), {
  currency: "COP",
  maximumFractionDigits: 0
});

function openCheckout (){
    router.push({name:"checkout",params:{price:full_price.value}, query:{id:route.params.pId, name:name_ad.value, c:1}});
}

</script>

<template>
    <div class="grid grid-cols-2 gap-4 items-center content-between rounded-lg p-4 bg-terciary -mx-3 shadow-lg">
        <div class=" flex flex-col gap-1">
            <p class="text-xl font-Rubik font-bold text-indigo-700">$ {{currencyFormater.format(full_price)}}</p>
        </div>
        <div class="relative grid justify-items-end">
            <button @click="openCheckout"
            class="flex flex-column gap-2 items-stretch text-m font-Rubik font-normal py-2 px-4 bg-pink-500 text-white rounded-xl">
            Comprar
            </button>
        </div>

    </div>
</template>