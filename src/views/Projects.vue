<!--eslint-disable-->
<template>
  <div class="projects">

    <section class="hero is-fullheight-with-navbar">
      <div class="hero-heas">
        <div class="container">
            <table class="table">
              <tbody>
                <tr v-for="proj in this.projects" :key="proj.index">
                  <th class="is-size-3 is-size-5-mobile">{{proj.name}}</th>
                  <td class="is-size-5 is-size-7-mobile">{{proj.description}}</td>
                  <td>
                    <div class="tags">
                      <span v-for="tech in proj.technologies" class="tag" :class="tech.color">{{tech.name}}</span>
                    </div>
                  </td>
                  <td>
                    <a class="button" :href="proj.linkToSource">
                      <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github'}">
                        </font-awesome-icon>
                    </a>
                  </td>
                  <td>
                    <a class="button" v-if="proj.linkToSite != ''" :href="proj.linkToSite">
                      <font-awesome-icon icon="globe">
                        </font-awesome-icon>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
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
