<template>
  <div class="page-container">
    <el-card>
      <search>
        <router-link to="parkingAdd">
          <el-button type="primary" size="small" class="button">新增</el-button>
        </router-link>
      </search>
      <!-- <childDom :foo="foo"></childDom> -->
      <ctable :column="column" :data="list" :height="height" :pagination="pagination">
        <!--禁启用-->
        <template v-slot:status="slotData">
            <el-switch :disabled="slotData.data.id === switch_disabled" @change="switchChange(slotData.data)" v-model="slotData.data.status" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
        </template>
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
import childDom from './child-dom';
export default {
  name: 'parking-lot',
  props: {},
  components: { search, childDom },
  mixins:[common],
  data() {
    return {
      column: columns(),
      // 页面需要减去多少的高度
      minHeight: 205,
      value: [],
      switch_disabled: false,
      pagination: {
        pageNumber: 1,
        pageSize: 10,
        total:0,
        change: this.pageChange
      }
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {
    let params = {pageSize:10, pageNumber:1}
    GetList(params).then(res =>{
      let  { data } = res.data;
      this.pagination.total = res.data.total;
      this.list = data;
    });
  },
  mounted() {},
  methods: {
    pageChange (pnum, psize) {
      console.log(pnum,psize);
    },
    switchChange () {}
    // handleSelectionChange (da) {
    //   console.log(da)
    // }
    // handleChange(value) {
    //   CityPicker().then( res => {
    //     console.log(res);
    //   });
    //   console.log(value);
    // }
  }
};
</script>
<style scoped>
.button {
  position: absolute;
  right: 30px;
}
</style>
