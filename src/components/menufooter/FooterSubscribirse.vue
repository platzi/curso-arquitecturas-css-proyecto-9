<script setup>
import { ref } from "vue"

const msglabel = ref('Comunidad VIP');
const msgbutton= ref('Inscribirme');

function openCommunity(){
    window.open("https://t.me/warobogota");
}

</script>

<template>
    <div class="flex flex-col gap-2 justify-center relative">
        <label for="fname" class="text-white">{{msglabel}}</label>
        <button  @click="openCommunity"
        class="gap-4 items-center p-2 md:p-2 md:px-5 px-1 rounded-lg
        font-rubik text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        hover:text-primary" type="submit">{{msgbutton}}</button>
    </div>
</template>

<style scoped>
</style>
