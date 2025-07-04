<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    In App.vue, 当前用户: <span>{{ $store.state.name }}</span> 
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <ContainerView/> -->
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import ContainerView from './views/container/ContainerView.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
