<template>
  <div id="app">
    <Header />
    <b-container class="mt-5">
      <SelectUser :getUsuarioSelecionado="getUsuarioSelecionado"/>
      <Card 
        v-if="usuarioSelecionado"
        :nome="usuarioSelecionado.firstName + ' ' + usuarioSelecionado.lastName"
        :idade="Number(usuarioSelecionado.age)"
        :username="usuarioSelecionado.username"
        :password="usuarioSelecionado.password"
      />
    </b-container>

  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SelectUser from "./components/SelectUser.vue";
import Card from "./components/Card.vue";

export default {
  name: "App",
  components: {
    Header,
    SelectUser,
    Card,
  },
  data: function(){
    return {
      usuarioSelecionado : null
    }
  },
  methods: {
    getUsuarioSelecionado : function( usuario ) {
      this.usuarioSelecionado = usuario;
    }
  }
};
</script>

<style></style>
