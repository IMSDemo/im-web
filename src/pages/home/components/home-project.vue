<script lang="ts" setup>
import HomeList from '@/pages/home/components/home-project-list.vue';
import { toRef } from 'vue';

const props = defineProps({
  teamInfo: Object
});
const teamList = toRef(props?.teamInfo?.projectList);
</script>

<template>
  <a-card :bordered="false" title="Arco Card">
    <template #title>
      <a-input-search :style="{ width: '160px' }" placeholder="搜索" />
    </template>
    <template #extra>
      <a-space>
        <a-button>导入项目</a-button>
        <a-button type="primary">新建项目</a-button>
      </a-space>
    </template>
    <home-list :teamList="teamList" />
  </a-card>
</template>

<style scoped></style>
