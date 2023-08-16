<script lang="ts" setup>
import { IconCalendar, IconCaretLeft, IconCaretRight, IconHome } from '@arco-design/web-vue/es/icon'
import HomeHeader from '@/pages/Home/HomeHeader.vue'
import HomeList from '@/pages/Home/HomeContent.vue'

const onClickMenuItem = () => {}
</script>

<template>
  <home-header />
  <a-layout style="height: 400px">
    <a-layout-sider breakpoint="lg" collapsible>
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
            Navigation 1
          </template>
          <a-menu-item key="0_1">Menu 1</a-menu-item>
          <a-menu-item key="0_2">Menu 2</a-menu-item>
          <a-menu-item key="0_3">新建团队</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="1">
          <IconHome></IconHome>
          Menu 1
        </a-menu-item>
        <a-menu-item key="2">
          <IconCalendar></IconCalendar>
          Menu 2
        </a-menu-item>
        <a-menu-item key="3">
          <IconCalendar></IconCalendar>
          Menu 3
        </a-menu-item>
      </a-menu>
      <!-- trigger -->
      <template #trigger="{ collapsed }">
        <IconCaretRight v-if="collapsed"></IconCaretRight>
        <IconCaretLeft v-else></IconCaretLeft>
      </template>
    </a-layout-sider>
    <a-layout style="height: 400px">
      <a-layout-header>
        <a-page-header :style="{ background: 'var(--color-bg-2)' }" title="ArcoDesign">
          <template #subtitle>
            <a-space>
              <a-tag color="orange" size="small">Default</a-tag>
            </a-space>
          </template>
        </a-page-header>
      </a-layout-header>
      <a-layout-content>
        <home-list />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped></style>
