<template>
  <n-layout style="height: 100vh">
    <HeaderMenu />

    <n-layout position="absolute" style="top: 60px" has-sider>
      <n-layout-sider
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :native-scrollbar="false"
        show-trigger
        bordered
      >
        <n-menu
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
        />
      </n-layout-sider>

      <n-layout :native-scrollbar="false">
        <router-view />
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
import { Component, defineComponent, h, ref } from 'vue';
import type { MenuOption } from 'naive-ui';
import { RouterLink } from 'vue-router';
import {
  BookOutline,
  LibraryOutline,
  GitMergeOutline,
  BarChartOutline,
  ReceiptOutline,
  FitnessOutline
} from '@vicons/ionicons5';
import { renderIcon } from 'utils/render';
import HeaderMenu from 'components/shared/MainHeader.vue';

const renderLabel = (path: string, icon: Component) => {
  const upperFirstLatter = (str: string) => {
    const strArr = str.split('');
    strArr.splice(0, 1, strArr[0].toUpperCase());
    return strArr.join('');
  };

  const path2Key = (str: string) => {
    return upperFirstLatter(
      str.replace(/-(\w{1})/g, match => {
        return match[1].toUpperCase();
      })
    );
  };

  const path2Label = (str: string) => {
    return upperFirstLatter(
      str.replace(/-(\w{1})/g, match => {
        return ` ${match[1].toUpperCase()}`;
      })
    );
  };

  return {
    label: () =>
      h(
        RouterLink,
        { to: { path: `/${path}` } },
        { default: () => path2Label(path) }
      ),
    key: path2Key(path),
    icon: renderIcon(icon)
  };
};

const menuOptions: MenuOption[] = [
  renderLabel('overview', BookOutline),
  {
    key: 'divider-1',
    type: 'divider',
    props: {
      style: {
        margin: '0 32px'
      }
    }
  },
  renderLabel('performance-timing', LibraryOutline),
  renderLabel('navigation-timing', GitMergeOutline),
  renderLabel('resource-flow', BarChartOutline),
  renderLabel('user-behavior', ReceiptOutline),
  renderLabel('error-info', FitnessOutline)
];

export default defineComponent({
  name: 'layout',
  components: {
    HeaderMenu
  },

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
  max-height: var(100vh - 60px);

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
