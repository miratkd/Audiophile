<template>
    <div class="checkout-container">
        <p class="checkout-back-button" v-on:click="returnPage()">Voltar</p>
        <div class="checkout-body-container">

            <div class="checkout-left-container">
                <h3>CHECKOUT</h3>
                <p class="subtitle checkout-subtitle">Detalhes de Cobrança</p>
                <div class="checkout-input-line checkout-inputs-margin">
                    <InputComponent :errorMessage="nameMessage" :setValue="value => name = value" placeholder="Alex"
                        class="checkout-input-half" title="Nome" />
                    <InputComponent :errorMessage="emailMessage" :setValue="value => email = value"
                        placeholder="Alex@gmail.com" class="checkout-input-half" title="Email" />
                </div>
                <div class="checkout-input-line checkout-inputs-margin">
                    <InputComponent :errorMessage="phoneMessage" :setValue="value => phone = value"
                        placeholder="(12)3456-7891" type="tel" class="checkout-input-half" title="Numero de telefone" />
                </div>

                <p class="subtitle  checkout-subtitle">Informações de envio</p>
                <InputComponent :errorMessage="addressMessage" :setValue="value => address = value"
                    class=" checkout-inputs-margin" placeholder="Rua das palmeiras" title="Endereço" />
                <div class="checkout-input-line  checkout-inputs-margin">
                    <InputComponent :errorMessage="zipMessage" :setValue="value => zip = value" type="zip"
                        class="checkout-input-half" title="CEP" placeholder="12 323-230" />
                    <InputComponent :errorMessage="cityMessage" :setValue="value => city = value"
                        class="checkout-input-half" title="Cidade" placeholder="São Paulo" />
                </div>
                <div class="checkout-input-line  checkout-inputs-margin">
                    <InputComponent :errorMessage="countryMessage" :setValue="value => country = value"
                        class="checkout-input-half" title="Pais" placeholder="Brasil" />
                </div>
            </div>

            <div class="checkout-rigth-container">
                <h6>Resumo</h6>
                <div class="checkout-product-list">
                    <div class="checkout-product" v-for="product in productsList" :key="product.name">
                        <div class="checkout-product-img-container">
                            <img class="checkout-product-img" :src="product.mainImg" alt="">
                        </div>
                        <div class="checkout-product-info">
                            <p class="checkout-product-title">{{ product.name }}</p>
                            <p class="checkout-product-price">{{ currency.format(product.price) }}</p>
                        </div>
                        <div class="checkout-product-quantity">
                            <p class="checkout-product-price">x{{ product.quantity }}</p>
                        </div>
                    </div>
                </div>
                <div class="checkout-info-line">
                    <p class="checkout-product-price">TOTAL DOS PRODUTOS</p>
                    <p class="checkout-product-title">{{ currency.format(this.cartTotal) }}</p>
                </div>
                <div class="checkout-info-line">
                    <p class="checkout-product-price">FRETE</p>
                    <p class="checkout-product-title">{{ this.cartTotal < 2000 ? currency.format(this.shipping) :
                        currency.format(0) }}</p>
                </div>
                <div class="checkout-info-line">
                    <p class="checkout-product-price">TOTAL</p>
                    <p style="color: #D87D4A;" class="checkout-product-title">{{ currency.format(this.shipping +
                        this.cartTotal) }}</p>
                </div>
                <ButtonComponent text="Finalizar pedido" :action="save" class="checkout-buy-button" />
            </div>
        </div>

        <!-- Modal -->
        <ConclusionModal v-if="showConclusion" :close="close" :products="productsList"
            :total="this.shipping + this.cartTotal" />
    </div>
</template>

<script>
import InputComponent from '@/components/InputComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import ConclusionModal from '@/components/ConclusionModal.vue';

