<template>
  <div class="hello">
    <!--背景照片-->
      <el-form class="login-form">
        <div class="title-container">
          <h3 class="title">饮品连锁订货系统</h3>
        </div>
        <el-form-item prop="username">
          <Icon type="ios-person" style="font-size: 30px" />
          <el-input v-model="username" name="username" type="text" placeholder="username"/>
        </el-form-item>
        <el-form-item prop="password" class="password_inline">
          <Icon type="md-lock" style="font-size: 30px"/>
          <input class="password_style" v-model="password" name="password" :type="passwordtype" placeholder="password" @keyup.enter="login"/>
          <!--密码框的小眼睛-->
          <span style="position: absolute;left: 430px">
          <Icon type="ios-eye" style="font-size: 20px"/>
          </span>
        </el-form-item>
        <el-button class="strength" type="primary" @click="login">登录</el-button>
        <div class="tips">
          <span>用户名：admin</span>
          <span>密码：admin</span>
        </div>

        <div class="tips">
          <span>用户名：editor</span>
          <span>密码：editor</span>
        </div>
        <el-button type="primary" class="thirdparty-button"><span>第三方登录</span></el-button>
      </el-form>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      username: '',
      password: '',
      passwordtype: 'password',
      loginstatus: false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    login () {
      if (this.username === 'admin' && this.password === 'admin') {
        this.$router.push({
          path: '/Home'
        })
      } else {
        alert('输入有误')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .hello {
      position: fixed;
      height: 100%;
      width: 100%;
      background: url(../../static/img/back01.jpg) no-repeat;
      background-size: cover;
  }
  .inline{
    display: inline;
  }
  .strength{
    width: 100%;
    margin-bottom: 30px;
  }
  .green{
    color:lightblue;
  }
  .hello .el-input{
    display: inline-block;
    height: 50px;
    width: 430px;
    position: relative;
    top: 5px;
    left: 0px;
  }
  .hello .el-input input{
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 10px;
    padding: 12px 5px 12px 25px;
    color: lightcoral;
    height: 47px;
  }
  .hello .login-form{
    position: absolute;
    left: 100px;
    top: -50px;
    right: 0;
    width: 550px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .title-container{
    position: relative;
  }
  .hello .title-container .title{
    font-size: 26px;
    font-weight: 400;
    color: lightgray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .el-form-item{
    border: 1px solid rgba(255,255,255,0.1);
    background: rgba(0,0,0,0.1);
    border-radius: 5px;
    color: #454545;
  }
  .el-form-item:hover{
    background-color: lightcyan;
    opacity: 0.4;
  }
  .hello .tips{
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
  }
  .hello .thirdparty-button{
    position: absolute;
    right: 35px;
    bottom: 28px;
  }
  .password_inline{
    height: 52px !important;
  }
  .password_style{
    width: 430px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding-bottom: 10px;
  }
</style>
