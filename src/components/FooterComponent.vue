<template>
    <footer class="footer-container">
        <div class="footer-title-line">
            <div class="footer-logo-container">
                <RouterLink to="/">
                    <img class="footer-logo" src="@/assets/logo.svg" alt="">
                </RouterLink>
            </div>

            <div class="footer-title-options">
                <RouterLink to="/" class="footer-title-option">Home</RouterLink>
                <RouterLink to="headphones" class="footer-title-option">HEADPHONES</RouterLink>
                <RouterLink to="speakers" class="footer-title-option">SPEAKERS</RouterLink>
                <RouterLink to="fones" class="footer-title-option">fones</RouterLink>
            </div>
        </div>

        <div class="footer-text-line">
            <p class="footer-text">
                Audiófilo é uma parada unica para atender às suas necessidades de áudio. Somos uma pequena equipe de amantes da música e
                especialistas de som que se dedicam a ajudá-lo a tirar o máximo proveito do áudio pessoal. Venha visitar nossa loja de demonstração
                 - Estamos abertos 7 dias por semana.
            </p>
            <div class="footer-text-icons-container">
                <img class="footer-icon" src="@/assets/facebookIcon.svg" alt="">
                <img class="footer-icon" src="@/assets/twitterIcon.svg" alt="">
                <img class="footer-icon" src="@/assets/instagranIcon.svg" alt="">
            </div>
        </div>

        <div class="footer-copyright-container">
            <p class="footer-copyright">
                Copyright 2021. All Rights Reserved
            </p>

            <div class="footer-text-icons-container tablet-only">
                <img class="footer-icon" src="@/assets/facebookIcon.svg" alt="">
                <img class="footer-icon" src="@/assets/twitterIcon.svg" alt="">
                <img class="footer-icon" src="@/assets/instagranIcon.svg" alt="">
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style scoped>
.footer-container {
    background-color: black;
    padding: 0 11.5%;
}

.footer-title-line {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

.footer-logo-container {
    height: 8vh;
    border-top: 0.5vh solid #D87D4A;
    display: flex;
    flex-direction: column-reverse;
}

.footer-logo {
    width: 10vw;
}

.footer-title-options {
    display: flex;
    gap: 2vw;
}

.footer-title-option {
    color: white;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
}

.footer-title-option:hover {
    color: #D87D4A;
}

.footer-text-line {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 3vh;
}

.footer-text-icons-container {
    display: flex;
    gap: 2vw;
}

.footer-text {
    width: 45%;
    color: gray;
}

.footer-icon {
    width: 2vw;
    cursor: pointer;
}

.footer-icon:hover {
    filter: brightness(0) saturate(100%) invert(79%) sepia(31%) saturate(6406%) hue-rotate(328deg) brightness(92%) contrast(83%);
}

.footer-copyright {
    color: gray;
    margin-top: 4vh;
    padding-bottom: 6vh;
    text-transform: uppercase;
}
.tablet-only{
    display: none;
}

@media screen and (max-width: 850px) {
    .footer-title-line {
        flex-direction: column;
        gap: 3vh;
    }

    .footer-logo {
        width: 20vw;
    }

    .footer-title-options {
        gap: 5vw;
    }

    .footer-text-icons-container {
        display: none;
        gap: 4vw;
        margin-top: -2.5vh;
    }

    .footer-text {
        width: 100%;
    }
    .footer-copyright-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .tablet-only{
        display: flex;
    }
    .footer-icon{
        width: 3vw;
    }
}

@media screen and (max-width: 450px) {
    .footer-title-line {
        align-items: center;
    }

    .footer-logo {
        width: 30vw;
    }

    .footer-title-options {
        flex-direction: column;
        align-items: center;
    }
    .footer-text{
        text-align: center;
    }
    .footer-copyright-container{
        flex-direction: column;
    }
    .footer-text-icons-container{
        margin-top: 0;
        padding-bottom: 6vh;
    }
    .footer-icon{
        width: 6vw;
    }
}</style>