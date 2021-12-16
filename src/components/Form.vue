<template>
  <b-col md="6">
    <h3 class="mb-3">Cadastro novo usuário</h3>
    <b-form-group label="Primeiro nome :">
      <b-form-input type="text" v-model="firstName" />
    </b-form-group>
    <b-form-group label="Sobrenome :">
      <b-form-input type="text" v-model="lastName" />
    </b-form-group>
    <b-form-group label="Idade :">
      <b-form-input type="text" v-model="age" />
    </b-form-group>
    <b-form-group label="Username :">
      <b-form-input type="text" v-model="username" />
    </b-form-group>
    <b-form-group label="Senha :">
      <b-form-input type="text" v-model="password" />
    </b-form-group>
    <b-form-group>
      <b-button @click="createUser" variant="primary">Salvar</b-button>
      <p>{{ message }}</p>
    </b-form-group>
  </b-col>
</template>
<script>
export default {
  name: "Form",
  data: function () {
    return {
      firstName: "",
      lastName: "",
      age: "",
      username: "",
      password: "",
      message: "",
    };
  },
  methods: {
    createUser: async function () {
      const newUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
        username: this.username,
        password: this.password,
      };

      const result = await fetch("http://localhost:3000", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(newUser),
      })
      .then((res)=> res.json())
      .then((res) => res)
      .catch((error) => {
          return {
              error : true,
              message : error
          }
      });

      if(!result.error){
          this.firstName ="";
          this.lastName="";
          this.age="";
          this.username="";
          this.password="";
          this.message="Usuário cadastrado com sucesso";
      }

    },
  },
};
</script>
<style></style>
