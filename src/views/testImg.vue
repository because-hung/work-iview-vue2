<template>
  <div>
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
export default {
  name: 'testImg',
  data () {
    return {
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
    regexTG () {
      const reg1 = /(?:t\.me)/
      console.log('res1', reg1.test(this.url))
      console.log('res2', reg1.test(this.url2))
    }
  },
  mounted () {
    this.regexTG()
  }
}
</script>
