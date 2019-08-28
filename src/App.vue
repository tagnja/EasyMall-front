<template>
  <div id="app">
    <AppHeader />
    <AppNav />
    <Index />
    <AppFooter />
  </div>
</template>

<script>
import AppNav from './common/AppNav.vue'
import AppHeader from "./common/AppHeader";
import AppFooter from "./common/AppFooter";
import Index from "./page/Index";

export default {
  name: 'app',
  components: {
      AppHeader,
      AppNav,
      Index,
      AppFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
