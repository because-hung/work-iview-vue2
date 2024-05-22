<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <button @click="$router.go(-1)">back</button>|
      <br>
      <button @click="$router.push('/testImg')">testImg</button>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  watch: {
    $route (to, from) {
      console.log('toW', to)
      console.log('fromW', from)
      if (to.name === 'testImg') {
        window.history.go(-1)
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.mask{
  position: absolute;
  background: black;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
}
</style>
