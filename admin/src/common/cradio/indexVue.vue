<template>
    <div>
        <el-radio-group v-model="selectData" v-bind="$attrs" @change="getVal">
          <template v-if="type === 'normal'">
              <el-radio
                v-bind="$attrs"
                v-for="item in options"
                :disabled="item.disabled"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-radio>
          </template>
          <template v-else-if="type === 'button'">
              <el-radio-button
              v-bind="$attrs"
              v-for="item in options"
              :disabled="item.disabled"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              </el-radio-button>
          </template>
        </el-radio-group>
    </div>
</template>

<script>
/**
@description:单选框
@createTime:2020-10-09
@create:lijiahui
*/
export default {
  name: 'cRadio',
  props: {
      code: {
          type: String,
          default: ''
      },
      type: {
        type: String,
        default: 'normal'
      }
  },
  components: {},
  data() {
    return {
        selectData: '',
        options: [],
        radio1: 1
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
      }
  }
};
</script>
<style scoped></style>
