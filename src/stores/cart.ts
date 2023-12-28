import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<string[]>([])

  function addToCart(item: string) {
    cart.value.push(item)
  }

  function removeFromCart(item: string) {
    const index = cart.value.indexOf(item)
    cart.value.splice(index, 1)
  }

  const total = computed(() => {
    return cart.value.length
  })

  return { cart, addToCart, removeFromCart, total }
})
