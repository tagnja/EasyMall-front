<template>
  <div id="user-center">
    <AppHeader />
    <AppNav />
    <div>
        User Center...
        <ul>
            <li><router-link to="/addresses">User Address</router-link></li>
            <li><router-link to="/orders">User Orders</router-link></li>
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
        name: "UserCenter",
        components: {AppFooter, AppNav, AppHeader}
    }
</script>

<style scoped>

</style>
