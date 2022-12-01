<script setup>

const cSun = document.querySelector('#mode')
const respons = document.querySelectorAll('.responsive')

if(cSun.classList.value==="sun"){
    // respons[0].style.display = "none"
    // respons[1].style.display = "block"
    console.log('bite');
}else{
    // respons[1].style.display = "none"
    // respons[0].style.display = "block"
    console.log('bite');
}

</script>
<template>
    <div id="phraseaccueil">
        <div style="text-align: center;">
            <h2 class="taille0">Un Projet ?</h2>
            <h2 class="taille0">Une Mission ?</h2>
        </div>
        <p class="taille1">N'attendez plus !</p>
        <a class="taille2 contact" href="#footer">Contactez moi</a>
    </div>
    <lottie-player class="responsive" src="https://lottie.host/1565828b-d14e-4abc-900d-ac1b21497af9/GQi0s1OJ1J.json"
        background="transparent" speed="1" style="width: 100%; max-width: 500px; max-width: 500px;" loop autoplay></lottie-player>

        <lottie-player class="responsive" src="https://lottie.host/cf502d55-ee9c-40ea-9e69-b3de3e3daf51/VV7V6Qhzkr.json" background="transparent" speed="1"  style="width: 100%; max-width: 500px; max-width: 500px; display:none" loop autoplay></lottie-player>
</template>
<style scoped>
    #phraseaccueil {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px 0 0 0;
        gap: 20px;
    }



    .contact {
        color: var(--text);

        padding: 10px;

        border-bottom: 2px solid var(--secondary);




    }

    @media (min-width: 900px){
        #phraseaccueil{
            padding: 80px 0 0 0 ;
            gap: 0;
            
        }

        #phraseaccueil div{
            display: flex;
            gap: 20px;
        }
    }
</style>