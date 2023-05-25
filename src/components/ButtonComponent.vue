<template>
    <button v-on:click="action()" :class="getClass">{{text}}</button>
</template>

<script>
export default {
    name: 'ButtonComponent',
    props:['text', 'type', 'action'],
    computed:{
        getClass() {
            if (this.type == 'transparent') return 'button-container-transparent'
            if (this.type == 'black') return 'button-container-black'
            else return 'button-container'
        }
    }
}
</script>

<style scoped>
.button-container{
    min-width: 11.5vw;
    text-align: center;
    padding: 1vh 2vw;
    cursor: pointer;
    border: none;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 1em;
    letter-spacing: 0.07em;
    text-transform: uppercase; 
    background-color: #D87D4A;
    color: #FFFFFF;
}
.button-container-black{
    min-width: 11.5vw;
    text-align: center;
    padding: 1vh 2vw;
    cursor: pointer;
    border: none;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 1em;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    background-color: black;
    color: #FFFFFF;
}
.button-container-transparent{
    min-width: 11.5vw;
    text-align: center;
    padding: 1vh 2vw;
    cursor: pointer;
    border: none;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 1em;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    background-color: transparent;
    border: 1px solid black;
    color: black;
}

.button-container:hover{
    background-color: #FBAF85 ;
}

.button-container-black:hover{
    background-color: #4C4C4C;
}

.button-container-transparent:hover{
    background-color: black;
    color: white;
}

@media screen and (max-width: 450px) {
    .button-container{
        min-width: 40vw;
        padding: 1.5vh 4vw;
    }
    .button-container-black{
        min-width: 40vw;
        padding: 1.5vh 4vw;
    }
    .button-container-transparent{
        min-width: 40vw;
        padding: 1.5vh 4vw;
    }
}
</style>