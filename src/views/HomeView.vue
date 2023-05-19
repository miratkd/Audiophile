<template>
  <div class="home-banner-container">
    <div class="home-banner-info">
      <p class="overline" style="color: white;">Novo produto</p>
      <h1 style="color: white;">XX99 Mark II Headphones</h1>
      <p class="home-banner-text">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
      <ButtonComponent text="Ver produtos"/>
    </div>
    <img class="home-banner-img" src="@/assets/image-hero.jpg" alt="">
  </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';

export default {
  name: 'HomeView',
  components:{
    ButtonComponent
  }
}
</script>

<style scoped>
.home-banner-container{
  background-color: #1C1C1C;
  display: flex;
  align-items: center;
  padding: 3vh 11.5%;
  height: 50vh;
  position: relative;
}
.home-banner-img{
  height: 100%;
}
.home-banner-info{
  width: 50%;
}
.home-banner-text{
  color: white;
  width: 70%;
  padding: 2vh 0;
}
@media screen and (max-width: 850px) {
  .home-banner-container{
    position: relative;
    padding: 1vh 11.5%;
  }
  .home-banner-info{
    position: absolute;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .home-banner-img{
    margin: 0 auto;
  }
}
@media screen and (max-width: 450px) {
  .home-banner-img{
    width: 100%;
    height: unset;
  }
  .home-banner-container{
    padding: 1vh 0;
  }
  .home-banner-info{
    width: 100%;
  }
}
</style>
