<template>
  <n-layout-header bordered>header</n-layout-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OverviewHeader',
  setup() {
    return {};
  }
});
</script>

<style scoped>
.n-layout-header {
  padding: 25px;
}
</style>
