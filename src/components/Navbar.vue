<template>
  <nav class="navbar is-primary">
    <div class="container">
      <div class="navbar-brand">

        <router-link class="navbar-item" to="/">
          <span class="is-size-4 is-info">vb</span>
        </router-link>

        <div class="navbar-burger burger" :class="{ 'active': active }" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu" :class="{'active':active}">
        <div class="navbar-end">
          <router-link to="/" class="navbar-item" active-class="active"
          exact @click.native="closeMenu">
            home
          </router-link>
          <router-link to="/projects" class="navbar-item" active-class="active"
          exact @click.native="closeMenu">
            projects
          </router-link>
          <a href="/Resume.pdf" class="navbar-item">résumé</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      active: false,
    };
  },
  methods: {
    closeMenu() {
      this.active = false;
    },
    toggleMenu() {
      this.active = !this.active;
    },
  },
};
</script>
