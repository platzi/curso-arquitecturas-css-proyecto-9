<script setup >
import Head from "./components/header/Head.vue";
import FooterMenu from "./components/menufooter/FooterMenu.vue";
</script>

<template>

  <header>
    <Head/>
  </header>

  <main class="mt-4 mb-8 px-2 md:px-6 md:gap-8">
    <router-view></router-view>
  </main>

  <footer>
    <FooterMenu/>
  </footer>
</template>

