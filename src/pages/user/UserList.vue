<template>
  <div class="UserList">
    <!--<User v-on:func="loadClient"></User>-->
  </div>
</template>

<script>
// import User from '../../pages/user/User'
export default {
  name: 'UserList',
  data () {
    return {
      UserList: [
        {
          name: '程晓玥',
          telephone: '123234654',
          address: 'New York No. 1 Lake Park'
        }
      ]
    }
  },
  methods: {
    loadClient () {
      var Clientlist = JSON.parse(localStorage.getItem('cmt') || '[]')
      this.UserList = Clientlist
    }
  },
  created () {
    this.loadClient()
  }
  // components: {User}
}
</script>

<style lang="less" scoped>
  .UserList{

  }
</style>
