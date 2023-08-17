<template>
  <div class='about'>
    <h1>This is an about page</h1>
    <h2>flag: {{ flag }}</h2>
    <h2>app: {{ app }}</h2>
    <h2>redPacket: {{ redPacket }}</h2>
    <h2 v-if="app || redPacket">len: {{ maxLen }}</h2>
    <button @click="download()">click me</button><br>
    <div class="st">
    <span class="star">*</span>
    <input class="valid" type="text" v-model="ary" style="margin: 10px">
    <br>
    <span style="color: red; margin-bottom: 10px">{{ validText }}</span>
  </div>
    <br>
    <button @click="valid()">valid</button>
    <br>
    <DatePicker v-model="date" type="datetimerange" placement="bottom-end" placeholder="Select date" style="width: 320px" @on-change="isDuringDate()" />
    <div class="testInput">
     <span>第一個</span>
     <span>數值:</span>
     <Input placeholder="Enter something..." style="width: 300px" /> ~
     <Input placeholder="Enter something..." style="width: 300px" />
     <span>獎金:</span>
     <Input placeholder="Enter something..." style="width: 300px" />
    </div>
    <div class="testInput">
     <span>第一個</span>
     <span>數值:</span>
     <input placeholder="Enter something..." style="width: 300px" /> ~
     <input placeholder="Enter something..." style="width: 300px" />
     <span>獎金:</span>
     <input placeholder="Enter something..." style="width: 300px" />
    </div>
    <div>
      <!-- <Table :columns='columns' :data='deta'></Table> -->
    </div>
    <img id="fish" src="../assets/fish.jpg" style="width: 120px; height:120px" alt="">
    <img id="sea" src="../assets/sea3.jpg" style="width: 420px; height: 315px" alt="">
    <h2>canvas</h2>
    <canvas width="420" height="315"></canvas>
    <h2>background</h2>
    <div class="bgImg"></div>
    <h2>img 3</h2>
    <div>
      <img width="420" height="315" src="" alt="" id="img3">
    </div>
  </div>
