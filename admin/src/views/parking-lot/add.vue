<template>
  <div class="page-container" >
    <el-card>
      <el-form :rules="rules" label-width="100px" ref="parkAdd" :model="parkAddFrom" size="mini">
          <el-row>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="停车场名" prop="parkingName">
                <el-input v-model="parkAddFrom.parkingName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="区域" prop="area">
                <el-input v-model="parkAddFrom.area"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="详细地址" prop="address">
                <el-input v-model="parkAddFrom.address"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="类型" prop="type">
                <el-select v-model="parkAddFrom.type" placeholder="请选择类型" style="width:100%;">
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
                <el-select v-model="parkAddFrom.status" placeholder="请选择状态" style="width:100%;">
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
                <el-input v-model="parkAddFrom.lnglat"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="可停数量" prop="carsNumber">
                <el-input v-model="parkAddFrom.carsNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="描述">
                <el-input v-model="parkAddFrom.content"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <amap :defaultHeight="mapHeight"></amap>
            </el-col>
          </el-row>
      </el-form>
      <div style="text-align:center;margin-top:30px;">
        <el-button>保存</el-button>
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
import amap from './../../components/amap';
export default {
  name: 'add',
  props: {},
  components: { amap },
  data() {
    return {
      parkAddFrom: {
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
  methods: {}
};
</script>
<style scoped></style>
