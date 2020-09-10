<template>
  <div class="page-container">
    <el-card>
      <header-title :title="title"></header-title>
      <el-form :rules="rules" label-width="100px" ref="parkForm" :model="parkLotForm" size="mini">
          <el-row>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="停车场名" prop="parkingName">
                <el-input v-model="parkLotForm.parkingName" placeholder="请输入停车场名"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="区域" prop="area">
                <ccascader :cityAreaValue.sync="parkLotForm.area" @callback="setMapCenter"></ccascader>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="可停数量" prop="carsNumber">
                <el-input v-model="parkLotForm.carsNumber"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="类型" prop="type">
                 <el-radio-group v-model="parkLotForm.type" placeholder="请选择类型" style="width:100%;">
                    <el-radio
                      v-for="item in optionType"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"></el-radio>
                  </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="状态" prop="status">
                <el-radio-group v-model="parkLotForm.status" placeholder="请选择状态" style="width:100%;">
                  <el-radio
                    v-for="item in optionStatus"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"></el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="位置" prop="lnglat">
                <el-input v-model="parkLotForm.lnglat" disabled></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="描述">
                <el-input type="textarea" autosize　v-model="parkLotForm.content"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <amap ref="amap" :defaultHeight="mapHeight" @lnglag="lnglag"></amap>
            </el-col>
          </el-row>
      </el-form>
      <div style="text-align:center;margin-top:30px;">
        <el-button　@click="submitForm"> 保存 </el-button>
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
import data from './../../mixins/data';
import { isNumber } from './../../utils/validate';
export default {
  name: 'add',
  props: {},
  mixins: [data],
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
        content:'',
        lnglat:''
      },
      mapHeight:600,
      rules:{
        parkingName:[{ required: true, message: '请输入停车场名称', trigger: 'blur' }],
        area:[{ required: true, message: '请输入省市区', trigger: 'blur' }],
        carsNumber:[{ required: true, message: '请输入可停放数量', trigger: 'blur', validator: isNumber }],
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
    lnglag　(value) {
      this.parkLotForm.lnglat = value;
    },
    setMapCenter (val) {
      this.$refs.amap.setMapCenter(val);
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
