<template>
  <transition name="fade-down" mode="out-in">
      <slot></slot>
  </transition>
</template>

<script>
/**
@description:页面之间切换动画
@createTime:2020-11-11
@create:lijiahui
*/
export default {
  name: 'fade-down',
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
<style scoped>
.fade-down-enter-active,
.fade-down-leave-active {
    transition: all .2s ease;
}

.fade-down-enter, .fade-down-leave-to {
    margin-top: -50px;
    opacity: 0;
}
</style>
