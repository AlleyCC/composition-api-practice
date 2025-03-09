<template>
 <div class="header">
    <h1>訂單管理系統</h1><br>
    <router-link to="/products" class="nav-link">商品列表</router-link> &nbsp;|
    <router-link to="/cart" class="nav-link">購物車</router-link> &nbsp;|
    <router-link to="/orders" class="nav-link">訂單紀錄</router-link> &nbsp;
  </div>
  <div class="display-content">
    <h3>訂單紀錄</h3>
    <ul v-for="order in orders" :key="order.id">
        <li>訂單時間: {{ order.updateTime }}
            <ul v-for="product in order._object.cart" :key="product.id">
                <li>{{ product.title }} 數量: {{ product.qty }}</li>
            </ul>
        </li>
      
    </ul>
   
  </div>
</template>
<script>
import { ref, computed, onMounted, watch} from 'vue';
import { storeToRefs } from 'pinia';
import { orderStore } from '@/store/ordersStore';
export default {
  setup(){
    const orderList = orderStore();
    const { orders } = storeToRefs(orderList);
    return {
      orders
    }
  
  } 
}
</script>
