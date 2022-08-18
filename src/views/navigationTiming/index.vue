<template>
  <div id="chart2" :style="{ width: '1000px', height: '550px' }"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { init } from 'echarts';
import { useNavigationTimingStore } from 'store/webPerformance';
import Mock from 'mockjs';

const store = useNavigationTimingStore();
const DNS = new Array();
const TCP = new Array();
const SSL = new Array();
const TTFB = new Array();
const transmit = new Array();
const domParse = new Array();
const redirect = new Array();
const domContentLoadedCallback = new Array();
const L = new Array();

// mock_test start
for (var i = 0; i < 5; i++) {
  var obj = Mock.mock({
    time: '@float(60, 100, 3, 5)',
    redirect: '@float(60, 100, 3, 5)',
    DNS: '@float(60, 100, 3, 5)',
    TCP: '@float(60, 100, 3, 5)',
    SSL: '@float(60, 100, 3, 5)',
    TTFB: '@float(60, 100, 3, 5)',
    transmit: '@float(60, 100, 3, 5)',
    domParse: '@float(60, 100, 3, 5)',
    deferExecuteDuration: '@float(60, 100, 3, 5)',
    domContentLoadedCallback: '@float(60, 100, 3, 5)',
    resourceLoad: '@float(60, 100, 3, 5)',
    domReady: '@float(60, 100, 3, 5)',
    L: '@float(60, 100, 3, 5)'
  });
  store.push(obj);
}
// mock_test over
const NavigationTiming_List = store.navigationTimingList;
for (var i = 0; i < NavigationTiming_List.length; i++) {
  DNS.push(NavigationTiming_List[i].DNS);
  TCP.push(NavigationTiming_List[i].TCP);
  SSL.push(NavigationTiming_List[i].SSL);
  TTFB.push(NavigationTiming_List[i].TTFB);
  transmit.push(NavigationTiming_List[i].transmit);
  domParse.push(NavigationTiming_List[i].domParse);
  redirect.push(NavigationTiming_List[i].redirect);
  domContentLoadedCallback.push(
    NavigationTiming_List[i].domContentLoadedCallback
  );
  L.push(NavigationTiming_List[i].L);
}
var dataYline = new Array();
for (var i = 0; i < DNS.length; i++) {
  dataYline[i] =
    DNS[i] +
    TCP[i] +
    SSL[i] +
    TTFB[i] +
    transmit[i] +
    domParse[i] +
    redirect[i] +
    domContentLoadedCallback[i] +
    L[i];
}

