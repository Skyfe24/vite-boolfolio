<script >
import { ref } from 'vue'
import axios from 'axios'

export default {
  data() {
    return {
      project: []
    }
  },
  created() {
    axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`).then(res => {
      this.project = res.data
    })
  }
}
</script>

<template>
  <h1>Single project page</h1>

  <div class="card">
    <div>Project {{ $route.params.id }}</div>
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" :src="project.image" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Project {{ project.name }}</h5>
        <p class="card-text">{{ project.description }}</p>
      </div>

      <div class="card-body">
        <a href="#" class="card-link">{{ project.link }}</a>
      </div>
    </div>
  </div>
  <router-link class="btn btn-primary" to="/">Vai alla Home</router-link>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.card {
  border: solid black 1px;
}
</style>
