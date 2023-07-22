import { defineStore } from 'pinia'
import axios from 'axios'

const baseUrl = "http://localhost:3000"
// const baseUrl = "https://scholarpal-server-garudahack4-0907b3bb5a06.herokuapp.com"


export const useMainStore = defineStore('store', {
  state: () => ({
    isLogin: false,
    schools: [],
    schoolDetail: {},
    myRates: []
  }),
  actions: {
    logOut() {
      localStorage.clear()
      this.isLogin = false
    },
    async fetchSchool() {
      let { data } = await axios.get("https://api-sekolah-indonesia.vercel.app/sekolah?page=1&perPage=5");
      this.schools = data.dataSekolah
      console.log(this.schools)
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
        localStorage.setItem("username", data.user.username)
        localStorage.setItem("email", data.user.email)
        localStorage.setItem("school_slug", data.user.slug)
      } catch (error) {
        console.log(error);
      }
    },
    async fetchSchoolSlug(name) {
      try {
        let slug = name.toUpperCase().split(" ").join("_")
        let { data } = await axios({
          method: "GET",
          url: baseUrl + "/schools/" + slug
        })
        this.schoolDetail = data
      } catch (error) {
        console.log(error)
      }
    },
    async fetchDetailSchool(slug) {
      try {
        let { data } = await axios({
          method: "GET",
          url: baseUrl + "/schools/" + slug
        })
        this.schoolDetail = data
      } catch (error) {
        console.log(error);
      }
    },
    async fetchMyRate() {
      try {
        let { data } = await axios({
          method: "GET",
          headers: {
            access_token: localStorage.access_token
          },
          url: baseUrl + "/rates/" + localStorage.getItem("username")
        })
        this.myRates = data
      } catch (error) {
        console.log(error);
      }
    },
    async postCommentRate(comment, category, star, slug, cb) {
      try {
        await axios({
          method: "POST",
          headers: {
            access_token: localStorage.getItem("access_token")
          },
          url: baseUrl + "/rates",
          data: {
            comment,
            category,
            star,
            slug,
            username: localStorage.getItem("username")
          }
        })
        await this.fetchDetailSchool()
        cb()
      } catch (error) {
        console.log(error);
      }

    }
  },
})