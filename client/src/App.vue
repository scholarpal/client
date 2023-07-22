<script>
import axios from "axios"
import NavBar from "./components/NavBar.vue"
export default {
  components: {
    NavBar
  },
  methods: {
    handleCredentialResponse(response) {
      document.getElementsByClassName("btn-close")[0].click()
      document.getElementsByClassName("continue-otp")[0].click()
      axios({
        method: "POST",
        url: "http://localhost:3000/google-sign-in"
      })
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  mounted() {
    google.accounts.id.initialize({
      client_id: "74889742184-2dkn63tpgecjde551g8j9lqkn5or0o7t.apps.googleusercontent.com",
      callback: this.handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
  }
}
</script>
<template>
  <NavBar />
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
              class="btn btn-dark rounded-pill py-2 w-100 continue-otp">Continue</a>
          </div>
        </div>
        <a href="" data-bs-target="#SignUp2" data-bs-dismiss="modal" data-bs-toggle="modal"
          class="d-flex justify-content-center align-items-center pt-2 pb-3">
          <div class="g_id_signin">
          </div>
        </a>

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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>