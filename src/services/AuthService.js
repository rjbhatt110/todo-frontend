import axios from 'axios';
import JwtService from "../services/JwtService";
const url = 'https://todo-back-test.herokuapp.com/';
export default {
  // Login User
  login(credentials) {
    return axios
      .post(url + 'user/authenticate', credentials,
    )
      .then(response => response);
  },
  // Register New User
  signUp(credentials) {
    return axios
      .post(url + 'user/register', credentials)
      .then(response => response.data);
  },
  // Get Current loggedIn User
  getCurrent() {
    return axios.get(url + 'user/current', {
      headers: {
        'Authorization': `Bearer ${JwtService.getToken()}`
      }
    }).then(response => response.data);
  }
};