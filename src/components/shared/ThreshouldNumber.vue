<template>
  <n-text :type="type" strong>
    <n-space :align="'center'" justify="center" inline>
      <span :style="textStyle">
        {{ dataRef }}
        {{ unit }}
      </span>
      <n-icon :component="icon" :size="30" />
    </n-space>
  </n-text>
</template>

<script lang="ts">
import { computed, defineComponent, toRef } from 'vue';
import {
  CheckmarkDoneOutline,
  RemoveOutline,
  WarningOutline
} from '@vicons/ionicons5';

export default defineComponent({
  name: 'ThreshouldNumber',
  props: {
    data: {
      type: Number,
      required: true
    },
    threshould: {
      type: Array,
      required: true
    },
    unit: {
      type: String
    },
    textStyle: {
      type: Object
    }
  },
  setup(props) {
    const { threshould } = props;
    const dataRef = toRef(props, 'data');

    const type = computed(() => {
      const typeList =
        threshould.length === 1
          ? ['success', 'error']
          : ['success', 'warning', 'error'];
      return typeList.at(
        (threshould as Array<number>).findIndex(v => dataRef.value <= v)
      );
    });

    const icon = computed(() => {
      const iconList =
        threshould.length === 1
          ? [CheckmarkDoneOutline, WarningOutline]
          : [CheckmarkDoneOutline, RemoveOutline, WarningOutline];
      return iconList.at(
        (threshould as Array<number>).findIndex(v => dataRef.value <= v)
      );
    });

    return {
      dataRef,
      type,
      icon
    };
  }
});
</script>

<style scoped>
.n-text {
  font-size: 30px;
}

.n-icon {
  margin-top: 10px;
}
</style>
