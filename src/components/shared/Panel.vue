<template>
  <div :id="domId">
    <n-card
      :segmented="segmented"
      :content-style="contentStyle"
      :hoverable="!floatShadow"
      :class="floatShadow && 'hoverable-shadow'"
      bordered
    >
      <template #header>
        <div :style="isHover ? { color: '#4b3f97' } : {}">
          <slot name="header"></slot>
        </div>
      </template>
      <template #header-extra>
        <slot name="header-extra"></slot>
      </template>
      <template #default>
        <slot name="default"></slot>
      </template>
    </n-card>
  </div>
</template>

<script lang="ts">
import { debounce } from 'utils/functional';
import { defineComponent, onMounted, ref } from 'vue';

const segmented = {
  content: true
};

export default defineComponent({
  name: 'Panel',
  props: ['floatShadow', 'contentStyle'],
  setup() {
    const domId = `Panel-${Date.now()}`;
    const isHover = ref<boolean>(false);

    onMounted(() => {
      const panelDOM = document.querySelector(`#${domId}`);
      panelDOM?.addEventListener(
        'mouseenter',
        debounce(() => {
          if (!isHover.value) isHover.value = true;
        }),
        false
      );
      panelDOM?.addEventListener(
        'mouseleave',
        debounce(() => {
          if (isHover.value) isHover.value = false;
        }),
        false
      );
    });

    return {
      domId,
      segmented,
      isHover
    };
  }
});
</script>

<style scoped>
.n-card {
  border: 1px solid #e8e8eb;
  border-radius: 20px;
}

.hoverable-shadow {
  /* box-shadow: 0px 1.6px 2.2px rgba(0, 0, 0, 0.011),
    0px 3.8px 5.3px rgba(0, 0, 0, 0.023), 0px 7.1px 10px rgba(0, 0, 0, 0.034),
    0px 12.7px 17.9px rgba(0, 0, 0, 0.046),
    0px 23.8px 33.4px rgba(0, 0, 0, 0.058), 0px 57px 80px rgba(0, 0, 0, 0.07); */
  /* box-shadow: 3.8px 3.3px 2.9px rgba(0, 0, 0, 0.023),
    12.7px 10.9px 9.8px rgba(0, 0, 0, 0.046), 57px 49px 44px rgba(0, 0, 0, 0.07); */
  /* box-shadow: 0px 3.3px 2.9px rgba(0, 0, 0, 0.05),
    0px 10.9px 9.8px rgba(0, 0, 0, 0.078), 0px 49px 44px rgba(0, 0, 0, 0.17); */
  box-shadow: 0px 0.5px 2.9px rgba(0, 0, 0, 0.05),
    0px 1.8px 9.8px rgba(0, 0, 0, 0.078), 0px 8px 44px rgba(0, 0, 0, 0.17);
}

.hoverable-shadow:hover {
  box-shadow: none;
}

.n-card:hover {
  border: 1px solid rgba(73, 63, 145, 0.7);
}
</style>
