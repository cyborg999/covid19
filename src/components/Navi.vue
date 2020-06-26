<template>
	<div class="navigation card border-light mb-12">
    <div class="card-header">
        <p>Status: {{ status }}</p>
      <label for="">Search Country
        <input type="text" v-model="search" class="form-control form-inline">
        <ul>
          <li 
          v-for="(country,idx) in QueryResult"
          v-bind:key="idx"
          v-bind:QueryResult="QueryResult"
          v-on:click="setSlug(country)"
          >{{ country.country }}</li>
        </ul>
      </label>
    </div>
</div>
</template>
<script type="text/javascript">
	export default {
		name : "Navi"
		, data : function(){
			return {
        active : "country"
        , status : "" //loading,loaded
        , search : ""
        , countries : []
        , QueryResult : []
			}
    }
    , created : function(){
      if(this.status == ""){
        this.getAllCountries()
      }
    }
    , watch : {
      search : function(){
        let data = this.countries
        let keyword = this.search
        let filtered = []
        this.QueryResult = []

        if(keyword === ""){
          this.QueryResult = []

        } else {
          Object.keys(data).map(function(key) {
            let country = data[key].Country;
            let found = country.toLowerCase().indexOf(keyword.toLowerCase())
            
            if(found > -1){
              let newCountry = { country : country, slug : data[key].Slug }
              filtered.push(newCountry)
            }
          });

          this.QueryResult = filtered

        }
      }
    }
    , methods : {
      getAllCountries : function(){
        this.status = "loading..."
        fetch("https://api.covid19api.com/countries")
        .then(response => response.json())
        .then(data => {
          this.countries = data
          this.status = "loaded"
        })
      }
      , setSlug : function(country){
        this.search = country.country
        this.QueryResult = []
        this.$emit("get_data", country)
      }
      , test : function(){
      }
      , emit : function(){
      
      }
    }
	}
</script>
<style scoped>
	.navigation {
		padding: 10px 0;
	}
	.navigation .btn {
		margin: 0 5px;
	}
  .card-header label {
    position: relative;
  }
  .card-header label ul {
    position: absolute;
    background: white;
    list-style-type: none;
    padding: 0;
    width: 100%;
    border-bottom-left-radius: 8px;;
    border-bottom-right-radius: 8px;;
  }
  label ul li {
    padding: 5px;
  }
  .hidden {
    display : none;
  }
</style>