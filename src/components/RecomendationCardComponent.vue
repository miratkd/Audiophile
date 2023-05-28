<template>
    <div class="recomendation-card-container">
        <img class="recomendation-card-img" :src="product.mainImg" alt="">
        <h5 class="recomendation-card-name">{{ product.name }}</h5>
        <ButtonComponent class="recomendation-card-button" text="See Product" :action="clickLink"/>
    </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';

export default {
    nema: 'RecomendationCardComponent',
    props: ['productId'],
    components:{
        ButtonComponent
    },
    data() {
        return {
            product: undefined
        }
    },
    created() {
        this.product = this.$store.getters.getProductByID(this.productId)
    },
    methods:{
        clickLink () {
            this.$router.push ('/produto/' + this.productId)
        }
    }
}
</script>

<style scoped>
.recomendation-card-container {
    display: flex;
    flex-direction: column;
    width: 30%;
    align-items: center;
}

.recomendation-card-img{
    width: 100%;
}

.recomendation-card-name {
    margin-top: 2vh;
    text-align: center;
    min-height: 11vh;
}

.recomendation-card-button{
    width: 60%;
}

@media screen and (max-width: 850px) {
    .recomendation-card-button{
        width: 100%;
    }
    .recomendation-card-container{
        width: 100%;
    }

    .recomendation-card-img{
        width: 50%;
    }

    .recomendation-card-button{
        width: 75%;
    }

}
</style>