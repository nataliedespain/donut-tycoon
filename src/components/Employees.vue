<template>
  <div class='employees container'>
    <h1 class='title'>Employees</h1>
    <div class='header-button'>
      <router-link to='/'>
        <button type='button' name='button' class='add-button'>
          Add an Employee <i class='fa fa-plus' aria-hidden='true'></i>
        </button>
      </router-link>
    </div>

    <template v-for='employee in employees'>
      <div class='list-container employees'>
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
        <h2>{{employee.first_name}} {{employee.last_name}}</h2>
        <p>
          <i class='fa fa-envelope' aria-hidden='true'></i>
          {{employee.email}}
        </p>
        <div class='page-link'>
          <router-link :to="{ name: 'employee', params: { id: employee.id }}">
            View Employee <i class='fa fa-long-arrow-right' aria-hidden='true'></i>
          </router-link>
        </div>
      </div>
    </template>

  </div>
</template>

<script>
export default {
  name: 'employees',
  data () {
    return {
      something: ''
    }
  },
  mounted() {
    this.$store.dispatch('getEmployees')
  },
  computed: {
    employees() {
      return this.$store.state.employees
    }
  }
}
</script>

<style scoped>
  .employees {
    position: relative;
  }

  p {
    padding-top: 20px;
    font-size: 19px;
    color: #8c8c8c;
    font-weight: 200;
  }

  i.fa-envelope {
    color: #eb5338;
    padding-right: 7px;
  }
</style>
