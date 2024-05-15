<script setup>
import { onMounted } from 'vue'
import { useUserProductStore } from '@/stores/user/product.js'

import UserLayout from '@/layouts/userLayout.vue'
import ProductList from '@/components/productList.vue'

const userProductStore = useUserProductStore()


onMounted(() => {
  userProductStore.loadProduct()
})

</script>

<template>
  <UserLayout>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello to shop</h1>
          <p class="py-6">สวัสดีจ้า</p>
        </div>
      </div>
    </div>
    <ProductList
      :products="userProductStore.list"
    >
    </ProductList>
  </UserLayout>
</template>
