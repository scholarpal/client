<script>
export default {
  data() {
    return {

    }
  },
}
</script>
<template>
  <section class="w-100 pt-5">
    <div class="w-100 container mt-5 d-flex flex-row justify-content-end">
      <div style="width: 68%;" class="bg-white rounded d-flex flex-column flex-stretch">
        <div class="px-4 pt-3 pb-2 d-flex flex-column">
          <h3>@USERNAME</h3>
          <p class="align-self-end">emailnya@mail.com</p>
        </div>
        <div class="bg-dark d-flex flex-grow-1 rounded-bottom p-5 pb-5 flex-column gap-3">
          <div class="bg-white w-100 rounded d-flex gap-2" v-for="i in 4">
            <div class="m-3"
              style="background-color: rgb(22, 131, 174); border-radius:4px; width: 60px; height:60px; display: flex; justify-content: center; align-items: center;">
              <i style="color: rgb(181, 223, 234); " class="fa fa-solid fa-hands-bubbles p-3 fa-2xl flex "></i>
            </div>
            <span class="py-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error expedita voluptas nesciunt
              nostrum, impedit placeat ab modi numquam!</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* CSS here if needed */
section {
  height: 100vh;
  background: url("@/assets/wallpaperprofile.jpeg");
  background-repeat: no-repeat;
  background-size: 100%
}

p {
  font-size: 14px;
}
</style>