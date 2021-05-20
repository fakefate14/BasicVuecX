<template>
<div id="app">
  <comA/>
  <hr>
  <comB/>
</div>
</template>

<script>
import ComA from "@/components/ComA.vue"
import ComB from "@/components/ComB.vue"
export default {
  name:"App",
  components:{
    ComA,ComB
  },
  // mounted(){
    
  //   setInterval(()=>{this.$store.state.count ++ },100)
  // }
}
</script>

<style>

</style>