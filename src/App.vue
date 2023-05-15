<template>
  <Header/>
  <router-view/>
</template>

<script>
import Header from './components/Header.vue';
export default {
  components:{
    Header
  }
}
</script>

<style>
body{
  margin: 0;
  font-size: 1vw;
}
h1 {
  font-family: 'Manrope';
  text-transform: uppercase;
  font-size: 3.9em;
  letter-spacing: 0.05em;
  margin: 0;
  line-height: 1.1;
}
h2 {
  font-family: 'Manrope';
  text-transform: uppercase;
  font-size: 2.8em;
  letter-spacing: 0.045em;
  margin: 0;
  line-height: 1.1;
}
h3 {
  font-family: 'Manrope';
  text-transform: uppercase;
  font-size: 2.2em;
  letter-spacing: 0.04em;
  margin: 0;
  line-height: 1.1;
}
h4 {
  font-family: 'Manrope';
  text-transform: uppercase;
  font-size: 1.9em;
  letter-spacing: 0.08em;
  margin: 0;
  line-height: 1.3;
}
h5 {
  font-family: 'Manrope';
  text-transform: uppercase;
  font-size: 1.7em;
  letter-spacing: 0.07em;
  margin: 0;
  line-height: 1.3;
}
h6 {
  font-family: 'Manrope';
  text-transform: uppercase;
  font-size: 1.3em;
  letter-spacing: 0.07em;
  margin: 0;
  line-height: 1.3;
}
p {
  font-family: 'Manrope';
  font-size: 1.1em;
  line-height: 1.55;
  margin: 0;
}
.overline{
  font-weight: 400;
  text-transform: uppercase;
  color: #D87D4A;
  font-size: 1.05em;
  line-height: 1.55;
  letter-spacing: 0.7em;
}
.subtitle{
  font-weight: 700;
  text-transform: uppercase;
  color: #D87D4A;
  font-size: 1em;
  line-height: 1.55;
  letter-spacing: 0.07em;
}
@media screen and (max-width: 850px) {
  body {font-size: 2vw;}
}
@media screen and (max-width: 450px) {
  body {font-size: 3vw;}
}
</style>
