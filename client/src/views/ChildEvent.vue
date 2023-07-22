<script>
import { mapState } from "pinia";
import CardEvent from "../components/CardEvent.vue";
import { useMainStore } from "../stores/store";

export default {
  computed: {
    ...mapState(useMainStore, ["dataEvent"]),
    events() {
      if (!this.$route.params.category) {
        return this.dataEvent
      } else {
        let result = this.dataEvent.filter(el => {
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