<script setup>
import { ref } from "vue"
import {  ShieldCheckIcon} from '@heroicons/vue/24/outline'

const text = ref("Pagas cuando recibes tu producto")

</script>

<template>

<div class=" rounded-lg w-46 h-90 border border-terciary shadow-lg bg-terciary/50" >
    <div class=" w-full h-1/5 relative">
         <div class="flex flex-col text-start">
            <div class="m-2">
                <div class="flex flex-col gap-2">
                    <div class="flex gap-1">
                        <ShieldCheckIcon class="h-6 w-6 text-primary"/>
                        <p class="text-primary text-sm">{{text}}</p>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p class="text-primary text-sm">- Aceptamos pagos en Efectivo</p>
                        <p class="text-primary text-sm">- Tarjeta de crédito o débito</p>
                        <p class="text-primary text-sm">- USDC o USDT red Solana</p>
                        <p class="text-primary text-sm">- USDT red Ethereum </p>
                        <p class="text-primary text-sm">- Bitcoin red Lightning Network</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>