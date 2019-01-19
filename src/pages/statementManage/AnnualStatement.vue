<template>
  <div class="AnnualStatement">
    <div id="AnnualStatementChart" class="chart"></div>
  </div>
</template>

<script>
export default {
  name: 'AnnualStatement',
  methods: {
    drawChart () {
      var echarts = require('echarts')
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('AnnualStatementChart'))
      // 绘制图表
      var option = {
        title: {
          textStyle: {
            fontSize: 15, // 字体大小
            color: '#86d7dc'// 字体颜色
          },
          text: '商品销量和库存量'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          textStyle: {
            fontSize: 15, // 字体大小
            color: '#86d7dc'// 字体颜色
          },
          data: ['销售量', '库存量']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            axisLabel: {
              show: true,
              textStyle: {
                color: '#86d7dc'
              }
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#86d7dc'
              }
            }
          }
        ],
        series: [
          {
            name: '销售量',
            type: 'bar',
            data: [1268, 1053, 2154, 825, 1300, 1736, 3569, 2478, 1568, 1124, 1852, 1371],
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          },
          {
            name: '库存量',
            type: 'bar',
            data: [3732, 3947, 2846, 4175, 3700, 3264, 1431, 2522, 3432, 3876, 3148, 3629],
            markPoint: {
              data: [
                {name: '年最高', value: 3732, xAxis: 1, yAxis: 183},
                {name: '年最低', value: 1431, xAxis: 7, yAxis: 3}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  },
  mounted () {
    this.drawChart()
    // var echarts = require('echarts')
    // window.onresize = () => {
    //   let myChart = echarts.init(document.getElementById('AnnualStatementChart'))
    //   myChart.resize()
    // }
  }
}
</script>

<style lang="less" scoped>
  .AnnualStatement{
    width: 100%;
    height: 100%;
  }
  .chart{
    width: 100%;
    height: 600px;
  }
</style>
