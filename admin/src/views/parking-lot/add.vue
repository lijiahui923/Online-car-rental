<template>
  <div class="page-container">
    <el-card>
      <header-title :title="title"></header-title>
      <el-form :rules="rules" label-width="100px" ref="parkForm" :model="parkLotForm" size="mini">
          <el-row>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="停车场名" prop="parkingName">
                <el-input v-model="parkLotForm.parkingName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="区域" prop="area">
                <ccascader v-model="parkLotForm.area"></ccascader>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="详细地址" prop="address">
                <el-input v-model="parkLotForm.address"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="类型" prop="type">
                <el-select v-model="parkLotForm.type" placeholder="请选择类型" style="width:100%;">
                  <el-option
                    v-for="item in optionType"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="状态" prop="status">
                <el-select v-model="parkLotForm.status" placeholder="请选择状态" style="width:100%;">
                  <el-option
                    v-for="item in optionStatus"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="位置" prop="lnglat">
                <el-input v-model="parkLotForm.lnglat"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="可停数量" prop="carsNumber">
                <el-input v-model="parkLotForm.carsNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="描述">
                <el-input v-model="parkLotForm.content"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <amap :defaultHeight="mapHeight" @lonlag="lonlag"></amap>
            </el-col>
          </el-row>
      </el-form>
      <div style="text-align:center;margin-top:30px;">
        <el-button　@click="submitForm"> 保存 </el-button>
        <el-button>取消</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
/**
@description:新增
@createTime:2020-08-19
@create:lijiahui
*/
import amap from '@/components/amap';
import { Add } from '@/api/parking';
export default {
  name: 'add',
  props: {},
  components: { amap },
  data() {
    return {
      title: {
        primaryTitle: '停车场列表',
        secondaryTitle: '新增'
      },
      parkLotForm: {
        parkingName:'',
        area: '',
        carsNumber:'',
        type:'',
        status:'',
        address:'',
        content:'',
        lnglat:''
      },
      mapHeight:600,
      optionType: [{
          value: '1',
          label: '室内'
        }, {
          value: '2',
          label: '室外'
      }],
      optionStatus:[{
          value: 'fasle',
          label: '禁用'
        }, {
          value: 'true',
          label: '启用'
      }],
      rules:{
        parkingName:[{ required: true, message: '请输入停车场名称', trigger: 'blur' }],
        area:[{ required: true, message: '请输入省市区', trigger: 'blur' }],
        address:[{ required: true, message: '请输入详细地址', trigger: 'blur' }],
        carsNumber:[{ required: true, message: '请输入可停放数量', trigger: 'blur' }],
        lnglat:[{ required: true, message: '请输入位置', trigger: 'blur' }],
        type:[{ required: true, message: '请选择类型', trigger: 'change' }],
        status:[{ required: true, message: '请选择状态', trigger: 'change' }]
      }
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {
    lonlag　(value) {
      this.parkLotForm.lnglat = value;
    },
    submitForm () {
      console.log(this.parkLotForm);
      this.$refs.parkForm.validate(valid => {
        if (valid) {
          Add(this.parkLotForm).then( res => {
          　this.$message({
              message: res.message,
              type: 'success'
            });
            this.$router.push({ name:'Index'});
          })
        }
      });
    }
  }
};
</script>
<style scoped>

</style>
