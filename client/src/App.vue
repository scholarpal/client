<script>
export default {
  name: "App",
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
  <nav id="navbar" class="navbar navbar-expand-lg fixed-top">
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
  <RouterView />

  <div class="modal fade" id="SignUp" tabindex="-1" data-bs-backdrop="static" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">

        <div class="modal-header border-0">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body d-flex justify-content-center">
          <div class="d-flex justify-content-center align-items-center flex-column gap-3" style="width: 80%;">
            <h1 class="text-center mb-0">Sign Up</h1>
            <p class="mb-0">Are you a professor? <a class="fw-bold text-decoration-none" href="/">Sign Up Here</a></p>
            <form action="" class="w-100 d-flex gap-3 flex-column">
              <input type="email" class="form-control rounded-pill w-100" placeholder="Enter your email">
              <input type="number" class="form-control rounded-pill w-100" placeholder="Enter your phone number">
              <input type="password" class="form-control rounded-pill w-100" placeholder="Create a password">
            </form>
            <a data-bs-target="#SignUp2" data-bs-dismiss="modal" data-bs-toggle="modal"
              class="btn btn-dark rounded-pill py-2 w-100">Continue</a>
          </div>
        </div>

        <div class="d-flex justify-content-center mb-4">
          <p>Already have an account? <a href="" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#LogIn"
              class="text-decoration-none fw-bold">Log In</a></p>
        </div>
      </div>
    </div>
  </div>


  <div class="modal fade" id="SignUp2" tabindex="-1" data-bs-backdrop="static" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">

        <div class="modal-header border-0">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body d-flex justify-content-center mb-5">
          <div class="d-flex justify-content-center align-items-center flex-column gap-3" style="width: 80%;">
            <h1 class="text-center mb-0 fw-bold">OTP Verification</h1>
            <form action="" class="w-100">
              <input type="number" class="form-control rounded-pill w-100" placeholder="OTP">
            </form>
            <a href="" class="btn btn-dark rounded-pill py-2 w-100">Verify</a>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="modal fade" id="LogIn" tabindex="-1" data-bs-backdrop="static" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">

        <div class="modal-header border-0">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body d-flex justify-content-center">
          <div class="d-flex justify-content-center align-items-center flex-column gap-3" style="width: 80%;">
            <h1 class="text-center mb-0">Log In</h1>
            <p class="mb-0">Are you a professor? <a class="fw-bold text-decoration-none" href="/">Log In Here</a></p>
            <form action="" class="w-100 d-flex gap-3 flex-column">
              <input type="email" class="form-control rounded-pill w-100" placeholder="Email">
              <input type="password" class="form-control rounded-pill w-100" placeholder="Password">
            </form>
            <a href="" class="btn btn-dark rounded-pill py-2 w-100">Log In</a>
          </div>
        </div>

        <div class="d-flex justify-content-center mb-4">
          <p>Don't have an account? <a href="" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#SignUp"
              class="text-decoration-none fw-bold">Sign Up</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  transition: 0.2s all ease-in-out;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.navbar-nav .nav-link {
  color: white !important;
}

.navbar.nav-bg {
  background-color: white;
}
</style>