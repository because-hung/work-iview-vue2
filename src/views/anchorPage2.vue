<template>
    <div class='container'>
    <div class='list'>
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
    <ul class='menu' id="menu">
        <a
        class='anchor'
        :id='item.id'
        v-for='(item, i) in Ilist'
        :key='i'
        :href='`#${item.id}-id`'
        >item {{ item.id }}</a
        >
    </ul>
  </div>
  <!-- <div class='container'>
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
    <ul class='menu' id="menu"  v-scroll-spy-active="{selector: 'a.anchor', class: 'active'}">
        <a
        class='anchor'
        :id='item.id'
        v-for='(item, i) in Ilist'
        :key='i'
        :href='`#${item.id}-id`'
        >item {{ item.id }}</a
        >
    </ul>
  </div> -->
</template>
<script>
import scrollSpy from 'simple-scrollspy'
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
    window.addEventListener('load', () => {
      const options = {
        sectionClass: '.scrollspy', // Query selector to your sections
        menuActiveTarget: '.anchor', // Query selector to your elements that will be added `active` class
        offset: 500, // Menu item will active before scroll to a matched section 100px
        smoothScroll: true,
        activeClass: 'activeLi'
      }

      scrollSpy('#menu', options)
    })
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
  &.activeLi{
    color: #f00;
  }
}

</style>
