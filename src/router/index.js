import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Video from '@/components/Video'
import Vote from '@/components/Vote'
import Photo from '@/components/Photo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/video',
      name: 'Video',
      component: Video
    }, {
      path: '/vote',
      name: 'Vote',
      component: Vote
    }, {
      path: '/photo',
      name: 'Photo',
      component: Photo
    }
  ]
})
