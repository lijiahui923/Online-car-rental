<template>
  <div class="header">
    <el-breadcrumb separator-class="el-icon-arrow-right" style="display: inline-block;">
        <el-breadcrumb-item>
        <span class="title-clickable-item" @click="$router.back(-1)">{{title.primaryTitle}}</span>
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{title.secondaryTitle}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button style="float:right;padding: 3px 0;" type="text" @click="$router.back(-1)">返回</el-button>
  </div>
</template>

<script>
/**
@description:头部导航
@createTime:2020-08-26
@create:lijiahui
*/
export default {
  name: 'header-title',
  props: {
      title: {
          type: Object,
          defalut: _ => {}
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
<style scoped>
.header {
  line-height: 30px;
}
.title-clickable-item {
  font-weight: 700;
  color: #303133;
}
.title-clickable-item:hover {
  color: #409eff;
  cursor: pointer;
}</style>
