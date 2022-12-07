<script setup>



</script>
<template>
   

   

     




<div id="test">

    <div id="texte">
        <p>Vous recherchez un <span id="dev">Developpeur</span> ?</p>

        <a class="contact" href="#footer">Contactez moi </a>
    </div>
    
<lottie-player src="https://lottie.host/68c305e2-0c57-48ee-ac07-eb7c97e09891/rHyJnvkMuO.json"  background="transparent"  speed="1"  style="width: 100%; "  loop  autoplay></lottie-player>
      
</div>
</template>
<style scoped>



#test{
    width: 100%;
    height: 100%;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,0) 15%, rgb(164 164 164 / 35%) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

#texte{
    
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 50px;
    
}

#texte p{
    text-shadow: 0px 0px 5px #00000038;
    /* color: #66597a; */
    font-weight: 600;
    color: #fff;
    font-size: 2.2rem;
    padding: 20px;
}

#dev{
    font-weight: 800;
    border-bottom: 2px solid var(--secondary);
    font-size: 3rem;
}


.contact{
    padding: 7px 12px;
    color: #fff;
    font-weight: 800;
    background-color: #00c2a3;
    border-radius: 5px;
    width: fit-content;
}


    @media (min-width: 915px){



    }
</style>