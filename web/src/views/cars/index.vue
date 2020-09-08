<template>
  <div class="cars-wrap">
    <div class="cars-wiper-wrap">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide><carsItem height="750px"></carsItem></swiper-slide>
        <swiper-slide><carsItem></carsItem></swiper-slide>
        <swiper-slide><carsItem></carsItem></swiper-slide>
        <swiper-slide><carsItem></carsItem></swiper-slide>
    </swiper>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </div>
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
import carsItem from '@c/carsList';
export default {
  name: 'cars',
  props: {},
  components: { carsItem, Swiper, SwiperSlide },
  data() {
    return {
      swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
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
