<template>
  <div>
    <el-dialog title="新增车辆品牌" :visible.sync="show" width="40%">
        <el-form :model="brandFrom" label-width="120px">
            <el-form-item label="品牌名称(中)">
                <el-input v-model="brandFrom.nameCh" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="品牌名称(英)">
                <el-input v-model="brandFrom.nameEn" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="品牌LOGO">
                <!-- <el-input v-model="brandFrom.imgUrl" autocomplete="off"></el-input> -->
                <el-upload
                    action="#"
                    list-type="picture-card"
                    :limit="1"
                    :auto-upload="false">
                        <i slot="default" class="el-icon-plus"></i>
                        <div slot="file" slot-scope="{file}">
                        <img
                            class="el-upload-list__item-thumbnail"
                            :src="file.url" alt=""
                        >
                        <span class="el-upload-list__item-actions">
                            <span
                            class="el-upload-list__item-preview"
                            @click="handlePictureCardPreview(file)"
                            >
                            <i class="el-icon-download"></i>
                            </span>
                            <span
                            v-if="!disabled"
                            class="el-upload-list__item-delete"
                            @click="handleRemove(file)"
                            >
                            <i class="el-icon-delete"></i>
                            </span>
                        </span>
                        </div>
                    </el-upload>
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
          defalut:false,
          dialogImageUrl: '',
          disabled: false
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
    },
    handleRemove(file) {
        console.log(file);
    },
    handlePictureCardPreview(file) {
    // this.dialogImageUrl = file.url;
    // this.dialogVisible = true;
    }
  }
};
</script>
<style scoped></style>
