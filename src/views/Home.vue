<!--eslint-disable-->
<template>
  <div class="home">
    <section class="hero is-primary is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-size-1 is-size-3-mobile">
            hi! i'm vybhav
          </h1>
          <vue-typed-js
              :strings="[
                'undergrad computer science student',
                'a full stack developer',
                'a photographer',
                'a security research enthusiast',
                '<a href=\'https://keybase.io/vybhavb\'>@vybhavb</a> everywhere online'
              ]"
              :contentType="html">
              <h3 class="subtitle is-size-3 is-size-5-mobile">
                i am <span class="typing has-text-link"></span>
              </h3>
          </vue-typed-js>
          <div>
            <a href="mailto:contact@vybhavb.com" class="button is-info">
              contact me
            </a>
            <router-link to="/projects" class="button" style="margin-left:10px">projects</router-link>
          </div>
        </div>
      </div>
       <div class="hero-foot">
        <nav class="is-fullwidth">
          <h1 class="has-text-centered has-text-light is-size-7" style="padding-bottom:20px">© {{new Date().getFullYear()}} vybhavb</h1>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {}
};
</script>
