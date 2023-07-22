<template>
  <div class="container">
    <div class="d-flex gap-4 justify-content-center align-items-center py-1 px-2 rounded my-5">
      <RouterLink
        class="d-flex gap-2 text-decoration-none text-white justify-content-center align-items-center py-1 px-2 rounded"
        style="background-color: #788dd3;" to="/events/">
        <i class="fa fa-solid fa-border-all"></i>
        <span>All</span>
      </RouterLink>
      <RouterLink
        class="d-flex gap-2 text-decoration-none text-white justify-content-center align-items-center py-1 px-2 rounded"
        style="background-color: #5467a6;" to="/events/scholarship">
        <i class="fa fa-solid fa-school"></i>
        <span>Scholarship</span>
      </RouterLink>
      <RouterLink
        class="d-flex gap-2 text-decoration-none text-white justify-content-center align-items-center py-1 px-2 rounded"
        style="background-color: #788dd3;" to="/events/competition">
        <i class="fa fa-solid fa-trophy"></i>
        <span>Competition</span>
      </RouterLink>
      <RouterLink
        class="d-flex gap-2 text-decoration-none text-white justify-content-center align-items-center py-1 px-2 rounded"
        style="background-color: #5467a6;" to="/events/volunteer">
        <i class="fa fa-solid fa-handshake-angle "></i>
        <span>Volunteer</span>
      </RouterLink>
      <RouterLink
        class="d-flex gap-2 text-decoration-none text-white justify-content-center align-items-center py-1 px-2 rounded"
        style="background-color: #788dd3;" to="/events/courses">
        <i class="fa fa-solid fa-chalkboard-user"></i>
        <span>Courses</span>
      </RouterLink>
      <RouterLink
        class="d-flex gap-2 text-decoration-none text-white justify-content-center align-items-center py-1 px-2 rounded"
        style="background-color: #5467a6;" to="/events/meetup">
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