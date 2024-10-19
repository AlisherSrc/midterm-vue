<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useProductsStore } from '@/store/products'; // Импорт Pinia store

// Инициализируем маршрут
const route = useRoute();

// Используем Pinia store
const productsStore = useProductsStore();

// Получаем все продукты из Pinia store
const products = computed(() => productsStore.products);

// Найдем нужный продукт по ID из маршрута
const productId = route.params.id;
const product = computed(() => products.value.find(item => item.id === productId));

// Логика для количества товаров
const count = ref(1);

// Уменьшение количества
const decrement = () => {
  if (count.value > 1) {
    count.value--;
  }
};

// Увеличение количества
const increment = () => {
  count.value++;
};
</script>

<template>
   <div v-if="product" class="product-detail">
      <div class="top">
         <div class="product-images">
            <img
              v-for="image in product.images"
              :src="image.url"
              :alt="image.alt"
              class="product-image"
              :key="image.url"
            />
         </div>
         <div class="product">
            <div class="product-1">
               <div class="product-name">
                  <h1 class="name">{{ product.name }}</h1>
                  <div class="star-rating">
                     <!-- star -->
                  </div>
               </div>
               <div class="product-status">
                  <p v-if="product.in_stock" class="in-stock">In Stock</p>
                  <p v-else class="out-of-stock">Out of Stock</p>
               </div>
            </div>
            <div class="product-2">
               <p class="ID">ID: {{ product.id }}</p>
               <p class="trademark">Country: {{ product.country }}</p>
               <p class="category">Category: {{ product.category }}</p>
            </div>
            <div class="product-3">
               <p class="Colour">Colour: {{ product.color }}</p>
               <p class="size">Size: {{ product.size }}</p>
            </div>
            <div class="product-4">
               <p>{{ product.price }}$</p>
               <div class="product-5">
                  <div class="quantity">
                     <button class="but" @click="decrement">-</button>
                     <div class="cnt">
                        <p>{{ count }}</p>
                     </div>
                     <button class="but" @click="increment">+</button>
                  </div>
                  <div class="cart">
                     <button class="cartbt">
                        <p>CART</p>
                        <img src="/shopping-cart.png" alt="shopping cart icon">
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="bot">
         <p>Description: <br> {{ product.description }}</p>
      </div>
   </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

.product-detail{
   display: flex;
   flex-direction: column;
   justify-content: space-between;
}
.top{
   display: flex;
   flex-direction: row;
   justify-content: space-between;
}
.product{
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   font-family: 'Montserrat', sans-serif;
   border: 1px solid black;
   background: #FFFFFF;  
   width: 650px;
   height: 600px;
   padding: 10px;

}

.product-1{
   flex-direction: column;
}
.product-name{

}
.name{
   font-size: 24px;
   font-weight: 700;
   line-height: 29px;
   color: #141414;
   font-family: 'Montserrat', sans-serif;
}
.product-status .in-stock {
   color: #24AD53;
   font-weight: 500;
   font-size: 16px;
   line-height: 19.5px;
}
.product-status .out-of-stock {
   color: red;
   font-weight: 500;
   font-size: 16px;
   line-height: 19.5px;
}
.product-5{
   display: flex;
   flex-direction: row;
   justify-content: space-between;
}
.product-5 .quantity{
   display: flex;
   flex-direction: row;
   width: 126.81px;
   height: 50px;
   top: -1682px;
   left: 1582.12px;
   gap: 0px;
   opacity: 0px;
   justify-content: space-between;

}
.product-5 .quantity p{
   font-size: 18px;
   font-weight: 500;
   line-height: 21.94px;
   text-align: center;
   height:30px;
}
.product-5 .quantity .cnt{
   width: 41.81px;
   height: 50px;
   top: -1682px;
   left: 1582.12px;
   gap: 0px;
   opacity: 0px;

}
.product-5 .quantity .but{
   width: 41.81px;
   height: 50px;
   top: -1682px;
   left: 1582.12px;
   gap: 0px;
   opacity: 0px;
   color: #FFFFFF;
   background-color: #141414;
}
.cartbt img{
   width: 15.05px;
   height: 12.19px;
   top: -1665px;
   left: 2066.8px;
   gap: 0px;
   border: 1.5px 0px 0px 0px;
   opacity: 0px;

}
.cartbt{
   display: flex;
   flex-direction: row;
   width: 190.68px;
   height: 50px;
   top: -1681px;
   left: 1931.32px;
   gap: 0px;
   border-radius: 3px 0px 0px 0px;
   opacity: 0px;
   background: #E8AA31;
   box-shadow: 0px 4px 20px 0px #E8AA316E;

}



</style>