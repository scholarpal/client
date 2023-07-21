<script>
export default {
  name: "App"
}
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/schools">Schools</RouterLink>
    <RouterLink to="/events">Events</RouterLink>
    <RouterLink to="/profile">Profile</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  gap: 10px
}
</style>