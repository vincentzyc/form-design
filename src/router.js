import Vue from 'vue'
import Router from 'vue-router'

const vue = new Vue();
Vue.use(Router)

const checkLogin = () => localStorage.getItem("loanuser") ? "/home" : "/login"

const router = new Router({
	// mode: 'history',
	routes: [{
			path: "/",
			redirect: checkLogin()
		},
		{
			path: "/login",
			name: 'login',
			component: () => import("@/views/login.vue")
		},
		{
			path: "/home",
			component: () => import("@/components/layout"),
			children: [{
					path: '/',
					name: 'home',
					component: () => import('@/views/home.vue')
				},
				{
					path: '/ad',
					name: 'ad',
					component: () => import('@/views/ad.vue')
				}
			]
		},
		{
			path: '*',
			name: '404',
			component: () => import("@/views/404.vue")
		}
	]
})

router.beforeEach((to, from, next) => {
	if (to.name === "login") {
		next();
		return;
	}
	localStorage.getItem("loanuser") ? next() : next('/login');
})
router.afterEach(() => {
	if (window.dom_container) {
		vue.$api.easeout(window.dom_container, 0, 5);
	}
})

export default router