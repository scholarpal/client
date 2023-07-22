<script>
export default {
  mounted() {
    let nav = document.getElementById("navbar")
    if (document.URL !== "http://localhost:5173/" && document.URL !== "http://localhost:5173/profile") {
      nav.classList.add("bg-dark");
    }
    document.addEventListener('scroll', () => {
      if (document.URL == "http://localhost:5173/") {
        if (window.scrollY >= nav.getBoundingClientRect().height) {
          nav.classList.add("bg-dark");
        } else {
          nav.classList.remove("bg-dark");
        }
      }
    })
  }
}
</script>
<template>
  <nav id="navbar" class="navbar navbar-expand-lg fixed-top" v-on:scroll="">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold" to="/">
        <h3 class="text-white">ScholarPal</h3>
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
          <RouterLink class="nav-link" to="/events">Events</RouterLink>
          <RouterLink class="nav-link" to="/profile">Profile</RouterLink>
        </div>
        <div class="ms-auto">

          <span class="d-flex gap-3" v-if="isLogin">
            <a href="#" class="rounded-circle border border-white border-2" style="width: 3rem;">
              <img src="@/assets/user.png" class="img-fluid" alt="">
            </a>
          </span>
          <span class="d-flex gap-3" v-if="!isLogin">
            <a data-bs-toggle="modal" data-bs-target="#LogIn" class="btn btn-light bg-white fw-bold rounded-pill px-4">Log
              in</a>
            <a data-bs-toggle="modal" data-bs-target="#SignUp"
              class="btn btn-light bg-white fw-bold rounded-pill px-4">Sign Up</a>
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  transition: 0.2s all ease-in-out;
}

.navbar-nav .nav-link {
  color: white !important;
}

.navbar.nav-bg {
  background-color: white;
}
</style>