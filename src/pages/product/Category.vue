<template>
  <div id="category">
    <AppHeader />
    <AppNav />
    <div>
        Category {{ $route.params.id }} Product List...
        <div v-for="product in products">
            <div><router-link v-bind:to="'/products/' + product.id">{{ product.name }}</router-link></div>
        </div>
        <router-view/>
    </div>
    <AppFooter />
  </div>
</template>

<script>
    import AppHeader from "../../components/AppHeader";
    import AppNav from "../../components/AppNav";
    import AppFooter from "../../components/AppFooter";
    import { getProductsByCategoryId } from '@/api/mock/index.js'

    export default {
        name: "Search",
        components: {AppFooter, AppNav, AppHeader},
        data() {
          return {
              products: []
          }
        },
        created() {
            this.products = getProductsByCategoryId()
         }
    }
</script>

<style scoped>

</style>
