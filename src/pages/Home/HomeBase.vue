<script lang="ts" setup>
import HomeHeader from '@/pages/Home/HomeHeader.vue'
import HomeAside from '@/pages/Home/HomeNav.vue'
import HomeMain from '@/pages/Home/HomeMain.vue'
</script>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-header :style="{ background: '#666' }">
      <home-header />
    </a-layout-header>
    <a-layout>
      <home-aside />
      <home-main />
    </a-layout>
  </a-layout>
</template>

<style scoped></style>