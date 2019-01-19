<template>
  <div class="Main">
    <div class="Main_top">
    <div class="main_card_left">
    <Tabs type="card">
    <TabPane label="活动安排" style="margin-left: 5px">
      <div class="main_angle_one"></div>
      <div class="main_angle_two"></div>
      <div class="main_angle_three"></div>
      <div class="main_angle_four"></div>
      <div class="active_box">
        <ul>
          <li v-for="(item,index) in monthList "
              :class="{'active': active == index}"
              :key="index" @click = "moveEvent(index)">
            <h2>{{ item.month}}</h2>
            <p>{{item.monthE}}</p></li>
        </ul>
        <div class="text">
          <h2 v-text="monthActive"></h2>
          <p v-show="monthContent" v-text="content"></p>
        </div>
      </div>
    </TabPane>
      <TabPane label="商品橱窗">商品橱窗</TabPane>
      <TabPane label="促销商品">促销商品</TabPane>
    </Tabs>
    </div>
    <div class="main_card_right">
    <Carousel autoplay v-model="value1" loop>
      <CarouselItem>
        <div class="card_slide_one">
          <img src="../../../static/img/card_img/card_slideshow_right_three.jpg" alt=""  width="525px" height="385">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="">
          <img src="../../../static/img/card_img/card_slideshow_right_two.jpg" alt=""  width="525px" height="385">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="">
          <img src="../../../static/img/card_img/card_slideshow_right_one.jpg" alt=""  width="525px" height="385">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="">
          <img src="../../../static/img/card_img/card_slideshow_right_one.jpg" alt=""  width="525px" height="385">
        </div>
      </CarouselItem>
    </Carousel>
    </div>
      <div class="main_right">
        <div class="main_angle_one"></div>
        <div class="main_angle_two"></div>
        <div class="main_angle_three"></div>
        <div class="main_angle_four"></div>
        <div class="main_angle_next_one"></div>
        <div class="main_angle_next_two"></div>
        <div class="main_angle_next_three"></div>
        <div class="main_angle_next_four"></div>
        <div class="outbound_goods">
          <div style="margin-top:10px;margin-left: 5px"><strong>今日出货统计<small>(箱)</small></strong></div>
          <div style="margin-top: 35px;margin-left: 8px">
            <span style="margin-right: 8px">操作人:</span><span>张鸣、宋轶</span>
          </div>
          <!--出货量-->
         <div style="display: flex;margin-top: 11px;letter-spacing: 5.5px;margin-left: 8px">
           <p>出货量:</p> <div class="out_goods"><div class="out_goods_amount"></div></div>
           <strong style="margin-left: -95px">30</strong>
         </div>
          <!--剩余数量-->
         <div style="display: flex;margin-top: 11px;letter-spacing: 2px;margin-left: 8px">
           <p>剩余数量:</p> <div class="out_goods"><div class="remain_quantity"></div></div>
           <strong style="margin-left: 5px">1350</strong></div>
         </div>
        <div class="outbound_online">
          <div style="margin-left: 8px;margin-top: 10px">
            <strong>设备在线人数<small>(位)</small></strong>
          </div>
          <div style="display: flex">
          <div class="online_progress">
            <div style="display: flex"><div class="total_online"></div><p>全部在线人数：10位</p></div>
            <div style="display: flex;margin-top: 5px"><div class="practical_online"></div><p>实际在线人数：4位</p></div>
          </div>
          <div class="el_progress">
            <el-progress type="circle" :percentage="40" :width="60" color="#86d7dc"></el-progress>
          </div>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'Main',
  data () {
    return {
      value1: 0,
      active: 0,
      monthContent: true,
      monthActive: '1月活动',
      content: '元旦三天凡是订单数量超过3箱可以获取元旦礼包一份，期间凡是订购者送台历一个',
      monthList: [
        {id: 1, month: 1, monthE: 'JAN'},
        {id: 2, month: 2, monthE: 'FER'},
        {id: 3, month: 3, monthE: 'MAR'},
        {id: 4, month: 4, monthE: 'APR'},
        {id: 5, month: 5, monthE: 'MAY'},
        {id: 6, month: 6, monthE: 'JUN'},
        {id: 7, month: 7, monthE: 'JUL'},
        {id: 8, month: 8, monthE: 'AUG'},
        {id: 9, month: 9, monthE: 'SEP'},
        {id: 10, month: 10, monthE: 'OCT'},
        {id: 11, month: 11, monthE: 'NOV'},
        {id: 12, month: 12, monthE: 'DEC'}
      ]
    }
  },
  methods: {
    // 每月活动
    moveEvent (index) {
      this.active = index
      if (index === 0) {
        this.monthActive = '1月活动'
        this.content = '元旦三天凡是订单数量超过3箱可以获取元旦礼包一份，期间凡是订购者送台历一个'
      } else if (index === 1) {
        this.monthActive = '2月活动'
        this.content = '春节期间所有饮料一律9折'
      } else if (index === 2) {
        this.monthActive = '3月活动'
        this.content = '3月份的活动'
      } else if (index === 3) {
        this.monthActive = '4月活动'
        this.content = '4月份的活动'
      } else if (index === 4) {
        this.monthActive = '5月活动'
        this.content = '5月份的活动'
      } else if (index === 5) {
        this.monthActive = '6月活动'
        this.content = '6月份的活动'
      } else if (index === 6) {
        this.monthActive = '7月活动'
        this.content = '7月份的活动'
      } else if (index === 7) {
        this.monthActive = '8月活动'
        this.content = '8月份的活动'
      } else if (index === 8) {
        this.monthActive = '9月活动'
        this.content = '9月份的活动'
      } else if (index === 9) {
        this.monthActive = '10月活动'
        this.content = '10月份的活动'
      } else if (index === 10) {
        this.monthActive = '11月活动'
        this.content = '11月份的活动'
      } else {
        this.monthActive = '12月活动'
        this.content = '12月份的活动'
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .Main{
    height: 604px;
    width: 100%;
  }
  .Main_top{
    width: 100%;
    display: flex;
  }
  .main_card_left .main_angle_one{
    width: 30px;
    height: 30px;
    position: absolute;
    left: -8px;
    top: -16px;
    background: url("../../../static/img/main_angle.png") no-repeat;
  }
  .main_card_left .main_angle_two{
    width: 30px;
    height: 30px;
    position: absolute;
    left: 250px;
    top: -16px;
    transform:rotateY(180deg);
    background: url("../../../static/img/main_angle.png") no-repeat;
  }
  .main_card_left .main_angle_three{
    width: 30px;
    height: 30px;
    position: absolute;
    left: -8px;
    top: 383px;
    transform:rotateX(180deg);
    background: url("../../../static/img/main_angle.png") no-repeat;
  }
  .main_card_left .main_angle_four{
    width: 30px;
    height: 30px;
    position: absolute;
    left: 251px;
    top: 384px;
    transform: rotate(180deg);
    background: url("../../../static/img/main_angle.png") no-repeat;
  }
  .main_card_left{
    width: 269px;
    height: 450px;
    margin-top: 10px;
  }
  .main_card_right{
    width: 525px;
    height: 385px;
    margin-top: 65px;
    margin-left: 20px;
    text-align: center;
  }
  .main_right{
    margin-left: 35px;
    width: 300px;
    height: 390px;
    margin-top: 65px;
  }
  .main_right .outbound_goods{
    width: 290px;
    height: 175px;
    color: #86d7dc;
    border: 1px solid rgba(81,136,148,0.5) ;
    background: rgba(142,227,232,0.08);
  }
  .outbound_goods .out_goods{
    width: 140px;
    height: 20px;
    margin-left: 10px;
    background: rgba(142,227,232,0.08);
  }
  .outbound_goods .out_goods_amount{
    width: 30px;
    height: 20px;
    background-color: #86d7dc;
  }
  .outbound_goods .remain_quantity{
    width: 110px;
    height: 20px;
    background-color: #86d7dc;
  }
  .main_right .outbound_online{
    width: 290px;
    height: 175px;
    margin-top: 27px;
    color: #86d7dc;
    border: 1px solid rgba(81,136,148,0.5) ;
    background: rgba(142,227,232,0.08);
  }
  .outbound_online .online_progress{
    margin-left: 8px;
    margin-top: 40px;
  }
  .online_progress p{
    margin-left: 5px;
    margin-top: -3px;
  }
  .online_progress .total_online{
    width: 10px;
    height: 10px;
    background-color: rgba(142,227,232,0.08);
  }
  .online_progress .practical_online{
    width: 10px;
    height: 10px;
    background-color:  #86d7dc;
  }
  .outbound_online .el_progress{
    margin-top: 10px;
    margin-left: 20px;
  }
  .main_right .main_angle_one{
    width: 30px;
    height: 30px;
    position: absolute;
    left: 819px;
    top: 40px;
    background: url("../../../static/img/main_angle.png") no-repeat;
  }
  .main_right .main_angle_two{
    width: 30px;
    height: 30px;
    position: absolute;
    left: 1137px;
    top: 40px;
    transform:rotateY(180deg);
    background: url("../../../static/img/main_angle.png") no-repeat;
  }
  .main_right .main_angle_three{
    width: 30px;
    height: 30px;
    position: absolute;
    left: 819px;
    top: 233px;
    transform:rotateX(180deg);
    background: url("../../../static/img/main_angle.png") no-repeat;
  }
  .main_right .main_angle_four{
    width: 30px;
    height: 30px;
    position: absolute;
    left: 1139px;
    top: 233px;
    transform: rotate(180deg);
    background: url("../../../static/img/main_angle.png") no-repeat;
  }
  .main_angle_next_one{
    width: 30px;
    height: 30px;
    position: absolute;
    left: 819px;
    top: 245px;
    background: url("../../../static/img/main_angle.png") no-repeat;
  }
  .main_angle_next_two{
    width: 30px;
    height: 30px;
    position: absolute;
    left: 1139px;
    top: 245px;
    transform:rotateY(180deg);
    background: url("../../../static/img/main_angle.png") no-repeat;
  }
  .main_angle_next_three{
    width: 30px;
    height: 30px;
    position: absolute;
    left: 819px;
    top: 436px;
    transform:rotateX(180deg);
    background: url("../../../static/img/main_angle.png") no-repeat;
  }
  .main_angle_next_four{
    width: 30px;
    height: 30px;
    position: absolute;
    left: 1139px;
    top: 435px;
    transform: rotate(180deg);
    background: url("../../../static/img/main_angle.png") no-repeat;
  }
  .main_card_left .active_box{
    width: 235px;
    height: 390px;
    margin-top: 5px;
    margin-left: 12px;
    background: rgba(142,227,232,0.08);
    border: 1px solid rgba(81,136,148,0.5) ;
  }
  .active_box ul{
    margin: 0px auto;
  }
  .active_box ul>li{
    width: 55px;
    height: 55px;
    text-align: center;
    float: left;
    margin-left: 17px;
    margin-top: 10px;
    padding-top: 5px;
    color: #fff;
    cursor: pointer;
    background-color: rgba(0,0,0,.6);
  }
  .active_box .text{
    width: 190px;
    height: 100px;
    color: rgba(142,227,232,0.3);
    background-color: rgba(255,255,255,0.08);
    position: absolute;
    top: 285px;
    left: 42px;
  }
  .active_box .text p{
    text-indent: 2em;
  }
  .active_box .active{
    color: hotpink;
    background-color: white;
    border: 1px solid black;
    box-sizing: border-box;
  }
  .active_box .unactive{
    color: #fff;
    cursor: pointer;
    background-color: rgba(0,0,0,.6);
  }
</style>
