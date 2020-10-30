<template>
  <div class="page-container">
      <el-row >
        <el-col :span="6">
          <div :style="{'height': treeHeight + 'px'}" style="background-color: #fff;">
              <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
              <el-tree
                class="filter-tree"
                :data="dataTree"
                :props="defaultProps"
                default-expand-all
                node-key="cid"
                show-checkbox
                :filter-node-method="filterNode"
                ref="tree">
              </el-tree>
          </div>
          </el-col>
        <el-col :span="18">
          <el-button type="test" @click="wordDetail">点击查看简历详情</el-button>
        </el-col>
      </el-row>
  </div>
</template>

<script>
/**
@description:测试页面
@createTime:2020-10-10
@create:lijiahui
*/
import axios from 'axios';
import XUtils from 'xe-utils';
export default {
  name: 'test',
  props: {},
  components: {},
  data() {
    return {
      treeHeight: 0,
      filterText: '',
      dataTree: [],
      defaultProps: {
        children: 'subordinate',
        label: 'pname'
      }
    };
  },
  computed: {},
  watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
  },
  mounted() {
    window.addEventListener('resize', this.setViewHeight);
    this.$nextTick(() => {
        this.setViewHeight();
    });
  },
  created() {
    this.getData();
  },
  methods: {
    test () {
      console.log({cradio1: this.cradio1,cCheckbox: this.cCheckbox });
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    setViewHeight () {
      this.treeHeight = this.$parent.$el.clientHeight - 20;
    },
    getData () {
      // console.log(this.dataTree)
      axios.post('https://xiaochengxu.houjiemeishi.com/STB//index.php', {
          module:'supplier_api',
          action:'Product',
          m:'brand_get_class',
          page:1, // 页码
          pagesize:5 // 每页显示多少条})
      }).then( res => {
        let { list } = res.data.data;
        this.dataTree = list;
        console.log(this.dataTree);
        // console.log(XUtils.arrayToTree(list));
        // list.forEach(item => {
        //   if (item.cid) {

        //   }
        // });
        // let str = []
        // console.log(XUtils.isArray(str));
      });
    },
    wordDetail() {
      // 微软提供的方法
      // window.open('https://view.officeapps.live.com/op/view.aspx?src=http://www.tanwenfang.com./file/176bd4cb-e893-4dde-b20e-a98bb836b07e.docx');
    },
  //   getListData() {
  //       let dataArray = [];
  //       this.datas.forEach(data => {
  //         if (data.cid) {
  //           let objTemp = {
  //             id: data.cid,
  //             name: data.pname,
  //             status: data.status
  //           }
  //           dataArray.push(objTemp);
  //         }
  //       })
  //      this.data2treeDG(this.datas, dataArray)
  //   },
  //    data2treeDG(datas, dataArray) {
  //         for (let j = 0; j < dataArray.length; j++) {
  //              let dataArrayIndex = dataArray[j];
  //              let childrenArray = [];
  //              let Id = dataArrayIndex.id;
  //              for (let i = 0; i < datas.length; i++) {
  //                   let data = datas[i];
  //                   if(data.enabled==true){
  //                         let parentId = data.parentId;
  //                       //   if (parentId == Id) {//判断是否为儿子节点
  //                       //   let objTemp = {
  //                       //      id: data.id,
  //                       //      name: data.name,
  //                       //      order: data.order,
  //                       //      parentId: parentId,
  //                       //  }
  //                      childrenArray.push(objTemp);
  //                   }
  //               }
  //        }
  //          dataArrayIndex.children = childrenArray;
  //          if (childrenArray.length > 0) {//有儿子节点则递归
  //                 this.data2treeDG(datas, childrenArray)
  //          }
  //     }
  //    this.setTree = dataArray;
  //    return dataArray;
  //  }
  }
};
</script>
<style scoped>
</style>
