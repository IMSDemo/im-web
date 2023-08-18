import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'home/project'
    },
    {
      path: '/',
      name: 'main',
      component: () => import('@/layout/default-layout.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/layout/home-layout.vue'),
          children: [
            {
              path: 'project',
              name: 'project',
              component: () => import('@/pages/home/home-index.vue')
            }
          ]
        },
        {
          path: 'interface',
          name: 'interface',
          component: () => import('@/layout/http-layout.vue'),
          children: [
            {
              path: 'http',
              name: 'http',
              component: () => import('@/pages/interface/http/http-index.vue'),
              children: [
                {
                  path: 'overview',
                  name: 'overview',
                  component: () => import('@/pages/interface/http/http-overview.vue')
                },
                {
                  path: 'new',
                  name: 'new',
                  component: () => import('@/pages/interface/http/http-new.vue')
                },
                {
                  path: 'directory',
                  name: 'directory',
                  component: () => import('@/pages/interface/http/http-root-directory.vue')
                },
                {
                  path: 'request',
                  name: 'request',
                  component: () => import('@/pages/interface/http/http-request.vue')
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})

export default router
