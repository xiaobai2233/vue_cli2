import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect:"/helloworld",
      component: ()=>import("@/Home/Home.vue"),
      children:[
        {
          path:'/helloworld',
          name:"Helloworld",
          component:()=>import("@/components/HelloWorld.vue"),
        }
      ]
    },
    {
      path: '*',
      name: 'Err',
      component: ()=>import("@/views/404.vue")
    }
  ]
})
