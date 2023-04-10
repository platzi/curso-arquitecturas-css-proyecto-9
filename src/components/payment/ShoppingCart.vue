<script setup>
import {defineProps, toRefs } from "vue"
import {  CurrencyDollarIcon} from '@heroicons/vue/24/outline'
import { CubeIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
    quantity:   {type: String},
    price:      {type: String},
    name:       {type: String}
    });

const { quantity, price, full_price, name } = toRefs(props);

const currencyFormater = new Intl.NumberFormat(("en-US"), {
  currency: "COP",
  maximumFractionDigits: 0
});


</script>

<template>

<div class=" rounded-lg w-46 h-90 border border-terciary shadow-lg bg-terciary/50" >
    <div class=" w-full h-1/5 relative">
         <div class="flex flex-col text-start">
            <div class="m-2">
                <div class="flex flex-col gap-2">
                    <div class="flex gap-1">
                        <CubeIcon class="h-6 w-6 text-primary"/>
                        <p class="text-primary text-sm">{{name}}</p>
                    </div>
                    <div class="flex gap-1">
                        <CurrencyDollarIcon class="h-6 w-6 text-primary"/>
                        <p class="text-primary text-sm">$ {{currencyFormater.format(price)}} COP - Cantidad: {{quantity}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>