<template>
  <div class='daily_container'>
    <p>signDays: {{ memberData.signDays }}</p>
    <p style="margin-top: 30px;">/ - {{ math1 }} </p>
    <p>% - {{ math2 }} </p>
    <p style="margin-top: 30px;">day - {{ dailyList[num].day }}</p>
    <p>amount - {{ dailyList[num].amount }}</p>
    <p style="margin-top: 30px;">math for - {{ mathAmount }}</p>
    <button @click="addDay()">增加 day</button>
    <button @click="getAmount()" style="margin-top: 400px;">領取 amount</button>
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
          amount: 100
        },
        {
          day: 2,
          amount: 200
        },
        {
          day: 3,
          amount: 300
        },
        {
          day: 4,
          amount: 400
        },
        {
          day: 5,
          amount: 500
        },
        {
          day: 6,
          amount: 600
        },
        {
          day: 7,
          amount: 700
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
    margin-top: 300px;
    width: 50px;
    height: 50px;
    color: gray;
  }
}
</style>
