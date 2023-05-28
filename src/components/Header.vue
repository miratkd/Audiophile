<template>
    <div>
        <div class="header-container" role="heading">
            <div class="header-line">
                <!-- Desktop -->
                <RouterLink to="/" class="desktop" >
                    <img class="header-logo " src="@/assets/logo.svg" alt="">
                </RouterLink>
                
                <div class="header-menu desktop">
                    <RouterLink to="/" class="subtitle header-menu-element">Home</RouterLink>
                    <RouterLink to="/headphones" class="subtitle header-menu-element">HEADPHONES</RouterLink>
                    <RouterLink to="/speakers" class="subtitle header-menu-element">SPEAKERS</RouterLink>
                    <RouterLink to="/fones" class="subtitle header-menu-element">fones</RouterLink>
                </div>

                <!-- Mobile -->
                <div class="mobile header-left-container">
                    <span v-on:click="togleMenu()" class="material-icons-outlined header-icon">menu</span>
                    <RouterLink to="/" >
                        <img class="header-logo" src="@/assets/logo.svg" alt="">
                    </RouterLink>
                    
                </div>


                <span v-on:click="openCart()" class="material-icons-outlined header-icon">shopping_cart</span>
            </div>
        </div>
        <div v-if="showMobileBody" v-on:click="hideMenu()" style="position: relative;">
            <div  class="header-mobile-menu-container">
                <div class="header-mobile-menu-contant">
                    <CategoriesComponent :callBack="hideMenu"/>
                </div>
            </div>
        </div>


        <!-- Modal -->
        <div v-if="showCart" style="position: relative;">
            <Cart :close="hideCart"/>
        </div>
        
    </div>
</template>

<script>
import CategoriesComponent from './CategoriesComponent.vue';
import Cart from './Cart.vue';
export default {
    name: 'HeaderComponent',
    data () {
        return {
            showMobileBody: false,
        }
    },
    components : {
        Cart,
        CategoriesComponent
    },
    computed:{
        showCart () {
            return this.$store.state.showCart
        }
    },
    methods: {
        openCart () {
            this.$store.commit('updateShowCart', true)
            document.body.style.overflow = 'hidden'
        },
        hideCart () {
            this.$store.commit('updateShowCart', false)
            document.body.style.overflow = 'auto'
        },
        togleMenu () {
            this.showMobileBody = !this.showMobileBody;
            if (this.showMobileBody) document.body.style.overflow = 'hidden'
            else document.body.style.overflow = 'auto'
        },
        hideMenu () {
            this.showMobileBody = false;
            document.body.style.overflow = 'auto'
        }
    }
}
</script>

<style scoped>
.header-container {
    background-color: #1C1C1C;
}

.header-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 11.5%;
    padding: 4vh 0;
    border-bottom: 1px solid white;
}

.header-logo {
    width: 10vw;
}


.header-menu {
    display: flex;
    gap: 2.5vw;
}

.header-menu-element {
    color: white;
    cursor: pointer;
    text-decoration: none;
}

.header-menu-element:hover {
    color: #D87D4A;
}

.header-icon {
    color: white;
    font-size: 1.7em;
    cursor: pointer;
}
.header-icon:hover {
    color: #D87D4A;
}

.mobile {
    display: none;
}

@media screen and (max-width: 850px) {
    .desktop {
        display: none;
    }

    .mobile {
        display: unset;
    }

    .header-left-container {
        display: flex;
        gap: 5.5vw;
    }

    .header-logo {
        width: 17vw;
    }

    .header-line {
        margin: 0 6vw;
        padding: 3vh 0;
    }
    .header-mobile-menu-container{
        position: absolute;
        z-index: 5;
        width: 100%;
        height: 100vh;
        background:rgba(0,0,0,0.5);
        opacity: 1;
    }
    .header-mobile-menu-contant{
        background-color: white;
        padding: 0 6vw 2vh 6vw;
    }
}
@media screen and (max-width: 450px) {
    .header-logo {
        width: 25vw;
    }
    .header-left-container{
        width: 65%;
        justify-content: space-between;
    }
}</style>