<template>
  <div class="page-container" >
    <el-card>
      <search><el-button type="primary" size="small" class="button">新增</el-button></search>
      <!-- <superTable
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
      </superTable> -->
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
export default {
  name: 'parking-lot',
  props: {},
  components: { search },
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
.button {
  position: absolute;
  right: 30px;
}
</style>
