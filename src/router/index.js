import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
      // Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: resolve => require(['@/pages/home/Home'], resolve),
      children:
        [{
          path: '/',
          name: 'main',
          component: resolve => require(['@/pages/main/Main'], resolve)
        },
        {
          path: 'evaluate',
          name: 'evaluate',
          component: resolve => require(['@/pages/evaluate/evaluate'], resolve)
        },
        {
          path: 'displayshop',
          name: 'displayshop',
          component: resolve => require(['@/pages/displayshop/Displayshop'], resolve)
        },
        {
          path: 'realtimeindent',
          name: 'realtimeindent',
          component: resolve => require(['@/pages/realtimeindent/RealTimeIndent'], resolve)
        },
        {
          path: 'user',
          name: 'user',
          component: resolve => require(['@/pages/user/User'], resolve)
        },
        {
          path: 'ResourceList',
          name: 'ResourceList',
          component: resolve => require(['@/pages/user/ResourceList'], resolve)
        },
        {
          path: 'RoleManage',
          name: 'RoleManage',
          component: resolve => require(['@/pages/user/RoleManage'], resolve)
        },
        {
          path: 'CommoditySales',
          name: 'CommoditySales',
          component: resolve => require(['@/pages/statementManage/CommoditySales'], resolve)
        },
        {
          path: 'MonthStatement',
          name: 'MonthStatement',
          component: resolve => require(['@/pages/statementManage/MonthStatement'], resolve)
        },
        {
          path: 'AnnualStatement',
          name: 'AnnualStatement',
          component: resolve => require(['@/pages/statementManage/AnnualStatement'], resolve)
        }]
    }
  ]
})
