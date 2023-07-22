import { defineStore } from 'pinia'
import axios from "axios"
const baseUrl = "http://localhost:3000"
export const useMainStore = defineStore('store', {
  state: () => ({
    isLogin: false,
    otp: "",
    temp: {
      token: "",
      username: "",
      email: ""
    }
  }),
  actions: {
    logOut() {
      localStorage.clear()
      this.isLogin = false
    },
    async gsign(google_token) {
      try {
        let { data } = await axios({
          method: "POST",
          url: baseUrl + "/gsign",
          headers: {
            google_token
          }
        })
        this.isLogin = true
        localStorage.setItem("access_token", data.access_token)
        localStorage.setItem("username", data.username)
        localStorage.setItem("email", data.email)
        localStorage.setItem("school_slug", data.school_slug)
      } catch (error) {
        console.log(error);
      }
    }
  },
})