<template>
  <div class="index" @click="handleDetail()">
    <div class="aaa"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      handleDetail: function () {
//        this.$router.push('detail');
        this.$http({
          method: 'POST',
          url: 'https://api.jiyiguan.nowui.com/product/list',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': '',
            'platform': 'WEB',
            'version': '1.0.0',
          },
          body: JSON.stringify({
            product_name: '1'
          })
        }).then(response => {
          if (response.body.code == 200) {
            console.log(response.body.data);
          } else {

          }
        }, response => {

        });

      }
    }
  }
</script>

<style scoped>
  .index {
    width: 100%;
    height: 100%;
    background-image: url('../assets/Index.jpg');
    background-repeat: repeat-y;
    background-position: center;
    background-size: contain;
  }

  .aaa {
    width: 100px;
    height: 100px;
    background-color: #2c3e50;
    -webkit-animation: circle 60s infinite linear;
  }

  @-webkit-keyframes circle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }

</style>
