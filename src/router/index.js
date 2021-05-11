import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home"; 
import Me from "../views/Me.vue";
import Cart from "../views/Cart.vue";
import Fenlei from "../views/Fenlei.vue";
import Hotsale from "../views/Hotsale.vue";
import Article from "../views/Article";
Vue.use(VueRouter);

const routes = [
  {
    path: "/article/:pid", //详情页
    name: "Article",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "article" */ "../views/Article.vue"),
    props: true,
  },

  {
    path: "/hotsale/:className",
    name: "Hotsale",
    component: Hotsale,
    props: true,
  },
  {
    path: "/fenlei",
    name: "Fenlei ",
    component: Fenlei,
  },

  {
    path: "/me", //我的
    name: "Me",
    component: Me, // route level code-splitting // this generates a separate chunk (about.[hash].js) for this route // which is lazy-loaded when the route is visited. // component: () => //   import(/* webpackChunkName: "/wode" */ "../views/wode.vue"),
  },
  {
    path: "/cart", //购物车
    name: "Cart",
    component: Cart, // route level code-splitting // this generates a separate chunk (about.[hash].js) for this route // which is lazy-loaded when the route is visited. // component: () => //   import(/* webpackChunkName: "/gouwuche" */ "../views/Cart.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/article", //详情页
    name: "Article",
    component: () =>

    import(/* webpackChunkName: "article" */ "../views/Article.vue"),
  },
  {
    path: "/register", //详情页
    component: () =>
    import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
  {
    path: "/login", //详情页
    component: () =>
    import(/* webpackChunkName: "login" */ "../views/Login"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
