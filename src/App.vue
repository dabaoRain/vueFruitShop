<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
import rem from './rem/rem.js'
export default {
  name: 'App'
}
</script>

<style>
	@import './font/iconfont.css';
	@import 'styles/reset.css';
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
body{
  background: #F4F4F4;
}
</style>
