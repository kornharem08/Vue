<template>
  <div class="test">
    <h1>{{titel}}</h1>
    <h1>{{user.frist_name}} {{user.last_name}}</h1>
    <p v-text="user.frist_name"></p>

    <ul>
      <li v-for="{id, name} in fruits" :key="id">{{name}}{{id}}</li>

      <input type="text" v-model="titel">
      <br>
      <button v-on:click="alerthello()">Hello</button>
    </ul>
    <div id="app"></div>

    <button v-on:click="random_bg_color();">Color</button>
  
  <input type="file" id="uploadPicture" @change="choosephoto">
  </div>
</template>


<script>
export default {
  name: "test",

  data() {
    return {
      image: "",
      titel: "SIS BOT",
      user: {
        frist_name: "Tanakorn",
        last_name: "Pitakchaichan"
      },
      fruits: [{ id: 1, name: "banana" }, { id: 2, name: "oragne" }]
    };
  },
  methods: {
    /* eslint-disable */
    alerthello: function() {
      alert(this.titel);
    },
    random_bg_color: function() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
       console.log(bgColor);
  
    document.body.style.background = bgColor;
    },
    choosephoto :function(){
      var fileVal=document.getElementById("uploadPicture");
      // alert(fileVal.value);
      var a = "url("+fileVal.value+")"
      alert(a)
      document.body.style.backgroundImage = "url("+fileVal.value+")";

    }
   
      /* eslint-disable */
  }
};
</script>