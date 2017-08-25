<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app{
	min-height: 700px;
	background: url(./assets/bg-1.jpg) no-repeat ;
	background-size: cover;
	padding: 10px 0;
}
button{
	cursor: pointer;
}
</style>
