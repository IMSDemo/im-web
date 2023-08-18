<script lang="ts" setup>
import HomeMemberHeader from '@/pages/Home/components/HomeMemberHeader.vue'
import HomeMemberTable from '@/pages/Home/components/HomeMemberTable.vue'
import HomeMemberCard from '@/pages/Home/components/HomeMemberCard.vue'
</script>

<template>
  <a-space :size="16" direction="vertical" style="display: block">
    <a-card :bordered="false" :style="{ marginBottom: '20px' }">
      <home-member-card />
    </a-card>
    <a-card :bordered="false" title="Arco Card">
      <template #title>
        <home-member-header />
      </template>
      <template #extra>
        <a-space>
          <a-button type="primary">邀请成员</a-button>
        </a-space>
      </template>
      <home-member-table />
    </a-card>
  </a-space>
</template>

<style scoped></style>
