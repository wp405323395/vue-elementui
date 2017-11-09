import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'

import index from '@/page/index'
  //import tvProgram from '@/page/tvProgram'
  //let tvProgram = require('@/page/tvProgram');
import welcome from '@/page/welcome'
const tvProgram = resolve => require(['@/page/tvProgram'], resolve)
  // import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        if (from.meta.keepAlive) {
          from.meta.savedPosition = document.body.scrollTop
        }
        return {
          x: 0,
          y: to.meta.savedPosition || 0
        }
      }
    },
    routes: [{
      path: '/',
      name: '',
      component: App,
      children: [{
        path: '',
        redirect: '/welcome',
        name: 'welcome',
        meta: {
          title: 'tvProgram',
          keepAlive: false
        }
      }, {
        path: '/welcome',
        component: welcome,
        name: 'welcome',
        meta: {
          title: 'tvProgram',
          keepAlive: false
        }
      }, {
        path: '/tvProgram',
        component: tvProgram,
        name: 'tvProgram',
        meta: {
          title: 'tvProgram',
          keepAlive: false
        }
      }, {
        path: '/index',
        component: index,
        name: '往期回顾',
        meta: {
          title: 'index',
          keepAlive: true
        }
      }]
    }]
})
