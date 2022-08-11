<template>
  <h1>&emsp;前端性能监控平台</h1>
  <n-divider />
  <n-space vertical>
    <n-layout has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <n-menu
          v-model:value="activeKey"
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
        />
      </n-layout-sider>
      <n-layout>
        <router-view />
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia';
import { defineComponent, h, Component, ref } from 'vue';
import { NIcon, useMessage } from 'naive-ui';
import type { MenuOption } from 'naive-ui';
import { RouterLink } from 'vue-router';

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/menu'
          }
        },
        { default: () => '总览' }
      ),
    key: 'overview-menu'
  },
  {
    key: 'divider-1',
    type: 'divider',
    props: {
      style: {
        marginLeft: '32px'
      }
    }
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/home'
          }
        },
        { default: () => '测试' }
      ),
    key: 'test'
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/resourseFlow'
          }
        },
        { default: () => '页面资源获取性能监控' }
      ),
    key: 'resourseFlow'
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/navigationTiming'
          }
        },
        { default: () => 'navigationTiming' }
      ),
    key: 'navigationTiming'
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/performanceCard'
          }
        },
        { default: () => 'performanceCard' }
      ),
    key: 'performanceCard'
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/errorInformation'
          }
        },
        { default: () => 'errorInformation' }
      ),
    key: 'errorInformation'
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/uerAction'
          }
        },
        { default: () => 'uerAction' }
      ),
    key: 'uerAction'
  }
];

export default defineComponent({
  name: 'SideMenu',

  setup() {
    return {
      activeKey: ref<string | null>(null),
      collapsed: ref(false),
      menuOptions
    };
  }
});
</script>
