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
    ...mapActions(useMainStore, ["fetchSchool", "gsign"]),
    handleCredentialResponse(response) {
      this.gsign(response.credential)
    },
    toLandingPage() {
      this.$router.push("/")
    },
    logoutNow() {
      this.logOut(this.toLandingPage)
    },

  },
  async created() {
    if (localStorage.getItem("access_token")) {
      this.isLogin = true
    }
    this.fetchSchool()
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
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>