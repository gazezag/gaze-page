<template>
  <n-statistic tabular-nums>
    <template #prefix>
      <n-icon :color="color" :component="icon" />
    </template>
    <n-number-animation :from="from" :to="to" :on-finish="finishHandler" />
    <template #suffix>
      <n-icon v-show="to" :color="color" :component="trendIcon" />
    </template>
  </n-statistic>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { TrendingUpOutline, TrendingDownOutline } from '@vicons/ionicons5';

export default defineComponent({
  name: 'AnimationNumber',
  props: ['from', 'to', 'finishHandler', 'icon', 'color'],
  setup(props) {
    const trendIcon = computed(() => {
      return props.to >= props.from ? TrendingUpOutline : TrendingDownOutline;
    });

    return {
      trendIcon
    };
  }
});
</script>
