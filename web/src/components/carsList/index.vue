<template>
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
</template>

<script>
/**
@description:车辆信息
@createTime:2020-07-06
@create:lijiahui
*/
export default {
  name: 'carsList',
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
<style lang="scss" scoped>
@import './index.scss';
</style>
