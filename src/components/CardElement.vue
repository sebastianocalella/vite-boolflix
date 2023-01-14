<template>
    <div class="card-container">
        <h2>{{ title }}</h2>
        <img src="" alt="">
    </div>
</template>

<script>
export default {
    props: {
        imgUrl: String,
        title: String,
    }
}
</script>

<style scoped>
    .card-container{
        width: 342px;
    }
</style>