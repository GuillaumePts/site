<script setup>

</script>
<template>



<div id="moncontainer" >

    <div id="me">
        <a class="contact" href="#footer">Contactez moi</a>
        <div id="containercard">
            <figure>
                <img src="../assets/img/1000003979.jpg" alt="photo du propriétaire du site">
            </figure>
            <div id="card">
        
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

            <a id="cv" class="contact" href="cv" download="cv2024.pdf">
                Télécharger mon CV <span class="material-symbols-outlined">download</span>
            </a>
        


    </div>
        </div>
        
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

#me{
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
}

#me figure{
    width: 100%;
}

#me figure img{
    width: 100%;
    box-shadow: 15px 15px 30px #bebebe,-15px -15px 30px #ffffff;
    border-radius: 20px;
}

#card{
    box-shadow: 15px 15px 30px #bebebe,-15px -15px 30px #ffffff;
    transition: 0.2s ease-in-out;
    /* border-radius: 20px; */
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



#card div{
    margin: 20px 10px;
  
}

#card div:last-of-type{
    margin-bottom: 100px;
}



@media (min-width: 913px){
    #card{
        
        max-width: 370px;
        height: 420px;
        margin: 0;
    }

    #moncontainer{
        gap: 30px;
        border: 1px solid blue;
    }

    #me{
        width: 320px;
    }

    #me figure{
        width: 100%;
    }

    #me figure img{
        width: 100%;
        box-shadow: 15px 15px 30px #bebebe,-15px -15px 30px #ffffff;
    }

    #me figure:hover{
    cursor: pointer;
    box-shadow: 0px 10px 20px rgba(0,0,0,0.1);
    }

    #containercard{
        display: flex;
        width: 600px;
        border: 1px solid red;
    }



}


@media (min-width: 1113px){
   
}




</style>