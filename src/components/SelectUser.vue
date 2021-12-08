<template>
  <div class="mt-5">
    <b-form-group>
      <b-form-select v-model="selected">
        <b-form-select-option :value="null"
          >Selecione um usuário</b-form-select-option
        >
        <b-form-select-option
          v-for="(user, index) in users"
          :key="index"
          :value="user"
        >
          {{ user.firstName }}
        </b-form-select-option>
      </b-form-select>
    </b-form-group>
  </div>
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
  methods: {
    getUser: async function () {
      const result = await fetch("http://localhost:3000")
        .then((res) => res.json())
        .then((res) => res)
        .catch((error) => {
          return {
            error: true,
            message: error,
          };
        });

      if (!result.error) {
        this.users = result;
      }
    },
  },
  created: function () {
    this.getUser();
  },
};
</script>
<style></style>