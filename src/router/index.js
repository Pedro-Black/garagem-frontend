import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoriaView from "../views/CategoriaView.vue";
import CoresView from "../views/CoresView.vue";
import MarcasView from "../views/MarcasView.vue";
import AcessoriosView from "../views/AcessoriosView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/categorias",
      name: "categorias",
      component: CategoriaView,
    },
    {
      path: "/acessorios",
      name: "acessorios",
      component: AcessoriosView,
    },
    {
      path: "/marcas",
      name: "marcas",
      component: MarcasView,
    },
    {
      path: "/cores",
      name: "cores",
      component: CoresView,
    }
  ],
});

export default router;