// vue3 暴露了专门定义组件的函数 defineComponent
export default defineComponent({
  // 组件名一般用大驼峰命名
  name: 'NavigationTiming',
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
      const charts = init(document.getElementById('chart2')!);

      // 对初始化完成的 echarts 对象进行数据的注入
      // 此处都是一些 echarts 的 API

      // 虽然报错但是能跑......
      charts.setOption(
        {
          title: {
            text: 'NavigationTiming',
            subtext: '',
            x: '4%',

            textStyle: {
              color: '#151515',
              fontSize: '22'
            },
            subtextStyle: {
              color: '#90979c',
              fontSize: '16'
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: [
              {
                name: '1',
                icon: 'rect',
                color: {
                  type: 'linear',
                  x: 0,
                  x2: 1,
                  y: 0,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: 'rgba(5, 75, 170, 1)' },
                    { offset: 1, color: 'rgba(11, 151, 232, 1)' }
                  ]
                } //盖子的颜色
              },
              {
                name: '2',
                icon: 'rect',
                color: {
                  type: 'linear',
                  x: 0,
                  x2: 1,
                  y: 0,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: 'rgba(90, 45, 192, 1)' },
                    { offset: 1, color: 'rgba(184, 91, 225, 1)' }
                  ]
                } //盖子的颜色
              },
              {
                name: '3',
                icon: 'rect',
                color: {
                  type: 'linear',
                  x: 0,
                  x2: 0,
                  y: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: 'rgba(3, 120, 134, 1)' },
                    { offset: 1, color: 'rgba(0, 200, 188, 1)' }
                  ]
                } //盖子的颜色
              },
              '4'
            ],
            itemWidth: 8,
            itemHeight: 8,
            textStyle: {
              fontWeight: 'normal',
              color: '#A2A5AA'
            }
          },
          xAxis: {
            type: 'category',
            // boundaryGap: false, // 不留白，从原点开始
            axisLine: {
              //设置坐标轴线
              lineStyle: {
                color: '#6C6F79' //改轴颜色
              }
            },
            axisTick: { show: false }, //设置刻度线颜色
            axisLabel: {
              //坐标轴刻度标签的相关设置。
              interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
              //	margin:15,
              textStyle: {
                color: '#A2A5AA',

                fontSize: 10
              }
            },
            data: ['1', '2', '3', '4', '5']
          },

          yAxis: [
            // 左侧y轴
            {
              type: 'value',
              // name: '金额(万元)',
              min: 0,
              max: 300,
              interval: 200,
              nameTextStyle: {
                color: '#A2A5AA',
                fontSize: 10
              },
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: '#6C6F79' //改轴颜色
                }
              },
              axisLabel: {
                formatter: '{value}ms',
                textStyle: {
                  color: '#A2A5AA', //改轴数值颜色
                  fontSize: 10
                }
              }
            },
            // 右侧y轴设置
            {
              type: 'value',
              // name: '环比(%)',
              min: 0,
              max: 800,
              interval: 20,
              nameTextStyle: {
                color: '#A2A5AA',
                fontSize: 10
              },
              splitLine: {
                lineStyle: {
                  color: 'rgba(255,255,255,0.1)' //改轴颜色
                }
              },
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: '#6C6F79' //改轴颜色
                }
              },
              axisLabel: {
                formatter: '{value}ms',
                textStyle: {
                  color: '#A2A5AA', //改轴数值颜色
                  fontSize: 10
                }
              }
            }
          ],
          series: [
            // rediect

            {
              z: 1,
              type: 'bar',
              name: 'redicet',
              barWidth: 8,
              barGap: '50%',
              data: redirect,
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  x2: 1,
                  y: 0,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: 'rgba(5, 75, 170, 1)' },
                    { offset: 0.5, color: 'rgba(11, 151, 232, 1)' },
                    { offset: 0.5, color: 'rgba(10, 57, 123, 1)' },
                    { offset: 1, color: 'rgba(117, 77, 253, 1)' }
                  ]
                }
              }
            },

            // DNS

            {
              z: 1,
              type: 'bar',
              name: 'DNS',
              barWidth: 8,
              // barGap: '-50%',
              data: DNS,
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  x2: 1,
                  y: 0,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: 'rgba(90, 45, 192, 1)' },
                    { offset: 0.5, color: 'rgba(184, 91, 225, 1)' },
                    { offset: 0.5, color: 'rgba(50, 13, 133, 1)' },
                    { offset: 1, color: 'rgba(90, 45, 192, 1)' }
                  ]
                }
              }
            },

            // TCP

            {
              z: 1,
              type: 'bar',
              name: 'TCP',
              barWidth: 8,
              // barGap: '-50%',
              data: TCP,
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 1,
                  x2: 0,
                  y: 0,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: 'rgba(3, 120, 134, 1)' },
                    { offset: 0.5, color: 'rgba(0, 200, 188, 1)' },
                    { offset: 0.5, color: 'rgba(0, 66, 73, 1)' },
                    { offset: 1, color: 'rgba(0, 127, 119, 1)' }
                  ]
                }
              }
            },
            // SSL

            {
              z: 1,
              type: 'bar',
              name: 'SSL',
              barWidth: 8,
              // barGap: '-50%',
              data: SSL,
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 1,
                  x2: 0,
                  y: 0,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: 'rgba(3, 160, 134, 1)' },
                    { offset: 0.5, color: 'rgba(0, 200, 110, 1)' },
                    { offset: 0.5, color: 'rgba(0, 55, 73, 1)' },
                    { offset: 1, color: 'rgba(0, 127, 33, 1)' }
                  ]
                }
              }
            },

            // TTFB

            {
              z: 1,
              type: 'bar',
              name: 'TTFB',
              barWidth: 8,
              // barGap: '-50%',
              data: TTFB,
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 1,
                  x2: 0,
                  y: 0,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: 'rgba(22, 120, 134, 1)' },
                    { offset: 0.5, color: 'rgba(1, 11, 22, 1)' },
                    { offset: 0.5, color: 'rgba(0, 66, 32, 1)' },
                    { offset: 1, color: 'rgba(0, 127, 15, 1)' }
                  ]
                }
              }
            },

            // transmit

            {
              z: 1,
              type: 'bar',
              name: 'transmit',
              barWidth: 8,
              // barGap: '-50%',
              data: transmit,
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 1,
                  x2: 0,
                  y: 0,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: 'rgba(3, 120, 11, 1)' },
                    { offset: 0.5, color: 'rgba(0, 66, 188, 1)' },
                    { offset: 0.5, color: 'rgba(0, 66, 66, 1)' },
                    { offset: 1, color: 'rgba(0, 72, 119, 1)' }
                  ]
                }
              }
            },

            // domParse
            {
              z: 1,
              type: 'bar',
              name: 'domParse',
              barWidth: 8,
              // barGap: '-50%',
              data: domParse,
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 1,
                  x2: 0,
                  y: 0,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: 'rgba(3, 200, 13, 1)' },
                    { offset: 0.5, color: 'rgba(0, 200, 55, 1)' },
                    { offset: 0.5, color: 'rgba(0, 55, 73, 1)' },
                    { offset: 1, color: 'rgba(0, 127, 66, 1)' }
                  ]
                }
              }
            },

            //domContentLoadedCallback
            {
              z: 1,
              type: 'bar',
              name: 'domContentLoadedCallback',
              barWidth: 8,
              // barGap: '-50%',
              data: domContentLoadedCallback,
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 1,
                  x2: 0,
                  y: 0,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: 'rgba(2, 120, 200, 1)' },
                    { offset: 0.5, color: 'rgba(0, 88, 44, 1)' },
                    { offset: 0.5, color: 'rgba(0, 120, 73, 1)' },
                    { offset: 1, color: 'rgba(0, 44, 119, 1)' }
                  ]
                }
              }
            },
            // L
            {
              z: 1,
              type: 'bar',
              name: 'L',
              barWidth: 8,
              // barGap: '-50%',
              data: L,
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 1,
                  x2: 0,
                  y: 0,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: 'rgba(3, 123, 134, 1)' },
                    { offset: 0.5, color: 'rgba(0, 123, 188, 1)' },
                    { offset: 0.5, color: 'rgba(0, 123, 73, 1)' },
                    { offset: 1, color: 'rgba(0, 127, 119, 1)' }
                  ]
                }
              }
            },
            // 上方折线
            {
              name: 'Sum',
              type: 'line',
              symbol: 'circle',
              symbolSize: 10, //设定实心点的大小
              yAxisIndex: 1,
              lineStyle: {
                color: 'rgba(180, 34, 80, 1)'
              },
              itemStyle: {
                borderWidth: 2,
                borderColor: '#fff',
                color: {
                  type: 'linear',
                  x: 0,
                  x2: 1,
                  y: 0,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: 'rgba(176, 29, 81, 1)' },
                    { offset: 1, color: 'rgba(249, 117, 60, 1)' }
                  ]
                }
              },
              data: dataYline
            }
          ]
        }!
      );
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
