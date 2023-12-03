<template>
  <div>
    <div class="containers">
      <div class="first" v-if="showSwiper">
        <van-notice-bar scrollable text="技术是开发它的人的共同灵魂。" @replay="test1()" />
      </div>
      <div class="sec" v-else>
        <van-notice-bar left-icon="volume-o" :scrollable="false" >
          <van-swipe
            vertical
            class="notice-swipe"
            :autoplay="3000"
            :show-indicators="false"
            @change="test2"
          >
            <van-swipe-item>内容 1</van-swipe-item>
            <van-swipe-item>内容 2</van-swipe-item>
            <van-swipe-item>内容 3</van-swipe-item>
          </van-swipe>
        </van-notice-bar>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showSwiper: true,
      showNum: 1
    }
  },
  methods: {
    test1 () {
      console.log('reply 1')
      this.showSwiper = false
    },
    test2 (i) {
      console.log('reply 2', i)
      if (Number(i) === 0) {
        this.showSwiper = true
      }
    }
  },
  mounted () {}
}
</script>
<style lang="scss">
.containers {
  border: 1px solid black;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  .first {
  }
  .sec {
    height: 40px;
    background: greenyellow;
    .van-swipe-item{
      background: transparent;
      color: red;
      line-height: 40px;
    }
  }
}

.notice-swipe {
  height: 40px;
  line-height: 40px;
}
</style>
