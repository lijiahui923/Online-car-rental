<template>
  <div>
      子组件
      <!-- <p>foo:{{foo}}</p> -->
      <!-- <p>attrs:{{$attrs}}</p>
       -->
       <childDomChild v-bind="$attrs"></childDomChild>
  </div>
</template>

<script>
/**
@description:
@createTime:2020-08-25
@create:lijiahui
*/
import childDomChild from './childDomChild';
export default {
  name: 'child-dom',
  props: {
    //   foo: {
    //       type: String,
    //       defalut:''
    //   },
      
  },
  inheritAttrs: false,
  components: { childDomChild },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {
      console.log('this.$attrs', this.$attrs)
  },
  methods: {}
};
</script>
<style scoped></style>
