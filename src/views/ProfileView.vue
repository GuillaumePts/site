<script setup>

</script>
<template>



<div id="moncontainer" >


    <div id="card">
        <a class="contact" href="#footer">Contactez moi</a>
        <figure>
            <img src="../assets/img/moichameau.jpg" alt="">
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
            <p><span class="material-symbols-outlined">work</span> Développeur Front End Junior</p>
            <p><span class="material-symbols-outlined">work_history</span> En recherche d'un CDI, CDD ou contrat d'Alternance 
            (Openclassroom). Secteur Rouen/Paris ou Full Remote</p>
            
        </div>

            <a id="cv" class="contact" href="cv" download="CV_Pitois_Guillaume.pdf">
                Télécharger mon CV <span class="material-symbols-outlined">download</span>
            </a>
        


    </div>
</div>



</template>
<style scoped>



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
    box-shadow: 15px 15px 30px #bebebe,-15px -15px 30px #ffffff;
    transition: 0.2s ease-in-out;
    border-radius: 20px;
    width: 90%;
    max-width: 350px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
}

#card #cv{
    
    /* position: absolute; */
    bottom: 0;
    left: 0; 
    top: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}



#card a{
    position: absolute;
    top: 0;
    right: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 0;
}

#card:hover{
    cursor: pointer;
    box-shadow: 0px 10px 20px rgba(0,0,0,0.1);
}

#card figure{
    width: 100%;
    height: 250px;
    position: relative;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    overflow: hidden;
}

#card figure img{
    width: 100%;
    border-top-left-radius: 20px;
    position: absolute;
    top: -30px;
    
    
}

#card div{
    margin: 20px 10px;
  
}

#card div:last-of-type{
    margin-bottom: 100px;
}



@media (min-width: 913px){
    #card{
        margin-top: 60px;
        max-width: 500px;
        height: 470px;
    }

    #card figure{
        width: 100%;
        height: 250px;
        
        position: relative;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
    }

    #card figure img{
        width: 100%;
        /* filter: grayscale(50%) */
        border-top-left-radius: 20px;
        position: absolute;
        top: -120px;
        
    }   

    #card div{
    margin: 10px 5px;
}
}


@media (min-width: 1113px){
    #card{
        max-width: 550px;
        height: 600px;
    }


    #card div{
    margin: 20px 10px;
    }
}




</style>