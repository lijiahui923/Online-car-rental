<template>
  <div class="page-container" >
    <el-card>
      <el-form :rules="rules" label-width="100px" ref="parkAdd" :model="carsForm" size="mini">
          <el-row>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="停车场名称" prop="parkingId">
                <el-input v-model="carsForm.parkingId"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="车辆品牌" prop="carsBrandId">
                <el-input v-model="carsForm.carsBrandId"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="车辆型号" prop="carsMode">
                <el-input v-model="carsForm.carsMode"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="年检" prop="yearCheck">
                <el-select v-model="carsForm.yearCheck" placeholder="请选择类型" style="width:100%;">
                  <el-option
                    v-for="item in yearCheck"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="档位" prop="gear">
                <el-select v-model="carsForm.gear" placeholder="请选择状态" style="width:100%;">
                  <el-option
                    v-for="item in gear"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="能源类型" prop="energyType">
                <el-select v-model="carsForm.energyType" placeholder="请选择状态" style="width:100%;">
                  <el-option
                    v-for="item in energyType"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="车牌号" prop="carsNumber">
                <el-input v-model="carsForm.carsNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="车架号" prop="carsFrameNumber">
                <el-input v-model="carsForm.carsFrameNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="发动机号" prop="engineNumber">
                <el-input v-model="carsForm.engineNumber"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="车辆属性" prop="carsAttr">
                <el-input v-model="carsForm.carsAttr"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="禁启用" prop="status">
                <el-select v-model="carsForm.status" placeholder="请选择类型" style="width:100%;">
                  <el-option
                    v-for="item in status"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="发动机号" prop="maintainDate">
                <el-date-picker
                    style="width:100%;"
                    v-model="carsForm.maintainDate"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="电量" prop="electric">
                <el-slider v-model="carsForm.electric"></el-slider>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :md="12" :lg="8">
              <el-form-item label="油量" prop="oil">
                <el-slider v-model="carsForm.oil"></el-slider>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <tinymceEditor></tinymceEditor>
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
@createTime:2020-08-21
@create:lijiahui
*/
import tinymceEditor from './../../components/tinymce-editor';
export default {
  name: 'cars-add',
  props: {},
  components: { tinymceEditor },
  data() {
    return {
      carsForm: {
        parkingId: '',
        carsBrandId: '',
        carsMode: '',
        carsNumber: '',
        carsFrameNumber: '',
        engineNumber: '',
        yearCheck: '',
        gear: '',
        energyType: '',
        electric: 0,
        oil: 0,
        carsAttr: '',
        content: '',
        maintainDate: '',
        status: ''
      },
      mapHeight:600,
    yearCheck:[{
        label: '已年检',
        value: true
    },{
        label: '未年检',
        value: false
    }],
    gear:[{
        label: '手动',
        value: 1
    },{
        label: '自动',
        value: 2
    },{
        label: '人工智能',
        value: 3
    }],
    energyType:[{
        label: '电',
        value: 1
    },{
        label: '油',
        value: 2
    },{
        label: '混合动力',
        value: 3
    }],
    status:[{
        label: '启用',
        value: true
    },{
        label: '禁用',
        value: false
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
