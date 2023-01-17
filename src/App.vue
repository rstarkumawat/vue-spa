<script >
import { RouterLink, RouterView } from 'vue-router'
import { checkAuth } from '@/stores/checkAuth'
import NavBar from'./components/Nav.vue'

export default{
	setup(){
		const  checkLogin = checkAuth()
		return {checkLogin}
	},
	components: {
		NavBar
  	},
	mounted(){

		console.log(this.checkLogin.isLogin)
	}
}
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
	<NavBar/>
	<!-- <header>
		<div class="wrapper">
			<HelloWorld msg="You did it!" />
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
			</nav>
		</div>
	</header> -->
	<!-- <RouterView /> -->
</template>
