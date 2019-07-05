import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/Index'
import ParentA from '@/views/one/ParentA'
import SonA from '@/views/one/SonA'
import ParentB from '@/views/two/ParentB'
import BrotherABC from '@/views/third/BrotherABC'

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
    },
    { // 兄弟组件ABC
      path: 'brotherABC',
      name: 'BrotherABC',
      component: BrotherABC
    }
  ]
})
