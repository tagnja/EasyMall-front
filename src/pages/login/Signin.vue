<template>
  <div id="user-center">
    <AppHeader />
    <AppNav />
    <div>Signin...</div>
    <AppFooter />
  </div>
</template>

<script>
    import AppHeader from "../../components/AppHeader";
    import AppNav from "../../components/AppNav";
    import AppFooter from "../../components/AppFooter";
    export default {
        name: "Signin",
        components: {AppFooter, AppNav, AppHeader}
    }
</script>

<style scoped>

</style>
