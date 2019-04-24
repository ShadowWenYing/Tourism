import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import D1 from '@/pages/detail/001'
import D2 from '@/pages/detail/002'
import D3 from '@/pages/detail/003'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/detail/0001',
      component:D1
    },
    {
      path:'/detail/0002',
      component:D2
    },
    {
      path:'/detail/0003',
      component:D3
    },
    {
      path:'/city',
      name:'City',
      component:City
    },{
      path:'/detail/:id',
      name:'Detail',
      component:Detail,
    },{
      path:'*',
      redirect:'/'
    }],
    scrollBehavior(to,savedPosition) {
      if(savedPosition && to==='/detail/:id') {
          return savedPosition
      } else {
          return {x: 0,y: 0}
      }
  }
})

