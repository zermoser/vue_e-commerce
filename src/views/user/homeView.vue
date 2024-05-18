<script setup>
import { onMounted } from 'vue'

import { useUserProductStore } from '@/stores/user/product'

import UserLayout from '@/layouts/UserLayout.vue'
import ProductList from '@/components/ProductList.vue'

const userProductStore = useUserProductStore()

onMounted(() => {
  userProductStore.loadProduct()
})

</script>

<template>
  <UserLayout>
    <div class="hero min-h-60 bg-red-300">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">อิอิ</h1>
          <p class="py-6">สวัสดี</p>
        </div>
      </div>
    </div>
    <ProductList
      :products="userProductStore.list"
    >
    </ProductList>
  </UserLayout>
</template>