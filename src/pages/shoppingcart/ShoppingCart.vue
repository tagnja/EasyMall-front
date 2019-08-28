<template>
  <div id="shopping-cart">
    <AppHeader />
    <AppNav />
    <div>Shopping Cart...</div>
    <AppFooter />
  </div>
</template>

<script>
    import AppHeader from "../../components/AppHeader";
    import AppNav from "../../components/AppNav";
    import AppFooter from "../../components/AppFooter";
    export default {
        name: "ShoppingCart",
      components: {AppFooter, AppNav, AppHeader}
    }
</script>

<style scoped>

</style>
