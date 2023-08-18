<script lang="ts" setup>
import HomeSetting from '@/pages/home/components/home-setting.vue';
import HomeMember from '@/pages/home/components/home-member.vue';
import HomeProject from '@/pages/home/components/home-project.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const teamKey = route.params.project;
const getTeamInfo = (key: any) => {
  const testInfoMap: any = {
    project: {
      name: 'test',
      projectList: [
        {
          key: 'mYjojo',
          name: 'mYjojo'
        },
        {
          key: 'mEjojo',
          name: 'mEjojo'
        },
        {
          key: 'mOjojo',
          name: 'mOjojo'
        }
      ]
    },
    first_project_key: {
      name: 'jojo',
      projectList: [
        {
          key: 'mYjojo',
          name: 'mYjojo'
        },
        {
          key: 'mEjojo',
          name: 'mEjojo'
        },
        {
          key: 'mOjojo',
          name: 'mOjojo'
        }
      ]
    },
    second_project_key: {
      name: 'jojoTeam1'
    },
    third_project_key: {
      name: 'jojoTeam!!!'
    }
  };
  return testInfoMap[key];
};
const teamInfo = getTeamInfo(teamKey);
</script>

<template>
  <a-layout style="margin: 0 24px">
    <a-layout-header>
      <a-page-header :show-back="false" :style="{ background: 'var(--color-bg-2)' }" title="jojo队">
        <template #subtitle>
          <a-space>
            <a-tag color="orange" size="small">{{ teamInfo.name }}</a-tag>
          </a-space>
        </template>
      </a-page-header>
    </a-layout-header>
    <a-layout-content>
      <a-tabs>
        <a-tab-pane key="1">
          <template #title>
            <icon-calendar />
            团队项目
          </template>
          <home-project :teamInfo="teamInfo" />
        </a-tab-pane>
        <a-tab-pane key="2">
          <template #title>
            <icon-clock-circle />
            成员/权限
          </template>
          <a-layout>
            <home-member :teamInfo="teamInfo" />
          </a-layout>
        </a-tab-pane>
        <a-tab-pane key="3">
          <template #title>
            <icon-user />
            团队设置
          </template>
          <home-setting :teamInfo="teamInfo" />
        </a-tab-pane>
      </a-tabs>
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
h1 {
  margin: 0;
  text-align: center;
}
</style>
