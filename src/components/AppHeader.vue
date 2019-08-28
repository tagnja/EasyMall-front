<template>
    <div class="header">
        <div class="column logo">
          <router-link to="/"><img alt="logo" src="../../static/img/easy-mall-logo.png" /></router-link>
        </div>
        <div  class="column">
          <router-link to="/search/1/products">Search</router-link> <input type="text"/>
        </div>
        <div class="column">
            <router-link to="/user-center">User</router-link>
        </div>
        <div class="column">
            <router-link to="/shopping-cart">ShoppingCart</router-link>
        </div>
        <div class="column">
            <router-link to="/signin">Signin</router-link>
        </div>
        <div class="column">
          <router-link to="/signup">Signup</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppHeader"
    }
</script>

<style scoped>
    .header{
        background-color: lightblue;
        height: 80px;
        margin: 20px 0 20px 0;
    }

    .column {
        background-color: darkgray;
        float: left;
        padding: 0 10px 0 10px;
    }
    .logo{
        height: 80px;
    }
    .logo img{
        height: 80px;
    }
</style>
