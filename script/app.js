const app = Vue.createApp({
  data() {
    return {
      state: true,
      inputName: "",
      names: [],
      error: "",
      showError: false,
    };
  },
  computed: {
    isReady() {
      return this.names.length > 1;
    },
  },
  methods: {
    addNameToList() {
      const userName = this.inputName;
      if (this.validate(userName)) {
        this.names.push(userName);
        this.inputName = "";
        this.showError = false;
      } else {
        this.showError = true;
      }
    },
    validate(value) {
      this.error = "";
      if (value === "") {
        this.error = "Name cannot be empty";
        return false;
      }
      if (this.names.includes(value)) {
        this.error = "Name already exists";
        return false;
      }
      return true;
    },
    removeName(index) {
      this.names.splice(index, 1);
    },
  },
}).mount("#app");
