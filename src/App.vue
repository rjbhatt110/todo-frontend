<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <HeaderNav />

    <!-- Main -->
    <div class="App">
      <router-view />
    </div>
  </div>
</template>
<script>
import HeaderNav from "./components/HeaderNav";
export default {
  name: "App",
  components: { HeaderNav },
  methods: {},
};
</script>
<style>
#app {
}
</style>