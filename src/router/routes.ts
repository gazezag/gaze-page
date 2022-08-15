import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/layout' },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('components/layout/index.vue'),
    children: [
      { path: '/layout', redirect: '/overview' },
      {
        path: '/overview',
        name: 'overView',
        component: () => import('views/overView/index.vue')
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import('views/Counter/index.vue')
      },
      {
        path: '/resourseFlow',
        name: 'ResourseFlow',
        component: () => import('views/resourceFlow/index.vue')
      },
      {
        path: '/navigationTiming',
        name: 'NavigationTiming',
        component: () => import('views/navigationTiming/index.vue')
      },
      {
        path: '/performanceCard',
        name: 'PerformanceCard',
        component: () => import('views/performanceCard/index.vue')
      },
      {
        path: '/errorInformation',
        name: 'errorInformation',
        component: () => import('views/errorInformation/index.vue')
      },
      {
        path: '/uerAction',
        name: 'uerAction',
        component: () => import('views/userAction/index.vue')
      }
    ]
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});
