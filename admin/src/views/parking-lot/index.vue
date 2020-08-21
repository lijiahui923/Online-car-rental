<template>
  <div class="page-container" >
    <el-card>
      <search>
        <router-link to="/parkingAdd">
          <el-button type="primary" size="small" class="button">新增</el-button>
        </router-link>
      </search>
      <ctable
        :column="column"
        :data="list"
        :height="height"
      >
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
            <el-button type="text" size="small">编辑</el-button> 
          </template>
        </el-table-column>
      </ctable>
    </el-card>
  </div>
</template>

<script>
/**
@description:停车场
@createTime:2020-08-19
@create:lijiahui
*/
import search from './search';
import { columns } from "./columns";
import { GetList } from './../../api/parking';
import common from './../../mixins/common';
export default {
  name: 'parking-lot',
  props: {},
  components: { search },
  mixins:[common],
  data() {
    return {
      column: columns(),
      // 页面需要减去多少的高度
      minHeight: 205
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {
    let params = {pageSize:1, pageNumber:10}
    GetList(params).then(res =>{
      let  { data } = res.data;
      this.list = data;
    });
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.button {
  position: absolute;
  right: 30px;
}
</style>
