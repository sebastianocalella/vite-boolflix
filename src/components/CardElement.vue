<template>
    <div class="card-container">
        <h2>Title: {{ title }}</h2>
        <h3>Original Title: {{ original_title }}</h3>
        <p>
            Language: <img class="country-flag" :src="getImagePath(language+'.png')" alt="">
            <br>
            rating: {{ rating }}
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
    },
    methods:{
        getImagePath: function(imagePath){
            return new URL('../assets/flags/'+imagePath, import.meta.url).href
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