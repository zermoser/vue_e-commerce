<script setup>
import { RouterLink } from 'vue-router'
import UserLayout from '@/layouts/UserLayout.vue'
import CheckIcon from '@/components/icons/Check.vue'
</script>

<template>
  <UserLayout>
    <div class="flex flex-col items-center my-4">
      <div class="flex items-center mb-4 text-green-500">
        <CheckIcon :size="50" class="mr-2" />
        <h1 class="text-4xl">
          การสั่งซื้อของคุณสำเร็จ
        </h1>
      </div>
      <p class="text-center">เราจะส่งสินค้าให้คุณภายใน 3 วัน</p>
      <div class="text-center mt-4">
        <RouterLink to="/" class="btn btn-primary text-white">กลับหน้าแรก</RouterLink>
      </div>
    </div>
  </UserLayout>
</template>
