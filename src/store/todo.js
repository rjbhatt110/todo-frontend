import TodoService from "../services/TodoService";
import {
    CREATE_TODO,
    GET_TODO,
    DELETE_TODO,
    UPDATE_TODO
} from "./actions.type";
import { SET_TODO, SET_ERROR } from "./mutations.type";

const state = {
    errors: null,
    todo: [],
};

const getters = {
    getTodo(state) {
        return state.todo;
    }
};

const actions = {
    [CREATE_TODO](context, todo) {
        TodoService.createTodo(todo)
            .then((data) => {
                console.log(data)
            })
            .catch(({ response }) => {
                context.commit(SET_ERROR, response.data.errors);
            });
    },

    [GET_TODO](context, user) {
        TodoService.getTodo(user).then((data) => {
            context.commit(SET_TODO, data.data);
        })
    },

    [DELETE_TODO](context, todo) {
        TodoService.deleteTodo(todo)
            .then((data) => {
                console.log(data)
            })
            .catch(({ response }) => {
                context.commit(SET_ERROR, response.data.errors);
            });
    },
    
    [UPDATE_TODO](context, todo) {
        TodoService.updateTodo(todo)
            .then((data) => {
                console.log(data)
            })
            .catch(({ response }) => {
                context.commit(SET_ERROR, response.data.errors);
            });
    },
};

const mutations = {
    [SET_ERROR](state, error) {
        state.errors = error;
    },
    [SET_TODO](state, todo) {
        state.todo = todo;
    },
};

export default {
    state,
    actions,
    mutations,
    getters
};