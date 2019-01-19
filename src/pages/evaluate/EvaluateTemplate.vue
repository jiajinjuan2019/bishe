<template>
  <div class="Evaluate">
    <div class="evaluateWho">
      <h3 >评论人:</h3>
      <input type="text" v-model="user">
    </div>
    <div class="evaluateContent">
      <h3>评论内容:</h3>
      <textarea rows="4" v-model="content"></textarea>
    </div>
    <button @click="postComment">提交评论</button>
  </div>
</template>
<script>
export default {
  name: 'Evaluate',
  data () {
    return {
      user: '',
      content: '',
      list: [
        { id: Date.now(), user: '李白', content: '天生我材必有用' },
        { id: Date.now(), user: '江小白', content: '没有捷径可言' },
        { id: Date.now(), user: '李白', content: '劝君更尽一杯酒' },
        { id: Date.now(), user: '李白', content: '天生我材必有用' }
      ]
    }
  },
  methods: {
    postComment () { // 发表评论的方法
      var comment = { id: Date.now(), user: this.user, content: this.content }
      // 从localStorage中获取所有的评论
      var list = JSON.parse(localStorage.getItem('cmts') || '[]')
      list.unshift(comment)
      // 重新保存最新的评论数据
      localStorage.setItem('cmts', JSON.stringify(list))
      this.user = this.content = ''
      this.$emit('func')
    }
  }
}
</script>
<style lang="less" scoped>
  .Evaluate{
    width: 100%;
    height: 100%;
  }
  .evaluateWho{
    margin-top: 15px;
    color: #86d7dc;
  }
  .evaluateWho input{
    width: 100%;
    height: 35px;
    background-color: rgba(142,227,232,0.08);
    border: 0.5px solid rgba(142,227,232,0.01);
    color:#86d7dc;
    box-shadow: 0 0 0.5px #ccc;
  }
  .evaluateContent{
    margin-top: 15px;
    color: #86d7dc;
  }
  .evaluateContent textarea{
    background-color: rgba(142,227,232,0.08);
    border: 1px solid rgba(142,227,232,0.01);
    color:#86d7dc;
    width: 100%;
    box-shadow: 0 0 0.5px #ccc;
  }
  button{
    width: 110px;
    height: 40px;
    color: white;
    font-size: 17px;
    border-radius: 10px;
    margin: 5px;
    border: 1px solid dodgerblue;
    background-color: dodgerblue;
    cursor: pointer;
  }
</style>
