const app = Vue.createApp({
  data() {
    return {
      state: true,
      inputName: "",
      name: [],
    };
  },
  methods: {
    addNameToList() {
      const userName = this.inputName;
      if (this.validate(userName)) {
        this.name.push(userName);
        this.inputName = "";
      } else {
        console.log("Invalid name");
      }
    },
  },
}).mount("#app");
