<template>
  <div class="RealTimeIndent">
    <div class="user_table">
      <Table border :columns="columns7" :data="RealtimeList" ref="selection"></Table>
        <!--弹出框-->
      <div  class="fade"  v-show="isDisplay">
        <div class="model">
          <div class="creadlist">是否将货物出库</div>
          <div class="btomBtn">
            <button type="button" value="是" class="btn btn1" @click="creadList">是</button>
            <button type="button" value="否" class="btn btn2" @click=" isDisplay = !isDisplay">否</button>
          </div>
        </div>
      </div>
      <Button @click="showModelAll">全部出库</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RealTimeIndent',
  data () {
    return {
      isDisplay: false,
      isDisplayAll: false,
      columns7: [
        {
          width: 60,
          align: 'center',
          render: (h, params) => {
            return h('Checkbox', {
              props: {
                // 这里返回一个true或者false(在data里定义一个list存放选中的值,然后用这个id去匹配,
                // 找到了就返回ture,否则返回false)
                value: this.isChecked(params.row.id),
                disabled: params.row.state === '1'
              },
              on: {
                'on-change': () => {
                  this.toggleChecked(params.row.id)
                }
              }
            })
          }
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
          title: 'Amount',
          key: 'amount'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: '出库状态',
          render: (h, params) => {
            return h('Tag', {
              props: {
                type: 'dot',
                color: params.row.state === '0' ? '' : 'success'
              }
            }, params.row.state === '0' ? '未出库' : '已出库')
          },
          align: 'center',
          width: 130
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small',
                  disabled: params.row.state === '1'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    params.row.state = '1'
                    this.$set(this.RealtimeList, params.index, params.row)
                    this.$Message.success('操作成功')
                  }
                }
              }, '出库')
            ])
          }
        }
      ],
      RealtimeList: [],
      // 已选中的列表
      selectionList: []
    }
  },
  methods: {
    PostList () {
      this.$http.get('static/data/RealTimeIndent.json').then(res => {
        if (res) {
          this.RealtimeList = res.body.data
        }
      }, response => {
        alert('请求数据失败')
      })
    },
    // 单个出库
    creadList (index) {
      this.isDisplay = !this.isDisplay
    },
    // 全部出库
    creadListAll () {
      this.RealtimeList.map((item, index) => {
        let selectionIndex = this.selectionList.indexOf(item.id)
        if (index !== -1) {
          item.state = '1'
          this.selectionList.splice(selectionIndex, 1)
          this.$set(this.selectionList, index, item)
        }
      })
      this.$Message.success('操作成功')
      this.isDisplayAll = false
    },
    showModelAll () {
      this.selectionList = []
      this.RealtimeList.map((item) => {
        this.selectionList.push(item.id)
      })
      this.$Modal.confirm({
        title: '提示',
        content: '<p>您是否要对选中商品进行出库操作？</p>',
        onOk: () => {
          this.creadListAll()
        },
        onCancel: () => {
          this.handleCancel()
        }
      });
    },
    // 判断当前行是否选中
    isChecked (id) {
      return this.selectionList.indexOf(id) !== -1
    },
    // 切换选中状态
    toggleChecked (id) {
      // 用id去列表中匹配,匹配到则本次为取消选中
      let index = this.selectionList.indexOf(id)
      // 匹配不到index是-1
      if (index === -1) {
        this.selectionList.push(id)
      } else {
        // 未匹配到本次为选中
        this.selectionList.splice(index, 1)
      }
    },

    // 取消出库
    handleCancel () {
      this.selectionList = []
      this.isDisplayAll = false
    }
  },
  mounted () {
    this.PostList()
  }
}
</script>

<style lang="less">
  .RealTimeIndent {
    width: 100%;
    height: 100%;
    // 模板
    .fade{
      width:100%;
      height:100%;
      background:rgba(0, 0, 0, 0.5);
      position: fixed;
      left: 0;
      top: 0;
      z-index: 99;
    }
    .model{
      width: 400px;
      height: 100px;
      background: #fff;
      position: fixed;
      left: 50%;
      top: 50%;
      margin-left: -200px;
      margin-top: -150px;
      z-index: 999;
      border-radius: 5px;
    }
    .model .creadlist{
      font-size: 18px;
      text-align: center;
      margin-top: 8px;
    }
    .btomBtn{
      width: 190px;
      padding-top: 10px;
      margin-left: 120px;
      box-sizing: border-box;
    }
    .btn{
      width: 80px !important;
      margin-top: 10px;
      height: 30px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .btn1{
      background-color: dodgerblue;
    }
    .btn2{
      background-color: red;
    }
    .deliveryBack{
      position: absolute;
      top: 0;
      left: 0;
      height: 500px;
      width: 100%;
      z-index: 1;
      background-color:  rgba(255,255,255,0.5);
    }
    .isdelivery{
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: 100px auto;
      width: 300px;
      height: 120px;
      z-index: 99;
      background-color:  rgba(142,227,232);
    }
    .RealTimeIndent .table_user_list {
      width: 100%;
      height: auto;
      border: 1px solid #ccc;
      border-collapse: collapse;
      margin-top: 10px;
    }
    .RealTimeIndent .user_table{
      margin-top: 10px;
    }
  }
</style>
