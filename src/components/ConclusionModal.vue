<template>
    <div class="conclusion-container">
        <div class="conclusion-modal">
            <span class="material-icons-outlined conclusion-icon">done</span>
            <h3 class="conclusion-title">THANK YOU <br> FOR YOUR ORDER</h3>
            <div class="conclusion-card-container">
                <div class="conclusion-card-left">
                    <div class="conclusion-product">
                        <div class="conclusion-product-img-container">
                            <img class="conclusion-product-img" :src="product.mainImg" alt="">
                        </div>
                        <div class="conclusion-product-info">
                            <p class="conclusion-product-title">{{ product.name }}</p>
                            <p class="conclusion-product-price">{{ currency.format(product.price) }}</p>
                        </div>
                        <div class="conclusion-product-quantity">
                            <p class="conclusion-product-price">x{{ product.quantity }}</p>
                        </div>
                    </div>
                    <p v-if="products.length > 1" class="conclusion-card-left-other">
                         and {{ products.length - 1 }} other item(s) 
                    </p>
                </div>
                <div class="conclusion-card-rigth">
                    <p class="conclusion-product-price">TOTAL</p>
                    <p style="color: white;" class="conclusion-product-price">{{ currency.format(total) }}</p>
                </div>
            </div>
            <ButtonComponent class="conclusion-button" text="Voltar" :action="close"/>
        </div>

    </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
export default {
    name: "ConclusionModal",
    props: ['products', 'total', 'close'],
    components:{
        ButtonComponent
    },
    data() {
        return {
            product: this.products[0],
            currency: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }),
        }
    }
}
</script>

<style scoped>
.conclusion-container {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.conclusion-modal {
    background-color: white;
    width: 40vw;
    padding: 6vh 3vw;
    box-sizing: border-box;
    border-radius: 10px;
}

.conclusion-icon {
    background-color: #D87D4A;
    border-radius: 50%;
    color: white;
    font-size: 3em;
    padding: 1vw;
}

.conclusion-title {
    margin-top: 2vh;
}

.conclusion-card-container {
    margin-top: 2vh;
    display: flex;
}

.conclusion-card-left {
    background-color: #F1F1F1;
    width: 60%;
    box-sizing: border-box;
    padding: 2vh 1vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px 0 0 10px;
}

.conclusion-card-rigth {
    width: 40%;
    background-color: black;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5vh;
    padding-left: 2vw;
    border-radius: 0 10px 10px 0;
}

.conclusion-product {
    display: flex;
    align-items: center;
}

.conclusion-product-img-container {
    width: 25%;
    height: 7vh;
    background-color: #F1F1F1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
}

.conclusion-product-quantity {
    height: 3vh;
}

.conclusion-product-info {
    flex: 1;
    padding-left: 4%;
}

.conclusion-product-img {
    max-height: 85%;
    max-width: 100%;
}

.conclusion-product-title {
    font-weight: bold;
}

.conclusion-product-price {
    color: gray;
}

.conclusion-card-left-other {
    border-top: 1px solid gray;
    color: gray;
    text-align: center;
    margin-top: 1vh;
    padding-top: 1vh;
}

.conclusion-button{
    width: 100%;
    margin-top: 4vh;
}

@media screen and (max-width: 850px) {
    .conclusion-modal {
        width: 70vw;
    }

    .conclusion-product-img-container {
        width: 15%;
    }

    .conclusion-product-img {
        max-height: 70%;
    }
}

@media screen and (max-width: 550px) {
    .conclusion-modal {
        width: 90vw;
    }
    .conclusion-card-container{
        flex-direction: column;
    }
    .conclusion-card-left{
        width: 100%;
        border-radius: 10px 10px 0 0;
    }
    .conclusion-card-rigth{
        width: 100%;
        border-radius: 0 0 10px 10px;
        padding: 2vh 5vw;
    }
}
</style>