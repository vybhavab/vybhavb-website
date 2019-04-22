<!--eslint-disable-->
<template>
  <div class="projects">
    <div class="container">
      <!-- <div class="columns is-multiline is-mobile is-centered">
        <div class="column is-four-fifths-mobile" v-for="proj in this.projects">
          <div class="card" style="margin-top:10px">
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
      </div> -->
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
