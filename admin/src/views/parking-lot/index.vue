<template>
  <div class="page-container">
    <el-card>
      <search ref="searchForm">
        <router-link to="parkingAdd">
          <el-button type="primary" size="small" class="button">新增</el-button>
        </router-link>
      </search>
      <ctable :column="column" :data="list" :height="height" :pagination="pagination">
        <!--类型-->
        <template v-slot:type="slotData">
          {{getType(slotData.data.type)}}
        </template>
        <!--禁启用-->
        <template v-slot:status="slotData">
            <el-switch :disabled="slotData.data.id === switch_disabled" @change="switchChange(slotData.data)" v-model="slotData.data.status" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
        </template>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <!-- <el-button type="text" size="small" @click="handleClick(scope.row)"></el-button> -->
            <template>
                <el-popconfirm
                  confirmButtonText='好的'
                  cancelButtonText='取消'
                  icon="el-icon-info"
                  iconColor="red"
                  title="确定删除吗？"
                  @onConfirm="handDelete(scope.row)"
                >
                  <el-button type="text" size="small" slot="reference">删除</el-button>
                </el-popconfirm>
                </template>
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
import { GetList, Delete } from './../../api/parking';
import common from './../../mixins/common';
import data from './../../mixins/data';
export default {
  name: 'parking-lot',
  props: {},
  components: { search },
  mixins:[common,data],
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
      },
      msg: '新增'
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {
    this.getParkLot();
  },
  mounted() {},
  methods: {
    setViewHeight() {
        this.height = this.$parent.$el.clientHeight - this.$refs.searchForm.$el.clientHeight - 110;
    },
    pageChange (pnum, psize) {
      this.pagination.pageNumber = pnum;
      this.pagination.pageSize = psize;
      this.getParkLot();
    },
    switchChange (data) {
      console.log(data);
    },
    getParkLot () {
      GetList(this.pagination).then(res =>{
        let  { data } = res.data;
        this.pagination.total = res.data.total;
        this.list = data;
      });
    },
    getType (value) {
      const typeLabel = this.optionType.filter(item => item.value == value);
      // console.log(typeLabel);
      // this.list.forEach(item => {
      //   item.type = typeLabel.label;
      //   console.log(typeLabel.label)
      // });
    },
    // 删除
    handDelete (row) {
      Delete(row).then(res =>{
        // console.log(res);
      });
    }
  },
  // 常用于格式转换 {{msg | capitalize}}
  filters: {
    // capitalize: _ => {
    //   let ss = this.optionType;
    // console.log(ss)
    // }
  capitalize: function (value) {
    // let ss = this.optionType;
    // console.log(this)
    // console.log(this.optionType.filter(item => item.value === value))
      // if (!value) return '';
      // value = value.toString();
      // return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>
<style scoped>
.button {
  position: absolute;
  right: 30px;
}
</style>
