<script lang="ts" setup>
const memberNum = 2
const visitorNum = 0
const otherNum = 2
</script>

<template>
  <a-row class="grid-demo" justify="center" style="height: 100px; background-color: #f7f8f9">
    <a-col :span="7">
      <h1>{{ memberNum }}</h1>
      <h1>成员</h1>
    </a-col>
    <a-col :span="1">
      <a-divider direction="vertical" style="height: 100px" />
    </a-col>
    <a-col :span="7">
      <h1>{{ visitorNum }}</h1>
      <h1>游客</h1>
    </a-col>
    <a-divider direction="vertical" style="height: 100px" />
    <a-col :span="7">
      <h1>{{ otherNum }}</h1>
      <h1>待定</h1>
    </a-col>
  </a-row>
</template>

<style scoped>
h1 {
  margin: 0;
  text-align: center;
}
</style>
