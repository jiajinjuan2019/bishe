<template>
  <div class="RoleManage">
    <div class="search_rolemanage">
      <strong style="margin-top: 15px">搜索名称关键字 :</strong>
      <input type="text" v-model="keycodes"  class="input-type" placeholder="按商品名称输入"/>
     <div style="margin-top: 7px; cursor: pointer" @click="searchBtn"><button class="search_btn"></button>
      <Icon type="ios-search" style="position: relative;left:-40px;top:-9px;color: white;font-size: 23px"/>
     </div>
    </div>
    <div>
    <Table border :columns="columns1" :data="nowData"></Table>
    </div>
    <div style="margin-left: 910px">
    <Page :total=dataCount :page-size="pageSize" @on-change="changepage" @on-page-size-change="_nowPageSize" show-sizer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoleManage',
  data () {
    return {
      keycodes: '',
      pageSize: 10,
      dataCount: 0,
      nowData: [],
      pageCurrent: 1,
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Telephon',
          key: 'telephon'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [],
      oldData: []
    }
  },
  methods: {
    loadList () {
      this.$http.get('static/data/RoleManage.json').then(res => {
        // console.log(res)
        if (res) {
          this.data1 = res.body.data
          this.oldData = res.body.data
          // 分页显示所有数据总数
          this.dataCount = this.data1.length
          // 循环展示页面刚加载时需要的数据条数
          this.nowData = []
          for (let i = 0; i < this.pageSize; i++) {
            this.nowData.push(this.data1[i])
          }
        }
      }, response => {
        alert('请求数据失败')
      })
    },
    // 每页显示的数据条数
    _nowPageSize (index) {
      // 实时获取当前需要显示的条数
      this.pageSize = index
    },
    // 点击，切换页面
    changepage (index) {
      // 需要显示开始数据的index,(因为数据是从0开始的，页码是从1开始的，需要-1)
      let _start = (index - 1) * this.pageSize
      // 需要显示结束数据的index
      let _end = index * this.pageSize
      // 截取需要显示的数据
      this.nowData = this.data1.slice(_start, _end)
      // 储存当前页
      this.pageCurrent = index
    },
    // 查询信息
    searchBtn () {
      let result = []
      if (this.keycodes === '') {
        this.data1 = JSON.parse(JSON.stringify(this.oldData))
        return
      }
      this.oldData.forEach((item) => {
        if (item.name.search(this.keycodes) !== -1) {
          result.push(item)
        }
      })
      this.nowData = result
    }
  },
  mounted () {
    this.loadList()
  }
}
</script>

<style lang="less" scoped>
  .RoleManage{
    width: 100%;
    height: 100%;
  }
  .search_rolemanage{
    margin-left: 8px;
    margin-top: 5px;
    display: flex;
  }
  .search_rolemanage input{
    color:  #86d7dc;
  }
  .search_rolemanage .search_btn{
    width: 50px;
    height: 28px;
    background-color: #ed4014;
    color: white;
    cursor: pointer;
    white-space: nowrap;
    border: 1px solid transparent;
    border-radius: 5px;
  }
  .search_rolemanage .input-type{
    width: 140px !important;
    height: 32px;
    margin: 5px !important;
    background-color: rgba(142,227,232,0.08);
    border: 1px solid rgba(81,136,148,0.5) ;
    border-radius: 5px;
  }
</style>
