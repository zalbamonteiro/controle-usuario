<template>
  <div>
    <ul>
      <li v-for="(usuario, index) in users" :key="index">
        {{ index + 1 }} - {{ usuario.firstName }} {{ usuario.lastName }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "SelectUser",
  data: function () {
    return {
      users: [],
    };
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
};
</script>
<style></style>
