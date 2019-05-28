<template>
<div class = test>
        <h1>{{titel}}</h1>
        <h1>{{user.frist_name}} {{user.last_name}}</h1>
        <p v-text="user.frist_name"></p>

     <ul>
    <li v-for="{id, name} in fruits" :key="id">{{name}}{{id}}</li>

    <input type="text" v-model="titel"> <br>
    <button v-on:click="alerthello()">Hello</button>
</ul>


        </div>
</template>


<script>
export default {
    name: 'test',
    data(){
      return{
          titel: 'SIS BOT',
        user :{
             frist_name : 'Tanakorn',
             last_name : 'Pitakchaichan'
         },
          fruits: [{id: 1, name: "banana"}, {id: 2, name: "oragne"}]
      }
    },
    methods: {
        alerthello: function(){
            alert(this.titel)
        }
    },
  }

</script>