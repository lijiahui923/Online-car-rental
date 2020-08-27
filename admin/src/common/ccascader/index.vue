<template>
  <div>
      <el-cascader :props="props" @change="handleChange" style="width:100%;" placeholder="请选择区域"></el-cascader>
  </div>
</template>

<script>
/**
@description:级联下拉框
@createTime:2020-08-25
@create:lijiahui
*/
import { CityPicker } from './../../api/common';
export default {
  name: 'ccascader',
  props: {},
  components: {},
  data() {
    const _this = this;
    return {
        address: [],
        props: {
          lazy: true,
          lazyLoad (node, resolve) {
            const { level } = node;
            const requsetData = {};
            const paramsJson = {
              　　0: { type: 'province' },
                  1: { type: 'city', code: 'province' },
                  2: { type: 'area', code: 'city' }
            };
            requsetData.type = paramsJson[level].type;
            if (level !== 0) { requsetData[`${paramsJson[level].code}_code`] = node.value; }
            CityPicker(requsetData).then( res => {
              const { data } = res.data;
              let upCode = paramsJson[level].type.toUpperCase();
              data.forEach(item => {
                item.value = item[`${upCode}_CODE`];
                item.label = item[`${upCode}_NAME`];
                if (level === 2) { item.leaf = level >=2;}
              });
              resolve(data);
            });
            if (level !== 0) { _this.getAddress(node); };
          }
        }
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {
      handleChange(value) {
        this.$emit('input',value);
      },
      getAddress (data) {
        const index = data.level -1;
        this.address[index] = data.label;
        console.log(this.address.join(""));
      }
  }
};
</script>
<style scoped></style>