export default {
    name: 'CheckoutView',
    components: {
        InputComponent,
        ButtonComponent,
        ConclusionModal
    },
    data() {
        return {
            productsList: [],
            currency: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }),
            cartTotal: undefined,
            shipping: undefined,
            showConclusion: false,
            name: '',
            nameMessage: '',
            email: '',
            emailMessage: '',
            phone: '',
            phoneMessage: '',
            address: '',
            addressMessage: '',
            zip: '',
            zipMessage: '',
            city: '',
            cityMessage: '',
            country: '',
            countryMessage: ''
        }
    },
    computed: {
        service() {
            return this.$store.state.cartService
        },
    },
    watch: {
        name(newValue) { if (newValue) this.nameMessage = '' },
        email(newValue) { if (newValue) this.emailMessage = '' },
        phone(newValue) { if (newValue) this.phoneMessage = '' },
        address(newValue) { if (newValue) this.addressMessage = '' },
        zip(newValue) { if (newValue) this.zipMessage = '' },
        city(newValue) { if (newValue) this.cityMessage = '' },
        country(newValue) { if (newValue) this.countryMessage = '' },
    },
    created() {
        this.productsList = this.service.getProducts()
        this.cartTotal = this.service.getTotal()
        this.shipping = this.service.getShipping()
    },
    methods: {
        returnPage() {
            this.$router.go(-1)
        },
        save() {
            if (!this.name) this.nameMessage = 'Campo obrigatorio'
            else if (this.name.length < 5) this.nameMessage = 'Nome completo'

            const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            if (!this.email) this.emailMessage = 'Campo obrigatorio'
            else if (!this.email.match(pattern)) this.emailMessage = 'Insira um email valido'

            if (!this.phone) this.phoneMessage = 'Campo obrigatorio'
            else if (this.phone.length < 14) this.phoneMessage = 'Insira o numero completo'

            if (!this.address) this.addressMessage = 'Campo obrigatorio'
            else if (this.address.length < 6) this.addressMessage = 'Insira o endereço completo'

            if (!this.zip) this.zipMessage = 'Campo obrigatorio'
            else if (this.zip.length < 10) this.zipMessage = 'Insira o CEP completo'

            if (!this.city) this.cityMessage = 'Campo obrigatorio'

            if (!this.country) this.countryMessage = 'Campo obrigatorio'

            if (!this.nameMessage && !this.emailMessage && !this.phoneMessage && !this.addressMessage 
            && !this.zipMessage && !this.cityMessage && !this.countryMessage) this.showConclusion = true
        },
        close() {
            this.service.cleanProducts()
            this.$router.push('/')
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

.checkout-body-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.checkout-left-container {
    background-color: white;
    border-radius: 8px;
    width: 60%;
    padding: 4vh 2vw;
}

.checkout-rigth-container {
    background-color: white;
    border-radius: 8px;
    width: 27%;
    padding: 3vh 1.5vw;
}

.checkout-input-line {
    display: flex;
    justify-content: space-between;
}

.checkout-subtitle {
    margin-top: 3vh;
}

.checkout-inputs-margin {
    margin-top: 1vh;
}

.checkout-input-half {
    width: 45%;
}

.checkout-product-list {
    margin-top: 3vh;
    min-height: 10vh;
    max-height: 45vh;
    overflow-y: auto;
    gap: 2vh;
    display: flex;
    flex-direction: column;
}

.checkout-product {
    display: flex;
    align-items: center;
}

.checkout-product-img-container {
    width: 25%;
    height: 7vh;
    background-color: #F1F1F1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
}

.checkout-product-quantity {
    height: 3vh;
}

.checkout-product-info {
    flex: 1;
    padding-left: 4%;
}

.checkout-product-img {
    max-height: 85%;
}

.checkout-product-title {
    font-weight: bold;
}

.checkout-product-price {
    color: gray;
}

.checkout-product-quantity-inputs {
    color: gray;
    cursor: pointer;
    -webkit-user-select: none;
    /* Safari */
    -moz-user-select: none;
    /* Firefox */
    -ms-user-select: none;
    /* IE10+/Edge */
    user-select: none;
    /* Standard */
}

.checkout-product-quantity-inputs:hover {
    color: #D87D4A;
}

.checkout-info-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.5vh;
}

.checkout-buy-button {
    width: 100%;
    margin-top: 3vh;
}


@media screen and (max-width: 850px) {
    .checkout-container {
        padding: 4vh 6vw;
    }

    .checkout-body-container {
        flex-direction: column;
        gap: 3vh;
    }

    .checkout-left-container {
        width: 94%;
    }

    .checkout-rigth-container {
        width: 94%;
    }

    .checkout-product-img-container {
        width: 15%;
    }

    .checkout-product-list {
        min-height: none;
        max-height: none;
        margin-bottom: 2vh;
    }
}

@media screen and (max-width: 550px) {
    .checkout-input-line {
        flex-direction: column;
        gap: 1vh;
    }

    .checkout-input-half {
        width: 100%;
    }

    .checkout-left-container {
        padding: 4vh 4vw;
        width: 92%;
    }

    .checkout-rigth-container {
        padding: 4vh 4vw;
        width: 92%;
    }
}
</style>