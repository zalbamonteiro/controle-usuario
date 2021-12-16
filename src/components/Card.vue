<template>
  <b-row>
    <b-col md="4">
      <b-card :title="nome" >
        <b-card-text>
          <p>Idade : {{ idade }}</p>
          <p>username : {{ username }}</p>
          <p>password : {{ password }}</p>
        </b-card-text>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: "Card",
  props: {
    nome: String,
    idade: Number,
    username: String,
    password: String,
  },
};
</script>
<style>
.card-text p {
  margin: 0px;
}
</style>
