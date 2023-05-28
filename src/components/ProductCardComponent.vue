<template>
    <div class="product-card-container" :class="{ 'product-card-reversed': isReversed }">
        <img class="product-card-img" :src="product.mainImg" alt="">
        <div class="product-card-info">
            <p v-if="product.isNewProduct" class="overline">Produto Novo</p>
            <h2>{{ product.name }}</h2>
            <p class="product-card-text">{{ product.description }}</p>
            <ButtonComponent v-if="!details" class="product-card-button" text="Ver produto" :action="sendProduct" />
            <h6 v-if="details">{{ currency.format(product.price) }}</h6>
            <div v-if="details" class="product-card-quantity-container">
                <div class="product-card-quantity-button">
                    <div v-on:click="quantity--" class="product-card-quantity-input-container">
                        <p class="product-card-quantity-inputs">-</p>
                    </div>
                    <div class="product-card-quantity-number-container">
                        <p>{{ quantity }}</p>
                    </div>
                    <div v-on:click="quantity++" class="product-card-quantity-input-container">
                        <p class="product-card-quantity-inputs">+</p>
                    </div>
                </div>
                <ButtonComponent class="product-card-add-button" text='Adicionar ao carrinho' :action="buy" />
            </div>
        </div>
    </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';

export default {
    name: 'ProductCardComponent',
    props: ['isReversed', 'product', 'details'],
    components: {
        ButtonComponent
    },
    data() {
        return {
            currency: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }),
            quantity: 1,
        }
    },
    computed:{
        service () {
            return this.$store.state.cartService
        }
    },
    methods: {
        sendProduct() {
            this.$router.push('/produto/' + this.product.id)
        },
        buy() {
            this.service.addProduct({
                ...this.product,
                quantity: this.quantity
            })
            this.$store.commit('updateShowCart', true)
            window.scrollTo(0, 0)
            document.body.style.overflow = 'hidden'
        }
    },
    watch: {
        quantity(newValue) {
            if (newValue < 1) this.quantity++
        },
        '$route.params': {
            handler() {
                this.quantity = 1
            },
            immediate: true,
        }
    }
}
</script>

<style scoped>
.product-card-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15vh;
}

.product-card-reversed {
    flex-direction: row-reverse;
}

.product-card-img {
    width: 50%;
}

.product-card-info {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.product-card-text {
    margin-top: 2vh;
    margin-bottom: 5vh;
    opacity: 0.6;
}

.product-card-button {
    width: 40%;
}

.product-card-quantity-container {
    display: flex;
    gap: 2vw;
    margin-top: 2vh;
}

.product-card-quantity-button {
    display: flex;
    align-items: center;
    background-color: lightgrey;
    width: 35%;
    padding: 0.75vh 0;
}

.product-card-quantity-inputs {
    cursor: pointer;
    color: gray;
}

.product-card-quantity-number-container {
    text-align: center;
    width: 40%;
}

.product-card-quantity-input-container {
    text-align: center;
    width: 30%;
    -webkit-user-select: none;
    /* Safari */
    -moz-user-select: none;
    /* Firefox */
    -ms-user-select: none;
    /* IE10+/Edge */
    user-select: none;
    /* Standard */
}

.product-card-add-button {
    width: 70%;
}

@media screen and (max-width: 850px) {
    .product-card-container {
        flex-direction: column;
        align-items: center;
        gap: 4vh;
    }

    .product-card-img {
        width: 100%;
    }

    .product-card-info {
        width: 90%;
        align-items: center;
        text-align: center;
    }

    .product-card-quantity-container{
        width: 100%;
    }

}
</style>