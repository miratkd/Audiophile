<template>
  <div>
    <div class="home-banner-container">
      <div class="home-banner-info">
        <p class="overline" style="color: white;">Novo produto</p>
        <h1 style="color: white;">XX99 Mark II Headphones</h1>
        <p class="home-banner-text">Experimente áudio natural, realista e qualidade de construção excepcional feita para os
          apaixonados por música.</p>
        <ButtonComponent text="Ver produto" :action="sendProduct1" />
      </div>
      <img class="home-banner-img" src="@/assets/image-hero.jpg" alt="">
    </div>
    <div class="home-content-container">
      <CategoriesComponent />

      <div class="home-img1-container">
        <!-- Desktop -->
        <img class="home-img-img desktop-img" src="@/assets/homeImg1.svg" alt="">
        <!-- Tablet -->
        <img class="home-img-img tablet-img" src="@/assets/homeImg1Tablet.svg" alt="">
        <!-- Mobile -->
        <img class="home-img-img mobile-img" src="@/assets/homeImg1Mobile.svg" alt="">

        <div class="home-img1-info-container">
          <h1 class="home-img1-info-title">ZX9 SPEAKER</h1>
          <p class="home-img1-info-text">Atualize para alto-falantes premium que são fenomenalmente construídos para oferecer realmente
            som notável.</p>
          <ButtonComponent text="Ver produto" type="black" :action="sendProduct4"/>
        </div>
      </div>

      <div class="home-img2-container">
        <!-- Desktop -->
        <img class="home-img-img desktop-img" src="@/assets/homeImg2.svg" alt="">
        <!-- Tablet -->
        <img class="home-img-img tablet-img" src="@/assets/homeImg2Tablet.svg" alt="">
        <!-- Mobile -->
        <img class="home-img-img mobile-img" src="@/assets/homeImg2Mobile.svg" alt="">
        
        <div class="home-img2-info-container">
          <h2 class="home-img2-title">ZX7 SPEAKER</h2>
          <ButtonComponent text="Ver produto" type="transparent" :action="sendProduct5"/>
        </div>
      </div>

      <div class="home-img3-container">
        <!-- Desktop -->
        <img class="home-img3-img desktop-img" src="@/assets/homeImg3.svg" alt="">
        <!-- Tablet -->
        <img class="home-img3-img tablet-img" src="@/assets/homeImg3Tablet.svg" alt="">
        <!-- Mobile -->
        <img class="home-img3-img mobile-img" src="@/assets/homeImg3Mobile.svg" alt="">

        <div class="home-img3-info-container">
          <h2>YX1 EARPHONES</h2>
          <ButtonComponent text="Ver produto" type="transparent" :action="sendProduct6"/>
        </div>
      </div>
      <BrandInfoComponent style="margin-top: 15vh;"/>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
import CategoriesComponent from '@/components/CategoriesComponent.vue';
import BrandInfoComponent from '@/components/BrandInfoComponent.vue';
export default {
  name: 'HomeView',
  components: {
    ButtonComponent,
    CategoriesComponent,
    BrandInfoComponent
  },
  methods:{
    sendProduct1 () {
      this.$router.push('/produto/1')
    },
    sendProduct4 () {
      this.$router.push('/produto/4')
    },
    sendProduct5 () {
      this.$router.push('/produto/5')
    },
    sendProduct6 () {
      this.$router.push('/produto/6')
    }
  }
}
</script>

<style scoped>
.home-banner-container {
  background-color: #1C1C1C;
  display: flex;
  align-items: center;
  padding: 3vh 11.5%;
  height: 50vh;
  position: relative;
}

.home-banner-img {
  height: 100%;
}

.home-banner-info {
  width: 50%;
}

.home-banner-text {
  color: white;
  width: 70%;
  padding: 2vh 0;
}

.home-content-container {
  padding: 3vh 11.5%;
}

.home-img1-container {
  position: relative;
}

.home-img-img {
  width: 100%;
}

.home-img1-info-container {
  position: absolute;
  top: 20%;
  left: 60%;
  width: 30%;
}

.home-img1-info-title {
  color: white;
  margin-bottom: 3vh;
}

.home-img1-info-text {
  color: white;
  margin-bottom: 5vh;
  opacity: 0.75;
}

.tablet-img {
  display: none;
}

.mobile-img {
  display: none;
}

.home-img2-container {
  position: relative;
  margin-top: 3vh;
}

.home-img2-info-container{
  position: absolute;
  top: 22%;
  left: 10%;
}
.home-img2-title{
  margin-bottom: 3vh;
}
.home-img3-container{
  margin-top: 3vh;
  display: flex;
  justify-content: space-between;
}
.home-img3-img{
  width: 49%;
}
.home-img3-info-container{
  width: 44%;
  background-color: #F1F1F1;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 5%;
  gap: 10%;
}

@media screen and (max-width: 850px) {
  .desktop-img {
    display: none;
  }

  .tablet-img {
    display: flex;
  }

  .home-img1-info-container {
    top: 45%;
    left: 24%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .home-banner-container {
    position: relative;
    padding: 1vh 11.5%;
  }

  .home-banner-info {
    position: absolute;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .home-banner-img {
    margin: 0 auto;
  }

  .home-content-container {
    padding: 3vh 6vw;
  }
  .home-img2-info-container{
    top: 25%;
    left: 7%;
  }
  .home-img3-info-container{
    width: 47%;
    padding-left: 3%;
  }
}

@media screen and (max-width: 450px) {
  .home-banner-img {
    width: 100%;
    height: unset;
  }

  .home-banner-container {
    padding: 1vh 0;
  }

  .home-banner-info {
    width: 100%;
  }

  .tablet-img {
    display: none;
  }

  .mobile-img {
    display: flex;
  }

  .home-img1-container {
    margin-top: 2vh;
  }

  .home-img1-info-container {
    top: 50%;
    width: 70%;
    left: 15%;
  }
  .home-img2-info-container{
    top: 30%;
    left: 5%;
  }
  .home-img3-container{
    flex-direction: column;
    gap: 2vh;
  }
  .home-img3-img{
    width: 100%;
  }
  .home-img3-info-container{
    width: 95%;
    padding-left: 5%;
    height: 25vh;
    gap: 3vh;
  }

}</style>
