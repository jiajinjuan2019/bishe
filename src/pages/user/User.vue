<template>
  <div class="User">
    <div class="table_inquire">
      <strong style="margin-top: 15px">Name</strong>
      <input type="text"  class="input-type" placeholder="输入客户姓名" v-model="name">
      <strong style="margin-top: 15px">Telephone</strong>
      <input type="text"  class="input-type" placeholder="输入客户电话" v-model="phone"/>
      <strong style="margin-top: 15px">Adress</strong>
      <input type="text"  class="input-type" placeholder="输入客户地址" v-model="address"/>
      <button class="add_user_btn" style="margin-top: 7px;margin-right: 5px" @click="userAdd">添加</button>
      <strong style="margin-top: 15px">搜索名称关键字 :</strong>
      <input type="text" v-model="keycodes"  class="input-type" placeholder="按商品名称输入" @keyup="searchKey" v-focus/>
      <button class="search_btn" style="margin-top: 7px" @search="searchKey"></button>
      <Icon type="ios-search" style="position: relative;left:-35px;top:10px;color: white;font-size: 23px"/>
    </div>
    <div class="user_table">
      <Table border ref="selection" :columns="columns7" :data="UserList">
      </Table>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  },
  name: 'User',
  data () {
    return {
      name: '',
      phone: '',
      address: '',
      keycodes: '',
      columns7: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: 'Name',
          key: 'name',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.name)
            ])
          }
        },
        {
          title: 'Telephone',
          key: 'telephone'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, 'View'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, 'Delete')
            ])
          }
        }
      ],
      UserList: [],
      // 原始数据
      userListOrigin: []
    }
  },
  methods: {
    PostList () {
      this.$http.get('static/data/Client.json').then(res => {
        console.log(res)
        if (res) {
          this.UserList = res.body.data
          this.userListOrigin = res.body.data
          // console.log(this.UserList)
        }
      }, response => {
        alert('请求数据失败')
      })
    },
    // 全选和反选
    handleSelectAll (status) {
      this.$refs.selection.selectAll(status)
    },
    // 显示数据
    show (index) {
      this.$Modal.info({
        title: 'User Info',
        content: `Name：${this.UserList[index].name}<br>Age：${this.UserList[index].telephone}<br>Address：${this.UserList[index].address}`
      })
    },
    // 移除数据
    remove (index) {
      this.UserList.splice(index, 1)
    },
    // 添加信息
    userAdd () {
      var user = {name: this.name, telephone: this.phone, address: this.address}
      this.UserList.push(user)
      // var Clientlist = JSON.parse(localStorage.getItem('cmt') || '[]')
      // Clientlist.push(user)
      // // 重新保存最新的评论数据
      // localStorage.setItem('cmt', JSON.stringify(Clientlist))
      this.name = this.phone = this.address = ''
      // this.$emit('func')
    },
    // 搜索信息
    searchKey () {
      let result = []
      let key = this.keycodes
      if (key === '') {
        this.UserList = JSON.parse(JSON.stringify(this.userListOrigin))
        return
      }
      this.userListOrigin.map((item) => {
        if (item.name.search(key) !== -1) {
          result.push(item)
        }
      })
      this.UserList = result
    }
  },
  mounted () {
    this.PostList()
  }
}
</script>

<style lang="less" scoped>
  .User {
    width: 100%;
    height: 100%;
  }
  .User .table_user_list {
    width: 100%;
    height: auto;
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin-top: 10px;
  }
  .User .table_inquire{
   margin-left: 8px;
    margin-top: 15px;
    display: flex;
  }
  .table_inquire strong{
    color: #86d7dc;
  }
  .User .user_table{
    margin-top: 10px;
  }
  .table_inquire .add_user_btn{
    width: 50px;
    height: 28px;
    background-color: lightskyblue;
    color: white;
    cursor: pointer;
    white-space: nowrap;
    border: 1px solid transparent;
    border-radius: 5px;
  }
  .table_inquire .input-type{
    width: 140px !important;
    height: 32px;
    margin: 5px !important;
    background-color: rgba(142,227,232,0.08);
    border: 1px solid rgba(81,136,148,0.5) ;
    border-radius: 5px;
  }
  .table_inquire .search_btn{
    width: 50px;
    height: 28px;
    background-color: #ed4014;
    color: white;
    cursor: pointer;
    white-space: nowrap;
    border: 1px solid transparent;
    border-radius: 5px;
  }
  .table_inquire .table_show{
    background-color: red;
    width: 40px;
    height: 25px;
  }
</style>
