<script lang="ts" setup>
import { IconMore, IconShareInternal, IconThumbUp } from '@arco-design/web-vue/es/icon';
import router from '@/router';

const props = defineProps({
  teamList: Object
});
const toInterface = ({ key }: { key: string }) => {
  router.push({ path: `/interface/${key}/http` });
};
</script>

<template>
  <a-list>
    <a-list-item v-for="project in props.teamList" :key="project.key">
      <a-list-item-meta :title="project.name" @click="toInterface(project)">
        <template #avatar>
          <a-avatar shape="square">
            <img
              alt="avatar"
              src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
            />
          </a-avatar>
        </template>
      </a-list-item-meta>
      <template #actions>
        <span class="icon-hover"> <IconThumbUp /> </span>
        <span class="icon-hover"> <IconShareInternal /> </span>
        <span class="icon-hover"> <IconMore /> </span>
      </template>
    </a-list-item>
  </a-list>
</template>

<style scoped>
.icon-hover {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: all 0.1s;
}

.icon-hover:hover {
  background-color: rgb(var(--gray-2));
}
</style>
