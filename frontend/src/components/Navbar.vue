<template>
	<v-app-bar flat>
		<nav class="navbar">
			<div class="d-flex">
				<img :src="HyperGuestLogo" alt="HyperGuest Logo" class="mr-8"/>
				<router-link to="/home" class="nav-item">Home</router-link>
				<router-link to="/admin" class="nav-item">Admin</router-link>
				<router-link to="/editor" class="nav-item">Editor</router-link>
			</div>
			<div class="d-flex align-center ga-3">
				<router-link to="/" class="nav-item">Log in</router-link>
				<button class="logout-btn" @click="handleLogout">Logout</button>
			</div>
		</nav>
	</v-app-bar>
	
</template>

<script setup>
	import HyperGuestLogo from "../assets/HyperGuestLogo.svg"
	import { useRouter } from "vue-router"
	import { useStore } from "vuex"

	const store = useStore()
	const router = useRouter()

	const handleLogout = () => {
		store.dispatch("logout")
		router.push("/")
	}
</script>

<style scoped>
.navbar {
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 24px 24px;
	align-items: center;
}

.nav-item{
	color: black;
    border-radius: 100px;
    padding: 4px 12px;
}

.nav-item:hover {
  background-color: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-black-on-background));
}

.logout-btn {
    background-color: rgb(var(--v-theme-black-on-background));
	border: none;
	color: white;
	padding: 12px 24px;
}

</style>
