<template>
    <div class="product-card-container" :class="{'product-card-reversed': isReversed}">
        <img class="product-card-img" :src="product.mainImg" alt="">
        <div class="product-card-info">
            <p v-if="product.isNewProduct" class="overline">Produto Novo</p>
            <h2>{{product.name}}</h2>
            <p class="product-card-text">{{product.description}}</p>
            <ButtonComponent class="product-card-button" text="Ver produto" :action="sendProduct"/>
        </div>
    </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';

export default {
    name: 'ProductCardComponent',
    props: ['isReversed', 'product'],
    components:{
        ButtonComponent
    },
    methods: {
        sendProduct() {
            this.$router.push('/produto/' + this.product.id)
        }
    }
}
</script>

<style scoped>
.product-card-container{
    display: flex;
    justify-content: space-between;
    margin-bottom: 15vh;
}

.product-card-reversed{
    flex-direction: row-reverse;
}

.product-card-img{
    width: 50%;
}

.product-card-info{
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.product-card-text{
    margin-top: 2vh;
    margin-bottom: 5vh;
    opacity: 0.6;
}
.product-card-button{
    width: 40%;
}

@media screen and (max-width: 850px){
    .product-card-container{
        flex-direction: column;
        align-items: center;
        gap: 4vh;
    }

    .product-card-img{
        width: 100%;
    }
    .product-card-info{
        width: 90%;
        align-items: center;
        text-align: center;
    }
}
</style>