<template>
  <div class="container">
    <div class="list">
      <div :class="{ longHeight: long && (Number(item.id) % 2) }" class="item" :id="item.id" v-for="(item, i) in Ilist" :key="i">{{ item.id }}</div>
    </div>
    <div class="menu">
      <a class="anchor" :id="item.id" v-for="(item, i) in Ilist" :key="i" :href="`#${item.id}`">item {{ item.id }}</a>
      <button @click="changeH()">click</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      topList: [],
      long: false,
      Ilist: [
        {
          id: 1,
          name: 'A'
        },
        {
          id: 2,
          name: 'B'
        },
        {
          id: 3,
          name: 'C'
        },
        {
          id: 4,
          name: 'D'
        },
        {
          id: 5,
          name: 'E'
        },
        {
          id: 6,
          name: 'F'
        }
      ]
    }
  },
  methods: {
    changeH () {
      this.long = !this.long
      // this.getAnchor()
    },
    getAnchor () {
      window.onscroll = function () {
        const topList = []
        const list = document.querySelectorAll('.item')
        list.forEach(it => {
          topList.push(it.offsetTop)
        })
        // scrollTop就是触发滚轮事件时滚轮的高度
        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop
        console.log('滚动距离' + scrollTop)
        const anchorList = document.querySelectorAll('.anchor')
        // console.log('l', this.topList)
        console.log('tt1', topList)
        let i = topList.findIndex((it) => {
          return scrollTop < it
        })
        anchorList.forEach((item) => {
          item.classList.remove('active')
        })
        console.log('d', i)
        if (Number(i) === -1) {
          i = topList.length - 1
        }
        // 給高亮
        anchorList[i].classList.add('active')
      }
    }
  },
  mounted () {
    // this.getAnchor()
  }
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  align-items: flex-start;
}

.list {
  flex: 1;
}

.item {
  background-color: #d7d7d7;
  border-radius: 10px;
  height: 500px;
  width: 500px;
  margin-bottom: 20px;
  padding: 20px;
  &.longHeight{
    height: 1000px;
    background-color: red;
  }
}

.menu {
  position: sticky;
  border-left: 1px solid #d7d7d7;
  padding-left: 15px;
  font-size: 14px;
  color: #d7d7d7;
  position: sticky;
  top: 30px;
  display: flex;
  flex-direction: column;
}

a {
  color: #d7d7d7;
}

a.active {
  color: #f00;
}
</style>
