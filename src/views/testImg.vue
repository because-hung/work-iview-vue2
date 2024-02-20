<template>
  <div>
    <h2>TG regex</h2>
    <p>
      title
    </p>
    <p>
      <img src="../assets/fish.jpg" alt="">
    </p>
    <p>
      <span><img src="../assets/fish.jpg" alt=""></span>
    </p>
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
      url: 'https://t.me/barry_hong',
      url2: 'https://telegram.me/joinchat/B-UUVD8-WVj8KtAysJzIiw'
    }
  },
  methods: {
    regexTG () {
      const reg1 = /(?:t\.me|telegram\.me)/
      console.log('res1', reg1.test(this.url))
      console.log('res2', reg1.test(this.url2))
    }
  },
  mounted () {
    this.regexTG()
  }
}
</script>
