<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'

const lanav = ref(null)

onMounted(() => {
    const navhtml = lanav.value

    console.log(navhtml.offsetTop);
});

function lottie(){
    
    // console.log(test);

    console.log('bite');
    setTimeout(() => {
        const respons = document.querySelectorAll('.responsive')
        const cSun = document.querySelector('#mode')



if(cSun.classList.value==="sun"){
    respons[0].style.display = "none"
    respons[1].style.display = "block"

    

    
}else{
    respons[1].style.display = "none"
    respons[0].style.display = "block"
    
}
    }, 10);
}


</script>

<template>
    <main >
        <RouterView/>
        <nav ref="lanav" >
 
 <RouterLink @click="lottie()" to="/">Accueil</RouterLink>
 <RouterLink to="/profile">Qui suis-je ?</RouterLink>
 <RouterLink to="/skill">Mes Compétences</RouterLink>
</nav>

       
    </main>
</template>

<style scoped>

main{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* border-bottom: 2px solid var(--primary); */

}



nav {
  width: 100%;
  font-size: 0.9rem;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center; 
  position: sticky;
  bottom: 0;
  height: 40px;
  background: #000;
 


}

nav a{
    color: #fff;
}

@media (min-width: 915px){
    main{
        height: 100vh;
        position: relative;
        justify-content: end;
        
        
    }

    nav{
        position: absolute;
        top: 0;
        font-size: 1rem;
        border-bottom: 2px solid var(--primary);
        padding: 20px 0 20px 0;
        
        

    }
}

</style>