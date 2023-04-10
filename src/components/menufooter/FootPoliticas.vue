<script setup>
// Setup Vue3 - Composition API
import { ref } from "vue"

const pp = ref('Politica privacidad');
const tc = ref('Terminos y condiciones');
</script>

<template>
    <ul class="text-white flex flex-col gap-2 md:items-end">
        <li class="menu-foot-item hidden md:block">
            <a href="/">{{pp}}</a>
        </li>
        <li class="menu-foot-item hidden md:block">
            <a href="/">{{tc}}</a>
        </li>
    </ul>
</template>

<style scoped>
</style>
