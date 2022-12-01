<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'

const lanav = ref(null)

onMounted(() => {
    const navhtml = lanav.value

    console.log(navhtml.offsetTop);
});


</script>

<template>
    <main >
        <RouterView/>
        <nav ref="lanav" >
 
 <RouterLink to="/">Accueil</RouterLink>
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
    border-bottom: 2px solid var(--primary);
    
    
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
    color: var(--text);
    padding: 4px 0;
    margin: 5px ;

}

@media (min-width: 900px){
    main{
        height: 100vh;
        position: relative;
        justify-content: end;
        
    }

    nav{
        position: absolute;
        top: 0;
        font-size: 1.4rem;
        border-bottom: 2px solid var(--primary);
        padding: 30px 0 30px 0;
        
        

    }
}

</style>