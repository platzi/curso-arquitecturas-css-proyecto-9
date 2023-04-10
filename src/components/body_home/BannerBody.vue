<script setup>
import { ref, toRefs } from "vue";
const props = defineProps({text:{type: String}});
const {text} = toRefs(props);


</script>

<template>
    <div class=" py-4 rounded-lg px-4 md:px-8 flex gap-4 justify-around items-center content-between bg-gradient-to-r from-slate-900 to-zinc-600">
        <div class="flex flex-col justify-around items-center">
            <p class="py-0.5 md:py-1 text-terciary font-Inter font-semibold md:font-bold text-sm md:text-3xl lg:text-4xl
            leading-normal md:leading-normal lg:leading-normal
            ">{{text}}</p>
        </div>
    </div>
</template>

