<template>
  <div class="index" @click="handleDetail()">
    <div class="aaa"></div>
  </div>
</template>

<script>
  import 'weui';
  import weui from 'weui.js';

  export default {
    data () {
      return {}
    },
    methods: {
      handleDetail: function () {
//        this.$router.push('detail');

        let loading = weui.loading('loading', {
          className: 'custom-classname'
        });

        this.$http({
          method: 'POST',
          url: 'http://localhost:8080/guangfeng/save',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': '',
            'platform': 'WEB',
            'version': '1.0.0'
          },
          body: JSON.stringify({
            guangfeng_number: '1',
            guangfeng_name: 'guangfeng_name',
            guangfeng_phone: 'guangfeng_phone',
            guangfeng_school: 'guangfeng_school',
            guangfeng_major: 'guangfeng_major'
          })
        }).then(response => {
          loading.hide();

          if (response.body.code == 200) {
//            console.log(response.body.data);
          } else {
            weui.alert("网络发生错误");
          }
        }, response => {
          loading.hide();

          weui.alert("网络发生错误");
        });

      }
    }
  }
</script>

<style scoped>
  .index {
    width: 100%;
    height: 100%;
    background-image: url('/static/image/Index.jpg');
    background-repeat: repeat-y;
    background-position: center;
    background-size: contain;
  }

  .aaa {
    width: 100px;
    height: 100px;
    /*background-color: #2c3e50;*/
    /*-webkit-animation: circle 60s infinite linear;*/
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
