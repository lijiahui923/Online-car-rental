<template>
  <div>
    <el-table
      :data="data"
      :element-loading-text="elementLoadingText"
      :border="border"
      :fit="fit"
      :stripe="stripe"
      :highlight-current-row="highlightCurrentRow"
      :height="height"
      :header-cell-style="{background:'#4fa1f5',color:'#fff'}"
    >
      <el-table-column
        v-for="(item, index) in column"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :align="align"
      />
      <slot />
    </el-table>
    <cpagination></cpagination>
  </div>
</template>

<script>
/**
@description:表格
@createTime:2020-08-06
@create:lijiahui
*/
import cpagination from './../../components/pagination';
export default {
    name: 'ctable',
    components: { cpagination },
    props: {
        data: {
            type: Array,
            default: []
        },
        elementLoadingText: {
            type: String,
            default: 'loading'
        },
        border: {
            type: Boolean,
            default: true
        },
        fit: {
            type: Boolean,
            default: true
        },
        stripe: {
            type: Boolean,
            default: true
        },
        highlightCurrentRow: {
            type: Boolean,
            default: true
        },
        height: {
            type: Number,
            default: 0
        },
        column: {
            type: Array,
            default: []
        },
        align: {
            type: String,
            default: 'center'
        }
    },
    data() {
        return {
            
        };
    },
    computed: {},
    watch: {},
    mounted() {},
    created() {},
    methods: {
        
    }
};
</script>
<style scoped>
</style>
