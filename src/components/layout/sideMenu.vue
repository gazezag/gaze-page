<template>
  <n-space vertical>
    <n-layout has-sider>
      <n-layout-sider
        bordered
        show-trigger
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :native-scrollbar="false"
        style="max-height: 620px"
      >
        <n-menu
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
        />
      </n-layout-sider>

      <n-layout-content>
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-space>
</template>

<script lang="ts">
import { defineComponent, h, ref } from 'vue';
import type { MenuOption } from 'naive-ui';
import { RouterLink } from 'vue-router';
import {
  BookOpen28Filled,
  ArrowCollapseAll24Filled,
  ConferenceRoom16Regular,
  Box16Regular,
  BriefcaseMedical24Regular,
  City24Regular,
  ChannelDismiss24Regular
} from '@vicons/fluent';
import { renderIcon } from 'utils/render';

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/overView'
          }
        },
        { default: () => '总览' }
      ),
    key: 'overview-menu',
    icon: renderIcon(BookOpen28Filled)
  },
  {
    key: 'divider-1',
    type: 'divider',
    props: {
      style: {
        margin: '0 32px'
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
    key: 'test',
    icon: renderIcon(ArrowCollapseAll24Filled)
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
    key: 'resourseFlow',
    icon: renderIcon(ChannelDismiss24Regular)
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
    key: 'navigationTiming',
    icon: renderIcon(Box16Regular)
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
    key: 'performanceCard',
    icon: renderIcon(City24Regular)
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
    key: 'errorInformation',
    icon: renderIcon(ConferenceRoom16Regular)
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
    key: 'uerAction',
    icon: renderIcon(BriefcaseMedical24Regular)
  }
];

export default defineComponent({
  name: 'sideMenu',
  components: {},

  setup() {
    return {
      activeKey: ref<string | null>(null),
      collapsed: ref(false),
      menuOptions
    };
  }
});
</script>

<style lang="less" scoped>
.n-layout-sider {
  :deep(.n-menu-item-content__icon) {
    color: rgb(92, 92, 92);
  }

  :deep(.n-menu .n-menu-item-content .n-menu-item-content-header a) {
    color: rgb(92, 92, 92);
  }

  :deep(.n-menu .n-menu-item-content.n-menu-item-content--selected) {
    &::before {
      background-color: lighten(@mainColor, 65%);
    }
    .n-menu-item-content-header a,
    .n-menu-item-content__icon {
      color: @mainColor;
    }
  }
}
</style>
