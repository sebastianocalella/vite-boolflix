<template>
    <div class="cards-container">
        <!--<button @click="consoleData(store)">console</button>-->
        <CardElement v-for="CardElement in store.filmList"
        :title="CardElement.title"
        :original_title="CardElement.original_title"
        :language="CardElement.original_language"
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
            store
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