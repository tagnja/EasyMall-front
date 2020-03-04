<template>
    <div class="homeRecommend">
        {{ recommend.list_name }}
        <div v-for="product in recommend.list_data">
            <router-link v-bind:to="product.url">{{ product }}</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
	export default {
		name: "HomeRecommendProducts",
        props: [ 'recommend' ]
	}
</script>

<style scoped>

</style>
