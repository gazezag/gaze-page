<template>
  <div v-if="list.length">
    <n-table :single-line="false" bordered>
      <thead>
        <tr>
          <th v-for="(item, i) in getKeys(list[0] as any)" :key="i">
            {{ item }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(info, i) in list" :key="i">
          <td v-for="(item, i) in getValueList(info as any)" :key="i">
            {{ item }}
          </td>
        </tr>
      </tbody>
    </n-table>
  </div>
  <div v-else>
    <n-empty description="Oops Nothings Here"></n-empty>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getKeys, getValueList } from 'utils/objectHandler';

export default defineComponent({
  name: 'SimpleTable',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    return {
      list: props.data,

      getKeys,
      getValueList
    };
  }
});
</script>
