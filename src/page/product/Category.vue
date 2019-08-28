<template>
  <div id="category">
    <AppHeader />
    <AppNav />
    <div>
        Category {{ $route.params.id }} Product List...
        <ul>
            <li><router-link to="/products/1">Product 1</router-link></li>
            <li><router-link to="/products/2">Product 2</router-link></li>
            <li><router-link to="/products/3">Product 3</router-link></li>
        </ul>
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
