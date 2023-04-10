<script setup>
// Setup Vue3 - Composition API

import {ref, toRefs ,onMounted, defineProps } from "vue"
import { GlobeAmericasIcon } from '@heroicons/vue/24/solid'
import AdCard from "@/components/body_home/AdCard.vue";
import { useRoute } from 'vue-router';
import axios from "axios"


const props = defineProps({category:{type: String}});
const {category} = toRefs(props);
const ads = ref([]);
const route = useRoute();
const loadAds = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://back-waro-colombia.onrender.com/user/getgarage/' + category.value)
            .then(response => {
                ads.value = response.data;
                resolve();
            })
            .catch(err => {
                console.log(err);
                reject(err);
            });
    });
}

onMounted(() => {
  loadAds();
})

</script>
<template>
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 md:gap-4 gap-2">
    <AdCard
        v-for=" item in ads"
        :key="item._id.$oid"
        v-bind:id="item._id.$oid"
        v-bind:name_ad="item.name_ad"
        v-bind:full_price="item.full_price"
        v-bind:hood_ad="item.hood_ad"
        v-bind:city_ad="item.city_ad"
        v-bind:imgHash="item.imgHash"
        >
    </AdCard>
</div>

</template>

<style scoped>
</style>
