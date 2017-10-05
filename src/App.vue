<template>
  <div id='app'>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Shops from '@/components/Shops/Shops'
import Shop from '@/components/Shops/Shop'
import AddShop from '@/components/Shops/AddShop'
import Employees from '@/components/Employees'
import Employee from '@/components/Employee'
import Donuts from '@/components/Donuts'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-shops': Shops,
    'app-shop': Shop,
    'app-employees': Employees,
    'app-employee': Employee,
    'app-donuts': Donuts
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700,900');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: #2a2a2a;
  }

  button.add-button:hover {
    background: #2a2a2a;
    cursor: pointer;
  }

  .container {
    width: 90%;
    margin: 0 auto;
  }

  h1.title {
    text-align: center;
    margin: 50px 0 20px 0;
  }

  .list-container {
    width: 55%;
    margin: 0 auto 25px auto;
    padding: 25px;
    border: 1px solid #e8e8e8;
  }

  .header-button {
    text-align: center;
  }

  button.add-button {
    background: none;
    margin-bottom: 25px;
    border: 0;
    padding: 5px 10px;
    color: white;
    font-size: 15px;
    background: #8986f9;
    border-radius: 50px;
  }

  button.add-button i {
    padding-left: 7px;
  }

  .icons {
    position: absolute;
    right: 20px;
    top: 20px;
  }

  .edit i.fa-circle {
    color: #8986f9;
  }

  .delete i.fa-circle {
    color: #eb5338;
  }

  .page-link {
    text-align: right;
    margin-top: 30px;
  }

  .page-link a {
    padding-bottom: 4px;
    color: inherit;
    text-decoration: none;
    border-bottom: 3px solid #8986f9;
  }
</style>
