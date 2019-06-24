<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/information" >Information</router-link> |
      <router-link to="/Table" >Table</router-link> 
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

  /*  window.extAsyncInit = function() {
   MessengerExtensions.getSupportedFeatures(function success(result) {
  let features = result.supported_features;
  if (features.indexOf("context") != -1) {
    MessengerExtensions.getContext('272696563407906',
      function success(thread_context) {
        // success
       // document.getElementById("psid").value = thread_context.psid;
       console.log("thread_context-success");
        // More code to follow
      },
      function error(err) {
        console.log(err);
      }
    );
  }
}, function error(err) {
  console.log(err);
});
    console.log('asdasd');
    }; */
  }
}
</script>