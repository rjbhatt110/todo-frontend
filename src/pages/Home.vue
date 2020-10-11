<template>
  <div class="todo-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">My Todo</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="clipped">
        <md-list>
          <md-list-item>
            <md-icon>done_outline</md-icon>
            <span class="md-list-item-text">To Do</span>
          </md-list-item>

          <md-list-item>
            <md-icon>exit_to_app</md-icon>
            <span class="md-list-item-text" @click="logout">Log out</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <md-list>
          <md-subheader>To Do</md-subheader>
          <div v-for="item in getTodo" :key="item._id">
            <div class="todo-list">
              <md-list-item style="flex: 1">
                <md-checkbox v-model="item.check" @change="updateTodo(item)" />
                <span class="md-list-item-text">{{ item.todo }}</span>
              </md-list-item>
              <md-button
                class="md-icon-button md-list-action"
                style="flex: 0"
                @click="deleteTodo(item)"
              >
                <md-icon class="md-primary">remove_circle </md-icon>
              </md-button>
            </div>
            <md-divider class="md-inset"></md-divider>
          </div>
        </md-list>
      </md-app-content>
    </md-app>

    <md-dialog-prompt
      :md-active.sync="active"
      v-model="value"
      md-title="Enter Your To Do"
      md-input-maxlength="30"
      md-input-placeholder="Type Your To Do..."
      md-confirm-text="Done"
      @md-confirm="insertTask"
    />

    <md-button
      class="md-fab md-fab-bottom-right md-primary"
      @click="active = true"
    >
      <md-icon>add</md-icon>
    </md-button>
  </div>
</template>

<script>
import {
  LOGOUT,
  CREATE_TODO,
  GET_TODO,
  CHECK_AUTH,
  DELETE_TODO,
  UPDATE_TODO,
} from "@/store/actions.type";
import { mapGetters } from "vuex";

export default {
  name: "home",
  data: () => ({
    active: false,
    value: null,
    todo: [],
  }),
  computed: {
    ...mapGetters(["currentUser", "getTodo"]),
  },
  mounted() {
    this.$store.dispatch(CHECK_AUTH).then(() => {
      setTimeout(() => {
        this.$store.dispatch(GET_TODO, this.currentUser._id);
      }, 1000);
    });
  },
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT);
    },
    insertTask() {
      const insertTodo = {
        user: this.currentUser._id,
        todo: this.value,
        check: false,
      };
      this.$store.dispatch(CREATE_TODO, insertTodo);
    },
    deleteTodo(todo) {
      this.$store.dispatch(DELETE_TODO, todo._id);
    },
    updateTodo(todo) {
      this.$store.dispatch(UPDATE_TODO, todo);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

.todo-container {
  height: 100%;
}

.md-app {
  min-height: 350px;
  height: 100%;
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.todo-list {
  display: flex;
  align-items: center;
}
</style>
