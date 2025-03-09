<template>
  <div class="header">
    <h1>訂單管理系統</h1><br>
    <router-link to="/products" class="nav-link">商品列表</router-link> &nbsp;|
    <router-link to="/cart" class="nav-link">購物車</router-link> &nbsp;|
    <router-link to="/orders" class="nav-link">訂單紀錄</router-link> &nbsp;
  </div>
  <div class="display-content">
    <h3>產品列表</h3>
    <div >
      <ul >
          <li v-for="item in products" :key="item.id">
            <img :src="item.image" alt="" style="height: 100px; width: 100px;">
            <p>{{ item.title}}</p>
            <p>價格: {{item.price}}</p>
             <button type="button" @click.prevent="addToCartList(item)">加入訂單</button>
          </li>
         
      </ul>
    </div>
  </div>
</template>
<script>
import { ref, computed, onMounted, watch} from 'vue';
import { productsStore } from '../store/productsStore';
import { cartStore } from '../store/cartStore';
import { storeToRefs } from 'pinia';

export default {
  setup(){
    const productsList = productsStore();
    const { products }  =  storeToRefs(productsList);

    const cartList = cartStore();
    const addToCartList = (product) => {
      cartList.addToCart(product);
    };

    onMounted(async function () {
      await productsList.getProducts();
    });
    return {
      products,
      addToCartList
    }
  } 
}





</script>
