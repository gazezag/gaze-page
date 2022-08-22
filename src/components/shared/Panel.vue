<template>
  <n-card
    :segmented="segmented"
    :content-style="contentStyle"
    bordered
    hoverable
  >
    <template #header>
      <slot name="header"></slot>
    </template>
    <template #header-extra>
      <slot name="header-extra"></slot>
    </template>
    <template #default>
      <slot name="default"></slot>
    </template>
  </n-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const segmented = {
  content: true
};

export default defineComponent({
  name: 'Panel',
  props: ['contentStyle'],
  setup() {
    return {
      segmented
    };
  }
});
</script>

<style scoped>
.n-card {
  border-radius: 20px;
}
</style>
