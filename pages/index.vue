<script setup>
import { NuxtLink } from '#build/components';

</script>
<template>
    <h1>Welcome to the home page!</h1>
    <ul>
        <li>
            <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/posts/1">First post</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/posts/2">Second post</NuxtLink>
        </li>
    </ul>
</template>
<style>
</style>