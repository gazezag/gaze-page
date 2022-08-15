<template>
  <!-- <side-menu /> -->
  <div>11111</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideMenu from 'components/menu.vue';

import { useStore } from 'store/counter';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'layout',
  // components: { SideMenu },
  setup() {
    return {};
  }
});
</script>
