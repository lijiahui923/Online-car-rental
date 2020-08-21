<template>
  <div>
      <el-pagination
      class="currentPaage"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 50,100]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
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
  props: {
    total: {
        type: Number,
        default: 0
    }
  },
  components: {},
  data() {
    return {
        currentPage:1
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {
      handleSizeChange () {},
      handleCurrentChange () {}
  }
};
</script>
<style scoped>
.currentPaage {
  padding-top: 10px;
  text-align: right;
}
</style>
