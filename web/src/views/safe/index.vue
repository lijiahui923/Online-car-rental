<template>
  <div class="user-container">
    <back tilte="安全设置"></back>
    <ul class="group-link">
      <li>
        <router-link to="/pwd" tag="a" class="arrow">
          <span>修改密码</span>
        </router-link>
      </li>
      <li>
        <router-link to="/" tag="a">
          <span>绑定手机号</span>
        </router-link>
      </li>
      <li>
        <router-link to="/" tag="a">
          <span>绑定银行卡</span>
        </router-link>
      </li>
    </ul>
    <div class="logout">退出</div>
  </div>
</template>

<script>
/**
@description:安全设置
@createTime:2020-07-07
@create:lijiahui
*/
export default {
  name: 'safe',
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
@import './../user/index.scss';
.logout {
    position: absolute;
    top: 80%;
    left: 50%;
    width: 165px;
    height: 58px;
    text-align: center;
    line-height: 58px;
    color: #fff;
    bottom: 40px;
    background-color: #2d3339;
    @include webkit(border-radius,100px);
    @include webkit(transform, translate(-82px, 58px));
    font-size: 16px;
}
</style>
