<template>
    <div class="brand-info-container">
        <div class="brand-info-text-container">
            <h2>Bringing you the <b class="brand-info-bold">best</b> audio gear</h2>
            <p class="brand-info-text">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones,
                speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you
                to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>

        <!-- DeskTop -->
        <img class="brand-info-img desktop-img" src="@/assets/brandInfoImg.svg" alt="">
        <!-- Tablet -->
        <img class="brand-info-img tablet-img" src="@/assets/brandInfoImgTablet.svg" alt="">
        <!-- Mobile -->
        <img class="brand-info-img mobile-img" src="@/assets/brandInfoImgMobile.svg" alt="">
    </div>
</template>

<script>
export default {
    name: 'BrandInfoComponent'
}
</script>

<style scoped>
.brand-info-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10vh;
}

.brand-info-bold {
    color: #D87D4A;
}

.brand-info-text-container {
    width: 40%;
}
.brand-info-text{
    margin-top: 3vh;
}
.brand-info-img{
    width: 49%;
}
.tablet-img{
    display: none;
}
.mobile-img{
    display: none;
}
@media screen and (max-width: 850px) {
    .desktop-img{
        display: none;
    }
    .tablet-img{
        display: flex;
    }
    .brand-info-container{
        flex-direction: column-reverse;
        gap: 5vh;
    }
    .brand-info-img{
        width: 100%;
    }
    .brand-info-text-container {
        width: 100%;
        text-align: center;
    }
}
@media screen and (max-width: 450px) {
    .tablet-img{
        display: none;
    }
    .mobile-img{
        display: flex;
    }

}
</style>