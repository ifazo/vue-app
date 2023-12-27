<template>
  <div>
    <p>Products Page</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { supabase } from '../supabase'

const products = ref([])

const getProducts = async () => {
  const { data } = await supabase.from('products').select()
  console.log(data)
  products.value = data as any
}

onMounted(() => {
  getProducts()
})
</script>

<style scoped></style>
