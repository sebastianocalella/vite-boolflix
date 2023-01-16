<template>
    <div class="container">
        <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="Netflix logo">
        <div class="search">
            <input v-model="text" placeholder="search movie or TV series">
            <button class="search-button" @click="$emit('user-search', text)">search</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            text: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    .container{
        background-color: black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px;

        .search{
            input{
                margin-right: 20px;
                padding: 10px 0;
            }
            button{
                padding: 10px 20px;
                margin-right: 20px;
            }
        }
    }
</style>