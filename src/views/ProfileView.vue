<template>
  <div>
    <h1 class="text-2xl font-semibold">Profile</h1>
    <div v-if="user">
      <p>{{ user.id }}</p>
      <p>{{ user.name }}</p>
      <p>{{ user.email }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getUser } from '@/lib/supabase'
import { onMounted, ref } from 'vue'

type User = {
  id: number
  name: string
  image: string
  email: string
}

let user = ref<User>({
  id: 0,
  name: '',
  image: '',
  email: ''
})

onMounted(async () => {
  try {
    user.value = (await getUser()) as any
  } catch (error) {
    console.error('Error fetching user:', error)
  }
})
</script>
<style scoped></style>
