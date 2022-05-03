import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      StatusList: [
        {
          name: "Katarina Bushido",
          profileImg: "user_1.jpeg",
        },
        {
          name: "Katarina Bushido",
          profileImg: "user_2.jpeg",
        },
        {
          name: "Katarina Bushido",
          profileImg: "user_3.jpeg",
        },
        {
          name: "Katarina Bushido",
          profileImg: "user_4.jpeg",
        },
        {
          name: "Katarina Bushido",
          profileImg: "user_5.jpeg",
        },
        {
          name: "Katarina Bushido",
          profileImg: "user_6.jpeg",
        },
        {
          name: "Katarina Bushido",
          profileImg: "user_8.jpeg",
        },
        {
          name: "Katarina Bushido",
          profileImg: "user_10.jpeg",
        },
      ],
      ContactList: [
        {
          name: "Alya Cordova",
          profileImg: "user_1.jpeg",
          msg: "I sent the email yesterday in the evening",
          timestamp: "06:45 AM",
        },
        {
          name: "Katarina Kurlyenko",
          profileImg: "user_2.jpeg",
          msg: "Another cold morning with no coffee",
          timestamp: "07:15 AM",
        },
        {
          name: "Kathy O'Connor",
          profileImg: "user_3.jpeg",
          msg: "I just uploaded the images, review them",
          timestamp: "07:30 AM",
        },
        {
          name: "Cecily Trujilo",
          profileImg: "user_4.jpeg",
          msg: "Heading out to the office rynow",
          timestamp: "08:12 AM",
        },
        {
          name: "Winne minnie",
          profileImg: "user_5.jpeg",
          msg: "Dinner in the evening?",
          timestamp: "10:18 AM",
        },
      ],
    };
  },
  actions: {},
  mutations: {},
  getters: {},
});

export default store;
