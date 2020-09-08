<template>
  <div class="user-container">
    <back tilte="修改密码"></back>
    <div class="cars-form-ui">
      <el-form ref="userform" :model="userform">
        <el-form-item>
          <el-input v-model="userform.name" placeholder="原生密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="userform.name" placeholder="新密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="userform.name" placeholder="确认密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="button-vcode">获取验证码</el-button>
          <el-input v-model="userform.name" placeholder="验证码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="button-black">确认</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
/**
@description:修改密码
@createTime:2020-07-09
@create:lijiahui
*/
export default {
  name: 'password',
  props: {},
  components: {},
  data() {
    return {
      userform: {
        name: ''
      }
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {
    onSubmit() {
        console.log('submit!');
      }
  }
};
</script>
<style scoped></style>
