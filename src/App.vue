<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
body,html{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  min-width: 1200px;
  /*overflow: auto;*/
  background: url("../static/img/main_background.png") no-repeat;
}
ul,ol{
  list-style-type: none;
}
</style>
