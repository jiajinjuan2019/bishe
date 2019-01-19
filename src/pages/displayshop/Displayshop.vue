<template>
  <div class="Displayshop">
    <div class="leftList">
    <ol id="ol" v-for="(item,index) in olLis" :key="index">
      <li :class="{ 'current': index === isColor }" @click="CurrentColor(index)">{{item.title}}</li>
    </ol>
    </div>
    <div class="backContent">
    <ul id="ul" v-for="item in EachColor" :key="item.id">
      <li :style="{'background-color': item.color}" class="d_jump">{{item.title}}</li>
    </ul>
    </div>
    <!--加载图片-->
    <div class="shop_img_list">
      <div class="shop_img_list_power">
        <div class="img">
          <div><img src="../../../static/img/img_one/Wine1.jpg" width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/juice_one.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine3.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/juice_two.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/juice_three.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/juice_four.jpg"  width="130px" height="130px"/></div>
        </div>
        <div class="img">
          <div><img src="../../../static/img/img_one/juice_nine.jpg" width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/juice_ten.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/juice_seven.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/juice_six.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/juice_eleven.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/juice_thr.jpg"  width="130px" height="130px"/></div>
        </div>
        <div class="img">
          <div><img src="../../../static/img/img_one/juice_sixteen.jpg" width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/juice_sventeen.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/juice_fiveteen.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/juice_eightteen.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/juice_nineteen.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/juice_twety.jpg"  width="130px" height="130px"/></div>
        </div>
      </div>
      <div class="shop_img_list_power">
        <div class="img">
          <div><img src="../../../static/img/img_two/energy2.jpg" width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_two/energy3.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_two/energy4.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_two/energy_four.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_two/energy7.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_two/energy10.jpg"  width="130px" height="130px"/></div>
        </div>
        <div class="img">
          <div><img src="../../../static/img/img_two/energy14.jpg" width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_two/energy15.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_two/energy_two.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_two/energy_one.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_two/energy_three.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_two/energy12.jpg"  width="130px" height="130px"/></div>
        </div>
        <div class="img">
          <div><img src="../../../static/img/img_one/Wine1.jpg" width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine2.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine3.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine5.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/drink6.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine7.jpg"  width="130px" height="130px"/></div>
        </div>
      </div>
      <div class="shop_img_list_power">
        <div class="img">
          <div><img src="../../../static/img/img_one/Wine1.jpg" width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine2.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine3.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine5.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/drink6.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine7.jpg"  width="130px" height="130px"/></div>
        </div>
        <div class="img">
          <div><img src="../../../static/img/img_one/Wine1.jpg" width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine2.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine3.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine5.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/drink6.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine7.jpg"  width="130px" height="130px"/></div>
        </div>
        <div class="img">
          <div><img src="../../../static/img/img_one/Wine1.jpg" width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine2.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine3.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine5.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/drink6.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine7.jpg"  width="130px" height="130px"/></div>
        </div>
      </div>
      <div class="shop_img_list_power">
        <div class="img">
          <div><img src="../../../static/img/img_one/Wine1.jpg" width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine2.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine3.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine5.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/drink6.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine7.jpg"  width="130px" height="130px"/></div>
        </div>
        <div class="img">
          <div><img src="../../../static/img/img_one/Wine1.jpg" width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine2.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine3.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine5.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/drink6.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine7.jpg"  width="130px" height="130px"/></div>
        </div>
        <div class="img">
          <div><img src="../../../static/img/img_one/Wine1.jpg" width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine2.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine3.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine5.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/drink6.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine7.jpg"  width="130px" height="130px"/></div>
        </div>
      </div>
      <div class="shop_img_list_power">
        <div class="img">
          <div><img src="../../../static/img/img_one/Wine1.jpg" width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine2.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine3.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine5.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/drink6.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine7.jpg"  width="130px" height="130px"/></div>
        </div>
        <div class="img">
          <div><img src="../../../static/img/img_one/Wine1.jpg" width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine2.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine3.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine5.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/drink6.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine7.jpg"  width="130px" height="130px"/></div>
        </div>
        <div class="img">
          <div><img src="../../../static/img/img_one/Wine1.jpg" width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine2.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine3.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine5.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/drink6.jpg"  width="130px" height="130px"/></div>
          <div><img src="../../../static/img/img_one/Wine7.jpg"  width="130px" height="130px"/></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Displayshop',
  data () {
    return {
      isColor: 0,
      EachColor: [
        {color: '', title: '果酒型展厨'},
        { color: '', title: '能量型展厨' },
        { color: '', title: '营养型展厨' },
        { color: '', title: '第四层型展厨' },
        { color: '', title: '第五层型展厨' }
      ],
      olLis: [
        {id: 1, title: '第1层'},
        {id: 2, title: '第2层'},
        {id: 3, title: '第3层'},
        {id: 4, title: '第4层'},
        {id: 5, title: '第5层'}
      ]
    }
  },
  methods: {
    // 根据左侧的小导航改变页面橱窗
    CurrentColor (index) {
      this.isColor = index
      let jump = document.querySelectorAll('.d_jump')
      // 向上卷曲出去的高度
      let total = jump[index].offsetTop
      // document.documentElement.scrollTop = total
      // console.log(jump[index])
      // console.log(total)
      let distance = document.body.scrollTop || document.documentElement.scrollTop
      // 计算每一小段距离
      let step = total / 50
      if (distance < total) {
        smoothDown()
      } else {
        let letstep = distance - total
        step = letstep / 50
        smoothUp()
      }
      // 向上滚动的距离
      function smoothDown () {
        if (distance < total) {
          distance += step
          document.documentElement.scrollTop = distance
          document.body.scrollTop = distance
          setTimeout(smoothDown, 10)
        } else {
          // 限制滚动停止是距离
          document.documentElement.scrollTop = total
          document.body.scrollTop = total
        }
      }
      // 向下滚动的距离
      function smoothUp () {
        if (distance > total) {
          distance -= step
          document.documentElement.scrollTop = distance
          document.body.scrollTop = distance
          setTimeout(smoothUp, 10)
        } else {
          // 限制滚动停止是距离
          document.documentElement.scrollTop = total
          document.body.scrollTop = total
        }
      }
    },
    onScoll () {
      let scrolled = document.body.scrollTop || document.documentElement.scrollTop
      //  节点分别是635、1270、1905、2540
      if (scrolled >= 2540) {
        this.isColor = 4
      } else if (scrolled < 2540 && scrolled >= 1905) {
        console.log(scrolled)
        this.isColor = 3
      } else if (scrolled < 1905 && scrolled >= 1270) {
        this.isColor = 2
      } else if (scrolled < 1270 && scrolled >= 635) {
        this.isColor = 1
      } else {
        this.isColor = 0
      }
    }
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScoll)
    })
  }
}
</script>
<style lang="less" scoped>
  .Displayshop{
     width: 100%;
     height: 100%;
  }
  .backContent #ul{
    width: 100%;
    height: 100%;
  }
  .backContent #ul .d_jump{
    width: 100%;
    height: 635px;
    margin-top: 5px;
    text-align: center;
    color: #86d7dc;
    font-size: 25px;
    background: url("../../../static/img/main_background.png") no-repeat;
  }
  .leftList{
    width: 80px;
    position: fixed;
    z-index: 99;
    top: 250px;
    left: 190px;
    width: 80px;
    border: 1px solid #ccc;
  }
  .leftList #ol li{
    color: saddlebrown;
    text-align: center;
    line-height: 30px;
    font-size: 15px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
  }
  .current{
    background-color: orangered;
  }
  /*图片*/
  .shop_img_list{
    position: absolute;
    top: 5px;
    left: 100px;
    z-index: 0;
  }
  .shop_img_list .img{
    width: 100%;
    display: flex;
  }
  .img div{
    width: 150px;
    height: 190px;
    background: rgba(142,227,232,0.1);
    margin: 5px;
  }
  .img img{
    margin: 10px;
  }
  .shop_img_list_power{
    margin-top: 40px;
  }
</style>
