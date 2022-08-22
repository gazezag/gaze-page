<template>
  <div v-if="isErrorOccur">
    <n-space vertical>
      <Panel>
        <template #header>JS ERROR</template>
        <template #header-extra> {{ jsErrorSelectedCount }} </template>
        <template #default>
          <n-collapse>
            <n-collapse-item>
              <n-collapse>
                <n-collapse-item
                  v-for="(info, idx) in jsErrorSelected"
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
                            v-for="(item, i) in getValueList(info).slice(
                              1,
                              jsErrorSelectedCount
                            )"
                            :key="i"
                          >
                            {{ item }}
                          </td>
                          <td>
                            <n-button
                              @click="
                                () =>
                                  showModal(
                                    getValueList(info)[jsErrorSelectedCount]
                                  )
                              "
                              >View</n-button
                            >
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
        <template #header>RESOURCE</template>
        <template #header-extra> {{ resourceErrorSelectedCount }} </template>
        <template #default>
          <n-collapse>
            <n-collapse-item>
              <n-collapse>
                <n-collapse-item
                  v-for="(info, idx) in resourceErrorSelected"
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
        <template #header-extra> {{ httpErrorSelectedCount }} </template>
        <template #default>
          <n-collapse>
            <n-collapse-item>
              <n-collapse>
                <n-collapse-item
                  v-for="(info, idx) in httpErrorSelected"
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
        <template #header>CORS</template>
        <template #header-extra> {{ corsErrorSelectedCount }} </template>
        <template #default>
          <n-collapse>
            <n-collapse-item>
              <n-collapse>
                <n-collapse-item
                  v-for="(info, idx) in corsErrorSelected"
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

      <n-modal
        v-model:show="isStackTraceModalShow"
        transform-origin="center"
        preset="card"
        style="width: 600px"
        title="STACK TRACE"
      >
        <SimpleTable :data="dataTobeShow" />
      </n-modal>
    </n-space>
  </div>

  <div v-else>
    <n-empty description="Your program is very healthy">
      <template #icon>
        <n-icon>
          <HappyOutline />
        </n-icon>
      </template>
      <template #extra>
        <n-button size="large"> NICE! </n-button>
      </template>
    </n-empty>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { storeToRefs } from 'pinia';
import Panel from 'components/shared/Panel.vue';
import SimpleTable from 'components/shared/SimpleTable.vue';
import { timeFormatter } from 'utils/time';
import { getKeys, getValueList } from 'utils/objectHandler';
import { useErrorInfoStore } from 'store/errorInfo';
import { StackTraceInfo } from 'types/errorInfo';
import { HappyOutline } from '@vicons/ionicons5';

export default defineComponent({
  name: 'UserBehavior',
  components: { Panel, SimpleTable, HappyOutline },
  setup() {
    const {
      isErrorOccur,
      jsErrorSelected,
      jsErrorSelectedCount,
      resourceErrorSelected,
      resourceErrorSelectedCount,
      httpErrorSelected,
      httpErrorSelectedCount,
      corsErrorSelected,
      corsErrorSelectedCount
    } = storeToRefs(useErrorInfoStore());

    const isStackTraceModalShow = ref<boolean>(false);
    const dataTobeShow = ref<Array<StackTraceInfo>>([]);
    const showModal = (data: Array<StackTraceInfo>) => {
      isStackTraceModalShow.value = true;
      dataTobeShow.value = data;
    };

    return {
      timeFormatter,
      getKeys,
      getValueList,

      isErrorOccur,

      isStackTraceModalShow,
      dataTobeShow,
      showModal,

      jsErrorSelected,
      jsErrorSelectedCount,
      resourceErrorSelected,
      resourceErrorSelectedCount,
      httpErrorSelected,
      httpErrorSelectedCount,
      corsErrorSelected,
      corsErrorSelectedCount
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
