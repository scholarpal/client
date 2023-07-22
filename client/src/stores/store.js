import { defineStore } from 'pinia'
import axios from 'axios'

export const useMainStore = defineStore('store', {
  state: () => ({
    isLogin: true,
    schools : []
  }),
  actions: {
    logOut() {
      localStorage.clear()
      this.isLogin = false
    },
    async fetchSchool(){
      let {data} = await axios.get("https://api-sekolah-indonesia.vercel.app/sekolah?page=1&perPage=5");
      this.schools = data.dataSekolah
      console.log(this.schools)
    },
  },
})