import { defineStore } from 'pinia'
import { mapWritableState } from 'pinia'
import { useCounterStore } from '../stores/counter'

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