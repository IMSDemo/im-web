<script lang="ts" setup>
import { ref } from 'vue'

const data = ref([
  {
    key: '1',
    title: '项目概览',
    content: 'Content of Tab Panel 1',
    component: () => import('@/pages/home/home-index.vue')
  },
  {
    key: '2',
    title: '新建',
    content: 'Content of Tab Panel 2',
    component: () => import('./http-overview.vue')
  },
  {
    key: '3',
    title: '根目录',
    content: 'Content of Tab Panel 2',
    component: () => import('./http-overview.vue')
  },
  {
    key: '4',
    title: 'user',
    content: 'Content of Tab Panel 2',
    component: () => import('./http-overview.vue')
  },
  {
    key: '5',
    title: 'Get',
    content: 'Content of Tab Panel 2',
    component: () => import('./http-overview.vue')
  }
])
</script>

<template>
  <a-layout>
    <a-layout-sider style="width: auto">
      <a-menu
        :default-open-keys="['1']"
        :default-selected-keys="['1_1']"
        :style="{ width: '160px' }"
      >
        <a-menu-item key="0">
          <template #icon>
            <IconBug></IconBug>
          </template>
          项目概览
        </a-menu-item>
        <a-sub-menu key="1">
          <template #icon>
            <IconApps></IconApps>
          </template>
          <template #title>接口</template>
          <a-menu-item key="1_0">根目录</a-menu-item>
          <a-sub-menu key="1_1">
            <template #icon>
              <IconApps></IconApps>
            </template>
            <template #title>user</template>
            <a-menu-item key="1_1_0">get</a-menu-item>
            <a-menu-item key="1_1_1">get</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
        <a-menu-item key="2">
          <template #icon>
            <IconBulb></IconBulb>
          </template>
          数据模型
        </a-menu-item>
        <a-menu-item key="3">
          <template #icon>
            <IconBulb></IconBulb>
          </template>
          快捷请求
        </a-menu-item>
        <a-menu-item key="4">
          <template #icon>
            <IconBulb></IconBulb>
          </template>
          回收站
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <a-tabs :editable="true">
          <a-tab-pane v-for="item of data" :key="item.key" :title="item.title"></a-tab-pane>
        </a-tabs>
      </a-layout-header>
      <a-layout-content>
        <router-view v-slot="{ Component, route }">
          <transition appear mode="out-in" name="fade">
            <component :is="Component" :key="route.fullPath" />
          </transition>
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped></style>
