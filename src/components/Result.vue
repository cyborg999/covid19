<template>
    <div>
        <div class="jumbotron">
            <h1 class="display-4">{{ status }}</h1>
            <hr class="my-4">
            <Mychart v-bind:data="data"/>
            {{ this.data }}
        </div>
    </div>
</template>
<script>
import Mychart from "./Mychart.vue"

export default {
    name : "Result"
    , props : ["current"]
    , components : {
        Mychart :Mychart
    }
    , data : function(){
        return {
            data : []
            , status : ''
            , country : "world"
        }
    }
     , created : function(){
      if(this.status == ""){
        this.getWorld()
      }

    }
    , watch : {
        current: function(){
            this.getCountry();
        }
    }
    , methods : {
        getWorld: function(){
            this.status = "loading..."

            fetch("https://api.covid19api.com/world/total")
            .then(response => response.json())
            .then(data => {
                this.data = data
                this.status = this.current.country
            })
        }
        , getCountry : function(){
            this.status = "loading..."

            fetch("https://api.covid19api.com/total/country/"+this.current.slug)
            .then(response => response.json())
            .then(data => {
                this.data = data[data.length-1]
                this.status = this.current.country
            })
        }
    }
}
</script>
<style scoped>

</style>