<template>
    <div class="cards-container">
        <div v-if="(!store.filmList)&&(!store.tvSeriesList)" class="logo-banner">
            <img :src="getBackground()" alt="netflix Logo">
        </div>
        <section class="content-container">
            <h2 v-if="store.filmList">Movies</h2>
            <CardElement v-for="CardElement in store.filmList"
                :title="CardElement.title"
                :original_title="CardElement.original_title"
                :language="(this.flagList.includes(CardElement.original_language)) ? CardElement.original_language : 'Unknown_flag'"
                :rating="CardElement.vote_average"
                :image_URL="CardElement.poster_path"
                :content_id="CardElement.id"/>
        </section>
        <section class="content-container">
            <h2 v-if="store.tvSeriesList">Series</h2>
            <CardElement v-for="CardElement in store.tvSeriesList"
                :title="CardElement.name"
                :original_title="original_name"
                :language="(this.flagList.includes(CardElement.original_language)) ? CardElement.original_language : 'Unknown_flag'"
                :rating="CardElement.vote_average"
                :image_URL="CardElement.poster_path"
                :content_id="CardElement.id"/>
        </section>

    </div>
</template>

<script>
import CardElement from './CardElement.vue';
import {store} from '../store';
import axios from 'axios';

export default {
    components: { 
        CardElement 
    },
    data(){
        return{
            store,
            flagList: ['de','en','es','fi','fr','it','ja','ko','pl','zh'],
            cast: [],
        }
    },
    methods: {
        getBackground: function(){
            return new URL('../assets/images/netflix-main-background.png', import.meta.url).href
        },
    },
}
</script>

<style lang="scss" scoped>

@use '../styles/partials/variables' as *;

    
    .logo-banner{
        text-align: center;
        padding-top: 300px;
        img{
            width: 60%;
            -webkit-filter: drop-shadow(12px 12px 12px #080808 );
            filter: drop-shadow(12px 12px 12px #080808);
        }
    }
    .content-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    h2{
        font-size: 4rem;
        width: 100%;
        padding: 60px 25px 45px;
        color: $main-color;
    }
</style>