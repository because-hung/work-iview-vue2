<template>
  <div>
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
