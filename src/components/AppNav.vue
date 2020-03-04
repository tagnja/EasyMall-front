<template>
    <div class="nav">
        <router-link  v-for="type in types" v-bind:to="'/category/'+ type.id + '/products'" class="column">{{ type.name }}</router-link>
        <div class="column">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import {getCategories} from "@/api/mock";

    export default {
        name: "AppNav",
        data() {
            return {
                types: []
            }
        },
        created() {
            this.types = getCategories()
        }
    }
</script>

<style scoped>
    .nav {
        overflow: hidden;
        background-color: #333;
        margin: 20px 0 20px 0;
    }

    .nav a {
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

    .column {
        float: left;
        padding: 0 10px 0 10px;
    }
</style>
