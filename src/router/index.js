import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/Index'
import ParentA from '@/views/ParentA'
import SonA from '@/views/SonA'
import ParentB from '@/views/ParentB'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/home',
      name: 'Index',
      component: Index
    },
    {
      // 父组件A
      path: '/toParentA',
      name: 'ParentA',
      component: ParentA
    },
    {
      // 子组件A
      path: '/toSonA',
      name: 'SonA',
      component: SonA
    },
    {
      // 父组件B
      path: '/toParentB',
      name: 'ParentB',
      component: ParentB
    }
  ]
})
