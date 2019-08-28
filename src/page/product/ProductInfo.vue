<template>
  <div id="category">
    <AppHeader />
    <AppNav />
    <div>Product {{ $route.params.pid }} Info...</div>
    <AppFooter />
  </div>
</template>

<script>
  import AppHeader from "../../components/AppHeader";
  import AppNav from "../../components/AppNav";
  import AppFooter from "../../components/AppFooter";
    export default {
        name: "ProductInfo",
        components: {AppFooter, AppNav, AppHeader}
    }
</script>

<style scoped>

</style>
