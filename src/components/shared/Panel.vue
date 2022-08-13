<template>
  <n-card :segmented="segmented" bordered hoverable>
    <template #default>
      <slot name="title"></slot>
    </template>
    <template #footer>
      <slot name="content"></slot>
    </template>
  </n-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const segmented = {
  content: true,
  footer: 'soft'
};

export default defineComponent({
  name: 'Panel',
  setup() {
    return {
      segmented
    };
  }
});
</script>
