new Vue({
  el: "#app",
  data() {
    return {
      emails: [],
      emailsLoaded: false,
    };
  },
  created() {
    this.loadEmails();
  },

  methods: {
    async loadEmails() {
      const requests = [];
      for (let i = 0; i < 10; i++) {
        requests.push(
          axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        );
      }
      try {
        const responses = await Promise.all(requests);
        this.emails = responses.map((response) => response.data.response);
        this.emailsLoaded = true;
      } catch (error) {
        console.error("Errore durante il caricamento delle email:", error);
      }
    },
  },
});
