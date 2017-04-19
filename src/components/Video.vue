<template>
  <div class="video">
    <div class="logo"></div>
    <div class="fute"></div>
    <div class="ouxi"></div>
    <div class="shijia" @click="handleVote()"></div>
    <div class="jingmei" @click="handlePhoto()"></div>
    <div class="back" @click="handleBack()"></div>
    <video id="video" controls="controls" autoplay="autoplay">
      <source src="http://ookrw7epp.bkt.clouddn.com/video.mp4" type="video/mp4"/>
    </video>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        is_play: false
      }
    },
    methods: {
      handlePhoto: function () {
        this.$router.push('photo');
      },
      handleVote: function () {
        this.$router.push('vote');
      },
      handleBack: function () {
        this.$router.push('/');
      },
      handlePlay: function () {
        document.getElementById("video").play();
      },
      handleIndex: function () {
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
  .video {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-image: url('/static/image/video_bg.jpg');
    background-repeat: no-repeat;
    background-position: center;
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

  .jingmei {
    position: absolute;
    top: 947px;
    left: 50%;
    margin-left: 42px;
    width: 304px;
    height: 74px;
    background-image: url('/static/image/jingmei.png');
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

  #video {
    position: absolute;
    top: 400px;
    width: 100%;
  }
</style>
