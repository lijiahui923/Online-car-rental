<template>
  <div>
      <el-form :inline="true" :model="formInline" size="small">
        <el-form-item label="停车场名称">
        <el-input v-model="formInline.user" placeholder="审批人" />
        </el-form-item>
        <el-form-item label="区域">
          <ccascader v-model="formInline.area"></ccascader>
        <!-- <el-input v-model="formInline.user"  /> -->
        </el-form-item>
        <el-form-item label="类型">
        <el-select v-model="formInline.region" placeholder="活动区域" >
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
        </el-select>
        </el-form-item>
        <el-form-item>
        <el-button type="primary">查询</el-button>
        </el-form-item>
        <slot></slot>
    </el-form>
  </div>
</template>

<script>
/**
@description: 查询
@createTime:2020-08-19
@create:lijiahui
*/
export default {
  name: 'search',
  props: {},
  components: {},
  data() {
    return {
        formInline: {
            user:'',
            region:''
        }
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {}
};
</script>
