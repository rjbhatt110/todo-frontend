<template>
  <nav
    v-if="!isAuthenticated"
    class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"
  >
    <div class="container">
      <h2 class="navbar-brand float-left">TODO</h2>
      <ul class="nav navbar-nav flex-row float-right">
        <li class="nav-item">
          <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
        </li>
        <li class="nav-item">
          <router-link class="btn btn-outline-primary" to="/signup"
            >Sign up</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "headernav",
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
};
</script>
<style>
</style>