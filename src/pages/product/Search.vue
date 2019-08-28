<template>
  <div id="search">
    <AppHeader />
    <AppNav />
    <div>
        <div>
          Searching {{ $route.params.id }}
        </div>
        <div>
          Product List...
          <li><router-link to="/products/1">Product 1</router-link></li>
          <li><router-link to="/products/2">Product 2</router-link></li>
          <li><router-link to="/products/3">Product 3</router-link></li>
        </div>

    </div>
    <AppFooter />
  </div>
</template>

<script>
    import AppHeader from "../../components/AppHeader";
    import AppNav from "../../components/AppNav";
    import AppFooter from "../../components/AppFooter";
    export default {
        name: "Search",
      components: {AppFooter, AppNav, AppHeader}
    }
</script>

<style scoped>

</style>
