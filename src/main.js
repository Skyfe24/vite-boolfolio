import { createRouter, createWebHistory } from "vue-router";

import { createApp } from "vue";

import App from "./App.vue";
import Home from "./components/pages/Home.vue";
import Project from "./components/pages/Project.vue";

// Import our custom CSS
import "./scss/styles.scss";
import "./style.css";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home },
  { path: "/projects/:id", component: Project },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

// 5. Create and mount the root instance.
const app = createApp(App);
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router);

app.mount("#app");

// Now the app has started!
