<template>
  <div class="Home">
    <!--头部-->
    <div class="header">
      <span><Icon type="md-apps" @click="ChangeIcon" /></span>
      <ul>
        <li v-for="(item, index) in menuList" :key="index"
            :class = "{'active': active === index}"
            @click="Evaluate(item.path,index)">{{ item.title }}</li>
        <Dropdown style="margin-left: 20px">
          <a href="javascript:void(0)">
            登录信息
            <Icon type="ios-arrow-down"></Icon>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem> <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" style="width: 30px;height: 30px;margin: 0" /></DropdownItem>
            <DropdownItem>个人中心</DropdownItem>
            <DropdownItem>退出</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </ul>
    </div>
    <!--中间-->
    <div class="center">
      <router-view></router-view>
    </div>
    <!--左边-->
    <Nav :isChange="isChange"></Nav>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
export default {
  name: 'Home',
  data () {
    return {
      isChange: false,
      active: 0,
      menuList: [
        {
          path: '/Home',
          title: '首页'
        },
        {
          path: '/Home/evaluate',
          title: '评价'
        },
        {
          path: '',
          title: '联系我们'
        }
      ]
    }
  },
  methods: {
    ChangeIcon () {
      this.isChange = !this.isChange
    },
    Evaluate (path, index) {
      this.$router.push(path)
      this.active = index
    }
  },
  components: {
    Nav
  }
}
</script>

<style lang="less" scoped>
  .Home{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .header{
    position: absolute;
    top: 0;
    left: 175px;
    width: calc(100% - 175px);
    height: 50px;
    box-shadow: 0px 0px 2px #ccc;
    background-color: #010F12;
  }
  .header .active{
    width: auto;
    height: 25px;
    color: red;
    padding-left: 3px;
    padding-right: 3px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  .header span{
    margin-top: 35px;
    margin-left: 10px;
    font-size: 23px;
    cursor: pointer;
  }
  .header ul {
    display: flex;
    justify-content: flex-end;
    margin-top: -15px;
    margin-right: 70px;
  }
  .header ul li{
    margin-left: 20px;
    cursor: pointer;
   padding-top: 3px;
    text-align: center;
  }
  /*内容*/
  .center{
    position: absolute;
    top: 50px;
    left: 175px;
    width: calc(100% - 175px);
    height: calc(100% - 50px);
    margin-top: 2px;
    background-color: lightgreen;
    float: left;
  }
</style>
