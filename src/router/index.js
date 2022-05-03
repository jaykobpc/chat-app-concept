import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "@/views/Home";
import ChatView from "@/views/Chat";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
    meta: {
      enterClass: "animate__animated animate__fadeInUp animate__faster",
      leaveClass: "animate__animated animate__fadeOutBottom animate__faster",
    },
  },
  {
    path: "/chat",
    name: "ChatView",
    component: ChatView,
    meta: {
      enterClass: "animate__animated animate__fadeInUp animate__faster",
      leaveClass: "animate__animated animate__fadeOutBottom animate__faster",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
