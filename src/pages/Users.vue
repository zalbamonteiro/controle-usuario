<template>
  <div>
    <b-row>
      <b-col>
        <h3>Todos os usuários</h3>
      </b-col>
      <b-col md="2" class="mb-3">
        <b-button variant="success">
          <b-link to="/new-user" class="link-button">Novo usuário</b-link>
        </b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-list-group>
        <b-list-group-item>
          <b-row>
            <b-col md="3">Nome: </b-col>
            <b-col md="2">Idade: </b-col>
            <b-col md="3">username: </b-col>
            <b-col >Senha: </b-col>
          </b-row>
        </b-list-group-item>
        <b-list-group-item v-for="(user, index) in users" :key="index">
          <b-row>
            <b-col md="3">{{user.firstName + " " +user.lastName}}</b-col>
            <b-col md="2">{{user.age}}</b-col>
            <b-col md="3">{{user.username}}</b-col>
            <b-col md="2">{{user.password}}</b-col>
            <b-col md="2" class="action-column">
              <b-button size="sm" variant="primary">
                <b-link class="link-button" :to="{name : 'edit-user', params : { id : user._id}}">
                  Editar
                </b-link>
              </b-button>
              <b-button size="sm" @click="removeUser(user._id)">Excluir</b-button>
            </b-col>
          </b-row>
        </b-list-group-item>
      </b-list-group>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "Users",
  data: function(){
    return {
      users : []
    }
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
    removeUser: async function( userId ){
      const result = fetch('http://localhost:3000/'+userId, {
        method: "DELETE"
      }).then(res => res.jon())
        .then(res => res)
        .catch(error => {
          return {
            error: true,
            message: error
          }
        });


      if(!result.error){
        this.getUser();
      }
    }
  },
  created: function() {
    this.getUser();
  },
};
</script>
<style>
  .action-column{
      display: flex;
      justify-content: space-around;
  }

  .link-button, .link-button:hover{
    text-decoration: none;
    color: #fff;
  }
</style>
