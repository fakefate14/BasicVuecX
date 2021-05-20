<template>
  <div id="comB">
      <h1>{{$store.getters.getCount}}</h1>
      <button @click="remove">Remove</button>
  </div>
</template>

<script>
export default {
    name:"ComB",
    methods:{

      remove(){
        this.$store.dispatch("removeAction");
      }
    }
}
</script>

<style>

</style>