<script>
import dataEvent from "../../data/event.json"

import CardEvent from "../components/CardEvent.vue";

export default {
  computed: {
    events() {
      if (!this.$route.params.category) {
        return dataEvent
      } else {
        let result = dataEvent.filter(el => {
          return el.category.toLowerCase() == this.$route.params.category.toLowerCase()
        })
        return result
      }
    }
  },
  components: {
    CardEvent
  }
}
</script>
<template>
  <div class="d-flex flex-wrap gap-5 pb-5 mb-5">
    <CardEvent v-for="event in events" :data="event" :key="event.id" />
  </div>
</template>

<style scoped>
/* CSS here if needed */
</style>