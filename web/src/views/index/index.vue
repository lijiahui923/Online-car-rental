<template>
  <div>
    <!-- 地图 -->
    <Map></Map>
    <!-- 导航 -->
    <navbar></navbar>
    <!-- dom渲染 -->
    <!-- <Cars></Cars> -->
    <!-- 会员 -->
    <div id="children-view" :class="{open: show}">
      <router-view />
    </div>
  </div>
</template>

<script>
/**
@description: 首页
@createTime:2020-07-06
@create:lijiahui
*/
import Map from '../amap';
import Cars from '../cars';
import navbar from '@c/navbar';
export default {
  name: 'index',
  props: {},
  components:  { Map, Cars, navbar },
  data() {
    return {
    };
  },
  computed: {
    show () {
      const router = this.$route;
      return router.name === 'Index' ? false : true;
    }
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
#children-view {
  position: fixed;
  top: 0;
  bottom: 0;
  right: -600px;
  width: 410px;
  z-index: 101;
  background-color: #34393f;
  @include webkit(transition, all .3s ease 0s);
  &.open {
    right: 0;
  }
}
</style>
