<script>
import NavBar from "./components/NavBar.vue"
import { mapActions, mapWritableState } from "pinia"
import { useMainStore } from "./stores/store"
export default {
  components: {
    NavBar
  },
  computed: {
    ...mapWritableState(useMainStore, ["isLogin"])
  },
  methods: {
    ...mapActions(useMainStore, ["gsign"]),
    handleCredentialResponse(response) {
      document.getElementsByClassName("btn-close")[0].click()
      this.gsign(response.credential)
    },
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
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.isLogin = true
    }
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