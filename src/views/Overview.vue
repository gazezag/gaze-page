<template>
  <side-menu />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideMenu from 'components/menu.vue';

import { useStore } from 'store/counter';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'Hello',
  components: { SideMenu },
  setup() {
    return {};
  }
});
</script>
