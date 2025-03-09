import  { defineStore } from 'pinia';

export const orderStore = defineStore('ordersStore', {
  state: () => {
    return {
      orders: [],
    }
  },
  actions: {
    addToOrder(order){
      console.log('addToOrder')
      console.log('order:',order)
      const now = new Date();
      const orderTime =  now.toLocaleString('zh-TW', { 
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true // 12 小時制，會顯示 "上午" 或 "下午"
      });
      this.orders.push({
        id: new Date().getTime(),
        updateTime: orderTime,
        ...order,
      });
      
      console.log('order:',this.orders)
    }
  }
});