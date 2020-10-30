<template>
  <div>
      <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      @colse="$emit('update:show', false)"
      center>
      <span>{{msg}}</span>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="handleClick('cancel')">取消</el-button>
        <el-button type="primary" @click="handleClick('determine')">确定</el-button>
      </span> -->
    </el-dialog>
  </div>
</template>

<script>
/**
@description:弹窗
@createTime:2020-09-09
@create:lijiahui
*/
export default {
  name: 'cdialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    messages: {
      type: String,
      defalut: ''
    }
  },
  components: {},
  data() {
    return {
        dialogVisible: false,
        msg: ''
    };
  },
  computed: {},
  watch: {
    show (val) {
      this.dialogVisible = val;
    },
    messages (val) {
      this.msg = val;
    }
  },
  mounted() {},
  created() {},
  methods: {}
};
</script>
<style scoped></style>
