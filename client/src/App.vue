<script>
import axios from "axios"
import NavBar from "./components/NavBar.vue"
import { useMainStore } from "./stores/store.js"
import { mapActions, mapWritableState } from "pinia"
export default {
  components: {
    NavBar
  },
  data() {
    return {
      schools: []
    }
  },
  computed: {
    ...mapWritableState(useMainStore, ["isLogin"])
  },
  methods: {
    ...mapActions(useMainStore, ["fetchSchool", "gsign", "fetchEvents"]),
    handleCredentialResponse(response) {
      this.gsign(response.credential)
    }

  },
  async created() {
    await this.fetchEvents()
    if (localStorage.getItem("access_token")) {
      this.isLogin = true
    }
    await this.fetchSchool()

  },
  mounted() {
    google.accounts.id.initialize({
      client_id: "530234543525-4k7kpttt34ffe8o6ofs9qu5r9mdta9gf.apps.googleusercontent.com",
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
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>