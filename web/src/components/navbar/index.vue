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
</style>
