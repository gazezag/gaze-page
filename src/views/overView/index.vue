<template>
  <n-layout>
    <MainHeader />

    <n-layout-content embedded>
      <SubPanel />
      <MainPanel />
    </n-layout-content>
  </n-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainHeader from 'components/shared/MainHeader.vue';
import SubPanel from 'components/overview/SubPanel.vue';
import MainPanel from 'components/overview/MainPanel.vue';

export default defineComponent({
  name: 'Overview',
  components: { MainHeader, SubPanel, MainPanel }
});
</script>

<style scoped>
.n-layout-content {
  height: var(100vh - 60px);
}
</style>
