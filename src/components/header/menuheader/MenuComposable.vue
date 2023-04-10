<script setup >
import { defineProps, toRefs } from "vue";
const props = defineProps({fromRoute:{type: String}});
const {fromRoute} = toRefs(props);
</script>

<template>

<router-link :to="{name:fromRoute.value}">
    <div class="flex gap-4 items-center md:border-2 md:p-2 md:px-5
                px-1 rounded-lg font-semibold font-rubik">
        <div class="hidden md:hidden lg:block text-primary">
            <slot name="name-menu"/>
        </div>
        <div class="w-5 h-5">
            <slot name="image-menu"/>
        </div>
    </div>
</router-link>

</template>

