<template>
  <div id="category">
    <AppHeader />
    <AppNav />
    <div>
        Category {{ $route.params.id }} Product List...
        <ul>
            <li><router-link to="/products/1">Product 1</router-link></li>
            <li><router-link to="/products/2">Product 2</router-link></li>
            <li><router-link to="/products/3">Product 3</router-link></li>
        </ul>

      <ol>
        <li v-for="type in types">
          {{ type.name }}
        </li>
      </ol>
      test
    </div>
    <AppFooter />
  </div>
</template>

<script>
    import AppHeader from "../../components/AppHeader";
    import AppNav from "../../components/AppNav";
    import AppFooter from "../../components/AppFooter";
    import axios from 'axios'

    export default {
        name: "Search",
        components: {AppFooter, AppNav, AppHeader},
        data() {
          return {
            types: []
          }
        },
        created() {
             const url = 'http://localhost:8080/api/v1/types'
             axios
               .get(url)
               .then(response => {
                  console.log("response: " + JSON.stringify(response))
                  this.types = response.data.data;
               })
               .catch(error => {
                  console.log(error)
               })
         }
    }
</script>

<style scoped>

</style>
