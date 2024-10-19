<script setup>

</script>

<template>
  <div>
    <header class="header">
      <div class="header-title">
        <a href="#home">WSHOP</a>
      </div>

      <div class="nav">
        <ul class="nav-list">
          <li class="nav-item"><a href="#bereket" class="nav-link">All Products</a></li>
          <li class="nav-item"><a href="#bereket" class="nav-link">Home</a></li>
          <li class="nav-item"><a href="#bereket" class="nav-link">About</a></li>
        </ul>
      </div>

      <div class="cart">
        <a href="#cart" CLASS="cart-link"><img src="@/assets/images/app-header/header-cart.svg" alt="cart"></a>
      </div>
    </header>

  </div>
</template>

<style scoped>
.header {
  margin-top: 35px;

  display: flex;
  justify-content: space-between;

  position: relative;

  font-family: 'Inter', sans-serif;
  color: black;
}

.header-title {
  /* WShop */
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 17px;
  text-transform: uppercase;

  color: #000000;
}

.header-title a {
  text-decoration: none;
  color: black;
}

.nav {
}

.nav-list {
  margin-top: 0;

  display: flex;
  list-style-type: none;
}

.nav-item {
  margin-left: 20px;
  text-decoration: none;

  text-transform: uppercase;
}

.nav-link {
  color: black;
  text-decoration: none;

  width: 112px;
  height: 17px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;

  transition: 0.3s ease-in-out;
}

.nav-link:hover {
  color: #abbab5;
}

.cart-link {
  cursor: pointer;
}

.cart:hover {
  color: #abbab5;
}

</style>