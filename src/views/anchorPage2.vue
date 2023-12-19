<template>
  <div class='container'>
    <div class='list' v-scroll-spy="{offset: 150}">
      <div
        :class='{ longHeight: long && Number(item.id) % 2 }'
        class='item scrollspy'
        :id='`${item.id}-id`'
        v-for='(item, i) in Ilist'
        :key='i'
      >
        {{ item.id }}
      </div>
    </div>
    <div class='menu' id="menu"  v-scroll-spy-active="{selector: 'a.anchor', class: 'active'}">
      <a
        class='anchor'
        :id='item.id'
        v-for='(item, i) in Ilist'
        :key='i'
        :href='`#${item.id}-id`'
        >item {{ item.id }}</a
      >
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
    }
  },
  mounted () {
  }
}
</script>
<style lang='scss' scoped>
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
  &.longHeight {
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

a{
  &.active{
    color: #f00;
  }
}

</style>
