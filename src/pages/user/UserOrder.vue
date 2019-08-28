<template>
  <div id="user-center">
    <AppHeader />
    <AppNav />
    <div>User Orders...</div>
    <AppFooter />
  </div>
</template>

<script>
    import AppHeader from "../../components/AppHeader";
    import AppNav from "../../components/AppNav";
    import AppFooter from "../../components/AppFooter";
    export default {
        name: "UserOrder",
        components: {AppFooter, AppNav, AppHeader}
    }
</script>

<style scoped>

</style>
