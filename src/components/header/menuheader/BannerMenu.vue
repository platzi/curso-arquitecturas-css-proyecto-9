<script setup >

import { ref } from "vue";
const banner = ref('Hecho en Colombia')

</script>

<template>
    <li class="hidden md:block p-2 px-5 rounded-lg
    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
    cursor-pointer">
        <div>
            <p class="text-terciary md:hover:text-primary">{{banner}}</p>
        </div>
    </li>
</template>
