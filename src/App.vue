<script>
    import axios from 'axios';
    import { store } from './store.js';

    import AppHeader from './components/AppHeader.vue';
    import AppMain from './components/AppMain.vue'

    export default{
        components: {
            AppHeader,
            AppMain,
        },
        data(){
            return{
                store
            }
        },
        methods:{
            getFilmList(value){
                axios.get('https://api.themoviedb.org/3/search/movie',{
                    params:{
                        api_key: 'dcba638d378e189477e8023df53d6ccf',
                        query: value
                    },
                })
                .then((response)=>{
                    console.log(response.data.results);
                    this.store.filmList = response.data.results;
                    console.log(this.store.filmList);
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
        },
        created(){
            this.getFilmList();
        }
    }
</script>

<template>
    <AppHeader @user-search="getFilmList"/>
    <AppMain/>
</template>

<style>

</style>
