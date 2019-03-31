<!--eslint-disable-->
<template>
  <div class="projects">
    <div class="container">
      <div class="columns is-multiline is-mobile is-one-quarter">
        <div class="column" v-for="proj in this.projects">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                {{proj.name}}
              </p>
            </header>
            <div class="card-content">
              <div class="content">{{proj.description}}</div>
              <div class="tags">
                <span class="tag" v-for="tech in proj.technologies" :class="tech.color">{{tech.name}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import projects from "@/assets/projects.json";
import axios from "axios";

export default {
  name: "Projects",
  components: {},
  data: function() {
    return {
      projects: null
    };
  },
  created() {
    this.fetchProjects();
  },
  methods: {
    fetchProjects() {
      axios.get("/projects.json").then(response => {
        console.log(response);
        this.projects = response.data;
      });
    }
  }
};
</script>
