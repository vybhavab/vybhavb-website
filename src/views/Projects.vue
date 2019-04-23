<!--eslint-disable-->
<template>
  <div class="projects">

    <section class="hero  has-background-primary is-fullheight-with-navbar">
      <div class="hero-head">
        <div class="container">
          <h1 id="projTitle" class="is-size-2 is-size-4-mobile title has-text-white has-text-centered">heres some of my projects</h1>
        </div>
      </div>
      <div class="hero-body">
        <div>
          <div class="columns box" v-for="proj in projects" v-bind:key="proj.index">
            <div class="column is-one-quarter">
              <h1 class="is-size-3 is-size-5-mobile">
                <a :href="proj.linkToSite || proj.linkToSource" class="has-text-primary">
                  {{proj.name}}
                </a>
              </h1>
            </div>
            <div class="column is-half">
              <h1 class="is-size-5 is-size-7-mobile">
                {{proj.description}}
              </h1>
            </div>
            <div class="column" v-if="proj.technologies">
              <div class="tags">
                      <span v-for="tech in proj.technologies" class="tag" :class="tech.color">{{tech.name}}</span>
              </div>
            </div>
            <div class="column is-narrow" v-if="proj.technologies">
              <div class="buttons are-large">
                <a class="button" v-if="proj.linkToSource" :href="proj.linkToSource">
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github'}">
                  </font-awesome-icon>
                </a>
                <a class="button" v-if="proj.linkToSite" :href="proj.linkToSite">
                  <font-awesome-icon icon="globe"></font-awesome-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-foot">
        <nav class="is-fullwidth">
          <h1 class="has-text-centered has-text-dark is-size-7" style="padding-bottom:20px">© 2019 vybhavb</h1>
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
