import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import StorefrontView from '@/views/storefrontView.vue';
import ProductView from '@/views/productView.vue';

Vue.use(VueRouter);

export const ROUTE_NAMES = {
  storefront: 'storefront',
  product: 'product',
};

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: ROUTE_NAMES.storefront,
    component: StorefrontView,
  },
  {
    path: '/product/:id',
    name: ROUTE_NAMES.product,
    component: ProductView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
