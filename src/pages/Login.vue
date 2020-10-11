<template>
  <div class="vertical-center">
    <div class="inner-block">
      <div class="vue-tempalte">
        <form>
          <h3>Sign In</h3>

          <div class="form-group">
            <label>Email address</label>
            <input
              type="email"
              class="form-control form-control-lg"
              v-model="email"
            />
          </div>

          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control form-control-lg"
              v-model="password"
            />
          </div>

          <div v-if="errors" class="error-messages">
            <span> {{ errors }}</span>
          </div>

          <input
            type="button"
            @click="login"
            value="Sign In"
            class="btn btn-dark btn-lg btn-block"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { LOGIN } from "@/store/actions.type";
import { mapState } from "vuex";

export default {
  name: "login",
  data() {
    return {
      email: "rjbhatt110@gmail.com",
      password: "hello123",
    };
  },
  computed: {
    ...mapState({
      errors: (state) => state.user.errors,
    }),
  },
  methods: {
    async login() {
      try {
        const credentials = {
          email: this.email,
          password: this.password,
        };
        this.$store.dispatch(LOGIN, credentials);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error-messages {
  margin: 15px 0;
  color: #ff0000;
}
</style>
