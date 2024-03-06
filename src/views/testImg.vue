<template>
  <div>
    <div>
      <p class="testBox">test box
        <span v-if="showText">123132</span>
      </p>
      <button @click="showText = !showText">change</button>
      <br>
      <button @click="addBox()">add</button>
  <!-- <ul id="liMenu">
    <li class="liItem">1</li>
    <li class="liItem">2</li>
    <li class="liItem">3</li>
    <li class="liItem">4</li>
    <li class="liItem">5</li>
    <li class="liItem">6</li>
    <li class="liItem">7</li>
    <li class="liItem">8</li>
    <li class="liItem">9</li>
  </ul> -->
  <!-- <button @click="getBox()">click</button>
  <br>
  <button @click="scrollB()">scroll</button> -->
</div>
    <h2>TG regex</h2>
    <p>
      title
    </p>
    <h2>test url</h2>
    <a :href="`mailto:${emails}`">mail to</a>
    <h2 v-if="emails">{{ emails }}</h2>
    <h2 v-if="TGservies">{{ TGservies[0].url }}</h2>
    <!-- <p>
      <img src="../assets/fish.jpg" alt="">
    </p>
    <p>
      <span><img src="../assets/fish.jpg" alt=""></span>
    </p> -->
  </div>
</template>
<style lang="scss" scoped>
.testBox{
  width: 40px;
  height: 40px;
  border: 1px solid blue;
}
div {
  overflow-y: hidden;
  /*debug only*/
  border: 1px solid red;
}
ul {
  white-space: nowrap;
  overflow-x: auto;
  /* added width so it would work in the snippet */
  width: 500px;
   /*debug only*/
  border: 1px solid green;

}
li {
  width: 120px;
  display: inline-block;
  padding: 20px;
}
p{
  width: 1200px;
  height: 250px;
  border: 1px solid red;
  text-align: center;

  img{
    display: inline-block;
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
}
p:has(img){
  text-align: left;
  border: 1px solid yellow;
}

p:has( > img){
  text-align: left;
  border: 1px solid blue;
}

</style>
<script>
// import router from '@/router'
export default {
  name: 'testImg',
  data () {
    return {
      showText: false,
      data: [
        {
          name: 'A',
          url: 'https://t.me/barry_hong',
          email: 'barryhungcar01@gmail.com',
          time: 200
        },
        {
          name: 'B',
          url: 'https://t.me/barry_hong2',
          email: 'barryhungmusic01@gmail.com',
          time: 250
        },
        {
          name: 'C',
          url: 'https://t.me/barry_hong3',
          email: 'barryhungoldcar@gmail.com',
          time: 150
        }
      ],
      url: 'https://t.me/barry_hong',
      url2: 'https://telegram.me/joinchat/B-UUVD8-WVj8KtAysJzIiw'
    }
  },
  computed: {
    emails () {
      const list = []
      let str = ''
      this.data.forEach(item => {
        if (item.email) {
          list.push(item.email)
        }
      })
      if (list.length > 1) {
        str = list.join(',')
      }
      if (Number(list.length) === 1) {
        str = list[0]
      }

      console.log('str', str)
      console.log('Boolean', Boolean(str))

      return str
    },
    TGservies () {
      let TGList = []
      const values = []
      let res = null
      let maxNum
      const reg1 = /(?:t\.me)/
      TGList = this.data.filter(item => {
        return reg1.test(item.url)
      })
      console.log('TGList1', TGList.length)
      if (TGList.length > 0) {
        TGList.forEach(it => {
          values.push(it.time)
        })
        console.log('values', values)
        maxNum = Math.max(...values)

        res = TGList.filter(it => Number(it.time) === Number(maxNum))
      }

      console.log('res', res)

      return res // res ok - res[0].url no
    }
  },
  methods: {
    addBox () {
      const tDom = document.querySelector('.testBox')
      // tDom.addEventListener('DOMNodeInserted', function (e) {
      //   console.log('change', e)
      // }, false)
      tDom.style.width = '60px'
      tDom.style.height = '60px'
    },
    regexTG () {
      const reg1 = /(?:t\.me)/
      console.log('res1', reg1.test(this.url))
      console.log('res2', reg1.test(this.url2))
    },
    getBox () {
      const all = document.querySelectorAll('.liItem')
      const data = [...all]
      console.log('0', data[0].getBoundingClientRect())
      console.log('5', data[5].getBoundingClientRect())
      console.log('8', data[8].getBoundingClientRect())
    },
    scrollB () {
      const tab = document.getElementById('liMenu')
      const all = document.querySelectorAll('.liItem')
      const data = [...all]
      const w = data[4].getBoundingClientRect().left / 2 - 50
      tab.scrollTo(w, 0)
    }
  },
  mounted () {
    this.regexTG()
    const tDom = document.querySelector('.testBox')
    // tDom.addEventListener('DOMNodeInserted', function (e) {
    //   console.log('change', e)
    // }, false)
    const MutationObserver = window.MutationObserver || window.webkitMutationObserver || window.MozMutationObserver
    const observer = new MutationObserver(function () {
      console.log('change')
      observer.disconnect()
    })
    observer.observe(tDom, {
      childList: true, // 子节点的变动（新增、删除或者更改）
      attributes: true // 属性的变动
      // characterData: true, // 节点内容或节点文本的变动
      // subtree: true // 是否将观察器应用于该节点的所有后代节点
    })
  }
  // beforeRouteEnter (to, from, next) {
  //   console.log('in router')
  //   if (String(to.name) === 'testImg') {
  //     router.go(-1)
  //     next(from.fullPath)
  //   } else {
  //     next()
  //   }
  // }
}
</script>
