<template>
    <div class="container">
        <CardContainer/>
    </div>
</template>

<script>
import CardContainer from './CardContainer.vue';

export default {
    components:{
        CardContainer,
    }
}
</script>

<style lang="scss" scoped>

@use '../styles/partials/variables' as *;
    .container{
        padding: 50px 6%;
    }
</style>