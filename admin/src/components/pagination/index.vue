<template>
  <div>
      <el-pagination
      background
      class="currentPaage"
      layout="total, sizes, prev, pager, next, jumper"
      v-bind="pagintionProps"
      @prev-click="prevClick"
      @next-click="nextClick"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    >
    </el-pagination>
  </div>
</template>

<script>
/**
@description:页码
@createTime:2020-08-20
@create:lijiahui
*/
export default {
  name: 'cpagination',
  props: {},
  components: {},
  data() {
    return {
      pNum: 1,
      pSize: 5,
      pagintionProps: {}
    };
  },
  computed: {},
  watch: {
    $attrs: {
      immediate: true,
      deep: true,
      handler (val) {
        let prop = Object.assign({}, val);
        if (prop.pageNumber) {
          prop.currentPage = prop.pageNumber;
        }
        if (typeof prop.total === 'string') {
          prop.total = Number(prop.total);
        }
        this.pNum = prop.currentPage;
        this.pSize = prop.pageSize;
        this.pagintionProps = prop;
      }
    }
  },
  mounted() {},
  created() {
    let { $attrs } = this;
    this.pNum = $attrs.pageNumber || $attrs.currentPage;
    this.pSize = $attrs.pageSize; 
  },
  methods: {
      handleSizeChange (pageSize) {
        this.pSize = pageSize;
        this.$emit('size-change', pageSize);
        this.$emit('update:pageSize', pageSize);
        if (this.pNum > Math.ceil(this.pagintionProps.total / pageSize)) return;
        this.change();
      },
      handleCurrentChange (pageNumber) {
        this.pNum = pageNumber;
        this.$emit('current-change', pageNumber);
        this.$emit('update:currentPage', pageNumber);
        this.$emit('update:pageNumber', pageNumber);
      },
      prevClick (pageNumber) {
        this.$emit('prev-click', pageNumber);
      },
      nextClick (pageNumber) {
        this.$emit('next-click', pageNumber);
      },
      change () {
        this.$emit('change', this.pNum, this.pSize);
      }
  }
};
</script>
<style scoped>
.currentPaage {
  margin-top: 5px;
  text-align: right;
}
</style>
