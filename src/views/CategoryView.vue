<script setup >
import { ref } from "vue"
import BannerBody from "@/components/body_home/BannerBody.vue"; // ready
import AdsList from "../components/body_home/AdsList.vue";
import { useRoute } from 'vue-router'
const route = useRoute();
const category = ref(route.params.category);
const banner = ref(`${category.value} para pasarla deli 🤩`);

</script>

<template>
<div class="flex flex-col">
        <BannerBody
        v-bind:text="banner"
        />
      <div class="relative flex flex-col gap-8 md:gap-8 mt-6" >
        <AdsList
        v-bind:category="category"
        />
      </div>
</div>

</template>

<style scoped>
</style>
