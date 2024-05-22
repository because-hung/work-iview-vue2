<template>
  <div class='daily_container'>
    <p>signDays: {{ memberData.signDays }}</p>
    <p style="margin-top: 30px;">/ - {{ math1 }} </p>
    <p>% - {{ math2 }} </p>
    <p style="margin-top: 30px;">day - {{ dailyList[num].day }}</p>
    <p>amount - {{ dailyList[num].amount }}</p>
    <p style="margin-top: 30px;">math for - {{ mathAmount }}</p>
    <p style="margin-top: 30px;">需要達成 - {{ dailyList[memberData.signDays].limit }}</p>
    <button @click="addDay()">增加 day</button>
    <button @click="getAmount()" style="margin-top: 500px;">領取 amount</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num: 0,
      mathAmount: 0,
      memberData: {
        signDays: 0
      },
      dailyList: [
        {
          day: 1,
          amount: 100,
          limit: 10
        },
        {
          day: 2,
          amount: 200,
          limit: 20
        },
        {
          day: 3,
          amount: 300,
          limit: 30
        },
        {
          day: 4,
          amount: 400,
          limit: 40
        },
        {
          day: 5,
          amount: 500,
          limit: 50
        },
        {
          day: 6,
          amount: 600,
          limit: 60
        },
        {
          day: 7,
          amount: 700,
          limit: 70
        }
      ]
    }
  },
  methods: {
    addDay () {
      this.memberData.signDays += 1
    },
    getAmount () {
      const cnum = this.memberData.signDays % 7
      this.mathAmount = this.dailyList[cnum].amount
      console.log('Amount', this.mathAmount)
      console.log('cnum', cnum)
    },
    getTime () {
      // A
      // const dayNow = new Date().toISOString().split('T')[0]
      // const markDate = new Date('2024-05-22').toISOString().split('T')[0]
      // console.log('Date ->', markDate)
      // console.log('same? ->', dayNow === markDate)

      // B
      const dateNow = new Date().toISOString().split('T')[0]
      const dayNow = Date.parse(new Date(dateNow))
      const markDate = Date.parse(new Date('2024-05-22'))
      const diffDay = Math.abs((markDate - dayNow) / 1000 / 60 / 60 / 24)
      console.log('diff', Number(diffDay) === 0)
    }
  },
  computed: {
    math1 () {
      return this.memberData.signDays / 7
    },
    math2 () {
      return this.memberData.signDays % 7
    },
    math3 () {
      return this.dailyList[this.num % 7].amount
    }
  },
  mounted () {
    this.getTime()
  }
}
</script>
<style lang='scss' scoped>
.daily_container{
  margin: 10px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  button{
    margin-top: 400px;
    width: 50px;
    height: 50px;
    color: gray;
  }
}
</style>
