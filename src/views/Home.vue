<template>
  <div class="home">
  <h1>Hello Vue !</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script> 
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data(){
    return{
      path :this.$route.params.path,
    }
  },
  name: 'home',
  components: {
    HelloWorld,
    
  },
   mounted() {
   
     /* eslint-disable */
    window.extAsyncInit = function() {
      // the Messenger Extensions JS SDK is done loading 
      console.log("sdk load finish")
      /* eslint-disable */
    };
 
    // access to component instance via `vm`

  
  }
}
</script>

