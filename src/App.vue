<template>
  <div id="app">
    <Header></Header>
    <!-- 路由組件出口的地方 -->
    <router-view></router-view>
    <!-- 隱藏組件 -->
    <!-- <Footer v-show= " $route.path=='/home'||$route.path=='/search' "></Footer> -->
    <Footer v-show= "$route.meta.show"></Footer>

  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted(){
    //從typeNav移動來App.vue,只執行一次。
    //通知Vuex發請求，獲得數據，儲存在倉庫
    this.$store.dispatch('categoryList');
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
