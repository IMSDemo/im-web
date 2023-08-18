<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)

const handleClick = () => {
  visible.value = true
}
const handleOk = () => {
  visible.value = false
}
const handleCancel = () => {
  visible.value = false
}
</script>

<template>
  <a-modal v-model:visible="visible" @cancel="handleCancel" @ok="handleOk">
    <template #title> Title</template>
    <div>
      You can customize modal body text by the current situation. This modal will be closed
      immediately once you press the OK button.
    </div>
  </a-modal>
  <a-modal v-model:visible="visible" @cancel="handleCancel" @ok="handleOk">
    <template #title> Title</template>
    <div>
      You can customize modal body text by the current situation. This modal will be closed
      immediately once you press the OK button.
    </div>
  </a-modal>
  <a-card>
    <a-row>
      <a-col :span="8">移交</a-col>
      <a-col :span="16">
        <a-row justify="space-between">
          <a-col :span="16">将团队的所有者权限移交给其他成员</a-col>
          <a-col :span="8" style="text-align: right">
            <a-button @click="handleClick">移交</a-button>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <a-divider />
    <a-row>
      <a-col :span="8">解散团队</a-col>
      <a-col :span="16">
        <a-row justify="space-between">
          <a-col :span="16">务必谨慎，解散后无法找回</a-col>
          <a-col :span="8" style="text-align: right">
            <a-button @click="handleClick">解散</a-button>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </a-card>
</template>

<style scoped></style>
