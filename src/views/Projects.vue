<!--eslint-disable-->
<template>
  <div class="projects">

    <section class="hero  has-background-primary is-fullheight-with-navbar">
      <div class="hero-head">
        <div class="container">
          <h1 id="projTitle" class="is-size-2 is-size-4-mobile title has-text-white has-text-centered">here are some of my projects</h1>
        </div>
      </div>
      <div class="hero-body">
        <div class="container is-fluid">
          <div class="columns box has-text-centered-touch is-vcentered" v-for="proj in projects" v-bind:key="proj.index">
            <div class="column is-one-fifth">
              <h1 class="is-size-4 is-size-5-mobile title">
                <a :href="proj.linkToSite || proj.linkToSource" class="has-text-primary">
                  {{proj.name}}
                </a>
              </h1>
            </div>
            <div class="column is-one-quarter">
              <h1 class="is-size-5 is-size-7-mobile subtitle">
                {{proj.description}}
              </h1>
            </div>
            <div class="column is-one-third" v-if="proj.technologies">
              <div class="tags">
                      <span v-for="tech in proj.technologies" class="tag" :class="tech.color">{{tech.name}}</span>
              </div>
            </div>
            <div class="column" :v-if="proj.linkToSource">
              <a class="button is-rounded is-fullwidth" v-if="proj.linkToSource" :href="proj.linkToSource" >
                <span class="icon is-medium">
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github'}"></font-awesome-icon>
                </span>
              </a>
            </div>
            <div class="column" :v-if="proj.linkToSite">
              <a class="button is-rounded is-fullwidth" v-if="proj.linkToSite" :href="proj.linkToSite" >
                  <span class="icon is-medium">
                    <font-awesome-icon icon="globe"></font-awesome-icon>
                  </span>
                </a>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-foot">
        <nav class="is-fullwidth">
          <h1 class="has-text-centered has-text-white is-size-7" style="padding-bottom:20px">© {{new Date().getFullYear()}} vybhavb</h1>
        </nav>
      </div>
    </section>
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
        // console.log(response);
        this.projects = response.data;
      });
    }
  }
};
</script>
