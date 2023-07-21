import { defineStore } from 'pinia'

export const useMainStore = defineStore('store', {
  state: () => ({
    isLogin: false
  }),
  actions: {
    logOut() {
      localStorage.clear()
      this.isLogin = false
    },
  },
})