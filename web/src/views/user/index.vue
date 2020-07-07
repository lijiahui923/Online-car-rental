<template>
  <div class="user">
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
          <i></i>
          <span>我的账户</span>
        </router-link>
      </li>
      <li>
        <router-link to="/" tag="a">
          <i></i>
          <span>我的账户</span>
        </router-link>
      </li>
      <li>
        <router-link to="/" tag="a">
          <i></i>
          <span>我的账户</span>
        </router-link>
      </li>
      <li>
        <router-link to="/" tag="a">
          <i></i>
          <span>我的账户</span>
        </router-link>
      </li>
      <li>
        <router-link to="/" tag="a">
          <i></i>
          <span>我的账户</span>
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
</style>
