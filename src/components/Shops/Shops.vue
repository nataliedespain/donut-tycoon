<template>
  <div class='shops container'>
    <h1 class='title'>Shops</h1>
    <div class='header-button'>
      <router-link to='/'>
        <button type='button' name='button' class='add-button'>
          Add a Shop <i class='fa fa-plus' aria-hidden='true'></i>
        </button>
      </router-link>
    </div>

    <template v-for='shop in shops'>
      <div class='list-container shop'>
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
        <h2>{{shop.name}}</h2>
        <p>
          <i class='fa fa-map-marker' aria-hidden='true'></i>
          {{shop.city}}
        </p>
        <div class='page-link'>
          <router-link :to="{ name: 'shop', params: { id: shop.id }}">
            View Shop <i class='fa fa-long-arrow-right' aria-hidden='true'></i>
          </router-link>
        </div>
      </div>
    </template>

  </div>
</template>

<script>
export default {
  name: 'shops',
  data () {
    return {
      something: 'shops'
    }
  },
  mounted() {
    this.$store.dispatch('getShops')
  },
  computed: {
    shops() {
      console.log('store', this.$store)
      return this.$store.state.shops
    }
  }
}
</script>

<style scoped>
  .shop {
    position: relative;
  }

  p {
    padding-top: 20px;
    font-size: 19px;
    color: #8c8c8c;
    font-weight: 200;
  }

  i.fa-map-marker {
    color: #eb5338;
    padding-right: 7px;
  }

  i.fa-plus-circle {
    color: #8986f9;
    margin-left: 30px;
    padding-top: 10px;
  }
</style>
