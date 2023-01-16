<template>
    <div class="cards-container">
        <!--<button @click="consoleData(store)">console</button>-->
        <div class="content-container">
            <h2>Movies</h2>
            <CardElement v-for="CardElement in store.filmList"
                :title="CardElement.title"
                :original_title="CardElement.original_title"
                :language="(this.flagList.includes(CardElement.original_language)) ? CardElement.original_language : 'Unknown_flag'"
                :rating="CardElement.vote_average"
                :image_URL="CardElement.backdrop_path"/>
        </div>
        <div class="content-container">
            <h2>Series</h2>
            <CardElement v-for="CardElement in store.tvSeriesList"
                :title="CardElement.name"
                :original_title="original_name"
                :language="(this.flagList.includes(CardElement.original_language)) ? CardElement.original_language : 'Unknown_flag'"
                :rating="CardElement.vote_average"
                :image_URL="CardElement.backdrop_path"/>
        </div>

    </div>
</template>

<script>
import CardElement from './CardElement.vue';
import {store} from '../store';

export default {
    components: { 
        CardElement 
    },
    data(){
        return{
            store,
            flagList: ['de','en','es','fi','fr','it','ja','ko','pl','zh'],
        }
    },
    methods: {
        consoleData(element){
            console.log(element);
        }
    }
}
</script>

<style lang="scss" scoped>

    .content-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    h2{
        font-size: 4rem;
        width: 100%;
        padding: 20px;
    }
</style>