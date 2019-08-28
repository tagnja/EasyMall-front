<template>
  <div id="user-center">
    <AppHeader />
    <AppNav />
    <div>User Address...</div>
    <AppFooter />
  </div>
</template>

<script>
    import AppHeader from "../../components/AppHeader";
    import AppNav from "../../components/AppNav";
    import AppFooter from "../../components/AppFooter";
    export default {
        name: "UserAddress",
        components: {AppFooter, AppNav, AppHeader}
    }
</script>

<style scoped>

</style>
