<template>
  <n-config-provider>
    <naive-provider>
      <router-view />
    </naive-provider>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { darkTheme } from 'naive-ui';

export default defineComponent({
  name: 'App',
  setup() {
    return {
      darkTheme
    };
  }
});
</script>