</template>
<script>
import { fetchFakeApi } from '../api/fakeApi'
export default {
  name: 'HomeView',
  data () {
    return {
      ary: '',
      deta: [],
      app: 0,
      redPacket: 0,
      valided: false,
      flag: 0,
      date: [null, null],
      columns: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Country',
          key: 'country'
        },
        {
          title: 'Id',
          key: 'id'
        },
        {
          title: 'Age',
          key: 'age'
        }
      ]
    }
  },
  methods: {
    download () {
      // 创建两个 Image 对象，分别表示两张图片
      const image1 = new Image()
      const sea = document.getElementById('sea')
      image1.src = sea.src

      const image2 = new Image()
      const fish = document.getElementById('fish')
      image2.src = fish.src

      // 等待两张图片加载完成
      Promise.all([
        new Promise(resolve => { image1.onload = resolve }),
        new Promise(resolve => { image2.onload = resolve })
      ]).then(() => {
        // 创建一个新的 canvas 元素
        const canvas = document.querySelector('canvas')
        // const canvas = document.createElement('canvas')

        canvas.style.width = 420 + 'px'
        canvas.style.height = 315 + 'px'
        const context = canvas.getContext('2d')
        context.mozImageSmoothingEnabled = false
        context.webkitImageSmoothingEnabled = false
        context.msImageSmoothingEnabled = false
        context.imageSmoothingEnabled = false
        // Set actual size in memory (scaled to account for extra pixel density).
        const devicePixelRatio = window.devicePixelRatio || 1 // 乘像素比解決模糊 app
        const backingStoreRatio = context.webkitBackingStorePixelRatio ||
                        context.mozBackingStorePixelRatio ||
                        context.msBackingStorePixelRatio ||
                        context.oBackingStorePixelRatio ||
                        context.backingStorePixelRatio || 1
        const ratio = devicePixelRatio / backingStoreRatio
        console.log('px', ratio, devicePixelRatio, backingStoreRatio)
        // Change to 1 on retina screens to see blurry canvas.
        canvas.width = Math.floor(420 * ratio)
        canvas.height = Math.floor(315 * ratio)

        // 获取 canvas 的 2D 上下文
        // 绘制第一张图片
        context.drawImage(image1, 0, 0, canvas.width, canvas.height)
        // context.drawImage(image1, 0, 0, 420, 315)

        // 绘制第二张图片
        context.drawImage(image2, 150 * ratio, 98 * ratio, 120 * ratio, 120 * ratio)

        // context.drawImage(image2, 150, 98, 120, 120)

        let image3 = new Image()
        const img3 = document.getElementById('img3')
        image3 = canvas.toDataURL('image/png', 1.0)
        img3.setAttribute('src', image3)
        this.downloadA()
        setTimeout(() => { // 先賦值在下載
          this.downloadA()
        }, 1000)

        // const link = document.createElement('a')
        // link.href = canvas.toDataURL()
        // link.download = 'combined.png'
        // link.click()

        // 将 canvas 转换为图片文件
        // canvas.toBlob(blob => {
        //   // 创建一个链接并下载图片文件
        //   const link = document.createElement('a')
        //   link.href = URL.createObjectURL(blob)
        //   link.download = 'combined.png'
        //   link.click()
        // }, 'image/png')
      })
    },
    downloadA () {
      // 因為前一個 func 放大解決模糊問題
      // 下載需要的大小
      const image4 = new Image()
      const img3 = document.getElementById('img3')
      image4.src = img3.src

      const canvas = document.querySelector('canvas')
      canvas.style.width = 420 + 'px'
      canvas.style.height = 315 + 'px'

      canvas.width = 420
      canvas.height = 315

      const context = canvas.getContext('2d')
      context.drawImage(image4, 0, 0, 420, 315)

      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png', 1.0)
      link.download = 'combined.png'
      link.click()
    },
    getData () {
      fetchFakeApi().then((res) => {
        console.log('res', res)
        this.deta = res.data.columns
      })
    },
    getNum () {
      const bol = true
      const data = [1, 2, 3, 4, 5, 6, 11, 12, 13, 14, 15]
      let data2 = []
      data2 = data.filter(item => bol ? item < 10 : item > 14)
      console.log('d', data2)
    },
    change () {
      this.flag++
      if (Number(this.flag) === 1) {
        this.app = 1
      } else if (Number(this.flag) === 2) {
        this.app = 0
        this.redPacket = 1
      } else {
        this.app = 0
        this.redPacket = 0
      }
    },
    isDuringDate (beginDateStr, endDateStr) {
      const curDate = new Date()
      const beginDate = new Date(beginDateStr)
      const endDate = new Date(endDateStr)
      if (curDate >= beginDate && curDate <= endDate) {
        console.log('進行中')
      } else if (curDate < beginDate) {
        console.log('還沒開始')
      } else {
        console.log('過期')
      }
    },
    valid () {
      this.valided = true
    }
  },
  computed: {
    validText () {
      let txt = ''
      if (this.ary.length > 5 && this.valided) {
        txt = 'not pass'
      } else {
        txt = ''
      }
      return txt
    },
    maxLen () {
      let len
      if (this.app) {
        len = 40
      } else if (this.redPacket) {
        len = 30
      } else {
        len = 100
      }

      return len
    }
  },
  mounted () {
    this.getData()
    this.getNum()
    const str = '<p>123</p>555<img/>6666<br/><p class="dd"></p>'
    const res = str.replace(/<[^>]+>/g, '')
    console.log(res)
    this.isDuringDate('2023-08-17 05:12:05', '2023-08-17 15:16:09')
  }
}
</script>
<style lang="scss" scoped>
.bgImg{
  margin: 0 auto;
  width: 420px;
  height: 315px;
  background-image: url("../assets/sea300.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
// #img3{
//   display: none;
// }
// canvas{
//   transform: scale(0.5 , 0.5);
//   transform-origin: top left;
// }
.testInput{
  margin: 50px 0;
  input{
    height: 60px;
  }
  span{
    margin: 10px;
    font-size: 16px;
    vertical-align: middle;
  }
}
.st{
  position: relative;
}
.star{
  color: red;
  font-size: 20px;
  display: inline-block;
  transform: translateY(2px)
}
</style>
