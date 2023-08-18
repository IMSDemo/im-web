<script lang="ts" setup>
import HomeContent from '@/pages/Home/HomeContent.vue'
</script>

<template>
  <a-layout style="margin: 0 24px">
    <a-layout-header>
      <a-page-header :show-back="false" :style="{ background: 'var(--color-bg-2)' }" title="jojo队">
        <template #subtitle>
          <a-space>
            <a-tag color="orange" size="small">团队所有者</a-tag>
          </a-space>
        </template>
      </a-page-header>
    </a-layout-header>
    <a-layout-content>
      <home-content />
    </a-layout-content>
  </a-layout>
</template>

<style scoped></style>