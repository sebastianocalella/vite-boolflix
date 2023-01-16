<template>
    <div class="card-container">
        <h2>Title: {{ title }}</h2>
        <h3>Original Title: {{ original_title }}</h3>
        <img class="Backdrop-image" :src="getBackdropPath(image_URL)" alt="ciao =D">
        <p>
            Language: <img class="country-flag" :src="getFlag(language+'.png')" alt="">
            <br>
            rating: {{ Math.ceil(rating/2) }}
        </p>
        <hr>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        original_title: String,
        language: String,
        rating: Number,
        image_URL: String,
    },
    methods:{
        getFlag: function(imagePath){
            return new URL('../assets/flags/'+imagePath, import.meta.url).href
        },
        getBackdropPath: function(imagePath){
            return new URL('https://image.tmdb.org/t/p/w342'+imagePath, import.meta.url).href
        }
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>
    .card-container{
        width: 342px;
    }

    .country-flag{
        width: 25px;
    }
</style>