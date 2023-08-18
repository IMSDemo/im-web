<script lang="ts" setup>
import HomeListHeader from '@/pages/Home/components/HomeProjectHeader.vue'
import HomeList from '@/pages/Home/components/HomeProjectList.vue'
</script>

<template>
  <a-card :bordered="false" title="Arco Card">
    <template #title>
      <home-list-header />
    </template>
    <template #extra>
      <a-space>
        <a-button>导入项目</a-button>
        <a-button type="primary">新建项目</a-button>
      </a-space>
    </template>
    <home-list />
  </a-card>
</template>

<style scoped></style>
