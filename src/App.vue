<template>
<div id="app">
  <comA/>
  <hr>
  <h1>{{$store.state}}</h1>
</div>
</template>

<script>
import ComA from "@/components/ComA.vue"
export default {
  name:"App",
  components:{
    ComA
  },
  mounted(){
    
    setInterval(()=>{this.$store.state.count ++ },100)
  }
}
</script>

<style>

</style>