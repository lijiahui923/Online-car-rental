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
import { getLngLag, cityToLngLag, addMarker } from './common';
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
      // 获取鼠标点击经纬度
      this.map.on('click', e => {
        let { value } = getLngLag(e);
        // 添加覆盖物
        addMarker(value, this.map);
        this.$emit('lnglag', value);
      });
    });
  },
  created() {},
  methods: {
    setMapCenter (data) {
      cityToLngLag(data, this.map)
    }
  }
};
</script>