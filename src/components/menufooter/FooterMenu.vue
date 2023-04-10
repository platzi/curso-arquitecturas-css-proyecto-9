<script setup>
import FootPoliticas from "./FootPoliticas.vue";
import FooterSubscribirse from "./FooterSubscribirse.vue";
import FooterRedesSociales from "./FooterRedesSociales.vue";
</script>

<template>
    <div class="bg-slate-900 flex justify-center md:flex-row md:justify-between gap-6
        h-auto p-3 md:p-8 py-10">
        <FooterRedesSociales/>
        <FooterSubscribirse/>
        <FootPoliticas/>
    </div>
</template>

<style scoped>

</style>
