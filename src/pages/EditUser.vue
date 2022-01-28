<template>
  <div>
    <b-row v-if="user">
      <Form :usuarioSelecionado="user"/>
    </b-row>
  </div>
</template>
<script>
import Form from '../components/Form.vue';

export default {
  name: "EditUser",
  components: {
    Form
  },
  data: function(){
    return{
      user: null 
    }
  },
  methods: {
    getUserById: async function (){
      const id = this.$route.params.id
      const result = await fetch('http://localhost:3000/user/'+id, {
        method: 'GET'
      })
        .then( res => res.json())
        .then( res => res)
        .catch( error => {
          return {
            error: true,
            message: error
          }
        });

      if(!result.error){
        this.user = result;
      }
    }
  },
  created: function (){
    this.getUserById();
  }

}
</script>
<style>
  
</style>