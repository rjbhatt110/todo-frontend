<template>
  <div class="vertical-center">
    <div class="inner-block">
      <div class="vue-tempalte">
        <form>
          <h3>Sign Up</h3>

          <div class="form-group">
            <label>First Name</label>
            <input
              type="text"
              class="form-control form-control-lg"
              v-model="firstName"
            />
          </div>

          <div class="form-group">
            <label>Last Name</label>
            <input
              type="text"
              class="form-control form-control-lg"
              v-model="lastName"
            />
          </div>

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
            class="btn btn-dark btn-lg btn-block"
            value="Sign Up"
            @click="signUp"
          />

          <p class="forgot-password text-right">
            Already registered
            <router-link :to="{ name: 'login' }">sign in?</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { REGISTER } from "@/store/actions.type";
import { mapState } from "vuex";

export default {
  name: "signup",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapState({
      errors: (state) => state.user.errors,
    }),
  },
  methods: {
    async signUp() {
      try {
        const credentials = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
        };
        this.$store.dispatch(REGISTER, credentials);
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
