<template>
    <div v-on:click.stop class="header-mobile-menu-body">
        <div class="mobile-menu-element">
            <div class="mobile-menu-element-body">
                <img class="mobile-menu-element-img" src="@/assets/headephoneImg.svg" alt="">
                <h6 class="mobile-menu-element-name">HEADPHONES</h6>
                <RouterLink to="/headphones" v-on:click="callBack ? callBack() : ''" class="mobile-menu-link-container">
                    <p style="color: gray;">shop</p>
                    <span class="material-icons-outlined mobile-menu-element-icon">arrow_forward_ios</span>
                </RouterLink>
            </div>
        </div>
        <div class="mobile-menu-element">
            <div class="mobile-menu-element-body">
                <img class="mobile-menu-element-img" src="@/assets/speakersImg.svg" alt="">
                <h6 class="mobile-menu-element-name">SPEAKERS</h6>
                <RouterLink to="/speakers" v-on:click="callBack ? callBack() : ''" class="mobile-menu-link-container">
                    <p style="color: gray;">shop</p>
                    <span class="material-icons-outlined mobile-menu-element-icon">arrow_forward_ios</span>
                </RouterLink>
            </div>
        </div>
        <div class="mobile-menu-element">
            <div class="mobile-menu-element-body">
                <img class="mobile-menu-element-img" src="@/assets/earphoneImg.svg" alt="">
                <h6 class="mobile-menu-element-name">fones</h6>
                <RouterLink to="/fones" v-on:click="callBack ? callBack() : ''" class="mobile-menu-link-container">
                    <p style="color: gray;">shop</p>
                    <span class="material-icons-outlined mobile-menu-element-icon">arrow_forward_ios</span>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CategoriesComponent',
    props:['callBack']
}
</script>

<style scoped>
.header-mobile-menu-body {
    height: 30vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.mobile-menu-element {
    width: 30%;
    height: 80%;
    display: flex;
    flex-direction: column-reverse;
}

.mobile-menu-element-body {
    background-color: #F1F1F1;
    height: 75%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.mobile-menu-element-img {
    height: 70%;
    margin-top: -13%;
}

.mobile-menu-link-container {
    display: flex;
    gap: 5%;
    text-decoration: none;
    align-items: center;
}
.mobile-menu-element-name{
    padding: 3%;
}

.mobile-menu-element-icon {
    font-size: 1.5em;
    color: #D87D4A;
}

@media screen and (max-width: 850px) {
    .mobile-menu-element-img{
        margin-top: -27%;
    }
    .mobile-menu-element-name{
        padding: 5%;
    }
}
@media screen and (max-width: 450px) {
    .header-mobile-menu-body {
        height: 75vh;
        flex-direction: column;
    }

    .mobile-menu-element {
        width: 75vw;
        height: 33%;
    }

    .mobile-menu-element-img {
        margin-top: -15%;
    }

    .mobile-menu-link-container {
        margin-top: 4%;
    }
    .mobile-menu-element-name{
        padding: 3%;
    }
}</style>