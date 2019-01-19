<template>
  <div class="CommoditySales">
    <div id="CommodityChart" class="chart"></div>
  </div>
</template>

<script>
export default {
  name: 'CommoditySales',
  methods: {
    drawChart () {
      var echarts = require('echarts')
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('CommodityChart'))
      // 绘制图表
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          textStyle: {
            fontSize: 15, // 字体大小
            color: '#86d7dc'// 字体颜色
          },
          data: ['可乐', '脉动', '娃哈哈', '阿萨姆奶茶', '百岁山', '王老吉', '雀巢', 'RIO', '其他']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
              show: true,
              textStyle: {
                color: '#86d7dc'
              }
            }
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
            name: '可乐',
            type: 'bar',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '脉动',
            type: 'bar',
            stack: '广告',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '娃哈哈',
            type: 'bar',
            stack: '广告',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '阿萨姆奶茶',
            type: 'bar',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '百岁山',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine: {
              lineStyle: {
                normal: {
                  type: 'dashed'
                }
              },
              data: [
                [{type: 'min'}, {type: 'max'}]
              ]
            }
          },
          {
            name: '王老吉',
            type: 'bar',
            barWidth: 5,
            stack: '搜索引擎',
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: '雀巢',
            type: 'bar',
            stack: '搜索引擎',
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: 'RIO',
            type: 'bar',
            stack: '搜索引擎',
            data: [60, 72, 71, 74, 190, 130, 110]
          },
          {
            name: '其他',
            type: 'bar',
            stack: '搜索引擎',
            data: [62, 82, 91, 84, 109, 110, 120]
          }
        ]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  },
  mounted () {
    this.drawChart()
    var echarts = require('echarts')
    window.onresize = () => {
      let myChart = echarts.init(document.getElementById('CommodityChart'))
      myChart.resize()
      myChart.color = ' #86d7dc'
    }
  }
}
</script>

<style lang="less" scoped>
  .CommoditySales{
    width: 100%;
    height: 100%;
  }
  .chart{
      width: 100%;
      height: 600px;
    color: #86d7dc;
    }
</style>
