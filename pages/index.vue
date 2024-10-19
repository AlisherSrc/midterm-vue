<script setup>
import Header from '~/components/Header.vue';
// import AppHeader from '~/components/AppHeader.vue';
import MainPage from '~/components/MainPage.vue';
import AppFooter from '~/components/AppFooter.vue';
</script>
<template>

   <div>
      <Header />
      <div class="main-content">
         <MainPage />
         <AppFooter />
      </div>
   </div>
</template>


<style>
.main-content {
   display: flex;
   align-items: center;
   justify-content: center;
   flex-flow: column;
   width: 100%;
}
</style>