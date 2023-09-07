<template>
  <div>
    <div class="mask">
      <h1>loading...</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'redBag',
  data () {
    return {
    }
  },
  mounted () {
  //   setTimeout(() => {
  //     // 加载完成后返回原来的路由
  //     this.$router.go(-1) // 或使用 this.$router.push({ name: '原来的路由名称' });
  //   }, 2000) // 2秒示例延迟
  }
}

</script>
<style lang="scss" scoped>
.mask{
  position: absolute;
  background: black;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  color: #fff;
}
</style>
