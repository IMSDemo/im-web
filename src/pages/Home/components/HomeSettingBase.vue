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
      <a-col :span="8"><p>团队名称</p></a-col>
      <a-col :span="16">
        <a-row justify="space-between">
          <a-col :span="8"><p>JOJO队</p></a-col>
          <a-col :span="8" style="text-align: right">
            <a-button @click="handleClick">编辑</a-button>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <a-divider />
    <a-row>
      <a-col :span="8"><p>我的团队内昵称</p></a-col>
      <a-col :span="16">
        <a-row justify="space-between">
          <a-col :span="8"><p>JOJO！！！</p></a-col>
          <a-col :span="8" style="text-align: right">
            <a-button @click="handleClick">编辑</a-button>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </a-card>
</template>

<style scoped></style>
