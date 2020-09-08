<template>
  <div class="user-container">
    <div class="user-info">
      <img src="./../../assets/headphoto.png" alt="">
      <div class="meta">
        <h4 class="name">用户名称</h4>
        <div class="level">文明驾驶<strong>0</strong></div>
      </div>
    </div>
    <ul class="group-link">
      <li>
        <router-link to="/" tag="a" class="arrow">
          <i><svg-icon  icon-class="account" class-name='sicon'/></i>
          <span>我的账户</span>
        </router-link>
      </li>
      <li>
        <router-link to="/" tag="a">
          <i><svg-icon  icon-class="order" class-name='sicon'/></i>
          <span>租车订单</span>
        </router-link>
      </li>
      <li>
        <router-link to="/" tag="a">
          <i><svg-icon  icon-class="name" class-name='sicon'/></i>
          <span>实名认证</span>
        </router-link>
      </li>
      <li>
        <router-link to="/safe" tag="a">
          <i><svg-icon  icon-class="setup" class-name='sicon'/></i>
          <span>安全设置</span>
        </router-link>
      </li>
      <li>
        <router-link to="/" tag="a">
          <i><svg-icon  icon-class="help" class-name='sicon'/></i>
          <span>帮助中心</span>
        </router-link>
      </li>
    </ul>
    <div class="logout">退出</div>
  </div>
</template>

<script>
/**
@description:用户模块
@createTime:2020-07-06
@create:lijiahui
*/
export default {
  name: 'user',
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
@import './index.scss';
.sicon {
  font-size: 30px;
  color: #1296db;
}
</style>
