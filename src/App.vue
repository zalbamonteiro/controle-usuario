<template>
  <div id="app">
    <Header />
    <b-container class="mt-5">
      <router-view />
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  }
};
</script>
<style></style>
