const DEFAULT_STATE = {
  state: true,
  inputName: "",
  names: [],
  error: "",
  showError: false,
  result: "",
};
const app = Vue.createApp({
  data() {
    return {
      ...DEFAULT_STATE,
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
    showResult() {
      this.generateResult();
      this.state = false;
    },
    getRandomName() {
      return this.names[Math.floor(Math.random() * this.names.length)];
    },
    generateResult() {
      let randName = this.getRandomName();
      if (this.result !== "") {
        while (randName === this.result) {
          randName = this.getRandomName();
        }
      }
      this.result = randName;
    },

    resetApp() {
      this.state = true;
      this.inputName = "";
      this.names = [];
      this.error = "";
      this.showError = false;
      this.result = "";
    },

    getNewResult() {
      this.generateResult();
    },
  },
}).mount("#app");
