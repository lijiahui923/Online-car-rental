<template>
    <div>
        <div class="cars-item">
            <header>
                <h4 class="car-logo">
                    <img src="./../../assets/logo.png" alt="2019款">
                    <span class="name">雪佛兰</span>
                </h4>
                <p class="cars-attr">新能源汽车 5座</p>
            </header>
            <div class="cars-content">
                <div class="info">
                    <div>
                        <h4 class="cars-number">沪 A88888</h4>
                        <div>
                            <ul class="cars-electric active-li-1">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <p class="distance">
                                <sub>约</sub><strong>600</strong><sub>km</sub>
                            </p>
                        </div>
                    </div>
                </div>
                <img src="./../../assets/headphoto.png" alt="">
            </div>
            <footer>
                <a href="javascript:void(0);" class="footer-link">某某停车场</a>
            </footer>
        </div>
        <div class="cars-item cars-detailed" :style="'height:'+ height">
            <div class="scroll">
                <h4 class="column">
                    某某停车场
                    <i class="close"></i>
                </h4>
                <header>
                    <h4 class="car-logo">
                        <img src="./../../assets/logo.png" alt="2019款">
                        <span class="name">雪佛兰</span>
                    </h4>
                    <p class="cars-attr">新能源汽车 5座</p>
                </header>
                <div class="pic">
                    <img src="./../../assets/headphoto.png" alt="">
                </div>
                <div class="clearfix">
                    <div class="fs-24 fl">沪 A88888</div>
                    <p class="distance fr">
                        <sub>约</sub><strong>600</strong><sub>km</sub>
                    </p>
                </div>
                <div class="cars-electric-box">
                    <div class="p-r">
                        <span class="e-hight" style="width: 40%;"></span>
                        <span class="e-bg"></span>
                    </div>
                </div>
                <p class="info color-main text-center">钱钱钱钱钱钱钱钱钱</p>
                <ul class="cars-type-list">
                    <li>
                        <h4 class="type">日租车</h4>
                        <span class="price">12元/h</span>
                    </li>
                    <li>
                        <h4 class="type">日租车</h4>
                        <span class="price">12元/h</span>
                    </li>
                    <li>
                        <h4 class="type">日租车</h4>
                        <span class="price">12元/h</span>
                    </li>
                    <li>
                        <h4 class="type">日租车</h4>
                        <span class="price">12元/h</span>
                    </li>
                </ul>
                <div class="clause-desc">
                    <h4 >参加某某协议请同意</h4>
                    <div class="agree"></div>
                </div>
            </div>
            <a href="javascript:void(0);" class="select-car-btn">预约用车</a>
        </div>
    </div>
</template>

<script>
/**
@description:车辆信息
@createTime:2020-07-06
@create:lijiahui
*/
export default {
  name: 'carsList',
  props: {
      height: {
          type: String,
          default: '275px'
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
<style lang="scss" scoped>
@import './index.scss';
</style>
