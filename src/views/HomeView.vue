<template>
  <div class="home-banner-container">
    <div class="home-banner-info">
      <p class="overline" style="color: white;">Novo produto</p>
      <h1 style="color: white;">XX99 Mark II Headphones</h1>
      <p style="color: white;">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
    </div>
    <img class="home-banner-img" src="@/assets/image-hero.jpg" alt="">
  </div>
</template>

<script>

export default {
  name: 'HomeView',
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
</style>
