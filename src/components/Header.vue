<template>
  <div class="header">
    <div class="title">
      <h2>Donut Tycoon</h2>
    </div>
    <div class="links">
      <router-link to="/shops">Shops</router-link>
      <router-link to="/employees">Employees</router-link>
      <router-link to="/donuts">Donuts</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'header',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .header {
    width: 100%;
    padding: 15px;
    border-bottom: 1px solid #e8e8e8;
    display: flex;
  }

  .title, .links {
    width: 50%;
  }

  .links {
    padding-top: 5px;
    text-align: right;
  }

  .title h2 {
    letter-spacing: 2px;
    font-weight: 200;
  }

  .links a {
    margin-right: 50px;
    padding-bottom: 4px;
    text-decoration: none;
    color: inherit;
  }

  .router-link-active {
    border-bottom: 3px solid #8986f9;
  }
</style>
