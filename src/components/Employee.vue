<template>
  <div class="employee">
    <h1>{{ something }}</h1>
  </div>
</template>
<script>
export default {
  name: 'employee',
  data () {
    return {
      something: ''
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
