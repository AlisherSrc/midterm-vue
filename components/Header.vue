<template>
   <!-- Header -->
   <header class="header">
         <div class="logo">
            <NuxtLink to="/" class="logo-text">WSHOP</NuxtLink>
         </div>
         <nav class="nav-links">
            <NuxtLink to="/products" class="nav-link">ALL PRODUCTS</NuxtLink>
            <NuxtLink to="/about" class="nav-link">ABOUT</NuxtLink>
            <NuxtLink to="/support" class="nav-link">SUPPORT</NuxtLink>
         </nav>
         <div class="header-actions">
            <!-- Search Bar -->
            <div class="search-container">
               <input type="text" class="search-input" placeholder="Search..." v-model="searchQuery" />
            </div>
            <NuxtLink to="/cart" class="cart-icon">
               <!-- Cart Icon -->
               <img src="@/assets/images/app-header/header-cart.svg" alt="cart">
            </NuxtLink>
         </div>
      </header>
</template>

<script setup>

</script>

<style scoped>
/* Header */
.header {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 15px 40px;
   background-color: #f5f5f5;
   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
   font-family: 'Montserrat', sans-serif;
}

.logo-text {
   font-weight: bold;
   font-size: 24px;
   color: #000;
}

.nav-links {
   display: flex;
   gap: 30px;
}

.nav-link {
   font-size: 16px;
   color: #000;
   text-decoration: none;
}

.nav-link:hover {
   text-decoration: underline;
}

.header-actions {
   display: flex;
   align-items: center;
   gap: 15px;
}

/* Search bar */
.search-container {
   display: none;
}

.search-input {
   padding: 5px;
   border: 1px solid #ccc;
   border-radius: 4px;
   width: 150px;
}


</style>