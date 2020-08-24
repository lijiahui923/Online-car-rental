<template>
  <div :style="{height:`${defaultHeight}px`}">
    <el-amap vid="amapContainer" :events="events" class="amap-demo">
    </el-amap>
  </div>
</template>

<script>
/**
@description: 地图组件
@createTime:2020-07-06
@create:lijiahui
*/
import { AMapManager, lazyAMapApiLoaderInstance } from 'vue-amap';
export default {
  name: 'amap',
  props: {
    defaultHeight:{
      type: Number,
      default: 300
    }
  },
  components: {},
  data() {
    return {
      map: null,
      zoom: 18,
      events: {}
    };
  },
  computed: {},
  watch: {},
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      // your code ...
      this.map = new AMap.Map('amapContainer', {
        center: [116.397428, 39.90923],
        zoom: this.zoom
      });
    });
  },
  created() {},
  methods: {}
};
</script>