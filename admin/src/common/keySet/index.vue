<template>
  <div>
        <el-select
        v-model="selectData"
        @change="getVal"
        @clear="clearSelect"
        v-bind="$attrs"
        v-on="$listeners"
        style="width:100%;">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
  </div>
</template>

<script>
/**
@description:下拉框
@createTime:2020-10-09
@create:lijiahui
*/
export default {
  name: 'keySet',
  inheritAttrs: false,
  props: {
      code: {
          type: String,
          default: ''
      }
  },
  components: {},
  data() {
    return {
        selectData: '',
        options: []
    };
  },
  computed: {},
  watch: {
      code:{
          handler (code) {
              this.queryKeyValue(code);
          },
          immediate:true
      }
  },
  mounted() {},
  created() {},
  methods: {
      queryKeyValue (code) {
          let data = this.$KeyValue.getItem(code);
          this.options = data;
      },
      getVal (val) {
          this.$emit('input',val);
          let option = this.options.filter(item => item.code === val);
          this.$emit('change', val, option, this.options);
      },
      clearSelect (val) {
          if (this.$XUtils.isArray(val)) {
              this.selectData = [];
          } else {
              this.selectData = '';
          }
          this.$emit('input', this.selectData);
      }
  }
};
</script>
<style scoped></style>
