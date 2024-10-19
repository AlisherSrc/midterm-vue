<script>
import {products} from "@/data/data.ts";
import { productsState } from "~/store/productsState";
import { useCartStore } from "~/store/cart";

export default {
  name: "ProductDetail",
  data() {
    const productsStore = productsState();
    const cartStore = useCartStore();

    return {
      product: productsStore.activeProduct,
      cartStore: cartStore
    }
  },
  methods: {
    getStarType(star) {
      const rating = this.product.rating;

      if (star <= Math.floor(rating)) {
        return '/stars/star.png'; // Полная звезда
      } else if (star === Math.ceil(rating) && rating % 1 !== 0) {
        return '/stars/halfstar.png'; // Половинная звезда
      } else {
        return '';
      }
    },
  }
}
</script>

<template>
  <div>
    <div class="product-container">
      <div class="product-images">
        <div class="product-main-image">
          <img :src="product.images[0].url" alt="main-image" class="main-image" width="620px" height="620px">
        </div>
        <div class="product-extra-images">
          <img :src="product.images[0].url" alt="extra-image" class="extra-image" width="210px" height="185px">
          <img :src="product.images[1].url" alt="extra-image" class="extra-image" width="210px" height="210px">
          <img :src="product.images[1].url" alt="extra-image" class="extra-image" width="210px" height="210px">
        </div>
      </div>

      <div class="product-info">
        <div class="product-name-container">
          <h1 class="product-name">{{ product.name }}</h1>
          <div class="rating-stars">
            <img
                v-for="star in 5"
                :key="star"
                :src="getStarType(star)"
                class="star-icon"
                width="17px"
            />
          </div>
        </div>

        <p v-if="product.in_stock" style="color:rgba(36, 173, 83, 1)" class="in-stock"> In Stock</p>
        <p v-else style="color:red" class="in-stock">Not In Stock</p>

        <hr>

        <div class="info-container">

          <div class="info-container-flex">
            <span>ID</span>
            <span>{{ product.id }}</span>
          </div>

          <div class="info-container-flex">
            <span>Country</span>
            <span>{{ product.country }}</span>
          </div>

          <div class="info-container-flex">
            <span>Brand</span>
            <span>{{ product.brand }}</span>
          </div>

          <div class="info-container-flex">
            <span>Color</span>
            <span>{{ product.color }}</span>
          </div>

          <div class="info-container-flex">
            <span>Size</span>
            <span>{{ product.size }}</span>
          </div>

        </div>

        <hr style="margin-top: 100px">

        <div class="product-total">
          <h1>{{product.price}}$</h1>
          <button class="cart-button" v-on:click="cartStore.addItem(product)">Cart<img src="@/assets/images/product-cart.svg" alt="Cart" width="18px"></button>
        </div>

      </div>

    </div>

    <div class="product-description">
      <h1 class="description-title">Description</h1>
      <p class="product-paragraph">{{product.description}}</p>
    </div>
  </div>
</template>

<style scoped>

.product-container {
  display: flex;
}

.product-name-container {
  display: flex;
  align-content: center;
}

.product-name {
  /* IPhone 12 */

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #141414;
}

.rating-stars {
  margin-left: 30px;
  padding-top: 20px;
}

.rating-stars img {
  margin-left: 10px;
}

.product-images {
  display: flex;
  flex-direction: column;
}

.product-extra-images {
  display: flex;
}

.product-info {
  margin-top: 170px;
  width: 700px;
  padding: 13px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.in-stock {
  /* In Stock */
  margin-top: 0;
  margin-bottom: 50px;
  font-family: 'Readex Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
}

.info-container {
  margin-top: 30px;


  font-family: 'Readex Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #141414;

  display: flex;
  flex-direction: column;
}

.info-container span {
  margin-top: 20px;

  width: 300px;

  display: flex;
  justify-content: space-between;

  flex: 1;
  text-align: center;
}

.info-container-flex {
  display: flex;
  justify-content: space-between;
}

.product-total {

  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-content: center;

}

.cart-button {
  /* Group 235 */
  width: 191px;
  height: 50px;

  background: #E8AA31;
  box-shadow: 0 4px 20px rgba(232, 170, 49, 0.43);
  border-radius: 3px;

  border: none;

  display: flex;
  justify-content: space-around;
  align-content: center;

  /* Cart */

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 46px;

  color: #FFFFFF;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  margin-top: 10px;
}

.cart-button:hover {
  background: #fab837;
}

.cart-button img {
  margin-top: 14px;
}

.product-description {
  margin-top: 100px;

  width: 1316px;
  height: 404px;

  background: #FEFEFE;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  padding: 13px;
}

.description-title {
  /* Description */

  width: 120px;
  height: 24px;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #141414;

  padding-bottom: 4px;

  border-bottom: #E8AA31 2px solid;

}

.product-paragraph {

  width: 1186px;
  height: 297px;

  font-family: 'Readex Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

  color: #141414;

}

</style>