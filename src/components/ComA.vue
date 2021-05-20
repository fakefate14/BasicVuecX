<template>
  <div id="comA">
      <h1>{{$store.state.count}}</h1>
      <button @click="add">Add</button><br>
  </div>
</template>

<script>
export default {
    name:"ComA",
    methods:{
      add(){
        this.$store.dispatch("addAction");
      },
      remove(){
        this.$store.dispatch("removeAction");
      }
    }
  // mounted(){
    
  //   setInterval(()=>{this.$store.state.count -- },100)
  // }
}
</script>

<style>

</style>