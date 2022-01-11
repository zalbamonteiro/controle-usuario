<template>
  <b-col md="6">
    <h3 class="mb-3">Cadastro novo usuário</h3>
    <b-form-group label="Primeiro nome :">
      <b-form-input
        type="text"
        :state="firstName.validation"
        v-model="firstName.valor"
      />
    </b-form-group>
    <b-form-group label="Sobrenome :">
      <b-form-input
        :state="lastName.validation"
        type="text"
        v-model="lastName.valor"
      />
    </b-form-group>
    <b-form-group label="Idade :">
      <b-form-input :state="age.validation" type="text" v-model="age.valor" />
    </b-form-group>
    <b-form-group label="Username :">
      <b-form-input
        :state="username.validation"
        type="text"
        v-model="username.valor"
      />
    </b-form-group>
    <b-form-group label="Senha :">
      <b-form-input
        :state="password.validation"
        type="text"
        v-model="password.valor"
      />
    </b-form-group>
    <b-form-group class="mt-5">
      <b-button @click="isSubmit" variant="primary">Salvar</b-button>
      <p>{{ message }}</p>
    </b-form-group>
  </b-col>
</template>
<script>
export default {
  name: "Form",
  props : {
    usuarioSelecionado: Object, 
  },
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
      age: {
        valor: "",
        validation: null,
      },
      username: {
        valor: "",
        validation: null,
      },
      password: {
        valor: "",
        validation: null,
      },
      message: "",
    };
  },
  methods: {
    createUser: async function () {
      const newUser = {
        firstName: this.firstName.valor,
        lastName: this.lastName.valor,
        age: this.age.valor,
        username: this.username.valor,
        password: this.password.valor,
      };

      let isError = [];
      this.firstName.validation = this.isValidate(
        this.firstName.valor,
        isError
      ); // false
      this.lastName.validation = this.isValidate(this.lastName.valor, isError); // true
      this.age.validation = this.isValidate(this.age.valor, isError); // true
      this.username.validation = this.isValidate(this.username.valor, isError); // true
      this.password.validation = this.isValidate(this.password.valor, isError); // true

      if (isError.includes(false)) {
        this.message = "Campos obrigatórios não preenchidos";
        return;
      }

      const result = await fetch("http://localhost:3000", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((res) => res)
        .catch((error) => {
          return {
            error: true,
            message: error,
          };
        });

      if (!result.error) {
        this.firstName = { valor: "", validation: null };
        this.lastName = { valor: "", validation: null };
        this.age = { valor: "", validation: null };
        this.username = { valor: "", validation: null };
        this.password = { valor: "", validation: null };
        this.message = "Usuário cadastrado com sucesso";
      }
    },
    updateUser: async function() {
      const newUser = {
        firstName: this.firstName.valor,
        lastName: this.lastName.valor,
        age: this.age.valor,
        username: this.username.valor,
        password: this.password.valor,
      };

      let isError = [];
      this.firstName.validation = this.isValidate(
        this.firstName.valor,
        isError
      ); // false
      this.lastName.validation = this.isValidate(this.lastName.valor, isError); // true
      this.age.validation = this.isValidate(this.age.valor, isError); // true
      this.username.validation = this.isValidate(this.username.valor, isError); // true
      this.password.validation = this.isValidate(this.password.valor, isError); // true

      if (isError.includes(false)) {
        this.message = "Campos obrigatórios não preenchidos";
        return;
      }

      const result = await fetch(`http://localhost:3000/${this.usuarioSelecionado._id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((res) => res)
        .catch((error) => {
          return {
            error: true,
            message: error,
          };
        });

      if (!result.error) {
        this.firstName = { valor: "", validation: null };
        this.lastName = { valor: "", validation: null };
        this.age = { valor: "", validation: null };
        this.username = { valor: "", validation: null };
        this.password = { valor: "", validation: null };
        this.message = "Usuário atualizado com sucesso";
      }
    },
    isValidate: function (valor, error) {
      if (valor && valor !== "") {
        error.push(true);
        return true;
      }

      error.push(false);
      return false;
    },
    isSubmit : function(){
      if(this.usuarioSelecionado && this.usuarioSelecionado.username){
        this.updateUser();
        return;
      }

      this.createUser();
    }
  },
  mounted() {
    if(this.usuarioSelecionado && this.usuarioSelecionado.username){
      this.firstName.valor = this.usuarioSelecionado.firstName;
      this.lastName.valor = this.usuarioSelecionado.lastName;
      this.age.valor = this.usuarioSelecionado.age;
      this.username.valor = this.usuarioSelecionado.username;
      this.password.valor = this.usuarioSelecionado.password;
    }
  },
};
</script>
<style></style>
