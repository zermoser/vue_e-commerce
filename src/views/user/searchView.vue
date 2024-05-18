<script setup>
import { ref, watch, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

import ProductList from "@/components/ProductList.vue";
import UserLayout from "@/layouts/UserLayout.vue";

import { useUserProductStore } from "@/stores/user/product";

onMounted(() => {
  if (route.query.q) {
    searchText.value = route.query.q;
  }
});

computed(() => {
  return userProductStore.filterProducts(searchText.value);
});

const userProductStore = useUserProductStore();

const route = useRoute();

const searchText = ref("");
const filterProducts = ref([]);

watch(() => 
route.query.q, (newSearchText) => {
    searchText.value = newSearchText
  }, { immediate: true}
)
</script>

<template>
  <UserLayout>
    <div class="m-10">
      <h1 class="text-3xl">
        Search: <span class="font-bold">{{ searchText }}</span>
      </h1>
    </div>
    <div v-if="filterProducts.length > 0">
      <ProductList :products="filterProducts"> </ProductList>
    </div>
    <div class="m-10" v-else>
      <div class="text-center text-3xl">Product not found</div>
    </div>
  </UserLayout>
</template>
