<script setup>
import {defineProps, toRefs } from "vue"
import { HashtagIcon } from '@heroicons/vue/24/solid'
import { GifIcon } from '@heroicons/vue/24/solid'


const props = defineProps({ 
    name_ad: {type: String}, 
    category:{type: String}, 
    city_ad: {type: String}, 
    saving: {type: Number}
    });

const { name_ad, category, city_ad, saving } = toRefs(props);

const currencyFormater = new Intl.NumberFormat(("en-US"), {
  currency: "COP",
  maximumFractionDigits: 0
});

</script>

<template>
    <div class="flex flex-col gap-1">
        <div class="flex">
            <p class="py-0.5 px-1 my-1 md:my-0 rounded bg-violet-100 text-violet-900 text-sm text-center">Certificado x Waro Colombia</p>
        </div>
        <h1 class="text-2xl font-Inter font-semibold md:text-4xl text-primary">{{name_ad}}</h1>
        <div class="flex gap-2  text-primary font-Rubik text-lg">
            <div class="flex gap-1 ">
                <HashtagIcon class="h-6 w-6 text-primary"/>
                <p>{{props.category}}</p>
            </div>
            <div class="flex gap-1">
                <GifIcon class="h-6 w-6 text-teal-800"/>
                <p class="text-teal-900">Ahorras: $ {{currencyFormater.format(saving)}}</p>
            </div>
        </div>
    </div>
</template>
