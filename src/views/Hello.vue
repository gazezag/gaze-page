<template>
  <Counter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Counter from 'components/counter.vue';

import { useStore } from 'store/counter';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'Hello',
  components: { Counter },
  setup() {
    const store = useStore();

    const { count } = storeToRefs(store);

    return {
      count
    };
  }
});
</script>
