<template>
  <div class='about'>
    <h1>This is an about page</h1>
    <div>
      <Table :columns='columns' :data='deta'></Table>
  </div>
  </div>
</template>
<script>
import { fetchFakeApi } from '../api/fakeApi'
export default {
  name: 'HomeView',
  data () {
    return {
      deta: [],
      columns: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Country',
          key: 'country'
        },
        {
          title: 'Id',
          key: 'id'
        },
        {
          title: 'Age',
          key: 'age'
        }
      ]
    }
  },
  methods: {
    getData () {
      fetchFakeApi().then((res) => {
        console.log('res', res)
        this.deta = res.data.columns
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
