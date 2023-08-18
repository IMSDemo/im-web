<script lang="ts" setup>
import HomeSettingBase from '@/pages/Home/components/HomeSettingBase.vue'
import HomeSettingWarn from '@/pages/Home/components/HomeSettingWarn.vue'
</script>

<template>
  <a-card :bordered="false" title="基础信息">
    <home-setting-base />
  </a-card>
  <a-card :bordered="false" title="危险区域">
    <home-setting-warn />
  </a-card>
</template>

<style scoped></style>
