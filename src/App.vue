<template>
  <div id="app">
    <div id="nav">
   
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/information" >Information</router-link> |
      <router-link to="/Table" >Table</router-link> |
      <router-link to="/Schedule" >Schedule</router-link> |
      <router-link to="/api" >Examination Schedule</router-link> |
      <router-link to="/Grade" >Grade</router-link> |
       <router-link to="/Enroll" >Enroll</router-link> |
       
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  mounted() {
/* eslint-disable */
    window.extAsyncInit = function() {
         // the Messenger Extensions JS SDK is done loading
         MessengerExtensions.getUserID(function success(uids) {
            //window.attachApp(uids.psid, gift);
            console.log("thread_context-success:"+uids.psid);
         }, function error(err) {
           //window.attachApp();
           console.log("err:"+err);
         });
       };


  }
}
/* eslint-disable */
</script>