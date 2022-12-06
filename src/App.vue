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
