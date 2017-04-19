<template>
  <div id="app" v-bind:style="{'-webkit-transform':'scale(' + this.width / 750 + ', ' + this.width / 750 + ')'}">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        width: 0
      }
    },
    created () {

    },
    mounted () {
      this.width = screen.width;
    },
    beforeDestroy () {

    }
  }
</script>

<style>
  body {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 14px;
    width: 750px;
    height: 1334px;
    -webkit-transform-origin:top left;
    overflow: hidden;
  }

  @-webkit-keyframes down {
    0% {
      opacity: 0;
      transform: translate(0px, 0px);
    }
    100% {
      opacity: 1;
      transform: translate(0px, 25px);
    }
  }

  @-webkit-keyframes left {
    0% {
      opacity: 0;
      transform: translate(0px, 0px);
    }
    100% {
      opacity: 1;
      transform: translate(-40px, 0px);
    }
  }

  @-webkit-keyframes right {
    0% {
      opacity: 0;
      transform: translate(0px, 0px);
    }
    100% {
      opacity: 1;
      transform: translate(40px, 0px);
    }
  }

  @-webkit-keyframes up {
    0% {
      opacity: 0;
      transform: translate(0px, 0px);
    }
    100% {
      opacity: 1;
      transform: translate(0px, -25px);
    }
  }
</style>
