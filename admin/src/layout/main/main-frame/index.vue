<template>
  <div style="height:100%">
      <div :class="{'skeleton-left-side': true, 'skeleton-left-side__collapse': collapse}">
          <div class="skeleton-left-side__scroll">
              <slot name="left"></slot>
          </div>
      </div>
      <div :class="{'skeleton-body': true, 'skeleton-body__left_collapse': collapse}"></div>
      <slot></slot>
  </div>
</template>

<script>
/**
@description: 主面板
@createTime:2020-11-11
@create:lijiahui
*/
export default {
  name: 'main-frame',
  props: {
      collapse: {
          type:Boolean,
          default: false
      }
  },
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
<style lang="scss">
$leftWidth: 200px;
$leftWidthMin: 64px;

.skeleton-left-side {
  width: $leftWidth;
  position: fixed;
  top: 0;left: 0;bottom: 0;
  border-right: 1px solid #e4e7ed;
  background-color: #fff;
  overflow-x: hidden;
  transition: width .5s linear;
  z-index: 10;
}
.skeleton-left-side__collapse {
  width: $leftWidthMin;
  transition: width .3s ease-out;
}
.skeleton-left-side__scroll {
  height: 100%;
  height: $leftWidth + 14;
  position: relative;
  overflow-x: hidden;
}
.skeleton-body {
  position: absolute;
  top: 0;right: 0;bottom: 0;
  left: $leftWidth;
  background-color: #eee;
}
.skeleton-body__left_collapse {
  left: $leftWidthMin;
  transition: left .3s ease-out;
}
</style>
