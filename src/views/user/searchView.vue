<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import ProductList from '@/components/ProductList.vue'
import UserLayout from '@/layouts/UserLayout.vue'
import { useUserProductStore } from '@/stores/user/product'
import { useUserCartStore } from '@/stores/user/cart'

const userCartStore = useUserCartStore()

const userProductStore = useUserProductStore()

const route = useRoute()
const router = useRouter()

const searchText = ref('')
const filterProducts = ref([])

const addToCart = (productData) => {
  userCartStore.addToCart(productData)
  router.push({ name: 'cart' })
}

watch(() => route.query.q, (newSearchText) => {
  searchText.value = newSearchText
  filterProducts.value = userProductStore.filterProducts(searchText.value)
}, { immediate: true })
</script>

<template>
  <UserLayout>
    <div class="m-10">
      <h1 class="text-3xl">Search: <span class="font-bold">{{ searchText }}</span></h1>
    </div>
    <div v-if="filterProducts.length > 0">
      <ProductList
        :products="filterProducts"
        :addToCart="addToCart"
      />
    </div>
    <div class="m-10" v-else>
      <div class="text-center text-3xl">Product not found</div>
    </div>
  </UserLayout>
</template>
