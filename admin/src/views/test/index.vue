<template>
  <div>
      <test-render :level="3">HELLO WORLD!!!</test-render>
      <c-radio code="USER_SEX" size='mini' border v-model="cradio1"></c-radio>
  </div>
</template>

<script>
/**
@description:测试页面
@createTime:2020-10-10
@create:lijiahui
*/
export default {
  name: 'test',
  props: {},
  components: {},
  data() {
    return {
      cradio1:''
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
