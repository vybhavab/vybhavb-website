<!--eslint-disable-->
<template>
  <div class="home">
    <section class="hero is-primary is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-size-1">
            hi! my name is vybhav
          </h1>
          <h3 class="subtitle is-size-3">
            i am
            <VueTyper
              :text="[
                'a second year student studying computer science',
                'full stack programmer',
                'a photographer',
                'a security research enthusist'
              ]"
              :shuffle="true"
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
          <a href="mailto:contact@vybhavb.com" class="button is-info">
            contact me
          </a>
        </div>
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
  }
};
</script>
