<template>
    <div class="cards-container">
        <button @click="consoleData(store)">console</button>
        <CardElement v-for="CardElement in store.filmList"
        :title="CardElement.title"
        :original_title="CardElement.original_title"
        :language="(this.flagList.includes(CardElement.original_language)) ? CardElement.original_language : 'Unknown_flag'"
        :rating="CardElement.vote_average"/>

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

<style scoped>
    
</style>