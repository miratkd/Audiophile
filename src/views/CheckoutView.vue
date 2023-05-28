<template>
    <div class="checkout-container">
        <p class="checkout-back-button" v-on:click="returnPage()">Voltar</p>
        <div class="checkout-body-container">

            <div class="checkout-left-container">
                <h3>CHECKOUT</h3>
                <p class="subtitle checkout-subtitle">Billing Details</p>
                <div class="checkout-input-line checkout-inputs-margin">
                    <InputComponent placeholder="Alex" class="checkout-input-half" title="name"/>
                    <InputComponent placeholder="Alex@gmail.com" class="checkout-input-half" title="Email adress"/>
                </div>
                <div class="checkout-input-line checkout-inputs-margin">
                    <InputComponent placeholder="(12)3456-7891" type="tel" class="checkout-input-half" title="Phone Number"/>
                </div>
                
                <p  class="subtitle  checkout-subtitle">shipping info</p>
                <InputComponent class=" checkout-inputs-margin" placeholder="Rua das palmeiras" title="Address"/>
                <div class="checkout-input-line  checkout-inputs-margin">
                    <InputComponent type="zip" class="checkout-input-half" title="zip code" placeholder="12 323-230"/>
                    <InputComponent class="checkout-input-half" title="city" placeholder="São Paulo"/>
                </div>
                <div class="checkout-input-line  checkout-inputs-margin">
                    <InputComponent class="checkout-input-half" title="country" placeholder="Brasil"/>
                </div>
            </div>

            <div class="checkout-rigth-container">
                <h6>Resumo</h6>
            </div>

        </div>
    </div>
</template>

<script>
import InputComponent from '@/components/InputComponent.vue';

export default {
    name: 'CheckoutView',
    components:{
        InputComponent
    },
    methods: {
        returnPage() {
            this.$router.go(-1)
        }
    },
}
</script>

<style scoped>
.checkout-container {
    background-color: #CFCFCF;
    padding: 4vh 11.5%;
}

.checkout-back-button {
    margin-bottom: 3vh;
    cursor: pointer;
}

.checkout-body-container{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.checkout-left-container{
    background-color: white;
    border-radius: 8px;
    width: 66%;
    padding: 4vh 2vw;
}

.checkout-rigth-container{
    background-color: white;
    border-radius: 8px;
    width: 20%;
    padding: 4vh 2vw;
}

.checkout-input-line{
    display: flex;
    justify-content: space-between;
}
.checkout-subtitle{
    margin-top: 3vh;
}

.checkout-inputs-margin{
    margin-top: 1vh;
}

.checkout-input-half{
    width: 45%;
}


@media screen and (max-width: 850px) {
    .checkout-container{
        padding: 4vh 6vw;
    }

    .checkout-body-container{
        flex-direction: column;
        gap: 3vh;
    }

    .checkout-left-container{
        width: 94%;
    }

    .checkout-rigth-container{
        width: 94%;
    }
}

@media screen and (max-width: 850px) {}
</style>