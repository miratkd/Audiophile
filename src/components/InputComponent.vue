<template>
    <div>
        <p class="input-title">{{ title }}</p>
        <input v-if="type == 'tel'" type="tel" v-mask="['(##) ####-####', '(##) #####-####']" :placeholder="placeholder" class="input-value">
        <input v-else-if="type == 'zip'" type="tel" v-mask="'## ###-###'" :placeholder="placeholder" class="input-value">
        <input v-else type="text" :placeholder="placeholder" class="input-value">
    </div>
</template>

<script>
export default {
    name: 'InputComponent',
    props: ['title', 'placeholder', 'type']
}
</script>

<style scoped>
.input-title {
    font-weight: bold;
    margin-bottom: 0.5vh;
}

.input-value {
    width: 100%;
    border: 1px solid #CFCFCF;
    border-radius: 8px;
    padding: 1vh 0 1vh 1.5vw;
    font-family: 'Manrope';
    font-weight: 700;
    font-size: 1.2em;
    line-height: 1.2;
    color: #000000;
    opacity: 0.4;

}

.input-value:focus {
    outline: none;
}
</style>