<script lang="ts" setup>
import HomeProject from '@/pages/Home/components/HomeProject.vue'
import HomeMember from '@/pages/Home/components/HomeMember.vue'
import HomeSetting from '@/pages/Home/components/HomeSetting.vue'
</script>

<template>
  <a-tabs>
    <a-tab-pane key="1">
      <template #title>
        <icon-calendar />
        团队项目
      </template>
      <home-project />
    </a-tab-pane>
    <a-tab-pane key="2">
      <template #title>
        <icon-clock-circle />
        成员/权限
      </template>
      <a-layout>
        <home-member />
      </a-layout>
    </a-tab-pane>
    <a-tab-pane key="3">
      <template #title>
        <icon-user />
        团队设置
      </template>
      <home-setting />
    </a-tab-pane>
  </a-tabs>
</template>

<style scoped></style>
