<template>
  <div class='about'>
    <h1>This is an about page</h1>
    <h2>flag: {{ flag }}</h2>
    <h2>app: {{ app }}</h2>
    <h2>redPacket: {{ redPacket }}</h2>
    <h2 v-if="app || redPacket">len: {{ maxLen }}</h2>
    <button @click="download()">click me</button>
    <div>
      <Table :columns='columns' :data='deta'></Table>
    </div>
    <img id="fish" src="../assets/fish.jpg" style="width: 120px; height:120px" alt="">
    <img id="sea" src="../assets/sea.jpg" style="width: 420px; height: 315px" alt="">
  </div>
</template>
<script>
import { fetchFakeApi } from '../api/fakeApi'
export default {
  name: 'HomeView',
  data () {
    return {
      deta: [],
      app: 0,
      redPacket: 0,
      flag: 0,
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
        const canvas = document.createElement('canvas')
        canvas.width = '420'
        canvas.height = '315'

        // 获取 canvas 的 2D 上下文
        const context = canvas.getContext('2d')

        // 绘制第一张图片
        context.drawImage(image1, 0, 0, 420, 315, 0, 0, 420, 315)

        // 绘制第二张图片
        context.drawImage(image2, 0, 0, 120, 120, 150, 98, 120, 120)

        // 将 canvas 转换为图片文件
        canvas.toBlob(blob => {
          // 创建一个链接并下载图片文件
          const link = document.createElement('a')
          link.href = URL.createObjectURL(blob)
          link.download = 'combined.png'
          link.click()
        }, 'image/png')
      })
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
    }
  },
  computed: {
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
  }
}
</script>
