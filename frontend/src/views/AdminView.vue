<template>
  <div>
    <h1>Admin Page</h1>
    <p>Welcome, {{ username }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useStore } from "vuex"

const store = useStore()

const username = computed(() => store.getters.username)
</script>
