<template>
  <div>
   <!-- <p>coo:{{coo}}</p> -->
  </div>
</template>

<script>
/**
@description:
@createTime:2020-08-25
@create:lijiahui
*/
export default {
  name: 'childDomChild',
  props: {
    //   coo: {
    //       type: String,
    //       defalut: ''
    //   }
  },
  components: {},
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
