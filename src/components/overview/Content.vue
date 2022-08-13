<template>
  <n-layout-content embedded>
    <n-grid x-gap="12" :cols="6">
      <n-gi>
        <panel>
          <template #title>PV</template>
          <template #content>
            <div
              class="rose-charts"
              :style="{ width: '200px', height: '100px' }"
            ></div>
          </template>
        </panel>
      </n-gi>

      <n-gi v-for="(item, idx) in d" :key="idx">
        <panel>
          <template #title>
            <n-p>{{ item.title }}</n-p>
          </template>
          <template #content>
            <div :style="{ height: '100px' }">
              <n-p>{{ item.value }}</n-p>
            </div>
          </template>
        </panel>
      </n-gi>
    </n-grid>

    <n-grid x-gap="40" :cols="2">
      <n-gi>
        <panel>
          <template #title>PV</template>
          <template #content>
            <div
              class="line-charts"
              :style="{ width: '100%', height: '400px' }"
            >
              something
            </div>
          </template>
        </panel>
      </n-gi>
      <n-gi>
        <panel>
          <template #title>PV</template>
          <template #content>
            <div :style="{ width: '300px', height: '40px' }">something</div>
          </template>
        </panel>
        <panel>
          <template #title>PV</template>
          <template #content>
            <div :style="{ width: '300px', height: '40px' }">something</div>
          </template>
        </panel>
        <panel>
          <template #title>PV</template>
          <template #content>
            <div :style="{ width: '300px', height: '40px' }"></div>
          </template>
        </panel>
      </n-gi>
    </n-grid>
  </n-layout-content>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Panel from 'components/shared/Panel.vue';
import { init } from 'echarts';

const roseOption = {
  title: {
    left: 'center',
    top: 'center'
  },
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 3232,
          name: 'A'
        },
        {
          value: 2234,
          name: 'B'
        },
        {
          value: 2500,
          name: 'C'
        }
      ]
    }
  ],
  roseType: 'area'
};

const d = [
  { title: 'PV', value: 200 },
  { title: 'Average length of stay', value: '70s' },
  { title: 'Average length of stay', value: '70s' },
  { title: 'Average length of stay', value: '70s' },
  { title: 'Average length of stay', value: '70s' }
];

export default defineComponent({
  name: 'OverviewContent',
  components: { Panel },
  setup() {
    const showCharts = () => {
      init(document.querySelector('.rose-charts')!).setOption(roseOption!);
      init(document.querySelector('.line-charts')!).setOption({
        xAxis: {
          type: 'category',
          data: ['A', 'B', 'C']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150],
            type: 'line'
          }
        ]
      });
    };

    onMounted(() => {
      showCharts();
    });

    return { d };
  }
});
</script>
