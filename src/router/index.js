import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'
import detail from '@/page/detail/detail'
import count from '@/page/detail/count'
import forecast from '@/page/detail/forecast'
import analysis from '@/page/detail/analysis'
import publish from '@/page/detail/publish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/detail',
      name: 'detail',
      component: detail,
      redirect: '/detail/count',
      children: [{
        path: 'count',
        component: count
      }, {
        path: 'forecast',
        component: forecast
      }, {
        path: 'analysis',
        component: analysis
      }, {
        path: 'publish',
        component: publish
      }]
    }

  ]
})
