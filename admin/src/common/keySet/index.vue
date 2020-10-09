<template>
  <div>
        <el-select v-model="selectData">
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
  props: {
      code: {
          type: String,
          default: ''
      },
      data: {
          type: Array,
          default: () => {
              return [];
          }
      }
  },
  components: {},
  data() {
    return {
        selectData: '',
        value: '',
        options: []
    };
  },
  computed: {},
  watch: {
      code:{
          handler (code) {
              if (this.data.length > 0 || code === '') {return;}
              this.queryKeyValue(code);
          },
          immediate:true
      },
      data: {
          handler (data) {
              this.options = data;
          },
          deep: true,
          immediate: true
      }
  },
  mounted() {},
  created() {},
  methods: {
      queryKeyValue (code) {
          let data = this.$KeyValue.getItem(code);
          this.options = data;
          console.log(this.options)
      },
    //   getVal (val) {
    //       this.$emit('input', val);
    //       let option = this.options.filter(item => item.code === val);
    //       this.$emit('change', val, option, this.options);
    //   },
    //   clearSelect (val) {
    //       if (this.$XUtils.isArray(val)) {
    //           this.selectData = [];
    //       } else {
    //           this.selectData = '';
    //       }
    //       this.$emit('input', this.selectData);
    //   },
    //   removeTags (tag) {
    //       this.$emit('removeTags', tag);
    //   }
  }
};
</script>
<style scoped></style>
