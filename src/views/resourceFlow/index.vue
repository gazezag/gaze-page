<template>
  <div id="chart" :style="{ width: '1000px', height: '550px' }"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { init } from 'echarts';

var startTime_data = [40, 40, 35, 39, 40, 46, 43, 45, 39, 45];
var responseEnd_data = [20, 38, 35, 40, 39, 14, 27, 45, 28, 28];
var DNS_data = [40, 40, 35, 11, 39, 22, 35, 9, 28, 56];
var initialConnect_data = [38, 40, 33, 39, 37, 26, 23, 56, 28, 28];
var SSL_data = [38, 0, 35, 9, 3, 45, 43, 43, 27, 28];
var request_data = [0, 0, 3, 37, 39, 34, 45, 43, 28, 27];
var TTFB_data = [0, 0, 33, 0, 0, 45, 0, 0, 28, 27];
var transmit_data = [0, 0, 0, 0, 0, 0, 0, 0, 27, 0];
var contentDownload_data = [0, 0, 0, 0, 0, 0, 0, 0, 27, 0];
//y轴名称（要根据资源个数来确定）
var yAxis_name = [
  'resource1',
  'resource2',
  'resource3',
  'resource4',
  'resource5',
  'resource6',
  'resource7',
  'resource8',
  'resource9',
  'resource10'
];

// vue3 暴露了专门定义组件的函数 defineComponent
export default defineComponent({
  // 组件名一般用大驼峰命名
  name: 'ResourceFlow',
  // setup 是 vue3 的主要更新
  // 从前写在 data、methods、computed、mounted 中的内容都可以写在 setup 中
  // 写在一起的好处是便于集中管理、便于复用逻辑
  // 之前 vue2 属于步步高点读机类型, 哪里需要写哪里
  // 现在 vue3 对 ts 类型支持更好, 并且复用逻辑更方便, 强推
  // PS
  // 除了 setup 之外  还有一个 setup 语法糖
  // 这个暂时可以不用, 但是 composition API 一定要会
  setup() {
    // 封装一个函数, 用来对页面中需要的这个图表进行初始化
    const getEchart = () => {
      // 调用 echarts 中提供的 init 函数进行初始化
      // 此处注意 document.getElementById('charts') 后面的感叹号
      // 这个感叹号是 ts 的类型断言, 用来表示这个值必定会存在
      // 将鼠标放在 getElementById 上会看到它的函数原型如下
      // Document.getElementById(elementId: string): HTMLElement | null
      // 注意看他的返回值, HTMLElement | null
      // 也就是说这个函数有可能返回 null
      // 但是我们很清楚这里不可能拿不到这个 DOM
      // 因此可以进行类型断言来告诉 ts 编译器, 这个值一定会存在, 一定是 HTMLELEMENT 类型
      // 可以试试去掉感叹号
      // 会报错说类型覆盖不够
      const charts = init(document.getElementById('chart')!);

      // 对初始化完成的 echarts 对象进行数据的注入
      // 此处都是一些 echarts 的 API
      charts.setOption({
        title: {
          text: 'ResourceFlow资源各阶段获取的耗时(ms)',
          padding: 20,
          textStyle: {
            fontSize: 17,
            fontWeight: 'bolder',
            color: '#333'
          },
          subtextStyle: {
            fontSize: 13,
            fontWeight: 'bolder'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: yAxis_name
        },
        series: [
          {
            name: 'startTime',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'insideRight'
              }
            },
            color: 'white',
            data: startTime_data
          },
          {
            name: 'responseEnd',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'insideRight'
              }
            },
            data: responseEnd_data
          },
          {
            name: 'DNS',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'insideRight'
              }
            },
            data: DNS_data
          },
          {
            name: 'initialConnect',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'insideRight'
              }
            },
            data: initialConnect_data
          },
          {
            name: 'SSL',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'insideRight'
              }
            },
            data: SSL_data
          },
          {
            name: 'request',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'insideRight'
              }
            },
            data: request_data
          },
          {
            name: 'TTFB',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'insideRight'
              }
            },
            data: TTFB_data
          },
          {
            name: 'transmit',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'insideRight'
              }
            },
            data: transmit_data
          },
          {
            name: 'contentDownload',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'insideRight'
              }
            },
            data: contentDownload_data
          }
        ]
      });
    };

    // onMounted 就是之前 vue2 的 mounted
    // 这样的写法和之前的 mounted 效果一致
    // 只不过这样写更加 vue3 一点
    // 在组件挂载完成时进行图表的初始化
    onMounted(() => {
      getEchart();
    });
  }
});
</script>
