<template>
  <div id="app">
    <Header />
    <b-container class="mt-5">
      <b-row>
        <SelectUser :getUsuarioSelecionado="getUsuarioSelecionado"/>
        <b-col md="3">
           <b-button @click="onChangeFlag"  variant="success">Novo usuários</b-button>
        </b-col>
      </b-row>
      <Card 
        v-if="usuarioSelecionado"
        :nome="usuarioSelecionado.firstName + ' ' + usuarioSelecionado.lastName"
        :idade="Number(usuarioSelecionado.age)"
        :username="usuarioSelecionado.username"
        :password="usuarioSelecionado.password"
      />
      <b-row>
        <Form />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SelectUser from "./components/SelectUser.vue";
import Card from "./components/Card.vue";
import Form from "./components/Form.vue";

export default {
  name: "App",
  components: {
    Header,
    SelectUser,
    Card,
    Form,
  },
  data: function(){
    return {
      usuarioSelecionado : null,
      flag : false,
    }
  },
  methods: {
    getUsuarioSelecionado : function( usuario ) {
      this.usuarioSelecionado = usuario;
    },
    onChangeFlag : function(){
      this.flag = !this.flag;
    }
  }
};
</script>

<style></style>
