<template>
    <div class="nav">
        <a class="column">cate1</a>
        <a class="column">cate2</a>
        <a class="column">cate3</a>
    </div>
</template>

<script>
    export default {
        name: "AppNav"
    }
</script>

<style scoped>
    .nav{
        overflow: hidden;
        background-color: #333;
        margin: 20px 0 20px 0;
    }
    .nav a{
        float: left;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
    .nav a:hover {
        background-color: #ddd;
        color: black;
    }
    .column{
        float: left;
        padding: 0 10px 0 10px;
    }
</style>