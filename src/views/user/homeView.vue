<script setup>
import { useRouter } from 'vue-router'
import { useUserCartStore } from '@/stores/user/cart'
import { useUserProductStore } from '@/stores/user/product'
import UserLayout from '@/layouts/UserLayout.vue'
import ProductList from '@/components/ProductList.vue'

const userProductStore = useUserProductStore()

const router = useRouter()

const userCartStore = useUserCartStore()

const addToCart = (productData) => {
  userCartStore.addToCart(productData)
  router.push({ name: 'cart' })
}

</script>

<template>
  <UserLayout>
    <div class="hero min-h-60 bg-gray-600">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Mos Shop</h1>
          <p class="py-6">สวัสดี</p>
        </div>
      </div>
    </div>
    
    <ProductList
      :products="userProductStore.list"
      :addToCart="addToCart"
    /> 
  </UserLayout>
</template>