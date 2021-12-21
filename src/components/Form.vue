<template>
  <b-col md="6">
    <h3 class="mb-3">Cadastro novo usuário</h3>
    <b-form-group label="Primeiro nome :">
      <b-form-input type="text" :state="firstName.validation" v-model="firstName.valor" />
    </b-form-group>
    <b-form-group label="Sobrenome :">
      <b-form-input :state="lastName.validation" type="text" v-model="lastName.valor" />
    </b-form-group>
    <b-form-group label="Idade :">
      <b-form-input :state="age.validation" type="text" v-model="age.valor" />
    </b-form-group>
    <b-form-group label="Username :">
      <b-form-input :state="username.validation" type="text" v-model="username.valor" />
    </b-form-group>
    <b-form-group label="Senha :">
      <b-form-input :state="password.validation" type="text" v-model="password.valor" />
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
      firstName: {
        valor: "",
        validation: null,
      },
      lastName: {
        valor: "",
        validation: null,
      },
      age:  {
        valor: "",
        validation: null
      },
      username:  {
        valor: "",
        validation: null
      },
      password:  {
        valor: "",
        validation: null
      },
      message:"",
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

      let isError = null;
      this.firstName.validation = this.isValidate(this.firstName.valor, isError);
      this.lastName.validation = this.isValidate(this.lastName.valor);
      this.age.validation = this.isValidate(this.age.valor);
      this.username.validation = this.isValidate(this.username.valor);
      this.password.validation = this.isValidate(this.password.valor);

      if(!isError){
        return
      }

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
    isValidate: function (valor, error) {

      if (valor && valor !== "") {
        error = true
        return error;
      }

      error = false;
      return error;
    },
  },
};
</script>
<style></style>
