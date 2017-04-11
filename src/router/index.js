import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Detail from '@/components/Detail'
import Vote from '@/components/Vote'
import Result from '@/components/Result'
import Share from '@/components/Share'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }, {
      path: '/vote',
      name: 'Vote',
      component: Vote
    }, {
      path: '/result',
      name: 'Result',
      component: Result
    }, {
      path: '/share',
      name: 'Share',
      component: Share
    }
  ]
})
