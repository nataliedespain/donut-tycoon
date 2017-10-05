<template>
  <div class='shop container'>
    <h1 class='title'>{{$route.params.id}}</h1>
  </div>
</template>

<script>
export default {
  name: 'shop',
  data () {
    return {
      something: ''
    }
  }
}
</script>

<style scoped>
</style>
