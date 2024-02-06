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
    loadEmails() {
      let emailRequests = [];
      for (let i = 0; i < 10; i++) {
        emailRequests.push(
          axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
              this.emails.push(response.data.response);
              if (this.emails.length === 10) {
                this.emailsLoaded = true;
              }
            })
            .catch((error) => {
              console.error(
                "Errore durante il caricamento delle email:",
                error
              );
            })
        );
      }
    },
  },
});
