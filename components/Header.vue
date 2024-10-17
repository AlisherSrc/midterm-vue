<script setup>
let message = ref("");
</script>
<template>
    <input v-model="message" type="text"/>
    <p>{{ message }}</p>
</template>
<style>
</style>