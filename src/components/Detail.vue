<template>
  <div class="detail" @click="handleIndex()">

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    handleIndex: function () {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.detail {
  width: 100%;
  height: 100%;
  background-image: url('../assets/Detail.jpg');
  background-repeat: repeat-y;
  background-position:center;
  background-size: contain;
}
</style>
