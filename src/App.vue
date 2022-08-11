<template>
  <n-config-provider>
    <naive-provider>
      <router-view />
    </naive-provider>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>
