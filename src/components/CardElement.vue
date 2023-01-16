<template>
    <div class="card">
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img class="post-image" :src="(image_URL) ? getBackdropPath(image_URL) : getLogo()" alt="ciao =D">
                </div>
                <div class="flip-card-back">
                    <span><b>Title:</b> {{ title }}</span>
                    <span><b>Original Title:</b> {{ original_title }}</span>
                    <span>
                        <b>Language:</b>
                        <img class="country-flag" :src="getFlag(language+'.png')" alt="">
                    </span> 
                    <span><b>rating: </b>
                        <font-awesome-icon v-for="star in this.fiveStarRating" icon="fa-solid fa-star" class="star"/>
                        <font-awesome-icon v-for="star in (5-this.fiveStarRating)" icon="fa-regular fa-star" class="star"/>
                    </span>
                </div>
            </div>
        </div>
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
        getLogo: function(){
            return new URL('../assets/images/one-letter-logo.png', import.meta.url).href
        },
        getBackdropPath: function(imagePath){
            return new URL('https://image.tmdb.org/t/p/w342'+imagePath, import.meta.url).href
        }
    },
    data(){
        return{
            fiveStarRating: Math.ceil(this.rating/2)
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
    .country-flag{
        width: 40px;
        vertical-align: middle;
        margin-left: 12px;
    }

    .card {

    .flip-card {
        background-color: transparent;
        width: 342px;
        height: 513px;
        perspective: 1450px;
        margin-bottom: 20px;
    }

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
    }

    .flip-card-front,
    .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .flip-card-front{
        overflow: hidden;
    }
    .flip-card-back {
        background-color: $card-background;
        color: rgb(235, 227, 227);
        transform: rotateY(180deg);
        padding: 20px 15px;
        span{
            font-size: 1.5rem;
        }

        span{
            display: block;
            margin-bottom: 18px;
        }

        .star{
            color: gold;
        }
    }
}
</style>