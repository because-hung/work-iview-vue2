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
    // 获取 TinyMCE 编辑器实例
    // var editor = tinymce.get('your_editor_id');

    // // 监听编辑器的输入事件
    // editor.on('input', function() {
    //     // 获取编辑器中的内容
    //     var content = editor.getContent();

    // 查找 emoji，并获取其 Unicode 码点
    // var emojis = findEmojis(content)
    // emojis.forEach(function(emoji) {
    // var unicode = getUnicode(emoji);
    //   console.log("Emoji: " + emoji + ", Unicode: " + unicode);
    // });
    // })
    // 获取 emoji 的 Unicode 码点
    getUnicode (emoji) {
      // 返回 emoji 第一个字符的 Unicode 码点
      return emoji.codePointAt(0).toString(16)
    },
    findEmojis (content) {
      // 这只是一个简单的示例，你可能需要更复杂的逻辑来确保准确地找到 emoji
      // 这里只是一个示例，用正则表达式匹配 emoji
      const regex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}]/ug
      return content.match(regex) || []
    },
    unicodeToEmoji (unicode) {
      return String.fromCodePoint('0x' + unicode)
    },
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
    let str = 'Start typ 😀ing : 😀slightly_😂smilr🚒ired em:📟oji tt102333🍈'
    const ary = this.findEmojis(str)
    const ary2 = []
    ary.forEach(it => {
      console.log('ary11', this.getUnicode(it))
      ary2.push(this.getUnicode(it))
    })
    ary2.forEach(it => {
      console.log('ary22', this.unicodeToEmoji(it))
    })
    console.log('ary', ary)
    console.log('ary2', ary2)
    const regex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}]/ug
    const newAry = str.match(regex)
    // 使用 match() 方法找到字符串中的所有 emoji
    // const emojis = str.match(/[\u{1F300}-\u{1F5FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}]/ug);
    newAry.forEach(it => {
      const strT = this.getUnicode(it)
      str = str.replace(it, `{${strT}}`)
    })
    console.log('str', str)
    console.log('newAry', newAry)
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
