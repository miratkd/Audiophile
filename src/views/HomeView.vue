<template>
  <div>
    <div class="home-banner-container">
      <div class="home-banner-info">
        <p class="overline" style="color: white;">Novo produto</p>
        <h1 style="color: white;">XX99 Mark II Headphones</h1>
        <p class="home-banner-text">Experience natural, lifelike audio and exceptional build quality made for the
          passionate music enthusiast.</p>
        <ButtonComponent text="Ver produto" />
      </div>
      <img class="home-banner-img" src="@/assets/image-hero.jpg" alt="">
    </div>
    <div class="home-content-container">
      <CategoriesComponent />
      <div class="home-img1-container">
        <!-- Desktop -->
        <img class="home-img1-img desktop-img" src="@/assets/homeImg1.svg" alt="">
        <!-- Tablet -->
        <img class="home-img1-img tablet-img" src="@/assets/homeImg1Tablet.svg" alt="">
        <!-- Mobile -->
        <img class="home-img1-img mobile-img" src="@/assets/homeImg1Mobile.svg" alt="">

        <div class="home-img1-info-container">
          <h1 class="home-img1-info-title">ZX9 SPEAKER</h1>
          <p class="home-img1-info-text">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <ButtonComponent text="Ver produto" :black="true" />
        </div>
      </div>
    </div>
    

  </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
import CategoriesComponent from '@/components/CategoriesComponent.vue';

export default {
  name: 'HomeView',
  components: {
    ButtonComponent,
    CategoriesComponent
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
.home-content-container{
  padding: 3vh 11.5%;
}
.home-img1-container{
  position: relative;
}
.home-img1-img{
  width: 100%;
}
.home-img1-info-container{
  position: absolute;
  top: 20%;
  left: 60%;
  width: 30%;
}
.home-img1-info-title{
  color: white;
  margin-bottom: 3vh;
}
.home-img1-info-text{
  color: white;
  margin-bottom: 5vh;
  opacity: 0.75;
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
  .home-img1-info-container{
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
  .home-content-container{
    padding: 3vh 6vw;
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
  .tablet-img{
    display: none;
  }
  .mobile-img{
    display: flex;
  }
  .home-img1-container{
    margin-top: 2vh;
  }
  .home-img1-info-container{
    top: 50%;
    width: 70%;
    left: 15%;
  }

}
</style>
