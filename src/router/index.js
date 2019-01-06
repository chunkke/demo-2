import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import addPeople from '@/components/addPeople'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/addPeople',
      name: 'addPeople',
      component: addPeople
    }
  ]
})
