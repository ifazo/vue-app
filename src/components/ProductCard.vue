<template>
  <div v-for="(product, index) in products" :key="index">
    <article class="relative">
      <div class="aspect-square overflow-hidden">
        <img
          class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
          :src="product.image"
          alt=""
        />
      </div>
      <div class="absolute top-0 m-1 rounded-full bg-white">
        <p
          class="rounded-full bg-black p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3"
        >
          Sale
        </p>
      </div>
      <div class="mt-4 flex items-start justify-between">
        <div class="">
          <h3 class="text-xs font-semibold sm:text-sm md:text-base">
            <a href="#" title="" class="">
              {{ product.title }}
              <span class="absolute" aria-hidden="true"></span>
            </a>
          </h3>
          <div class="mt-2 flex items-center">
            <svg
              class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                class=""
              ></path>
            </svg>
            <svg
              class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                class=""
              ></path>
            </svg>
            <svg
              class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                class=""
              ></path>
            </svg>
            <svg
              class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                class=""
              ></path>
            </svg>
            <svg
              class="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                class=""
              ></path>
            </svg>
          </div>
        </div>

        <div class="text-right">
          <del class="mt-px text-xs font-semibold text-gray-600 sm:text-sm"> $79.00 </del>
          <p class="text-xs font-normal sm:text-sm md:text-base">$ {{ product.price }}</p>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import supabase from '@/lib/supabase';
import { onMounted, ref } from 'vue'

interface Product {
  id: number
  title: string
  image: string
  description: string
  price: number
}

const products = ref<Product[]>([])

const getProducts = async () => {
  const { data, error } = await supabase.from('products').select('*')
  console.log(data)
  if (error) {
    console.log(error)
  } else {
    products.value = data as any
  }
}

onMounted(() => {
  getProducts()
})
</script>

<style scoped></style>
../interfaces../lib/supabase
