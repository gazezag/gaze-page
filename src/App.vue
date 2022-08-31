<template>
  <n-config-provider>
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { darkTheme } from 'naive-ui';
import { Dataset } from 'types/dataset';
import { fetchAll } from 'api/firstFetch';
import { initStore } from 'store/initStore';
import { useGlobal } from 'store/globalOption';
import { getWeekDayEnd, getWeekDays, getWeekDayStart } from 'utils/time';

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

      if (sessionStorage.getItem('opened')) {
        // freshed
        const { setBegin, setEnd, setWeekDay } = useGlobal();
        setBegin(parseInt(sessionStorage.getItem('begin')!));
        setEnd(parseInt(sessionStorage.getItem('end')!));
        setWeekDay(parseInt(sessionStorage.getItem('weekDay')!));
      } else {
        // new page
        sessionStorage.clear();
      }
      sessionStorage.setItem('opened', '1');
    });

    return {
      darkTheme
    };
  }
});
</script>
