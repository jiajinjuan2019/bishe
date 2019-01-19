<template>
  <div class="EvaluateTemplate">
    <!--组件-->
    <Evaluatetemplate v-on:func="loadComments"></Evaluatetemplate>
    <div id="submitContent">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <span class="content">{{item.content}}</span>
          <span class="user">评论人:{{item.user}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Evaluatetemplate from '../../pages/evaluate/EvaluateTemplate'
export default {
  name: 'EvaluateTemplate',
  data () {
    return {
      list: [
        { id: Date.now(), user: '李白', content: '天生我材必有用' },
        { id: Date.now(), user: '江小白', content: '没有捷径可言' },
        { id: Date.now(), user: '李白', content: '劝君更尽一杯酒' },
        { id: Date.now(), user: '李白', content: '天生我材必有用' }
      ]
    }
  },
  methods: {
    loadComments () {
      var list = JSON.parse(localStorage.getItem('cmts') || '[]')
      this.list = list
    }
  },
  created () {
    this.loadComments()
  },
  components: {
    Evaluatetemplate
  }
}
</script>

<style lang="less" scoped>
  .EvaluateTemplate{

  }
  #submitContent li{
    position: relative;
    /*display: block;*/
    padding: 10px 15px;
    margin-bottom: -1px;
    color: #86d7dc;
    border: 1px solid rgba(142,227,232,0.08);
    display: flex;
  }
  .content{
    width: 900px;
    margin-left: 10px;
  }
  #submitContent li .user{
    margin-left: 100px;
    display: inline-block;
    min-width: 10px;
    padding: 3px 7px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    color: #86d7dc;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    background-color: #777;
    border-radius: 10px;
  }
</style>
