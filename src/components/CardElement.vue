<template>
    <div class="card">
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img class="post-image" :src="(image_URL) ? getPosterPath(image_URL) : getLogo()" :alt="title">
                </div>
                <div class="flip-card-back">
                    <div>
                        <span><b>Title:</b> {{ title }}</span>
                    </div>
                    <div>
                        <span><b>Original Title:</b> {{ original_title }}</span>
                    </div>
                    <div>
                        <span>
                            <b>Language:</b>
                            <img class="country-flag" :src="getFlag(language+'.png')" alt="">
                        </span> 
                    </div>
                    <div>
                        <span><b>rating: </b>
                            <font-awesome-icon v-for="star in this.fiveStarRating" icon="fa-solid fa-star" class="star"/>
                            <font-awesome-icon v-for="star in (5-this.fiveStarRating)" icon="fa-regular fa-star" class="star"/>
                        </span>
                    </div>
                    <div>
                        <span>cast:</span>
                    </div>
                    <span v-for="actor in cast">
                        {{ actor.name }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    props: {
        title: String,
        original_title: String,
        language: String,
        rating: Number,
        image_URL: String,
        content_id: Number,
    },
    methods:{
        getFlag: function(imagePath){
            return new URL('../assets/flags/'+imagePath, import.meta.url).href
        },
        getLogo: function(){
            return new URL('../assets/images/one-letter-logo.png', import.meta.url).href
        },
        getPosterPath: function(imagePath){
            return new URL('https://image.tmdb.org/t/p/w342'+imagePath, import.meta.url).href
        },
        getCast(id){
            axios.get('https://api.themoviedb.org/3/movie/'+id+'/credits',{
                params:{
                    api_key: 'dcba638d378e189477e8023df53d6ccf'
                }
            })
            .then((response)=>{
                console.log(response.data.cast);
                this.cast = response.data.cast;
            })
        }
    },
    created(){
        this.getCast(this.content_id)
    },
    data(){
        return{
            fiveStarRating: Math.ceil(this.rating/2),
            cast:[]
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

        div{
            margin-bottom: 18px;
        }

        .star{
            color: gold;
        }
    }
}
</style>