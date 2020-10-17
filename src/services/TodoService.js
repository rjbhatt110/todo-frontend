import axios from 'axios';
import JwtService from "../services/JwtService";

const url = 'https://todo-back-test.herokuapp.com/';
export default {
  // Create Todo
  createTodo(todo) {
    return axios
      .post(url + 'todo/createToDo', todo, {
        headers: {
          'Authorization': `Bearer ${JwtService.getToken()}`
        }
      })
      .then(response => response);
  },
  // Get Todo By user
  getTodo(user) {
    return axios
      .get(url + 'todo/getToDo', {
        params: {
          user: user
        },
        headers: {
          'Authorization': `Bearer ${JwtService.getToken()}`
        }
      })
      .then(response => response.data);
  },
  // Remove Todo from list
  deleteTodo(todo) {
    return axios.delete(url + 'todo/deleteToDo', {
      params: {
        todo: todo
      },
      headers: {
        'Authorization': `Bearer ${JwtService.getToken()}`
      }
    }).then(response => response.data);
  },
  // Update Todo
  updateTodo(todo) {
    return axios.put(url + 'todo/updateToDo', todo, {
      headers: {
        'Authorization': `Bearer ${JwtService.getToken()}`
      }
    }).then(response => response.data);
  }
};