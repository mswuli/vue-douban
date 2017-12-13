<template>
  <div>

  </div>
</template>

<script>
  import axios from 'axios';
    export default {
      name: "list",
      created:function(){
        axios.get('src/data/newslist.json')
          .then(function(response){
            console.log(response)
          })
          .catch(function(){

          })
      }
    }
</script>

<style scoped>

</style>
