<template>
  <div>
        <el-checkbox-group v-model="checkedCities">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
  </div>
</template>

<script>
/**
@description:
@createTime:2020-10-12
@create:lijiahui
*/
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  name: 'cCheckbox',
  props: {},
  components: {},
  data() {
    return {
        checkedCities: ['上海', '北京'],
        cities: cityOptions
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {}
};
</script>
<style scoped></style>
