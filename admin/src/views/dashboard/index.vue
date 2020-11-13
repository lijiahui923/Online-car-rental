<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">
      name: {{ getUserName }}
    </div> -->
    <!-- <div id="main" style="width: 600px;height: 400px;"></div> -->
    <main-menu :menuData="routes"></main-menu>
  </div>
</template>

<script>
// import { getUserName } from '@/utils/auth'; 
import mainMenu from '../../layout/main/main-menu/index.js';
import echarts from 'echarts';
export default {
    name: 'Dashboard',
    components: {
      mainMenu
    },
    data() {
        return {
            // getUserName: getUserName()
        };
    },
    computed: {
      routes() {
            return this.$router.options.routes;
        }
    },
    mounted () {
      let myChart = echarts.init(document.getElementById('main'));
      let options = {
        title: {
          text: 'ECharts 测试'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫','羊毛毯','雪纺衫','裤子','高跟鞋','袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 120, 10, 10, 20]
        }]
      };
      myChart.setOption(options);
    }
};
</script>

<style lang="scss" scoped>
    // background: #fff;
    // margin: 10px;
    // border-radius: 5px;
// .dashboard {
//   &-container {
//     margin: 30px;
//   }
//   &-text {
//     font-size: 30px;
//     line-height: 46px;
//   }
// }
</style>
