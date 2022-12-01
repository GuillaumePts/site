<script setup>

</script>
<template>


   

    <div id="presentation">

        <lottie-player id="hacker" src="https://lottie.host/1cccd27c-9ed7-4c1d-a81a-77a1863b8049/uPZjkY2Pd9.json" background="transparent" speed="1"  loop autoplay></lottie-player>

<div id="moi">
        <div>
            <p><span class="un">Nom  :</span>Pitois</p>
            
        </div>
        <div>
            <p><span class="un">Prénom :</span> Guillaume</p>
            
        </div>
        <div>
            <p><span class="un">Age :</span>21 ans</p>
            
        </div>
        <div>
            <p><span class="un">Domicile :</span> en Normandie </p>
           
        </div>
        <div>
            <p><span class="un">Parcours :</span> bac +2, BTS Developpement Web et Web Mobile </p>
           
        </div>
        <div>
            <p><span class="un">Profil :</span> Droit dans ses baskets, autonome, assidut et passionné par beaucoups de choses notamment l'informatique en particulier le codage. Je mettrais toute mon énergie à réaliser ou contribuer à votre projet !</p>
            
    </div>

</div>
   
</div>

</template>
<style scoped>

#presentation {
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
}

#hacker{
     
    height: 300px;
    width: 300px;
  }

#presentation div{
    display: flex;
    gap: 40px;
}

#presentation #moi{
    display: flex;
    flex-direction: column;
    width: 90%;
}

#presentation #moi p{
    font-weight: 400;
    font-size: 1.3rem;
}

.un{
    border-bottom: 2px solid var(--secondary);
    font-size: 1.2rem;
    font-weight: 200;
    margin-right: 10px;
}


@media (min-width: 700px) {
  
  #hacker{
      position: absolute;
      top: 10%;
      right: 10%;
  }

  #presentation{
     
      position: relative;
      height: 100vh;

  }

}

@media (min-width: 1100px) {
  
    #hacker{
      
        width: 400px;
        height: 400px;
    }

    

}

</style>