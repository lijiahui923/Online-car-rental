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
      v-bind="$attrs"
      v-on="$listeners"
    >
    <template v-for="(item, index) in column">
        <el-table-column v-if="item.checkbox" type= 'selection' :key="index" width="55px"></el-table-column>
        <el-table-column v-else-if="item.type === 'expand'" type= 'expand' :key="index"></el-table-column>
        <!-- <el-table-column v-else-if="item.type === 'expand'" type= 'expand' :key="index"></el-table-column> -->
        <el-table-column v-else-if="item.type === 'slot'" :key="item.prop" :prop="item.prop" :label="item.label" :width="item.width">
            <template slot-scope="scope">
                <slot :name="item.slotName" :data="scope.row"></slot>
            </template>
        </el-table-column>
        <el-table-column v-else :key="index" :prop="item.prop" :label="item.label" :align="align"></el-table-column>
    </template>
      <slot />
    </el-table>
    <div ref="ref_paginationBox" v-if="$attrs.pagination">
        <cpagination v-bind="pagination.props" v-on="pagination.listener"></cpagination>
    </div>
  </div>
</template>

<script>
/**
@description:表格
@createTime:2020-08-06
@create:lijiahui
*/
import cpagination from './../../components/pagination';
const DEFALUT_PAGINATION = {
    pageNumber: 1,
    pageSize: 15,
    pageSizes: [5,10,15,50,100,150,200]
};
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
    computed: {
        pagination () {
            const { $attrs } = this;
            const { pagination } = $attrs;
            let props = Object.assign({}, DEFALUT_PAGINATION);
            let listener = {};
            if (pagination) {
                // Object.keys返回的是一个对象数组
                Object.keys(pagination).forEach(key => {
                    let val = pagination[key];
                    if (typeof val === 'function') {
                        // 把驼峰改成用-连接
                        const uniformItem = key.replace(/([A-Z])/g,"-$1").toLowerCase();
                        listener[uniformItem] = val;
                    } else {
                        props[key] = val;
                    }
                })
                return { props, listener };
            }
            return false;
        }
    },
    watch: {},
    mounted() {},
    created() {},
    methods: {}
};
</script>
<style scoped>
</style>
