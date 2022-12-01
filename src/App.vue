<script setup>


import Leheader from './components/Header.vue'
import Lemain from './components/Main.vue'
import Lefooter from './components/Footer.vue'



</script>

<template >
  
  
<Leheader id="header"/>
<Lemain id="main"/>
<Lefooter id="footer"/>
<!-- <div id="smoke"></div> -->





</template>

<style scoped>

#smoke{
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: -1;
  background: rgb(255,255,255);
background: linear-gradient(180deg, rgba(255,255,255,0.9066001400560224) 0%, rgba(255,255,255,0) 32%, rgba(0,0,0,0.1558998599439776) 100%);
}


nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center; 
  position: sticky;
  bottom: 0px;
  height: 30px;
  background-color: #333;
  border: 1px solid black;

}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}



nav a:first-of-type {
  border: 0;
}

</style>
