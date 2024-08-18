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
            
                <p><span class="material-symbols-outlined">person</span> Pitois Guillaume, 23 ans</p>
                <p><span class="material-symbols-outlined">home_pin</span> de Normandie</p>
            
        </div>
        <div>
            <p><span class="material-symbols-outlined">school</span> Obtention du Titre RNCP bac+2 Développement Web
            et Web mobile. Formation ESCCI</p>
        </div>
        <div>
            <p><span class="material-symbols-outlined">work</span> Développeur web Full Stack</p>
            <p><span class="material-symbols-outlined">work_history</span> En recherche d'un CDI, secteur Rouen/Paris ou Full Remote</p>
            
        </div>
        <div id="creation">
            <p ><span class="material-symbols-outlined">devices</span> Ma dernière création : <a style="color:#00b89b; margin:0; padding:0; text-align: center;" href="https://geraldine-grandir-ensemble.fr/">geraldine-grandir-ensemble.fr/</a> </p>
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
    padding: 100px 0 100px 0;
    

}

#moncontainer #me div p{
    display: flex;
    justify-content: flex-start;
    align-items: center; 
    position: relative; 
    gap: 15px;
}

#me{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    
}

#me figure{
    display: flex;
    justify-content: center;
    align-items: center;
}

#me figure img{

    max-width: 90%;
}

#card{
    /* box-shadow: 15px 15px 30px #bebebe,-15px -15px 30px #ffffff; */
    
    background: linear-gradient(145deg, #f0f0f0, #cacaca);
    box-shadow:  20px 20px 60px #bebebe,
                -20px -20px 60px #ffffff;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    


}


#creation p{
    display: flex;
    flex-wrap: wrap;
}

#creation p a{
    position: relative;
}

#card #cv{
    
    position: absolute;
    bottom: 0;
    right: 0; 
    top: auto;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 10px;
    justify-content: center;
    padding: 4px 15px;
    color: #fff;
    font-weight: 600;
    font-size: 0.8rem;
}



#card a{
    position: absolute;
    top: 0;
    right: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
}

#card:hover{
    cursor: pointer;
    /* box-shadow: 0px 10px 20px rgba(0,0,0,0.1); */
    box-shadow: 15px 15px 30px #bebebe,-15px -15px 30px #ffffff;
    background: #e0e0e0;
    
}



#card div{
    margin: 20px 10px;
  
}

#card div:last-of-type{
    margin-bottom: 100px;
}



@media (min-width: 913px){
    #card{
        
        height: 470px;
        margin: 0;
        width: 500px;
        background: linear-gradient(145deg, #f0f0f0, #cacaca);
        box-shadow:  20px 20px 60px #bebebe,
                -20px -20px 60px #ffffff;
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    #moncontainer{
        gap: 30px;

    }

    #me{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }

    #me figure{
        width: 100%;
        max-width: 350px;
    
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    #me figure img{
        width: 100%;
        box-shadow: 15px 15px 30px #bebebe,-15px -15px 30px #ffffff;
        box-shadow: 0px 10px 20px rgba(0,0,0,0.1);
    }

    /* #me figure:hover{
        cursor: pointer;
        box-shadow: 15px 15px 30px #bebebe,-15px -15px 30px #ffffff;
    } */

    #containercard{
        display: flex;
        max-width: 800px;
    }



}


@media (min-width: 1113px){
   
}




</style>