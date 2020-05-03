import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/member/info'
  },

  {
    path: '/member',
    component: Layout,
    redirect: '/member/info',
    name: 'member',
    meta: { title: '会员管理', icon: 'example' },
    children: [
      {
        path: 'info',
        name: 'info',
        component: () => import('@/views/member/info/index'),
        meta: { title: '会员信息管理', icon: '' }
      },
      {
        path: 'category',
        name: 'category',
        component: () => import('@/views/member/category/index'),
        meta: { title: '会员类别管理', icon: '' }
      },
      {
        path: 'hierarchy',
        name: 'hierarchy',
        component: () => import('@/views/member/hierarchy/index'),
        meta: { title: '会员层级', icon: '' }
      },
      {
        path: 'logs',
        name: 'logs',
        component: () => import('@/views/member/logs/index'),
        meta: { title: '会员登录日志', icon: '' }
      },
      {
        path: 'system-letter',
        name: 'system-letter',
        component: () => import('@/views/member/system-letter/index'),
        meta: { title: '系统內信', icon: '' }
      },
      {
        path: 'relative',
        name: 'relative',
        component: () => import('@/views/member/relative/index'),
        meta: { title: '会员关系网', icon: '' }
      }
    ]
  },

  {
    path: '/finance',
    component: Layout,
    redirect: '/finance/recharge',
    name: 'finance',
    meta: { title: '财务管理', icon: 'example' },
    children: [
      {
        path: 'recharge',
        name: 'recharge',
        component: () => import('@/views/finance/recharge/index'),
        meta: { title: '充值管理', icon: '' }
      },
      {
        path: 'withdraw',
        name: 'withdraw',
        component: () => import('@/views/finance/withdraw/index'),
        meta: { title: '提现管理', icon: '' }
      },
      {
        path: 'member-fund',
        name: 'member-fund',
        component: () => import('@/views/finance/member-fund/index'),
        meta: { title: '会员资金流水', icon: '' }
      },
      {
        path: 'project-fund',
        name: 'project-fund',
        component: () => import('@/views/finance/project-fund/index'),
        meta: { title: '项目资金流水', icon: '' }
      },
      {
        path: 'settlement',
        name: 'settlement',
        component: () => import('@/views/finance/settlement/index'),
        meta: { title: '结算报表明细', icon: '' }
      },
    ]
  },

  {
    path: '/project',
    component: Layout,
    redirect: '/project/manage',
    name: 'project',
    meta: { title: '项目管理', icon: 'example' },
    children: [
      {
        path: 'manage',
        name: 'manage',
        component: () => import('@/views/project/manage/index'),
        meta: { title: '充值管理', icon: '' }
      },
      {
        path: 'record',
        name: 'record',
        component: () => import('@/views/project/record/index'),
        meta: { title: '会员投资记录', icon: '' }
      },
      {
        path: 'query',
        name: 'query',
        component: () => import('@/views/project/query/index'),
        meta: { title: '代收本金查询', icon: '' }
      },
    ]
  },

  {
    path: '/page',
    component: Layout,
    redirect: '/page/page',
    name: 'page',
    meta: { title: '单页管理', icon: 'example' },
    children: [
      {
        path: 'page',
        name: 'page',
        component: () => import('@/views/page/page/index'),
        meta: { title: '单页管理', icon: '' }
      }
    ]
  },

  {
    path: '/system-setup',
    component: Layout,
    // redirect: '/example/table',
    name: 'system-setup',
    meta: { title: '系统设置', icon: 'example' },
    children: [
      {
        path: 'info',
        name: 'info',
        component: () => import('@/views/member/info/index'),
        meta: { title: '系统设置', icon: '' }
      }
    ]
  },

  {
    path: '/lottery-set',
    component: Layout,
    // redirect: '/example/table',
    name: 'LotterySet',
    meta: { title: '抽奖设置', icon: 'example' },
    children: [
      {
        path: 'info',
        name: 'info',
        component: () => import('@/views/member/info/index'),
        meta: { title: '抽奖设置', icon: '' }
      }
    ]
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
