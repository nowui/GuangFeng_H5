<template>
  <div>
    <div class="progress" v-for="item in list">
      <div class="progress-bar progress-bar-info progress-bar-striped active">
        <div class="progress-value">85%</div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'weui';
  import weui from 'weui.js';

  export default {
    data () {
      return {
          list: [{
              number: 1
          }, {
            number: 2
          }, {
            number: 3
          }, {
            number: 4
          }, {
            number: 5
          }, {
            number: 6
          }, {
            number: 7
          }, {
            number: 8
          }, {
            number: 9
          }, {
            number: 10
          }]
      }
    },
    created () {

    },
    mounted () {
      let loading = weui.loading('loading', {
        className: 'custom-classname'
      });

      this.$http({
        method: 'POST',
        url: 'http://localhost:8080/guangfeng/result/list',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': '',
          'platform': 'WEB',
          'version': '1.0.0'
        },
        body: JSON.stringify({

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
    },
    beforeDestroy () {

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
    width: 0%;
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
    margin-top: 10px;
  }

  .progress .progress-bar {
    border-radius: 20px;
    position: relative;
    /*animation: animate-positive 2s;*/
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
