import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/overview' },
  {
    path: '/overview',
    name: 'Overview',
    component: () => import('views/overview/index.vue')
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('components/layout/index.vue'),
    beforeEnter: () => {
      if (localStorage.getItem('weekDay')) {
        return true;
      }
      return false;
    },
    children: [
      { path: '', redirect: '/performance-timing' },
      {
        path: '/performance-timing',
        name: 'PerformanceTiming',
        component: () => import('views/performanceTiming/index.vue')
      },
      {
        path: '/navigation-timing',
        name: 'NavigationTiming',
        component: () => import('views/navigationTiming/index.vue')
      },
      {
        path: '/resource-flow',
        name: 'ResourseFlow',
        component: () => import('views/resourceFlow/index.vue')
      },
      {
        path: '/user-behavior',
        name: 'UserBehavior',
        component: () => import('views/userBehavior/index.vue')
      },
      {
        path: '/error-info',
        name: 'ErrorInfo',
        component: () => import('views/errorInfo/index.vue')
      }
    ]
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});
