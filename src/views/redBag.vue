<template>
  <div>
    <img
      v-for="v in redEnvelopeList"
      src="https://cdn.pixabay.com/photo/2022/04/12/07/05/red-envelope-7127397_1280.png"
      alt=""
      class="img"
      :key="v"
      :style="{
        left: `${getRandom(1, maxLeft - 40)}px`,  // -15
        top: `${getRandom(1, maxTop)}px`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        // animationDuration: `${getRandom(2, 8)}s`,
    }"
  />
</div>
</template>
<script>
export default {
  name: 'redBag',
  data () {
    return {
      bagImg: require('../assets/logo.png'),
      redEnvelopeList: [],
      maxLeft: 0,
      maxTop: 0
    }
  },
  methods: {
    loadData () {
    // 在加载数据之前导航到Loading页
      this.$router.push({ name: 'maskPage' })
    },
    getRandom (min, max) {
      return Math.round(Math.random() * (max - min) + min)
    }
  },
  mounted () {
    this.maxTop = document.body.clientHeight
    this.maxLeft = document.body.clientWidth
    this.redEnvelopeList = Array.from(new Array(20))
    // this.loadData()
  }
}
</script>
<style lang="scss" scoped>
:global(body) {
  padding: 0;
  margin: 0;
  // background-image: url("https://cdn.pixabay.com/photo/2017/01/04/21/00/fireworks-1953253_1280.jpg");
  background-size: cover;
}

.img {
  position: fixed;
  top: -100px;
  width: 40px;
  animation: run infinite linear;
}

@keyframes run {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(150vh);
  }
}
</style>
