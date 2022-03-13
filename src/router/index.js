import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
/**
 * 在vue-router在3.1.0版本之后，push和replace方法会返回一个promise对象,
 * 如果跳转到相同的路由，就报promise uncaught异常
 */
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

// const Login = () => import('../components/Login.vue')
const Home = () => import('@/views/Home.vue')
const Login = () => import('@/views/Login/index.vue')

const routes = [
  {
    path: '/',
    redirect: '/Login',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
]

const router = new VueRouter({
  routes,
})

export default router
