<!--eslint-disable-->
<template>
  <div class="home">
    <section class="hero is-primary is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-size-1 is-size-3-mobile">
            hi! my name is vybhav
          </h1>
          <h3 class="subtitle is-size-3 is-size-5-mobile">
            i am
            <VueTyper
              :text="[
                'a second year student majoring in computer science',
                'a full stack developer',
                'a photographer',
                'a security research enthusiast',
                '@vybhavb everywhere online'
              ]"
              :repeat="0"
              initial-action="typing"
              :pre-type-delay="70"
              :type-delay="70"
              :pre-erase-delay="2000"
              :erase-delay="250"
              erase-style="select-all"
              :erase-on-complete="false"
              caret-animation="blink"
            />
          </h3>
          <div>
            <a href="mailto:contact@vybhavb.com" class="button is-info">
              contact me
            </a>
          </div>
          </br>
          <div>
            <p class = "title is-size-3 is-size-6-mobile">or checkout at some <router-link to="/projects" class="has-text-link">Projects</router-link> i've worked on</p>
          </div>

        </div>
      </div>
       <div class="hero-foot">
        <nav class="is-fullwidth">
          <h1 class="has-text-centered has-text-danger is-size-7">© 2019 vybhavb</h1>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { VueTyper } from "vue-typer";
export default {
  name: "Home",
  components: {
    VueTyper
  },
  data: function(){
    return{
      projects: ["p1","p2","p3"]
    };
  }
};
</script>
