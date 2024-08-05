<template>
  <div>
    <p>Product description for {{ id }}</p>
    <p >Product Price: {{ product.price }}</p>
    <p >Product Title: {{ product.title }}</p>
  </div>
</template>

<script setup lang="ts">

const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

const { data: product } = await useFetch(uri)

definePageMeta({
  layout: 'products'
})
</script>

<style scoped>
</style>
