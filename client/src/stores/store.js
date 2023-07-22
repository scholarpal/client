import { defineStore } from 'pinia'

export const useMainStore = defineStore('store', {
  state: () => ({
    isLogin: true
  }),
  actions: {
    logOut() {
      localStorage.clear()
      this.isLogin = false
    },

  },
})