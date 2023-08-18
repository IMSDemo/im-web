<script lang="ts" setup>
import { IconHome } from '@arco-design/web-vue/es/icon'
</script>

<template>
  <div class="header">
    <a-menu :default-selected-keys="['1']" mode="horizontal">
      <a-menu-item key="0" disabled>
        <IconHome></IconHome>
      </a-menu-item>
      <a-menu-item key="1">Home</a-menu-item>
    </a-menu>
  </div>
</template>

<style scoped>
.header {
  display: flex;
}
</style>
