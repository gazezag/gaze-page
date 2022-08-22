<template>
  <n-space size="large" vertical>
    <div class="panel" v-for="(item, i) in dayAverage" :key="i">
      <Panel>
        <template #header> {{ item.type }} </template>
        <template #default> {{ item.value }} </template>
      </Panel>
    </div>
  </n-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { usePerformanceTimingStore } from 'store/webPerformance';
import Panel from 'components/shared/Panel.vue';

export default defineComponent({
  name: 'PerformanceTiming',
  components: { Panel },
  setup() {
    const { dayAverage } = storeToRefs(usePerformanceTimingStore());

    return {
      dayAverage
    };
  }
});
</script>

<style scoped>
.n-space {
  padding: 20px;
}
</style>
