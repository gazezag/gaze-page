<template>
  <n-layout-header bordered>
    <router-link to="/overview">
      <div class="logo">
        <h1>GAZE</h1>
        <span>Front-end monitor</span>
      </div>
    </router-link>

    <n-space>
      <n-popselect
        :options="alertInfoList"
        :render-label="renderLabelHandler"
        size="large"
        scrollable
        virtual-scroll
      >
        <n-badge :value="total">
          <n-icon :size="20">
            <Alert28Regular />
          </n-icon>
        </n-badge>
      </n-popselect>

      <a href="https://github.com/gazezag">GitHub</a>
      <router-link to="/">DOCS</router-link>
      <router-link to="/">HELP</router-link>

      <router-link to="/">
        <n-icon :size="20" class="person">
          <Person12Filled />
        </n-icon>
      </router-link>
    </n-space>
  </n-layout-header>
</template>

<script lang="ts">
import { computed, defineComponent, h } from 'vue';
import { storeToRefs } from 'pinia';
import { NSpace, NIcon, NText } from 'naive-ui';
import { Alert28Regular, Person12Filled } from '@vicons/fluent';
import { useErrorInfoStore } from 'store/errorInfo';
import { timeFormatter } from 'utils/time';
import { has } from 'utils/objectHandler';
import { WarningOutline } from '@vicons/ionicons5';

const renderLabelHandler = (option: { label: string; value: number }) => {
  return h(
    NSpace,
    { justify: 'space-around', style: { 'border-bottom': '1px solid #ccc' } },
    [
      h(NIcon, { size: 30, component: WarningOutline, color: '#c03f53' }),
      h(NText, { strong: true }, option.label)
    ]
  );
};

export default defineComponent({
  name: 'MainHeader',
  components: { Alert28Regular, Person12Filled },
  setup() {
    const { flatedList, total } = storeToRefs(useErrorInfoStore());

    const alertInfoList = computed(() => {
      return flatedList.value.map(errorInfo => {
        const time = has(errorInfo, 'info')
          ? errorInfo.info.time
          : errorInfo.time;

        return {
          label: `${timeFormatter(time)}`,
          value: time
        };
      });
    });

    return {
      renderLabelHandler,
      alertInfoList,
      total
    };
  }
});
</script>

<style lang="less" scoped>
.n-layout-header {
  display: flex;
  align-items: center;
  padding: 0 30px;
  height: 60px;
  justify-content: space-between;
  border-bottom: 1px solid #e8e8eb;

  a {
    text-decoration: none;
  }

  .n-space {
    align-items: center;
    gap: 18px 27px !important;

    a {
      color: @mainColor;
      margin-left: 0 10px;

      &:hover {
        border-bottom: 1px solid rgb(195, 150, 150);
      }
    }

    div:nth-last-of-type(-n + 2) {
      a {
        border-bottom: 0;
      }
    }
  }

  .n-icon {
    padding: 5px;
    color: @mainColor;
  }

  .person {
    background-color: @mainColor;
    color: #fff;
    border-radius: 50%;
  }

  .logo {
    display: flex;
    align-items: center;

    h1 {
      color: @mainColor;
    }

    span {
      margin-left: 10px;
      // background-color: rgb(182, 144, 144);
      color: rgba(73, 63, 145, 0.6);
    }
  }
}
</style>
