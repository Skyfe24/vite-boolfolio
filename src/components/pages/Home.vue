<script >
import { ref } from 'vue'
import axios from 'axios'


export default {
  data() {
    return {
      projects: []
    }
  },
  created() {
    axios.get('http://127.0.0.1:8000/api/projects').then(res => {
      this.projects = res.data
    })
  }
}

</script>

<template>
  <h1>I miei progetti</h1>

  <div class="container">


    <div class="row">
      <div v-for="project in projects" class="card col-4">
        <div class="card-body">
          <h3 class="card-title">{{ project.name }}</h3>
          <p class="card-text">{{ project.description }}</p>
          <router-link class="btn btn-primary" :to="`/projects/${project.id}`">Vai al dettaglio</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
