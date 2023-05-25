<template>
    <div class="product-container">
        <p>Voltar</p>
        <div class="product-main-line">
            {{ product.name }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductView',
    data () {
        return {
            product: {}
        }
    },
    created () {
        this.product = this.$store.getters.getProductByID(this.$route.params.productId)
    }
}
</script>

<style scoped>

.product-container{
    padding: 4vh 11.5%;
}

.product-main-line{
    display: flex;
    align-items: center;
}

@media screen and (max-width: 850px){

}

@media screen and (max-width: 550px){
    
}

</style>