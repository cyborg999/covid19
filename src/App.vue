<template>
  <div id="app">
    <div class="container">
      <Navi v-on:get_data="getSlug"/>
      <Result v-bind:current="currentCountry"/>
    </div>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css';
  import Result from "./components/Result.vue"
  import Navi from "./components/Navi.vue"

// data
// country : https://api.covid19api.com/total/country/south-africa
// world : https://api.covid19api.com/world/total
  export default {
    name : "app"
    , components : {
      Navi
      , Result
    }
    , data(){
        return {
          msg : "Hello World"
          , seen : true
          , slug : ''
          , currentCountry : { country : "World"}
           ,  chartOptions: {
                series: [{
                data: [1,2,3] // sample data
                }]
            }
        }
    }
    , methods : {
      getSlug : function(country){
        this.currentCountry = country
      }
    }
    , mounted : function(){
      //load all data
 
    }
    , created : function(){
      
    }
    , watch: {
      msg : function(before, after) {
        console.log(before, after)
      }
    }
  }
</script>
<style>

</style>