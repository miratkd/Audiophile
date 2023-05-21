<template>
    <button :class="black ? 'button-container-black' : 'button-container'">{{text}}</button>
</template>

<script>
export default {
    name: 'ButtonComponent',
    props:['text', 'black']
}
</script>

<style>
.button-container{
    min-width: 11.5vw;
    text-align: center;
    padding: 1vh 2vw;
    cursor: pointer;
    background-color: #D87D4A;
    border: none;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 1em;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #FFFFFF;
}
.button-container-black{
    min-width: 11.5vw;
    text-align: center;
    padding: 1vh 2vw;
    cursor: pointer;
    background-color: black;
    border: none;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 1em;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #FFFFFF;
}
.button-container:hover{
    background-color: #FBAF85;
}
.button-container-black:hover{
    background-color: #4C4C4C;
}
@media screen and (max-width: 450px) {
    .button-container-black{
        min-width: 40vw;
        padding: 1.5vh 4vw;
    }
    .button-container{
        min-width: 40vw;
        padding: 1.5vh 4vw;
    }
}
</style>