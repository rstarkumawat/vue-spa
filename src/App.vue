<script >
import { RouterLink, RouterView } from 'vue-router'
import { checkAuth } from '@/stores/checkAuth'


export default{
	setup(){
		const  checkLogin = checkAuth()
		return {checkLogin}
	},
	mounted(){

		console.log(this.checkLogin.isLogin)
	}
}
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
	test by again
	<!-- <header>
		<div class="wrapper">
			<HelloWorld msg="You did it!" />
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
			</nav>
		</div>
	</header> -->
	<RouterView />
</template>
