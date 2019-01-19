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
  width: 100%;
  height: 100%;
}
body,html{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  min-width: 1200px;
  /*overflow: auto;*/
  background: url("../static/img/main_background.png") no-repeat;
  background-size: 100%;
}
ul,ol{
  list-style-type: none;
}
</style>
