import  { defineStore } from 'pinia';

export const productsStore =  defineStore('productsStore', {
  state: () => {
    return {
      products: [],
    };
  },
  actions: {
    async getProducts(){
      const api = `https://fakestoreapi.com/products`;
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.products = data;
      } catch{
        console.log(`Error: fetch api fail.`);
      }
      
    },
    
  }
  
});
