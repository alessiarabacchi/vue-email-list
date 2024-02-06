new Vue({
  el: "#app",
  data() {
    return {
      emails: [],
      emailsLoaded: false,
    };
  },
  async created() {
    await this.loadEmails();
  },

  methods: {
    async loadEmails() {
      try {
        const responses = await Promise.all(
          Array.from({ length: 10 }, () =>
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
          )
        );
        this.emails = responses.map((res) => res.data.response);
        this.emailsLoaded = true;
      } catch (error) {
        console.error("Errore durante il caricamento delle email:", error);
      }
    },
  },
});
