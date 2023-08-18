<script lang="ts" setup>
import HomeSetting from '@/pages/home/components/home-setting.vue'
import HomeMember from '@/pages/home/components/home-member.vue'
import HomeProject from '@/pages/home/components/home-project.vue'
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
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
h1 {
  margin: 0;
  text-align: center;
}
</style>
