<template>
  <div></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { supabase } from '../supabase'
import { useRouter } from 'vue-router';

const router = useRouter()
console.log(router.currentRoute.value.params.id)
const category = ref({})

const getCategory = async () => {
  const { data, error } = await supabase.from('categories').select('id').eq('id', router.currentRoute.value.params.id).single()
  console.log(data, error)
  category.value = data || {}
}

onMounted(() => {
  getCategory()
})
</script>

<style scoped></style>
