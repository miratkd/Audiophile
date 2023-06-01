<template>
    <div class="checkout-container">
        <p class="checkout-back-button" v-on:click="returnPage()">Voltar</p>
        <div class="checkout-body-container">

            <div class="checkout-left-container">
                <h3>CHECKOUT</h3>
                <p class="subtitle checkout-subtitle">Billing Details</p>
                <div class="checkout-input-line checkout-inputs-margin">
                    <InputComponent :errorMessage="nameMessage" :setValue="value => name = value" placeholder="Alex" class="checkout-input-half" title="name"/>
                    <InputComponent :errorMessage="emailMessage" :setValue="value => email = value" placeholder="Alex@gmail.com" class="checkout-input-half" title="Email adress"/>
                </div>
                <div class="checkout-input-line checkout-inputs-margin">
                    <InputComponent :errorMessage="phoneMessage" :setValue="value => phone = value" placeholder="(12)3456-7891" type="tel" class="checkout-input-half" title="Phone Number"/>
                </div>
                
                <p  class="subtitle  checkout-subtitle">shipping info</p>
                <InputComponent :errorMessage="addressMessage" :setValue="value => address = value" class=" checkout-inputs-margin" placeholder="Rua das palmeiras" title="Address"/>
                <div class="checkout-input-line  checkout-inputs-margin">
                    <InputComponent :errorMessage="zipMessage" :setValue="value => zip = value" type="zip" class="checkout-input-half" title="zip code" placeholder="12 323-230"/>
                    <InputComponent :errorMessage="cityMessage" :setValue="value => city = value" class="checkout-input-half" title="city" placeholder="São Paulo"/>
                </div>
                <div class="checkout-input-line  checkout-inputs-margin">
                    <InputComponent :errorMessage="countryMessage" :setValue="value => country = value" class="checkout-input-half" title="country" placeholder="Brasil"/>
                </div>
            </div>

            <div class="checkout-rigth-container">
                <h6>Resumo</h6>
                <button v-on:click="save()">salvar</button>
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
    data() {
        return {
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
    watch:{
        name (newValue) {if (newValue) this.nameMessage = ''},
        email (newValue) {if (newValue) this.emailMessage = ''},
        phone (newValue) {if (newValue) this.phoneMessage = ''},
        address (newValue) {if (newValue) this.addressMessage = ''},
        zip (newValue) {if (newValue) this.zipMessage = ''},
        city (newValue) {if (newValue) this.cityMessage = ''},
        country (newValue) {if (newValue) this.countryMessage = ''},
    },
    methods: {
        returnPage() {
            this.$router.go(-1)
        },
        save () {
            if (!this.name) this.nameMessage = 'Campo obrigatorio'
            else if (this.name.length < 5) this.nameMessage = 'Nome completo'

            const pattern = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i 
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

@media screen and (max-width: 550px) {
    .checkout-input-line{
        flex-direction: column;
        gap: 1vh;
    }
    .checkout-input-half{
        width: 100%;
    }
    .checkout-left-container{
        padding: 4vh 4vw;
        width: 92%;
    }
}
</style>