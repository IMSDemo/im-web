<script lang="ts" setup>
import HomeList from '@/pages/Home/components/HomeList.vue'
import HomeListHeader from '@/pages/Home/components/HomeListHeader.vue'
</script>

<template>
  <a-tabs>
    <a-tab-pane key="1">
      <template #title>
        <icon-calendar />
        Tab 1
      </template>
      <a-layout style="height: 400px">
        <a-layout-header>
          <home-list-header />
        </a-layout-header>
        <a-layout-content>
          <home-list />
        </a-layout-content>
      </a-layout>
    </a-tab-pane>
    <a-tab-pane key="2">
      <template #title>
        <icon-clock-circle />
        Tab 2
      </template>
      Content of Tab Panel 2
    </a-tab-pane>
    <a-tab-pane key="3">
      <template #title>
        <icon-user />
        Tab 3
      </template>
      Content of Tab Panel 3
    </a-tab-pane>
  </a-tabs>
</template>

<style scoped></style>
