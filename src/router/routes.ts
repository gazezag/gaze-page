import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/menu' },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('views/Overview.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('components/counter.vue')
      },
      {
        path: '/resourseFlow',
        name: 'ResourseFlow',
        component: () => import('components/resourceFlow.vue')
      },
      {
        path: '/navigationTiming',
        name: 'NavigationTiming',
        component: () => import('components/navigationTiming.vue')
      },
      {
        path: '/performanceCard',
        name: 'PerformanceCard',
        component: () => import('components/performanceCard.vue')
      },
      {
        path: '/errorInformation',
        name: 'errorInformation',
        component: () => import('components/errorInformation.vue')
      },
      {
        path: '/uerAction',
        name: 'uerAction',
        component: () => import('components/uerAction.vue')
      }
    ]
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});
