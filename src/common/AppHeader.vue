<template>
    <div class="header">
        <div class="column logo">
            <img alt="logo" src="../../static/img/easy-mall-logo.png" />
        </div>
        <div  class="column">
            Search <input type="text"/>
        </div>
        <div class="column">
            User
        </div>
        <div class="column">
            ShoppingCart
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