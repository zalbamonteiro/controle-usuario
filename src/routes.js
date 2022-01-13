import VueRouter from "vue-router"
import Users from "./pages/Users.vue"
import NewUser from "./pages/NewUser.vue"

const routes = [
  {
    path: '/',
    component : Users,
    name: "users"
  },
  {
    path: '/new-user',
    component : NewUser,
    name: "new-user"
  },
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router;