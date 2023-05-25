<template>
    <div>
        <h2 class="phones-title">
            phones
        </h2>
        <div class="phones-body">
            <ProductCardComponent v-for="(product, idx) in products" :key="idx" :isReversed="idx % 2 != 0" :product="product"/>
            <CategoriesComponent />
            <BrandInfoComponent style="margin-top: 15vh;"/>
        </div>
    </div>
</template>

<script>
import ProductCardComponent from '@/components/ProductCardComponent.vue';
import CategoriesComponent from '@/components/CategoriesComponent.vue';
import BrandInfoComponent from '@/components/BrandInfoComponent.vue';

export default {
    name: 'PhonesView',
    components:{
        ProductCardComponent,
        CategoriesComponent,
        BrandInfoComponent
    },
    data () {
        return {
            products: [
                this.$store.state.products[5]
            ]
        }
    }
}
</script>

<style scoped>
.phones-title{
    background-color: #1C1C1C;
    text-align: center;
    padding: 6vh 0;
    color: white;
}
.phones-body{
    padding: 5vh 11.5%;
}

@media screen and (max-width: 850px){
    .phones-body{
        padding: 5vh 6vw;
    }
}
</style>