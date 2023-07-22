<script>
export default {
  mounted() {
    if (this.$route.path !== "/") {
      let nav = document.getElementById("navbar")
      nav.classList.add("bg-dark");
    }
  }
}
</script>
<template>
  <div class="container pt-5">
    <div class="d-flex gap-4 justify-content-center align-items-center py-1 px-2 rounded my-5">
      <RouterLink
        class="d-flex bg-dark gap-2 text-decoration-none text-white justify-content-center align-items-center py-1 px-2 rounded"
        style="" to="/events/">
        <i class="fa fa-solid fa-border-all"></i>
        <span>All</span>
      </RouterLink>
      <RouterLink
        class="d-flex gap-2 text-decoration-none text-white justify-content-center align-items-center py-1 px-2 rounded"
        style="background-color: #874475;" to="/events/scholarship">
        <i class="fa fa-solid fa-school"></i>
        <span>Scholarship</span>
      </RouterLink>
      <RouterLink
        class="d-flex bg-dark gap-2 text-decoration-none text-white justify-content-center align-items-center py-1 px-2 rounded"
        style="" to="/events/competition">
        <i class="fa fa-solid fa-trophy"></i>
        <span>Competition</span>
      </RouterLink>
      <RouterLink
        class="d-flex gap-2 text-decoration-none text-white justify-content-center align-items-center py-1 px-2 rounded"
        style="background-color: #874475;" to="/events/volunteer">
        <i class="fa fa-solid fa-handshake-angle "></i>
        <span>Volunteer</span>
      </RouterLink>
      <RouterLink
        class="d-flex bg-dark gap-2 text-decoration-none text-white justify-content-center align-items-center py-1 px-2 rounded"
        style="" to="/events/courses">
        <i class="fa fa-solid fa-chalkboard-user"></i>
        <span>Courses</span>
      </RouterLink>
      <RouterLink
        class="d-flex gap-2 text-decoration-none text-white justify-content-center align-items-center py-1 px-2 rounded"
        style="background-color: #874475;" to="/events/meetup">
        <i class="fa fa-solid fa-people-roof"></i>
        <span>MeetUp</span>
      </RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
/* CSS here if needed */
</style>