<template>
  <div>
    <div class="progress">
      <div class="progress-bar progress-bar-info progress-bar-striped active">
        <div class="progress-value">85%</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      handleIndex: function () {
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
  .result {
    width: 100%;
    height: 100%;
    background-image: url('../assets/Result.jpg');
    background-repeat: repeat-y;
    background-position: center;
    background-size: contain;
  }

  .progress-bar-info {
    width: 85%;
    height: 24px;
    background-color: #5bc0de;
  }

  .progress {
    height: 25px;
    background: #262626;
    padding: 5px;
    overflow: visible;
    border-radius: 20px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #7992a8;
    margin-top: 50px;
  }

  .progress .progress-bar {
    border-radius: 20px;
    position: relative;
    animation: animate-positive 2s;
  }

  .progress .progress-value {
    display: block;
    padding: 4px 7px;
    font-size: 14px;
    color: #fff;
    position: absolute;
    top: 0px;
    right: -40px;
  }

  .progress-bar.active {
    animation: reverse progress-bar-stripes 0.40s linear infinite, animate-positive 2s;
  }

  @-webkit-keyframes animate-positive {
    0% {
      width: 0;
    }
  }

  @keyframes animate-positive {
    0% {
      width: 0;
    }
  }

</style>
