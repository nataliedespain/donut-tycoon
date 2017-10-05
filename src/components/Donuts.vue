<template>
  <div class='donuts container'>
    <h1 class='title'>Donuts</h1>
    <div class='header-button'>
      <router-link to='/'>
        <button type='button' name='button' class='add-button'>
          Add a Donut <i class='fa fa-plus' aria-hidden='true'></i>
        </button>
      </router-link>
    </div>

    <template v-for='donut in donuts'>
      <div class='list-container donut'>
        <div class='icons'>
          <span class='fa-stack fa-sm edit'>
            <i class='fa fa-circle fa-stack-2x'></i>
            <i class='fa fa-pencil fa-stack-1x fa-inverse'></i>
          </span>
          <span class='fa-stack fa-sm delete'>
            <i class='fa fa-circle fa-stack-2x'></i>
            <i class='fa fa-trash fa-stack-1x fa-inverse'></i>
          </span>
        </div>
        <h2>{{donut.name}}</h2>
        <p>
          <i class='fa fa-dot-circle-o' aria-hidden='true'></i>
          {{donut.topping}}
        </p>
        <p>
          ${{donut.price}}
        </p>
        <div class='page-link'>
          <router-link :to="{ name: 'donut', params: { id: donut.id }}">
            View Donut <i class='fa fa-long-arrow-right' aria-hidden='true'></i>
          </router-link>
        </div>
      </div>
    </template>

  </div>
</template>

<script>
export default {
  name: 'donuts',
  data () {
    return {
      something: 'shops'
    }
  },
  mounted() {
    this.$store.dispatch('getDonuts')
  },
  computed: {
    donuts() {
      return this.$store.state.donuts
    }
  }
}
</script>

<style scoped>
  .donut {
    position: relative;
  }

  p {
    padding-top: 20px;
    font-size: 19px;
    color: #8c8c8c;
    font-weight: 200;
  }

  i.fa-dot-circle-o {
    color: #eb5338;
    padding-right: 7px;
  }
</style>
