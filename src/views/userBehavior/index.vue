<template>
  <n-space vertical>
    <Panel>
      <template #header>ROUTER CHANGE</template>
      <template #header-extra> {{ routerChangeSelectedCount }} </template>
      <template #default>
        <n-collapse>
          <n-collapse-item>
            <n-collapse>
              <n-collapse-item
                v-for="(info, idx) in routerChangeSelected"
                :key="idx"
              >
                <template #header-extra>
                  {{ `${timeFormatter(info.time)}` }}
                </template>

                <template #default>
                  <n-table single-line>
                    <thead>
                      <tr>
                        <th
                          v-for="(item, i) in getKeys(info).slice(1)"
                          :key="i"
                        >
                          {{ item }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          v-for="(item, i) in getValueList(info).slice(1)"
                          :key="i"
                        >
                          {{ item }}
                        </td>
                      </tr>
                    </tbody>
                  </n-table>
                </template>
              </n-collapse-item>
            </n-collapse>
          </n-collapse-item>
        </n-collapse>
      </template>
    </Panel>

    <Panel>
      <template #header>HTTP</template>
      <template #header-extra> {{ httpSelectedCount }} </template>
      <template #default>
        <n-collapse>
          <n-collapse-item>
            <n-collapse>
              <n-collapse-item v-for="(info, idx) in httpSelected" :key="idx">
                <template #header-extra>
                  {{ `${timeFormatter(info.time)}` }}
                </template>

                <template #default>
                  <n-table single-line>
                    <thead>
                      <tr>
                        <th
                          v-for="(item, i) in getKeys(info).slice(1)"
                          :key="i"
                        >
                          {{ item }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          v-for="(item, i) in getValueList(info).slice(1)"
                          :key="i"
                        >
                          {{ item }}
                        </td>
                      </tr>
                    </tbody>
                  </n-table>
                </template>
              </n-collapse-item>
            </n-collapse>
          </n-collapse-item>
        </n-collapse>
      </template>
    </Panel>

    <Panel>
      <template #header>OPERATION</template>
      <template #header-extra> {{ operationSelectedCount }} </template>
      <template #default>
        <n-collapse>
          <n-collapse-item>
            <n-collapse>
              <n-collapse-item
                v-for="(info, idx) in operationSelected"
                :key="idx"
              >
                <template #header-extra>
                  {{ `${timeFormatter(info.time)}` }}
                </template>

                <template #default>
                  <n-table single-line>
                    <thead>
                      <tr>
                        <th
                          v-for="(item, i) in getKeys(info).slice(1)"
                          :key="i"
                        >
                          {{ item }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          v-for="(item, i) in getValueList(info).slice(1)"
                          :key="i"
                        >
                          {{ item }}
                        </td>
                      </tr>
                    </tbody>
                  </n-table>
                </template>
              </n-collapse-item>
            </n-collapse>
          </n-collapse-item>
        </n-collapse>
      </template>
    </Panel>
  </n-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserBehaviorStore } from 'store/userBehavior';
import Panel from 'components/shared/Panel.vue';
import { timeFormatter } from 'utils/time';
import { getKeys, getValueList } from 'utils/objectHandler';

export default defineComponent({
  name: 'UserBehavior',
  components: { Panel },
  setup() {
    const {
      routerChangeSelected,
      routerChangeSelectedCount,
      httpSelected,
      httpSelectedCount,
      operationSelected,
      operationSelectedCount
    } = storeToRefs(useUserBehaviorStore());

    return {
      timeFormatter,
      getKeys,
      getValueList,

      routerChangeSelected,
      routerChangeSelectedCount,
      httpSelected,
      httpSelectedCount,
      operationSelected,
      operationSelectedCount
    };
  }
});
</script>

<style scoped>
.n-space {
  padding: 20px;
}

.n-card {
  margin-top: 20px;
}
</style>
