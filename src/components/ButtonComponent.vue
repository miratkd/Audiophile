<template>
    <button class="button-container">{{text}}</button>
</template>

<script>
export default {
    name: 'ButtonComponent',
    props:['text']
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
.button-container:hover{
    background-color: #FBAF85;
}
</style>