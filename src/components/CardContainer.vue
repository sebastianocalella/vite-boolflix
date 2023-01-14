<template>
    <div class="cards-container">
        <!--<button @click="consoleData(store)">console</button>-->
        <CardElement v-for="CardElement in store.filmList"
        :imgUrl="CardElement.backdrop_path"
        :title="CardElement.title"/>
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