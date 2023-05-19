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
                    <RouterLink to="headphones" class="subtitle header-menu-element">HEADPHONES</RouterLink>
                    <RouterLink to="speakers" class="subtitle header-menu-element">SPEAKERS</RouterLink>
                    <RouterLink to="fones" class="subtitle header-menu-element">fones</RouterLink>
                </div>

                <!-- Mobile -->
                <div class="mobile header-left-container">
                    <span v-on:click="showMobileBody = !showMobileBody" class="material-icons-outlined header-icon">menu</span>
                    <RouterLink to="/" >
                        <img class="header-logo" src="@/assets/logo.svg" alt="">
                    </RouterLink>
                    
                </div>


                <span v-on:click="openCart()" class="material-icons-outlined header-icon">shopping_cart</span>
            </div>
        </div>
        <div v-if="showMobileBody" v-on:click="showMobileBody = false" style="position: relative;">
            <div  class="header-mobile-menu-container">
                <div v-on:click.stop class="header-mobile-menu-body"> 
                    <div class="mobile-menu-element">
                        <div class="mobile-menu-element-body">
                            <img class="mobile-menu-element-img" src="@/assets/headephoneImg.svg" alt="">
                            <h6 style="margin-top: 8%;">HEADPHONES</h6>
                            <RouterLink to="/headphones" v-on:click="showMobileBody = false" class="mobile-menu-link-container">
                                <p style="color: gray;">shop</p>
                                <span class="material-icons-outlined mobile-menu-element-icon">arrow_forward_ios</span>
                            </RouterLink>
                        </div>
                    </div>
                    <div class="mobile-menu-element">
                        <div class="mobile-menu-element-body">
                            <img class="mobile-menu-element-img" src="@/assets/speakersImg.svg" alt="">
                            <h6 style="margin-top: 8%;">SPEAKERS</h6>
                            <RouterLink to="/speakers" v-on:click="showMobileBody = false" class="mobile-menu-link-container">
                                <p style="color: gray;">shop</p>
                                <span class="material-icons-outlined mobile-menu-element-icon">arrow_forward_ios</span>
                            </RouterLink>
                        </div>
                    </div>
                    <div class="mobile-menu-element">
                        <div class="mobile-menu-element-body">
                            <img class="mobile-menu-element-img" src="@/assets/earphoneImg.svg" alt="">
                            <h6 style="margin-top: 8%;">fones</h6>
                            <RouterLink to="/fones" v-on:click="showMobileBody = false" class="mobile-menu-link-container">
                                <p style="color: gray;">shop</p>
                                <span class="material-icons-outlined mobile-menu-element-icon">arrow_forward_ios</span>
                            </RouterLink>
                        </div>
                    </div>
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
import Cart from './Cart.vue';
export default {
    name: 'HeaderComponent',
    data () {
        return {
            showMobileBody: false,
            showCart: false
        }
    },
    components : {
        Cart
    },
    methods: {
        openCart () {
            this.showCart = true;
            document.body.style.overflow = 'hidden'
        },
        hideCart () {
            this.showCart = false;
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
    .header-mobile-menu-body{
        height: 30vh;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .mobile-menu-element{
        width: 20vh;
        height: 80%;
        display: flex;
        flex-direction: column-reverse;
    }
    .mobile-menu-element-body{
        background-color: #F1F1F1;
        height: 75%;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .mobile-menu-element-img{
        height: 60%;
        margin-top: -30%;
    }
    .mobile-menu-link-container{
        display: flex;
        gap: 5%;
        text-decoration: none;
        align-items: center;
        margin-top: 8%;
    }
    .mobile-menu-element-icon{
        font-size: 1.5em;
        color: #D87D4A;
    }
}
@media screen and (max-width: 450px) {
    .header-mobile-menu-body{
        height: 80%;
        flex-direction: column;
    }
    .mobile-menu-element{
        width: 60vw;
        height: 25%;
    }
    .mobile-menu-element-img{
        margin-top: -15%;
    }
    .mobile-menu-link-container{
        margin-top: 4%;
    }
    .header-logo {
        width: 25vw;
    }
    .header-left-container{
        width: 65%;
        justify-content: space-between;
    }
}</style>