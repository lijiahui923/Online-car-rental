<template>
  <div>
    <el-dialog title="新增车辆品牌" :visible.sync="show" width="30%">
        <el-form :model="brandFrom" label-width="120px">
            <el-form-item label="品牌名称(中)">
                <el-input v-model="brandFrom.nameCh" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="品牌名称(英)">
                <el-input v-model="brandFrom.nameEn" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="品牌LOGO">
                <el-input v-model="brandFrom.imgUrl" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="状态">
                <el-select v-model="brandFrom.status" placeholder="请选择状态" style="width:100%;">
                    <el-option label="禁用" :value="false"></el-option>
                    <el-option label="启用" :value="true"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="描述">
                <el-input type="textarea" v-model="brandFrom.content"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer">
            <el-button @click="close">取 消</el-button>
            <el-button type="primary" @click="close">确 定</el-button>
        </div>
    </el-dialog>
  </div>
</template>

<script>
/**
@description:车辆新增
@createTime:2020-08-21
@create:lijiahui
*/
export default {
  name: 'dialog-add',
  props: {
      dialogVisible: {
          type: Boolean,
          defalut:false
      }
  },
  components: {},
  data() {
    return {
        show:false,
        brandFrom: {
            nameCh: '',
            nameEn: '',
            imgUrl:'',
            status: '',
            content: ''
        }
    };
  },
  computed: {},
  watch: {
      dialogVisible (val) {
          this.show = val;
      }
  },
  mounted() {},
  created() {},
  methods: {
    close () {
        this.show = false;
        this.$emit('update:dialogVisible', false);
    }
  }
};
</script>
<style scoped></style>
