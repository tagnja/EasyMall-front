<template>
    <div id="index">
        <AppHeader/>
        <AppNav/>
        <div class="main">
            <!-- carousel -->
            <HomeCarousel v-bind:carouselList ="carouselList"/>

            <!-- recommend list -->
            <HomeRecommend v-for="recommend in recommendList" v-bind:recommend="recommend" />
        </div>
        <AppFooter/>
    </div>
</template>

<script>
    import AppHeader from "../components/AppHeader";
    import AppNav from "../components/AppNav";
    import AppFooter from "../components/AppFooter";
    import HomeCarousel from "../components/HomeCarousel";
    import HomeRecommend from "../components/HomeRecommend";
    import { getHomeProducts } from "@/api/mock";

    export default {
        name: "Index",
        components: {HomeRecommend, AppFooter, AppNav, AppHeader, HomeCarousel},
        data(){
            return {
                carouselList: [],
                recommendList: []
            }
        },
        created(){
            this.carouselList = getHomeProducts().carousel_list;
            this.recommendList = getHomeProducts().product_list_arr;
        }
    }
</script>

<style scoped>
    .main {
        /*background-color: darkgrey;*/
        margin: 20px 0 20px 0;
    }
</style>
