<template>
  <div class="photo">
    <div class="logo"></div>
    <div class="fute"></div>
    <div class="ouxi"></div>
    <div class="shijia" @click="handleVote()"></div>
    <div class="pinpai" @click="handleVideo()"></div>
    <div class="back" @click="handleBack()"></div>
    <swiper :options="swiperOption" class="swiper-box">
      <swiper-slide class="swiper-item"><img src="/static/image/photo_0.jpg" width="100%" /></swiper-slide>
      <swiper-slide class="swiper-item"><img src="/static/image/photo_1.jpg" width="100%" /></swiper-slide>
      <swiper-slide class="swiper-item"><img src="/static/image/photo_2.jpg" width="100%" /></swiper-slide>
      <swiper-slide class="swiper-item"><img src="/static/image/photo_3.jpg" width="100%" /></swiper-slide>
      <swiper-slide class="swiper-item"><img src="/static/image/photo_4.jpg" width="100%" /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>

<script>
  import 'weui';
  import weui from 'weui.js';

  export default {
    data () {
      return {
        swiperOption: {
          effect: 'flip',
          loop: true,
          prevButton: '.left',
          nextButton: '.right'

        }
      }
    },
    created () {

    },
    mounted () {

    },
    beforeDestroy () {

    },
    methods: {
      handleVideo: function () {
        this.$router.push('video');
      },
      handleVote: function () {
        this.$router.push('vote');
      },
      handleBack: function () {
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
  .photo {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-image: url('/static/image/photo_bg.jpg');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
  }

  .logo {
    position: absolute;
    top: 0px;
    right: 40px;
    width: 132px;
    height: 80px;
    background-image: url('/static/image/logo.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0;
    -webkit-animation: down 0.5s linear;
    -webkit-animation-delay: 0.25s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-fill-mode: forwards;
  }

  .fute {
    position: absolute;
    top: 170px;
    left: 50%;
    margin-left: -310px;
    width: 321px;
    height: 55px;
    background-image: url('/static/image/fute.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0;
    -webkit-animation: down 0.5s linear;
    -webkit-animation-delay: 0.5s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-fill-mode: forwards;
  }

  .ouxi {
    position: absolute;
    top: 280px;
    left: 50%;
    margin-left: -310px;
    width: 621px;
    height: 73px;
    background-image: url('/static/image/ouxi.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0;
    -webkit-animation: down 0.5s linear;
    -webkit-animation-delay: 0.75s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-fill-mode: forwards;
  }

  .shijia {
    position: absolute;
    top: 947px;
    left: 50%;
    margin-left: -350px;
    width: 304px;
    height: 74px;
    background-image: url('/static/image/shijia_2.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0;
    -webkit-animation: right 0.5s linear;
    -webkit-animation-delay: 1s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-fill-mode: forwards;
  }

  .pinpai {
    position: absolute;
    top: 947px;
    left: 50%;
    margin-left: 42px;
    width: 304px;
    height: 74px;
    background-image: url('/static/image/pinpai_2.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0;
    -webkit-animation: left 0.5s linear;
    -webkit-animation-delay: 1s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-fill-mode: forwards;
  }

  .back {
    position: absolute;
    top: 1150px;
    left: 50%;
    margin-left: -40px;
    width: 80px;
    height: 80px;
    background-image: url('/static/image/back.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0;
    -webkit-animation: up 0.5s linear;
    -webkit-animation-delay: 1.25s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-fill-mode: forwards;
  }

  .left {
    position: absolute;
    top: 640px;
    left: 8px;
    width: 78px;
    height: 78px;
    margin-top: -80px;
    background-image: url('/static/image/left.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 999;
  }

  .right {
    position: absolute;
    top: 640px;
    right: 8px;
    width: 78px;
    height: 78px;
    margin-top: -80px;
    background-image: url('/static/image/right.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 999;
  }

  .swiper-box {
    position: absolute;
    top: 400px;
    left: 0px;
    width: 100%;
    height: 402px;
  }
  .swiper-item {
    height: 100%;
    text-align: center;
    font-size: 18px ;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
