<template>
  <b-row>
    <b-col>
      <b-form-group>
        <b-form-select v-model="selected">
          <b-form-select-option :value="null" selected>
            Selecione o seu usuário
          </b-form-select-option>
          <b-form-select-option 
            v-for="(usuario, index) in users" 
            :key="index"
            :value="usuario"
          >
            {{usuario.firstName}}
          </b-form-select-option
          >
        </b-form-select>
      </b-form-group>
      {{selected && selected.firstName}}
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: "SelectUser",
  data: function () {
    return {
      users: [],
      selected: null,
    };
  },
  props : {
    getUsuarioSelecionado : Function
  },
  methods: {
    getUser: async function () {
      const result = await fetch("http://localhost:3000/")
        .then((res) => res.json())
        .then((res) => res)
        .catch((error) => {
          const objError = {
            error: true,
            message: error,
          };
          return objError;
        });

      if (!result.error) {
        this.users = result;
      }
    },
  },
  created: function () {
    this.getUser();
  },
  updated: function() {
    this.getUsuarioSelecionado( this.selected );
  }
};
</script>
<style></style>
