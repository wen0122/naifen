import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'

Vue.use(VueRouter);
Vue.use(VueResource);


import index from './component/index.vue'
import about from './component/about.vue'
import product from './component/product.vue'
import wisdom from './component/wisdom.vue'
import welfare from './component/welfare.vue'
import share from './component/share.vue'
import extend from './component/extend.vue'
import pin from './component/pin.vue'

var router=new VueRouter({
	routes:[
		{path:'/index',component:index},
		{path:'/about',component:about},
		{path:'/product',component:product},
		{path:'/wisdom',component:wisdom},
		{path:'/welfare',component:welfare},
		{path:'/share',component:share},
		{path:'/extend',component:extend},
		{path:'/pin',component:pin},
		{path:'*',redirect:'/index'}
	]
})

new Vue({
	router,
  el: '#app',
  render: h => h(App)
})
