<template>
  <div class='about'>
    <h1>This is an about page</h1>
    <h2>flag: {{ flag }}</h2>
    <h2>app: {{ app }}</h2>
    <h2>redPacket: {{ redPacket }}</h2>
    <h2 v-if="app || redPacket">len: {{ maxLen }}</h2>
    <button @click="change()">click me</button>
    <div>
      <Table :columns='columns' :data='deta'></Table>
    </div>
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
      let len = 0
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
