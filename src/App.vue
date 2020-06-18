<template>
  <div id="app">
    <div class="container">
      <h1 v-if="seen">{{ msg }}</h1>
      <Todos v-bind:students="students"/>
      <input type="text" v-model="msg" name="">
    </div>
  </div>
</template>

<script>
  import Todos from "./components/Todos.vue"

  export default {
    name : "app"
    , components : {
      Todos
    }
    , data(){
        return {
          msg : "Hello World"
          , seen : true
          , students : [
            { name : "Jordan", complete : false }
            , { name : "Dandalan", complete : false }
            , { name : "Jord", complete : true }
            , { name : "George", complete : false }
          ]
        
        }
    }
    , mounted : function(){
      console.log("mounted")
    }
    , created : function(){
      
      console.log("created")
    }
    , watch: {
      msg : function(before, after) {
        console.log(before, after)
      }
    }
  }
</script>
<style>
  .container {
    width: 700px;
    margin: 0 auto;
    border: 1px solid #eee;
  }
</style>