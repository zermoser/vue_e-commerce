<script setup>
import { onMounted } from 'vue'
import { useUserProductStore } from '@/stores/user/product.js'

import UserLayout from '@/layouts/UserLayout.vue'
import ProductList from '@/components/ProductList.vue'

const userProductStore = useUserProductStore()


onMounted(() => {
  userProductStore.loadProduct()
})

</script>

<template>
  <UserLayout>
    <ProductList
      :products="userProductStore.list"
    >
    </ProductList>
  </UserLayout>
</template>
