import  { defineStore } from 'pinia';

export const cartStore =  defineStore('cartStore', {
  state: () => {
    return {
      cart: [],
    };
  },
  actions: {
    addToCart(product, qty = 1){
      const currentCart = this.cart.find((item) => item.id === product.id);
      if (currentCart) {
        currentCart.qty += qty;
      } else {
        this.cart.push({
          id: new Date().getTime(),
          ...product,
          qty,
        });
      }
    },
    removeFromCart(productId){
      const index = this.cart.findIndex((item) => item.id === productId)
      this.cart.splice(index, 1);    
    },
    clearCart(){
      console.log('clearCart')
      this.cart = [];
      console.log(this.cart)
    }
  }
});