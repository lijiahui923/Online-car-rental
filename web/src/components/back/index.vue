<template>
  <div class="header-back">
      <div class="back">
          <i class="sicon"></i>
          <span class="tilte">{{tilte}}</span>
      </div>
  </div>
</template>

<script>
/**
@description:返回
@createTime:2020-07-09
@create:lijiahui
*/
export default {
  name: 'back',
  props: {
      tilte: String,
      defalut: ''
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
<style lang="scss" scoped>
.header-back {
    position: relative;
    padding-bottom: 147px;
}
.back {
    position: absolute;
    height: 40px;
    line-height: 40px;
    top: 21px;
    left: 0;
    right: 0;
    .sicon {
      width: 40px;height: 40px;
      position: absolute;
      left: 0;
      top: 0;
      &::before {
        content: '';
        position: absolute;
        display: block;
        width: 15px;
        height: 15px;
        left: 0;
        top: 12px;
        border-left: 2px solid #00a3ff;
        border-top: 2px solid #00a3ff;
        @include webkit(transform, rotate(-45deg));
        cursor: pointer;
      }
    }
}
.tilte {
    font-size: 16px;
    margin-left: 33px;
    color:#fff;
}
</style>
