<template>
    <div>
        <h1>Boolflix</h1>
        <input v-model="text" placeholder="search movie or TV series">
        <button @click="$emit('user-search', text)">search</button>
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

<style scoped>
    
</style>