<template>
  <div id="chart" :style="{ width: '1000px', height: '550px' }"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { init } from 'echarts';
import { useVisitInfoStore } from 'store/visitInfo';
import Mock from 'mockjs';

const newstore = useVisitInfoStore();
const timeArr = newstore.visitInfoList;
// mock_test start

var obj = Mock.mock({
  time: '@float(60, 100, 3, 5)',
  origin: '@character',
  type: '@character'
});
// console.log(obj);
for (var i = 0; i < 24; i++) {
  var obj = Mock.mock({
    time: '@float(60, 100, 3, 5)',
    origin: '@character',
    type: '@character'
  });
  timeArr.push(obj.time);
}

// mock_test over

// console.log(timeArr);
// vue3 暴露了专门定义组件的函数 defineComponent
export default defineComponent({
  // 组件名一般用大驼峰命名
  name: 'overFlow',
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
      charts.off('click');
      charts.on('click', function (params) {
        //用于做每个点的监听，只用点击点才能够获取想要的监听效果；
        let data = {
          x: params.name,
          y: params.value
        };
        console.log(data);
        alert(JSON.stringify(data));
        //
        //
        // 此处绑定点击事件
        //
        //
      });

      // 对初始化完成的 echarts 对象进行数据的注入
      // 此处都是一些 echarts 的 API
      charts.setOption({
        title: {
          text: '历史访问量'
        },
        xAxis: {
          data: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24
          ],
          axisTick: {
            show: false
          }
        },
        yAxis: {
          splitLine: {
            show: false
          },
          axisLine: {
            show: true
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          },
          formatter: ['{b}', ':{c}'].join('\n'),
          textStyle: {
            color: 'black'
          }
        },
        series: [
          {
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            smooth: true,
            data: timeArr,
            itemStyle: {
              //拐点的样式
              color: 'rgba(244,253,255,1)',
              borderWidth: 1,
              borderColor: 'rgba(87, 183, 242, 1)'
            },
            lineStyle: {
              //线条的样式
              width: 3,
              color: 'rgba(87, 183, 242, 1)'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(87, 183, 242, 1)' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(6,37,55,0)' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            }
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
