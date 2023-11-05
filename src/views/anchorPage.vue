<template>
  <div class="container">
    <div class="list">
      <div class="item" :id="item.id" v-for="(item, i) in Ilist" :key="i">{{ item.id }}</div>
    </div>
    <div class="menu">
      <a class="anchor" :id="item.id" v-for="(item, i) in Ilist" :key="i" :href="`#${item.id}`">item {{ item.id }}</a>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      topList: [],
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
    getTop () {
      const list = document.querySelectorAll('.item')
      list.forEach(it => {
        const t = it.getBoundingClientRect()
        this.topList.push(t.top)
      })
      console.log('tt', this.topList)
      console.log('l1', list[0].getBoundingClientRect())
      console.log('l2', list[1].getBoundingClientRect())
    },
    getAnchor () {
      const that = this
      window.onscroll = function () {
      // scrollTop就是触发滚轮事件时滚轮的高度
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop
        console.log('滚动距离' + scrollTop)
        const anchorList = document.querySelectorAll('.anchor')
        console.log('l', this.topList)
        console.log('l2', that.topList)
        let i = that.topList.findIndex((it) => {
          return scrollTop < it
        })
        anchorList.forEach((item) => {
          item.classList.remove('active')
        })
        console.log('d', i)
        if (Number(i) === -1) {
          i = 0
        }
        anchorList[i].classList.add('active')
      }
    }
  },
  mounted () {
    this.getTop()
    this.getAnchor()
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
