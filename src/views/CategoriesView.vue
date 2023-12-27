<template>
  <div>
    <p>Categories Page</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { supabase } from '../supabase'

const categories = ref([])

const getCategories = async () => {
  const { data } = await supabase.from('categories').select()
  console.log(data)
  categories.value = data as any
}

onMounted(() => {
  getCategories()
})

</script>

<style scoped></style>
