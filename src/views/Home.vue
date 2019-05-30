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
  name: 'home',
  components: {
    HelloWorld
  },
   mounted() {
    window.extAsyncInit = function() {
      // the Messenger Extensions JS SDK is done loading 
    };
  }
}
</script>

<script>
const app = new Vue({
  router,
  created() {
    return (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.com/en_US/messenger.Extensions.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'Messenger'));
  }
}).$mount('#app')
</script>