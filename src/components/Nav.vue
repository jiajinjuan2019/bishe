<template>
  <div class="layout">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto',minWidth:'175px',maxWidth:'180px'}" :class="{ 'isColse' : isChange }">
      <Menu  theme="dark" width="auto">
        <Submenu name="1">
          <template slot="title" >
            <Icon type="ios-basket"  />
            <span>商品管理</span>
          </template>
          <MenuItem name="1-1" @click.native="shopOpen">商品展示</MenuItem>
          <MenuItem name="1-2" @click.native="realTimeIndent">实时订单</MenuItem>
          <MenuItem name="1-3">库存记录</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>
            权限管理
          </template>
          <MenuItem name="2-1" @click.native="ResourceList">资源管理</MenuItem>
          <MenuItem name="2-2" @click.native="UserList">用户管理</MenuItem>
          <MenuItem name="2-3" @click.native="RoleManage">角色管理</MenuItem>
          <MenuItem name="2-4">添加权限</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>
            库存管理
          </template>
          <MenuItem name="3-1" @click.native="InventoryList">库存量</MenuItem>
          <MenuItem name="3-2" @click.native="OrderList">订货记录</MenuItem>
        </Submenu>
        <Submenu name="4">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            报表管理
          </template>
          <MenuItem name="4-1" @click.native="CommoditySales">商品销量</MenuItem>
          <MenuItem name="4-2" @click.native="MonthStatement">月报表</MenuItem>
          <MenuItem name="4-3" @click.native="AnnualStatement">年报表</MenuItem>
        </Submenu>
      </Menu>
      <div class="Nav_line"></div>
    </Sider>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
    }
  },
  methods: {
    // 商品展示
    shopOpen () {
      this.$router.push({
        path: '/Home/displayshop'
      })
    },
    // 实时订单
    realTimeIndent () {
      this.$router.push({
        path: '/Home/realtimeindent'
      })
    },
    // 用户管理
    UserList () {
      this.$router.push({
        path: '/Home/User'
      })
    },
    // 资源管理
    ResourceList () {
      this.$router.push({
        path: '/Home/ResourceList'
      })
    },
    // 角色管理
    RoleManage () {
      this.$router.push({
        path: '/Home/RoleManage'
      })
    },
    // 库存管理
    InventoryList () {
    },
    // 订货记录
    OrderList () {},
    // 商品销量
    CommoditySales () {
      this.$router.push({
        path: '/Home/CommoditySales'
      })
    },
    // 月报表
    MonthStatement () {
      this.$router.push({
        path: '/Home/MonthStatement'
      })
    },
    // 年报表
    AnnualStatement () {
      this.$router.push({
        path: '/Home/AnnualStatement'
      })
    }
  },
  props: ['isChange']
}
</script>

<style lang="less" scoped>
  .layout{
    position:relative;
    height:100%;
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    border-radius: 4px;
    float: left !important;
  }
  .layout .Nav_line{
    width: 5px;
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    overflow-y:auto;
    overflow-x:hidden;
    background-color: #0c414a;
    border: 1px solid #0c414a;
    margin-left: 170px;
  }
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .isClose{
    width: 78px!important;
  }
  .active{
    background-color: darkorange !important;
  }
</style>
