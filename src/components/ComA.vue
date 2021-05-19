<template>
  <div id="comA">
      <h1>{{$store.state.count}}</h1>

  </div>
</template>

<script>
export default {
    name:"ComA",
  mounted(){
    
    setInterval(()=>{this.$store.state.count -- },100)
  }
}
</script>

<style>

</style>