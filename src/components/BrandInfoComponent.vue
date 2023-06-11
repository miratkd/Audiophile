<template>
    <div class="brand-info-container">
        <div class="brand-info-text-container">
            <h2>Trazendo o <b class="brand-info-bold">melhor</b> acessório de áudio</h2>
            <p class="brand-info-text">Localizado no coração da cidade de Nova York, Audiophile é a principal loja de fones de ouvido high-end, fones de ouvido,
                alto-falantes e acessórios de áudio. Temos um grande showroom e salas de demonstração de luxo disponíveis para você
                navegar e experimentar uma ampla gama de nossos produtos. Pare em nossa loja para conhecer alguns dos fantásticos
                pessoas que fazem do Audiophile o melhor lugar para comprar seu equipamento de áudio portátil.</p>
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