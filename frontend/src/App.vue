<template>
	<div>
		<v-app>
			<v-main>
				<navbar v-if="showNavbar" />
				<router-view />
			</v-main>
		</v-app>
	</div>
</template>

<script setup>
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import Navbar from "./components/Navbar.vue"

const route = useRoute()
const router = useRouter()
const showNavbar = computed(() => route.path !== "/")

const handleLogout = () => {
	router.push("/")
}
</script>

<style>
	#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
