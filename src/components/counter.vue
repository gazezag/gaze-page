<template>
  <h1>Counter</h1>
  <n-p>{{ count }}</n-p>
  <n-button @click="increment"> increment </n-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'store/counter';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'Counter',

  setup() {
    const store = useStore();

    const { count } = storeToRefs(store);
    const { increment } = store;

    return {
      count,
      increment
    };
  }
});
</script>
