<template>
  <div>
      <h1 v-if="level === 1">
          <a class="hello" name="hello-world" href="#hello-world"><slot></slot></a>
      </h1>
      <h2 v-else-if="level === 2">
          <a class="hello" name="hello-world" href="#hello-world"><slot></slot></a>
      </h2>
      <h3 v-else-if="level === 3">
          <a class="hello" name="hello-world" href="#hello-world"><slot></slot></a>
      </h3>
      <h4 v-else-if="level === 4">
          <a class="hello" name="hello-world" href="#hello-world"><slot></slot></a>
      </h4>
      <h5 v-else-if="level === 5">
          <a class="hello" name="hello-world" href="#hello-world"><slot></slot></a>
      </h5>
      <h6 v-else-if="level === 6">
          <a class="hello" name="hello-world" href="#hello-world"><slot></slot></a>
      </h6>
  </div>
</template>

<script>
/**
@description:体验render函数
@createTime:2020-10-10
@create:lijiahui
*/
export default {
  name: 'testRender',
  props: {
      level:{
          type: Number,
          default: 1
      }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {}
};
</script>
<style scoped>
</style>
