<script setup>



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
    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_e7lc9gxj.json"
        background="transparent" speed="1" style="width: 100%; max-width: 400px;" loop autoplay></lottie-player>

        
</template>
<style scoped>
    #phraseaccueil {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 40px 0 0 0;
        gap: 20px;
    }




    .contact {
        color: var(--text);

        padding: 10px;

        border-bottom: 2px solid var(--secondary);

      


    }

    @media (min-width: 915px){
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