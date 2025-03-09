import { createRouter, createWebHashHistory } from 'vue-router';
import productComponent from '../views/ProductList.vue';
import orderComponent from '../views/OrderHistory.vue';
const routes = [
  {
    path: '/orders',
    component: orderComponent,
  },
  {
    path: '/products',
    component:  productComponent,
  },
  {
    path: '/cart',
    component: () => import('../views/Cart.vue'),
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;


