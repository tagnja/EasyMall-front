<template>
  <div id="index">
    <AppHeader />
    <AppNav />
    <div class="main">
      I am Index Page...
    </div>
    <AppFooter />
  </div>
</template>

<script>
  import AppHeader from "../components/AppHeader";
  import AppNav from "../components/AppNav";
  import AppFooter from "../components/AppFooter";
  export default {
    name: "Index",
    components: {AppFooter, AppNav, AppHeader}
  }
</script>

<style scoped>
  .main {
    background-color: darkgrey;
    margin: 20px 0 20px 0;
  }
</style>
