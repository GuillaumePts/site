<script setup>

</script>
<template>



<div id="moncontainer" >
    <div id="bubble3" class="bubble">
        <div class="madescription">
        <div>
            <p><span class="un">Nom  </span>Pitois</p>
            
        </div>
        <div>
            <p><span class="un">Prénom </span> Guillaume</p>
            
        </div>
        <div>
            <p><span class="un">Age </span>21 ans</p>
            
        </div>
        <div>
            <p><span class="un">Domicile </span> en Normandie </p>
           
        </div>
        <div>
            <p><span class="un">Parcours </span> bac +2, BTS Developpement Web et Web Mobile </p>
           
        </div>
        </div>
    </div>
    <lottie-player id="plane" src="https://assets10.lottiefiles.com/packages/lf20_aoOp5Bl7k1.json"  background="transparent"  mode="bounce"  speed="1"  style="width: 300px; height: 300px;"   loop  autoplay></lottie-player>
    <div  id="bubble8" class="bubble">
        <div>
            <p><span class="un">Profil </span> Droit dans ses baskets, autonome, assidut et passionné par beaucoups de choses notamment l'informatique en particulier le codage. Je mettrais toute mon énergie à réaliser ou contribuer à votre projet !</p>
            
    </div>
    </div>
</div>
   


</template>
<style scoped>

#plane{
    position: absolute;
    animation: fly 3s forwards linear;
    transform: rotateY(180deg);
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

    position: relative;
    width: 100%;
    min-height: 120vh;
    overflow: hidden;
     
}
.un{
    color: #9d91af;
}

.bubble{
    position: absolute;
    background-color: var(--text);
    height: 600px;
    width: 600px;
    border-radius: 50%;
    color: #fff;
    /* transform: translateX(-50%) translateY(-50%) ; */
}

#bubble3{
    top: 100px;
    left: 0;
    transform: translateX(-50%) translateY(-50%) ;
    display: flex;
    justify-content: end;
    align-items: flex-end;
}

.madescription{
    width: 50%;
    height: 50%;
    padding: 10px;

    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    margin-bottom: 50px;
    /* margin-top: 130px; */
}

 p{
    display: flex;
    flex-direction: column;
}

#bubble8{
   bottom: 0px;
   border-radius: 20%;
   right: 0;
   transform: translateX(50%) translateY(50%) ;
   display: flex;
   align-items: flex-start;
   padding: 40px;
}

#bubble8 div{
    width: 50%;
    height: 50%;
    text-align: left;
    margin-top: 20px;
}

@media (min-width: 700px) {

    

    #bubble3{
        width: 1000px;
        height: 1000px;
        font-size: 1rem;
    }

    .madescription{

    margin-bottom: 0px;
    /* margin-top: 130px; */
    }

    #bubble8{
        width: 700px;
        height: 700px;
        font-size: 1.2rem;
    }

}

@media (min-width: 1100px) {
  
    #bubble3{
        width: 1200px;
        height: 1200px;
        font-size: 1.5rem;
    }

    .madescription{

    margin-bottom: 0px;
    /* margin-top: 130px; */
    }

    #bubble8{
        width: 800px;
        height: 800px;
        font-size: 1.5rem;
    }
    

}

</style>