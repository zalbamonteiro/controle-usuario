<template>
  <div id="app">
    <Header />
  <div class="mt-5">
    <SelectUser />
  </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import SelectUser from './components/SelectUser.vue'; 

export default {
  name: 'App',
  components: {
    Header,
    SelectUser
  },
  
  
}
</script>

<style>
</style>
