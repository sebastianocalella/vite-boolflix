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
                store,
                movieUrl:'https://api.themoviedb.org/3/search/movie',
                tvSeriesUrl:'https://api.themoviedb.org/3/search/tv'

            }
        },
        methods:{
            getApiRequests(value){
                Promise.all([
                    this.getFilmList(value),
                    this.getTvSeriesList(value)
                ])
                .then(()=>{
                    [this.filmList,this.tvSeries]
                })
            },
            getFilmList: function(value){
                return axios.get('https://api.themoviedb.org/3/search/movie',{
                    params:{
                        api_key: 'dcba638d378e189477e8023df53d6ccf',
                        query: value
                    },
                })
                .then((response)=>{
                    //console.log(response)
                    store.filmList = response.data.results;
                    console.log(store.filmList)
                })
            },
            getTvSeriesList: function(value){
                return axios.get('https://api.themoviedb.org/3/search/tv',{
                    params:{
                        api_key: 'dcba638d378e189477e8023df53d6ccf',
                        query: value
                    },
                })
                .then((response)=>{
                    //console.log(response)
                    store.tvSeriesList = response.data.results;
                    console.log(store.tvSeriesList)
                })
            },

        },
        created(){
            //this.getFilmList();
            this.getApiRequests();
            console.log(store.filmList)
        }
    }
</script>

<template>
    <header>
        <AppHeader @user-search="getApiRequests"/>
    </header>
    <main>
        <AppMain/>
    </main>
</template>

<style lang="scss">

@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;

body{
    background-color: $main-background;
}

</style>
