<script setup>



</script>
<template>

<div id="test">

    <div id="bubble"></div>
    <div id="bubble2"></div>

    <div id="texte">
        <p>Vous recherchez un <span id="dev">Développeur ?</span></p>

        <a class="contact" href="#footer">Contactez moi</a>
    </div>
    
<lottie-player id="phone" src="https://lottie.host/68c305e2-0c57-48ee-ac07-eb7c97e09891/rHyJnvkMuO.json"  background="transparent"  speed="1"   loop  autoplay></lottie-player>
      
</div>
</template>
<style scoped>



#test{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
}

#test #bubble{
    position: absolute;
    height: 300px;
    width: 400px;
    border-radius: 50%;
    background: linear-gradient(0deg, rgba(216,211,223,1) 0%, rgba(157,145,175,1) 100%);
    z-index: -2;
    transform: translateY(-50%) translateX(-50%);
    top: 0;
    left: 0;
}

#test #bubble2{
    position: absolute;
    height: 300px;
    width: 400px;
    border-radius: 50%;
    background: linear-gradient(0deg, rgba(216,211,223,1) 0%, rgba(157,145,175,1) 100%);;
    z-index: -2;
    transform: translateY(50%) translateX(50%);
    bottom: 0;
    right: 0;
}

#texte{
    
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 50px;
    /* background-color: var(--back); */
    
}

#texte p{
    
    /* color: #66597a; */
    font-weight: 700;
    color: #6e6679 ;
    font-size: 1.8rem;
    padding: 20px;
    text-align: right;
    margin-top: 100px;
}

#texte a{
    z-index: 2;
}

#dev{
    font-weight: 800;
    color: var(--text);
    font-size: 2rem;
    border-bottom: 2px solid var(--secondary);
    
}



@media (min-width: 700px) {

    #texte{
    
    margin-left: 120px;
    gap: 10px;
    align-items: flex-end;
    /* background-color: var(--back); */
    
}

#texte p{
    
    
    margin-top: 50px;
    
}

#phone{
    
    width: 80%;
    position: absolute;
    bottom: -50px;
}

#test #bubble{
    
    height: 330px;
    width: 430px;
  
    
}

#test #bubble2{
  
    height: 400px;
    width: 500px;
   

}

}


    @media (min-width: 915px){



    }
</style>