<template>
  <div class="navbar">
      <ul>
          <li><i class="icon icon-help">?</i></li>
          <li><i class="icon icon-help">?</i></li>
          <li><a href="javascript:void(0);" class="select-car-btn">选择车辆</a></li>
          <li><i class="icon icon-help">?</i></li>
          <li><i class="icon icon-help">?</i></li>
      </ul>
  </div>
</template>

<script>
/**
@description:导航控件
@createTime:2020-07-06
@create:lijiahui
*/
export default {
  name: 'navbar',
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.navbar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 86px;
    z-index: 10;
    text-align: center;
    li {
        display: inline-block;
    }
    i {
        vertical-align:middle;
    }
}
.select-car-btn {
    display: inline-block;
    width: 240px;
    height: 84px;
    line-height: 84px;
    text-align: center;
    font-size: 26px;
    font-weight: 300;
    color: #fff;
    background-color: $color-main;
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    -ms-border-radius: 100px;
    -o-border-radius: 100px;
    margin: 0 17px;
}
</style>
