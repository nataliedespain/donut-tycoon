import Vue from 'vue'
import Router from 'vue-router'
import Shops from '@/components/Shops/Shops'
import Shop from '@/components/Shops/Shop'
import Employees from '@/components/Employees'
import Employee from '@/components/Employee'
import Donuts from '@/components/Donuts'
import Donut from '@/components/Donut'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shops',
      name: 'shops',
      component: Shops
    },
    {
      path: '/shops/:id',
      name: 'shop',
      component: Shop
    },
    {
      path: '/employees',
      name: 'employees',
      component: Employees
    },
    {
      path: '/employees/:id',
      name: 'employee',
      component: Employee
    },
    {
      path: '/donuts',
      name: 'donuts',
      component: Donuts
    },
    {
      path: '/donuts/:id',
      name: 'donut',
      component: Donut
    }
  ]
})
