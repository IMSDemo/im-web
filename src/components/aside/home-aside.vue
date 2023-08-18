<script lang="ts" setup>
import { IconCalendar, IconHome } from '@arco-design/web-vue/es/icon'

const onClickMenuItem = () => {}
</script>

<template>
  <div class="logo" />
  <a-menu
    :default-open-keys="['0']"
    :default-selected-keys="['0_1']"
    :style="{ width: '100%' }"
    @menu-item-click="onClickMenuItem"
  >
    <a-sub-menu key="0">
      <template #title>
        <IconCalendar></IconCalendar>
        我的团队
      </template>
      <a-menu-item key="0_1">jojo队</a-menu-item>
      <a-menu-item key="0_2">jojo2队</a-menu-item>
      <a-menu-item key="0_3">新建团队</a-menu-item>
    </a-sub-menu>
    <a-menu-item key="1">
      <IconHome></IconHome>
      公开项目
    </a-menu-item>
    <a-menu-item key="2">
      <IconCalendar></IconCalendar>
      我的收藏
    </a-menu-item>
    <a-menu-item key="3">
      <IconCalendar></IconCalendar>
      最近访问
    </a-menu-item>
  </a-menu>
</template>

<style scoped></style>
