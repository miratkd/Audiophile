<template>
    <div>
        <div class="input-title-container">
            <p class="input-title" :class="{ 'input-title-error': errorMessage }">{{ title }}</p>
            <p v-if="errorMessage" class="input-title input-title-error">{{ errorMessage }}</p>
        </div>

        <input v-on:change="event => setValue(event.target.value)" v-if="type == 'tel'" type="tel"
            v-mask="['(##) ####-####', '(##) #####-####']" :placeholder="placeholder" class="input-value"
            :class="{ 'input-value-error': errorMessage }">
        <input v-on:change="event => setValue(event.target.value)" v-else-if="type == 'zip'" type="tel"
            v-mask="'## ###-###'" :placeholder="placeholder" class="input-value"
            :class="{ 'input-value-error': errorMessage }">
        <input v-on:change="event => setValue(event.target.value)" v-else type="text" :placeholder="placeholder"
            class="input-value" :class="{ 'input-value-error': errorMessage }">
    </div>
</template>

<script>
export default {
    name: 'InputComponent',
    props: ['title', 'placeholder', 'type', 'errorMessage', 'setValue']
}
</script>

<style scoped>
.input-title {
    font-weight: bold;

}

.input-title-container {
    margin-bottom: 0.5vh;
    display: flex;
    justify-content: space-between;
}

.input-title-error {
    color: red;
}

.input-value {
    width: 95%;
    border: 1px solid #CFCFCF;
    border-radius: 8px;
    padding: 1vh 0 1vh 5%;
    font-family: 'Manrope';
    font-weight: 700;
    font-size: 1.2em;
    line-height: 1.2;
    color: #000000;

}

.input-value:focus {
    outline: #D87D4A 1px solid;
}

.input-value-error{
    outline: 1px solid red !important;
}
</style>