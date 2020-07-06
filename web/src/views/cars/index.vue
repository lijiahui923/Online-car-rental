<template>
  <div class="index-wrap">
    <swiper class="swiper" :options="swiperOptions">
    <swiper-slide>
      <CarsList></CarsList>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
      <span @click="user">汽车列表</span>
  </div>
</template>

<script>
/**
@description:汽车列表
@createTime:2020-07-06
@create:lijiahui
*/
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import CarsList from '@c/carsList';
export default {
  name: 'cars',
  props: {},
  components: { CarsList, Swiper, SwiperSlide },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        // Some Swiper option/callback...
      }
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {
    user () {
      this.$router.push({
        name:'User'
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
