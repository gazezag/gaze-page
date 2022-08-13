<template>
  <n-layout native-scrollbar="false" embedded>
    <overview-header />
    <overview-content />
  </n-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OverviewHeader from 'components/overview/Header.vue';
import OverviewContent from 'components/overview/Content.vue';

export default defineComponent({
  name: 'Overview',
  components: { OverviewHeader, OverviewContent },
  setup() {
    return {};
  }
});
</script>
