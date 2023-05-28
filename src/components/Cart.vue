<template>
    <div v-on:click="close()" class="cart-container">
        <div v-on:click.stop class="cart-body">
            <div class="cart-body-row">
                <h6>Carrinho (3)</h6>
                <p class="cart-remove-all" v-on:click="removeAll()">Remover todos</p>
            </div>
            <div class="cart-product-list">
                <div class="cart-product" v-for="product in productsList" :key="product.name">
                    <div class="cart-product-img-container">
                        <img class="cart-product-img" :src="product.mainImg" alt="">
                    </div>
                    <div class="cart-product-info">
                        <p class="cart-product-title">{{product.name}}</p>
                        <p class="cart-product-price">{{currency.format(product.price)}}</p>
                    </div>
                    <div class="cart-product-quantity">
                        <p class="cart-product-quantity-inputs" v-on:click="() => {if (product.quantity > 1)product.quantity--}">-</p>
                        <p style="font-weight: bold; cursor: default;">{{product.quantity}}</p>
                        <p class="cart-product-quantity-inputs" v-on:click="product.quantity++">+</p>
                    </div>
                </div>
            </div>
            <div class="cart-body-row">
                <p style="color: gray;">TOTAL</p>
                <h6>{{currency.format(total)}}</h6>
            </div>
            <button class="cart-button" v-on:click="checkout()">checkout</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartComponent',
    props: ['close'],
    data () {
        return {
            productsList: [],
            currency: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            })
        }
    },
    computed:{
        service () {
            return this.$store.state.cartService
        },
        total () {
            let total = 0
            for (let index = 0; index < this.productsList.length; index++) {
                const element = this.productsList[index];
                total += element.quantity * element.price
            }
            return total
        }
    },
    created () {
        this.productsList = this.service.getProducts()
    },
    methods:{
        removeAll () {
            this.service.cleanProducts()
            this.productsList = []
        },
        checkout () {
            this.$router.push('/checkout')
            this.$store.commit('updateShowCart', false)
            document.body.style.overflow = 'auto'
        }
    }
}
</script>

<style scoped>
.cart-container{
    position: absolute;
    width: 100%;
    height: 100vh;
    background:rgba(0,0,0,0.5);
    opacity: 1;
    z-index: 5;
}
.cart-body{
    position: absolute;
    background-color: white;
    border-radius: 10px;
    top: 5vh;
    right: 11.5%;
    width: 22vw;
    padding: 2vh 1vw;
}
.cart-body-row{
    display: flex;
    justify-content: space-between;
    margin-top: 1vh;
}
.cart-remove-all{
    text-decoration: underline;
    color: gray;
    cursor: pointer;
}
.cart-remove-all:hover{
    color: #D87D4A;
}
.cart-product-list{
    margin-top: 3vh;
    min-height: 10vh;
    max-height: 45vh;
    overflow-y: auto;
    gap: 2vh;
    display: flex;
    flex-direction: column;
}
.cart-product{
    display: flex;
    align-items: center;
}
.cart-product-img-container{
    width: 20%;
    height: 7vh;
    background-color: #F1F1F1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
}
.cart-product-quantity{
    width: 30%;
    background-color: #F1F1F1;
    height: 3vh;
    display: flex;
    justify-content: space-evenly;
}
.cart-product-info{
    flex: 1;
    padding-left: 4%;
}
.cart-product-img{
    max-height: 85%;
}
.cart-product-title{
    font-weight: bold;
}
.cart-product-price{
    color: gray;
}
.cart-product-quantity-inputs{
    color: gray;
    cursor: pointer;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
}
.cart-product-quantity-inputs:hover{
    color: #D87D4A;
}
.cart-button{
    background-color: #D87D4A;
    border: none;
    width: 100%;
    padding: 1vh 0;
    margin-top: 2vh;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 1.1em;
    line-height: 1.2;
    letter-spacing: 0.08em;
    /* identical to box height */
    color: #FFFFFF;
    text-transform: uppercase;
    cursor: pointer;
}
.cart-button:hover{
    background-color: #fbaf85;
}
@media screen and (max-width: 850px) {
    .cart-body{
        width: 50vw;
        right: 6vw;
        padding: 2vh 3vw;
    }
}
@media screen and (max-width: 550px) {
    .cart-body{
        width: 82vw;
    }
}
</style>