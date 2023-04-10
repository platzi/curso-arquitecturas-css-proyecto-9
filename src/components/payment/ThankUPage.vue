<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import {  CheckBadgeIcon } from '@heroicons/vue/24/outline'

const text = ref("Solicitud exitosa y ya en las manos del equipo de la nave, nos comunicaremos en unos instantes para confirmar tu compra.");

</script>
<template>
 <div class="flex flex-col gap-6">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-6 rounded-lg sm:px-10">
        <div class="flex flex-col items-center text-center gap-4">
            <CheckBadgeIcon class="h-24 w-24 text-teal-900"/>
            <p class="text-xl font-normal text-primary">{{text}}</p>
        </div>
    </div>
  </div>
 </div>
</template>