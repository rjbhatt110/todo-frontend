import AuthService from "../services/AuthService";
import JwtService from "../services/JwtService";
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CHECK_AUTH
} from "./actions.type";
import { SET_AUTH, PURGE_AUTH, SET_ERROR, SET_USER } from "./mutations.type";
import router from "../router/index"

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {

  [LOGIN](context, credentials) {
    AuthService.login(credentials)
      .then((data) => {
        context.commit(SET_AUTH, data.data.data);
      })
      .catch(({ response }) => {
        context.commit(SET_ERROR, response.data.message);
      });
  },

  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },

  [REGISTER](context, credentials) {
    AuthService.signUp(credentials)
      .then(({ data }) => {
        context.commit(SET_AUTH, data);
      })
      .catch(({ response }) => {
        context.commit(SET_ERROR, response.data.message);
      });
  },

  [CHECK_AUTH](context) {
    if (JwtService.getToken()) {
      AuthService.getCurrent()
        .then(({ data }) => {
          context.commit(SET_USER, data[0]);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    } else {
      context.commit(PURGE_AUTH);
    }
  },
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = null;
    JwtService.saveToken(state.user.token);
    router.push("/")
  },
  [SET_USER](state, user) {
    state.user = user;
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = null;
    JwtService.destroyToken();
    router.push("/login")
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};