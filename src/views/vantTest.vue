<template>
  <div>
    <div class="containers">
      <van-swipe :key="i" @change="onChange" ref="swipe" class="my-swipe" :autoplay="2000" :loop="true"  indicator-color="white" >
      <van-swipe-item class="s-item" v-show="!data.one"> <button @click="close('one')"></button>1</van-swipe-item>
      <van-swipe-item class="s-item" v-show="!data.two" id="two"> <button @click="close('two')"></button>2</van-swipe-item>
      <van-swipe-item class="s-item" v-show="!data.three"> <button @click="close('three')"></button>3</van-swipe-item>
      <van-swipe-item class="s-item" v-show="!data.four" id="four"> <button @click="close('four')"></button>4</van-swipe-item>
      <van-swipe-item class="s-item" v-show="!data.five"> <button @click="close('five')"></button>5</van-swipe-item>
      <van-swipe-item class="s-item" v-show="!data.six" id="six"> <button @click="close('six')"></button>6</van-swipe-item>
      <van-swipe-item class="s-item" v-show="!data.seven"> <button @click="close('seven')"></button>7</van-swipe-item>
      <van-swipe-item class="s-item" v-show="!data.eight"> <button @click="close('eight')"></button>8</van-swipe-item>
    </van-swipe>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
        eight: false
      },
      i: 8
    }
  },
  methods: {
    close (val) {
      this.data[val] = true
    },
    onChange (index) {
      console.log('e', index)
      if (Number(index) === 0) {
        this.i--
      }
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss">
.containers{
  border: 1px solid black;
  margin-top: 50px;
}
.van-swipe__track{
  display: flex;
}
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  button{
    width: 20px;
    height: 20px;
    position: absolute;
  }
</style>
