<script>
import { mapActions, mapState } from 'pinia';
import { useMainStore } from '../stores/store';

import { RouterLink } from 'vue-router';
export default {
  methods: {
    ...mapActions(useMainStore, ["fetchMyRate"])
  },
  computed: {
    ...mapState(useMainStore, ["myRates"]),
    username() {
      return localStorage.getItem("username");
    },
    email() {
      return localStorage.getItem("email");
    },
    school() {
      return localStorage.getItem("school_slug").toUpperCase().split("-").join(" ");
    },
    school_slug() {
      return localStorage.getItem("school_slug")
    }
  },
  async created() {
    await this.fetchMyRate();
  },
  components: { RouterLink }
}
</script>
<template>
  <section class="w-100 pt-5">
    <div class="w-100 container mt-4 d-flex flex-row justify-content-end">
      <div style="width: 68%;" class="bg-white rounded d-flex flex-column flex-stretch mt-4">
        <div class="px-4 pt-3 pb-2 d-flex flex-column">
          <h3>@{{ username }}</h3>
          <p class="align-self-end">{{ email }}</p>
        </div>
        <div class="bg-dark d-flex flex-grow-1 rounded-bottom p-5 pt-2 pb-5 flex-column gap-3">
          <p class="text-white">Here is your rate and comment to your school <b>{{ school }}</b></p>
          <!-- FACILITY -->
          <div v-for="[el, rate] in myRates" class="bg-white w-100 rounded d-flex gap-2">
            <div class="m-3" :style="{ backgroundColor: el.bg }"
              style=" border-radius:4px; width: 60px; height:60px; display: flex; justify-content: center; align-items: center;">
              <i :style="{ color: el.c }" class="p-3 fa-2xl flex " :class="el.class"></i>
            </div>
            <span class="py-3"><b>{{ el.category }} </b>:
              <RouterLink :to="'/schools/' + school_slug" v-if="!rate.id">Add your rate & comment now!</RouterLink>
              <p v-else>{{ rate.comment }} <br>- rating from you is {{ rate.star }}</p>
            </span>
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
  background: url("@/assets/profileasset.png");
  background-repeat: no-repeat;
  background-size: 100%
}

p {
  font-size: 14px;
}
</style>