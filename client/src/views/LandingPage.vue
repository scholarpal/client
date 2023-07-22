<script>
export default {
  data() {
    return {
      name: "Avatar"
    }
  },
}
</script>
<template>
  <section class="hero" style="height: 100vmin;">
    <div class="d-flex justify-content-center align-items-center flex-column mx-auto" style="height: 90%; width: 44%;">
      <h1 class="display-6 fw-bold mb-4 text-white" style="font-family: 'Inter',sans-serif;">Enter your school to get
        started</h1>
      <form action="" class="w-100">
        <div class="input-group rounded-pill">
          <span class="input-group-text rounded-pill rounded-end-0 border-0" id="search">
            <h5 class="mb-0 ms-3"><i class="fa fa-solid fa-school"></i></h5>
          </span>
          <input type="text" class="form-control rounded-pill rounded-start-0 py-3 border-0 px-2" id="search"
            placeholder="Search your school">
        </div>
        <input type="submit" hidden>
      </form>
    </div>
  </section>

  <section class="my-5 py-5">
    <div class="container">
      <div class="row text-center" v-if="!isLogin">
        <h1 class="fw-bold">Join ScholarPal Now</h1>
        <h2>Become a ScholarPal today!</h2>
      </div>
      <div class="row text-center" v-else>
        <h1 class="fw-bold">Welcome Back {{ name }}</h1>
        <h2>Glad to see you back here!</h2>
      </div>
      <div class="row align-items-stretch gap-3 justify-content-center mt-5">
        <div class="col-5 d-flex flex-column justify-content-center align-items-center gap-4">
          <img class="img-fluid" width="55%"
            src="../assets/editing.png" alt="">
          <h3 class="fw-bold text-center mt-auto">Manage and edit your ratings</h3>
        </div>
        <div class="col-5 d-flex flex-column justify-content-center align-items-center gap-4">
          <img class="img-fluid" width="55%"
            src="../assets/anonymous.svg" alt="">
          <h3 class="fw-bold text-center mt-auto">Your ratings are always anonymous</h3>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12 d-flex justify-content-center">
          <a href="#" data-bs-toggle="modal" data-bs-target="#SignUp2" v-if="!isLogin"
            class="btn btn-dark px-4 py-2 rounded-pill">
            <h5 class="mb-0">Sign up Now</h5>
          </a>
          <a href="#" v-else class="btn btn-dark px-4 py-2 rounded-pill">
            <h5 class="mb-0">My Ratings</h5>
          </a>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-dark py-4">
    <div class="container">
      <div class="d-flex align-items-center justify-content-stretch">
        <div>
          <RouterLink to="/" class="text-decoration-none">
            <h1 class="text-white">ScholarPal</h1>
          </RouterLink>
          <p class="text-white mb-0">Ⓒ 2023 ScholarPal, All Rights Reserved</p>
        </div>
        <div class="ms-auto d-flex gap-4">
          <a class="text-decoration-none text-white" href="https://www.twitter.com">
            <h3 class="mb-0"><i class="fa fa-solid fa-twitter"></i></h3>
          </a>
          <a class="text-decoration-none text-white" href="https://www.instagram.com">
            <h3 class="mb-0"><i class="fa fa-solid fa-instagram"></i></h3>
          </a>
          <a class="text-decoration-none text-white" href="https://www.facebook.com">
            <h3 class="mb-0"><i class="fa fa-solid fa-facebook"></i></h3>
          </a>
          <a class="text-decoration-none text-white" href="https://www.youtube.com">
            <h3 class="mb-0"><i class="fa fa-solid fa-youtube"></i></h3>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.hero {
  background-image: url(../assets/landingpage_bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}

.form-control::placeholder {
  font-weight: bold;
}

.form-control:focus {
  outline: none;
  box-shadow: none;
}
</style>