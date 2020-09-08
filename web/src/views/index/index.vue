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
  mounted() {
    document.addEventListener('mouseup', e => {
      const userCon = document.getElementById('children-view');
      // 如果这个元素是否包含这个对象的目标
      if (userCon && !userCon.contains(e.target)) {
        this.$router.push({name: 'Index'});
      }
    });
  },
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
  @include webkit(box-shadow, -5px 0 38px 0 rgba(0,0,0,.4));
  &.open {
    right: 0;
  }
}
</style>
