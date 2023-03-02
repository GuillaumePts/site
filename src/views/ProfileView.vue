<script setup>

</script>
<template>



<div id="moncontainer" >

    <lottie-player id="plane" src="https://assets10.lottiefiles.com/packages/lf20_aoOp5Bl7k1.json"  background="transparent"  mode="bounce"  speed="1"  style="width: 300px; height: 300px;"   loop  autoplay></lottie-player>


    <div id="card">
        <figure>
            <img src="../assets/img/moisetup.jpg" alt="">
        </figure>
        <div>
            <p><span class="material-symbols-outlined">person</span> Pitois Guillaume, 22 ans</p>
            <p><span class="material-symbols-outlined">home_pin</span> de Normandie</p>
        </div>
        <div>
            <p><span class="material-symbols-outlined">school</span> Obtention du Titre RNCP bac+2 Développement Web
            et Web mobile. Formation ESCCI</p>
        </div>
        <div>
            <p><span class="material-symbols-outlined">work</span> Développeur Web Junior "Full Stack"</p>
            <p><span class="material-symbols-outlined">work_history</span> En recherche d'un CDI, CDD ou contrat d'Alternance 
            (école Wild Code School). Secteur Rouen/Paris ou Full Remote</p>
        </div>
    </div>
</div>



</template>
<style scoped>

#plane{
    position: absolute;
    animation: fly 3s forwards linear;
    transform: rotateY(180deg);
    display: none;
}

@keyframes fly{
    0%{
        bottom:85%;
        right: -300px;
        transform: rotate(0deg) rotateY(180deg);
    }
    
    100%{
        bottom:0px;
        right: 100%;
        transform: rotate(-50deg) rotateY(180deg);
        
    }
    
}

#moncontainer{
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    background-color: #e8e8e8;

}

#card{
    /* background: linear-gradient(145deg, #cacaca, #f0f0f0);
    box-shadow:  20px 20px 60px #bebebe,-20px -20px 60px #ffffff;  */
    box-shadow: 15px 15px 30px #bebebe,-15px -15px 30px #ffffff;
    transition: 0.2s ease-in-out;
    border-radius: 20px;
    width: 90%;
    max-width: 350px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

#card:hover{
    cursor: pointer;
  box-shadow: 0px 10px 20px rgba(0,0,0,0.1);
}

#card figure{
    width: 100%;
    height: 150px;
}

#card figure img{
    width: 100%;
    /* filter: grayscale(50%) */
}

#card div{
    margin: 20px 10px;
}


</style>