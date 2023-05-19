<template>
    <div v-on:click.stop class="header-category-menu-body">
        <div class="category-menu-element">
            <div class="category-menu-element-body">
                <img class="category-menu-element-img" src="@/assets/headephoneImg.svg" alt="">
                <h6 class="category-menu-element-name">HEADPHONES</h6>
                <RouterLink to="/headphones" v-on:click="callBack ? callBack() : ''" class="category-menu-link-container">
                    <p class="category-menu-link-text">shop</p>
                    <span class="material-icons-outlined category-menu-element-icon">arrow_forward_ios</span>
                </RouterLink>
            </div>
        </div>
        <div class="category-menu-element">
            <div class="category-menu-element-body">
                <img class="category-menu-element-img" src="@/assets/speakersImg.svg" alt="">
                <h6 class="category-menu-element-name">SPEAKERS</h6>
                <RouterLink to="/speakers" v-on:click="callBack ? callBack() : ''" class="category-menu-link-container">
                    <p class="category-menu-link-text">shop</p>
                    <span class="material-icons-outlined category-menu-element-icon">arrow_forward_ios</span>
                </RouterLink>
            </div>
        </div>
        <div class="category-menu-element">
            <div class="category-menu-element-body">
                <img class="category-menu-element-img" src="@/assets/earphoneImg.svg" alt="">
                <h6 class="category-menu-element-name">fones</h6>
                <RouterLink to="/fones" v-on:click="callBack ? callBack() : ''" class="category-menu-link-container">
                    <p class="category-menu-link-text">shop</p>
                    <span class="material-icons-outlined category-menu-element-icon">arrow_forward_ios</span>
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
.header-category-menu-body {
    height: 30vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.category-menu-element {
    width: 30%;
    height: 80%;
    display: flex;
    flex-direction: column-reverse;
}

.category-menu-element-body {
    background-color: #F1F1F1;
    height: 75%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.category-menu-element-img {
    height: 70%;
    margin-top: -13%;
}

.category-menu-link-container {
    display: flex;
    gap: 5%;
    text-decoration: none;
    align-items: center;
}
.category-menu-element-name{
    padding: 3%;
}

.category-menu-element-icon {
    font-size: 1.5em;
    color: #D87D4A;
}
.category-menu-link-text{
    color: gray;
}
.category-menu-link-container:hover > .category-menu-link-text{
    color: #D87D4A;
}

@media screen and (max-width: 850px) {
    .category-menu-element-img{
        margin-top: -27%;
    }
    .category-menu-element-name{
        padding: 5%;
    }
}
@media screen and (max-width: 450px) {
    .header-category-menu-body {
        height: 75vh;
        flex-direction: column;
    }

    .category-menu-element {
        width: 75vw;
        height: 33%;
    }

    .category-menu-element-img {
        margin-top: -15%;
    }

    .category-menu-link-container {
        margin-top: 4%;
    }
    .category-menu-element-name{
        padding: 3%;
    }
}</style>