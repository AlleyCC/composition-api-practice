<template>
  <div class="header">
    <h1>訂單管理系統</h1><br>
    <router-link to="/products" class="nav-link">商品列表</router-link> &nbsp;|
    <router-link to="/cart" class="nav-link">購物車</router-link> &nbsp;|
    <router-link to="/orders" class="nav-link">訂單紀錄</router-link> &nbsp;
  </div>
  <div class="display-content">
    <h3>購物車</h3>
    <ul v-for="item in cart" :key="item.id">
      <li>{{ item.title }}</li>
      <li>{{ item.price }}</li>
      <li>
        <label for="">
          <input type="text" :value="item.qty"><button type="button" @click.prevent="removeItem(item.id)">移除</button>
        </label>
      </li>
    </ul>
    <button type="button" @click.prevent="addToOrderList()">提交訂單</button>
  </div>
</template>
<script>
import { ref, computed, onMounted, watch} from 'vue';
import { cartStore } from '../store/cartStore';
import { orderStore } from '../store/ordersStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
export default {
  setup(){
    const cartList = cartStore();
    const { cart } = storeToRefs(cartList);
    const removeItem = (productId) => {
      cartList.removeFromCart(productId);
      console.log(cart)
    }
    //submit order
    const orderList = orderStore();
    const router = useRouter();
    const addToOrderList = () => {
      console.log('cart:',cart)
      localStorage.setItem('cart', JSON.stringify(cart));
      const cartCopy = JSON.parse(localStorage.getItem('cart'));
      orderList.addToOrder(cartCopy);
      // clear cart
      // cartList.clearCart();
      router.push('/orders');
      cartList.clearCart();
    }
    return {
      cart,
      removeItem,
      addToOrderList
    }
  
  } 
}
</script>
