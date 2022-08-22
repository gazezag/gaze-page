import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGlobal = defineStore('global', () => {
  const begin = ref<number>(0);
  const end = ref<number>(0);
  const weekDay = ref<number>(0);

  const setBegin = (value: number) => (begin.value = value);
  const setEnd = (value: number) => (end.value = value);
  const setWeekDay = (value: number) => (weekDay.value = value);

  return {
    begin,
    end,
    weekDay,

    setBegin,
    setEnd,
    setWeekDay
  };
});
