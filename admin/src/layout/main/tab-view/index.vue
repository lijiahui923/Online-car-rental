<template>
    <el-tabs
      id="main-tabs"
      v-model="activeTab"
      type="card"
      @contextmenu.native.prevent
      @tab-click="previewTagRoute"
      @tab-remove="closeTab"
    >
    <el-tab-pane
      v-for="(tabs, index) in tabs"
      :key="`${tabs.name}_${index}`"
      :closable="!tab.hideClose"
      :name="item.path"
    >
      {{item.content}}
    </el-tab-pane>
  </el-tabs>
</template>

<script>
/**
@description:
@createTime:2020-11-11
@create:lijiahui
*/
export default {
  name: 'tab-view',
  props: {},
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
<style scoped></style>
