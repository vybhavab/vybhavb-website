<!--eslint-disable-->
<template>
  <div id="app">
    <Navbar/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
@import "@/assets/css/application.scss";
</style>
