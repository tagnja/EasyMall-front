<template>
    <div class="carousel">
        <div v-for="carousel in carouselList">
            <img v-bind:src="carousel.pic_url" />
        </div>
    </div>
</template>

<script>
	export default {
		name: "Carousel",
        props: ['carouselList']
	}
</script>

<style scoped>
    .carousel{
        text-align: center;
    }
    .carousel img{
        height: 500px;
        width: 1220px;
    }
</style>
