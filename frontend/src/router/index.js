import { createRouter, createWebHistory } from "vue-router"
import Login from "../views/Login.vue"
import { applyAuthGuards } from "./guards"

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/editor",
    name: "EDITOR",
    component: () => import("../views/EditorView.vue"),
    meta: {
      requiresAuth: true,
      roles: ["EDITOR", "ADMIN"],
    },
  },
  {
    path: "/admin",
    name: "ADMIN",
    component: () => import("../views/AdminView.vue"),
    meta: {
      requiresAuth: true,
      roles: ["ADMIN"],
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

applyAuthGuards(router)

export default router
