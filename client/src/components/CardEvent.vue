<script>
export default {
  props: ["data"]
}
</script>
<template>
  <a :href="data.href" class="rounded shadow text-dark card-event">
    <img :src="data.img" class="rounded-top card-img-top w-100 object-fit-cover " :alt="data.id" height="200">
    <div class="card-body p-2">
      <h4 style="height: 100px;">{{ data.title }}</h4>
      <p>{{ data.time }}</p>
    </div>
    <span class="bg-white rounded p-1 text-sm category">{{ data.category }}</span>
  </a>
</template>

<style scoped>
.card-event {
  position: relative;
  width: 18rem;
  text-decoration: none;
}

.category {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 12px;
  font-weight: bold;
}
</style>