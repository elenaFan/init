import Vue from 'vue'
import VueRouter from 'vue-router'
import Foo from '@/layout/Foo.vue'
import Bar from '@/layout/Bar.vue'
import Index from '@/layout/Index.vue'
import Login from '@/layout/Login.vue'


const routes = [
    {
        path:'/index',
        component:Index,
        children:[
            {
                name: 'foo',
                path: '/foo',
                component: Foo,
                meta: {
                    title: '',
                    // requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
                }
            },
            {
                name:'bar',
                path: '/bar',
                component: Bar,
                meta: {
                    title: '',
                    // requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
                }
            },
        ]
    },
    {
        name:'login',
        path: '/login',
        component: Login,
        meta: {
            title: '',
            requireAuth: false, // 添加该字段，表示进入这个路由是需要登录的
        }
    }
]

Vue.use(VueRouter)
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})
// 增加导航守卫
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth == false) {
      next()
    } else {
      // 登录状态判断
      if (localStorage.getItem('token') != undefined) {
        // 去吧
        next()
      } else {
        // 弹框
        // 去登录页
        router.push('/login')
      }
    }
  })
export default router