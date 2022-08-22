<template>
  <n-config-provider>
    <router-view />
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { darkTheme } from 'naive-ui';
import { Dataset } from 'types/dataset';
import { fetchAll } from 'api/firstFetch';
import { initStore } from 'store/initStore';
import { getWeekDayEnd, getWeekDayStart } from 'utils/time';

export default defineComponent({
  name: 'App',
  setup() {
    onMounted(() => {
      fetchAll(getWeekDayStart(), getWeekDayEnd())
        .then(response => {
          console.log(response.data);

          initStore(response.data as Dataset);
        })
        .catch(err => {
          console.warn(`initialization failed: ${err}`);
        });
    });

    return {
      darkTheme
    };
  }
});
</script>
