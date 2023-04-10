<script setup>

import {defineProps, toRefs } from "vue"
const props = defineProps({ description: {type: String} });
const { description } = toRefs(props);

</script>

<template>
    <div class="grid gap-4 items-center content-between rounded-t-lg p-4 bg-terciary -mx-3">
        <p class="text-m font-Rubik font-normal">Información:</p>
    </div>
    <div class="mt-4 flex flex-col">
        <p class="text-primary font-Rubik text-m"
        v-for="(line,lineNumber) of description.split('\n')"
        v-bind:key="lineNumber">
        {{ line }}<br/>
        </p>
    </div>
</template>