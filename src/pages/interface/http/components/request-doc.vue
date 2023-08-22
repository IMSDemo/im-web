<script lang="ts" setup>
import { ref } from 'vue';

const handleSelect = (v) => {
  console.log(v);
};
const expandedKeys = ref([]);

const data = [
  {
    key: '1',
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com',
    children: [
      {
        key: '2',
        name: 'Alisa Ross',
        salary: 25000,
        address: '35 Park Road, London',
        email: 'alisa.ross@example.com',
        children: [
          {
            key: '3',
            name: 'Ed Hellen',
            salary: 17000,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com'
          },
          {
            key: '4',
            name: 'William Smith',
            salary: 27000,
            address: '62 Park Road, London',
            email: 'william.smith@example.com'
          }
        ]
      },
      {
        key: '5',
        name: 'Alisa Ross',
        salary: 25000,
        address: '35 Park Road, London',
        email: 'alisa.ross@example.com'
      }
    ]
  },
  {
    key: '6',
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com'
  },
  {
    key: '7',
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com'
  },
  {
    key: '8',
    name: 'Ed Hellen',
    salary: 17000,
    address: '42 Park Road, London',
    email: 'ed.hellen@example.com'
  },
  {
    key: '9',
    name: 'William Smith',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com'
  }
];
</script>

<template>
  <a-row justify="space-between">
    <a-col flex="auto">得到所有类型</a-col>
    <a-col flex="200px">
      <a-button type="primary">运行</a-button>
      <a-button>删除</a-button>
    </a-col>
  </a-row>
  <a-row style="margin: 12px 0">
    <a-col>
      <a-tag color="green">GET</a-tag>
      <span>{http://localhost:8080/type/getType</span>
      <a-dropdown @select="handleSelect">
        <a-button>
          Click Me&nbsp;
          <icon-down />
        </a-button>
        <template #content>
          <a-doption>Option 1</a-doption>
          <a-doption disabled>Option 2</a-doption>
          <a-doption :value="{ value: 'Option3' }">Option 3</a-doption>
        </template>
      </a-dropdown>
    </a-col>
  </a-row>
  <a-row style="margin: 12px 0">
    <a-col flex="180px">创建时间 2023年6月3日</a-col>
    <a-col flex="140px">修改时间 几秒前</a-col>
    <a-col flex="100px">修改者 dio</a-col>
    <a-col flex="100px">创建者 jojo</a-col>
    <a-col flex="120px">责任人 未设置</a-col>
    <a-col flex="80px">目录 type</a-col>
  </a-row>
  <a-row>
    <a-col :span="24">
      <a-card title="请求参数">
        <a-tag color="blue">{name</a-tag>
        <span>string</span>
        <a-tag>可选</a-tag>
      </a-card>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="16" style="height: auto">
      <a-card style="height: 600px" title="返回响应">
        <a-tag color="blue">{name}</a-tag>
        <span>string</span>
        <a-tag>可选</a-tag>
        <a-table v-model:expandedKeys="expandedKeys" :data="data" style="margin-top: 20px">
          <template #columns>
            <a-table-column title="Name">
              <a-table-column data-index="first" title="First Name"></a-table-column>
              <a-table-column data-index="last" title="Last Name"></a-table-column>
            </a-table-column>
            <a-table-column data-index="salary" title="Salary"></a-table-column>
            <a-table-column data-index="address" title="Address"></a-table-column>
            <a-table-column data-index="email" title="Email"></a-table-column>
            <a-table-column title="Optional">
              <template #cell="{ record }">
                <a-button @click="$modal.info({ title: 'Name', content: record.name })"
                  >view
                </a-button>
              </template>
            </a-table-column>
          </template>
        </a-table>
      </a-card>
    </a-col>
    <a-col :span="8">
      <a-card style="height: 600px" title="示例"></a-card>
    </a-col>
  </a-row>
</template>

<style scoped></style>
