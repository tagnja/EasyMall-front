<template>
  <div id="user-center">
    <AppHeader />
    <AppNav />
    <div>Signup...</div>
    <AppFooter />
  </div>
</template>

<script>
    import AppHeader from "../../components/AppHeader";
    import AppNav from "../../components/AppNav";
    import AppFooter from "../../components/AppFooter";
    export default {
        name: "Signup",
        components: {AppFooter, AppNav, AppHeader}
    }
</script>

<style scoped>

</style>
