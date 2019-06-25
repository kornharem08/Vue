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
    <!-- <img v-bind:src="imagePreview2" class="preview-image" v-on:click="openupload"> -->

    <img v-bind:src="imagePreview">
    
    <input type="file" name="" id="file-field" value="Click" v-on:change="updatePreview">

    <!-- <input name="image" type="file" id="file-field" v-on:change="updatePreview" style="display: none;"> -->
  </div>
</template>


<script>
export default {
  name: "test",

  data() {
    return {
      imagePreview: "",
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
    // openupload(){
    //     document.getElementById('file-field').click()
    // },
    updatePreview(e){
      document.getElementById('file-field').click()
      var reader , files = e.target.files
      if(files.length === 0){
        console.log('Empty')
      }
      reader = new FileReader()
      reader.onload = (e) =>{
        // this.imagePreview = e.target.result
        document.body.style.backgroundImage = 'url(' + e.target.result + ')';
        console.log(document.body.style.backgroundimage = 'url(' + e.target.result + ')' )
      }
      reader.readAsDataURL(files[0])
      // console.log(reader.readAsDataURL(files[0]))
    },
      /* eslint-disable */
  }
};
</script>