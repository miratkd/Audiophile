<template>
    <div class="product-container">
        <p class="product-back-button" v-on:click="returnPage()">Voltar</p>
        <ProductCardComponent :isReversed="false" :product="product" :details="true" />

        <div class="product-features-container">
            <div class="product-features">
                <h3>FEATURES</h3>
                <p class="product-features-text">{{ product.features }}</p>
            </div>
            <div class="product-box">
                <h3>conteudo</h3>
                <div class="product-box-lines-container">
                    <div class="product-box-line" v-for="item in product.inTheBox" :key="item.text">
                        <p class="product-box-qty">{{ item.qty }}x</p>
                        <p style="color: gray;">{{ item.text }}</p>
                    </div>
                </div>
            </div>

        </div>

        <div class="product-images-container">
            <div class="product-images-left">
                <img class="product-images-small" :src="product.img1" alt="">
                <img class="product-images-small" :src="product.img2" alt="">
            </div>
            <img :src="product.img3" class="product-images-rigth">
        </div>

        <h3 class="recomendation-title">you may also like</h3>
        <div class="recomendation-container">
            <RecomendationCardComponent v-for="recomendation in product.recomentationList" :key="recomendation"
                :productId="recomendation" />
        </div>

        <CategoriesComponent class="categories-container" />

        <BrandInfoComponent class="categories-container" />

    </div>
</template>

<script>
import ProductCardComponent from '@/components/ProductCardComponent.vue';
import RecomendationCardComponent from '@/components/RecomendationCardComponent.vue';
import CategoriesComponent from '@/components/CategoriesComponent.vue';
import BrandInfoComponent from '@/components/BrandInfoComponent.vue';

export default {
    name: 'ProductView',
    components: {
        ProductCardComponent,
        RecomendationCardComponent,
        CategoriesComponent,
        BrandInfoComponent
    },
    data() {
        return {
            product: {}
        }
    },
    created() {
        this.product = this.$store.getters.getProductByID(this.$route.params.productId)
    },
    methods: {
        returnPage() {
            this.$router.go(-1)
        }
    },
    watch: {
        '$route.params': {
            handler() {
                this.product = this.$store.getters.getProductByID(this.$route.params.productId)
            },
            immediate: true,
        }
    }
}
</script>

<style scoped>
.product-container {
    padding: 4vh 11.5%;
}

.product-main-line {
    display: flex;
    align-items: center;
}

.product-main-img {
    width: 50%;
}

.product-back-button {
    margin-bottom: 3vh;
    cursor: pointer;
    color: gray;
}

.product-features-container {
    display: flex;
    justify-content: space-between;
}

.product-features {
    width: 60%;
}

.product-features-text {
    color: gray;
    margin-top: 2vh;
}

.product-box {
    width: 25%;
}

.product-box-lines-container {
    margin-top: 2vh;
    display: flex;
    flex-direction: column;
    gap: 1vh;
}

.product-box-line {
    display: flex;
    align-items: center;
}

.product-box-qty {
    color: #D87D4A;
    margin-right: 2vw;
}

.product-images-container {
    display: flex;
    justify-content: space-between;
    margin-top: 10vh;
}

.product-images-left {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.product-images-rigth {
    width: 55%;
}

.product-images-small {
    width: 100%;
}

.recomendation-title {
    margin-top: 10vh;
    text-align: center;
}

.recomendation-container {
    display: flex;
    justify-content: space-between;
    margin-top: 5vh;
}

.categories-container {
    margin-top: 6vh;
}

@media screen and (max-width: 850px) {
    .product-container{
        padding: 4vh 6vw;
    }
    .product-features-container{
        flex-direction: column;
        gap: 6vh;
    }

    .product-features{
        width: 100%;
    }

    .product-box{
        width: 100%;
        display: flex;
        gap: 20%;
    }
}

@media screen and (max-width: 550px) {
    .product-box{
        flex-direction: column;
    }

    .product-images-container {
        flex-direction: column;
        gap: 3vh;
    }

    .product-images-rigth{
        width: 100%;
    }

    .product-images-left{
        width: 100%;
        gap: 3vh;
    }

    .recomendation-container {
        flex-direction: column;
        gap: 5vh;
    }

    .categories-container{
        margin-top: 12vh;
    }
}
</style>