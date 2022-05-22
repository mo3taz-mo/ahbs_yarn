// import Copyright from "@/components/shared/Copyright";
// import axios from "axios";

export default {
  name: "footer-app",
  components: {
    //Copyright,
  },
  // props: ["footerServices"],
  // data() {
  //   return {
  //     footerType: "siteMap",
  //     email: "",
  //     footerData: {},
  //     contactUs: null,
  //     newsletterSuccess: "",
  //     newsletterError: "",
  //   };
  // },
  // created() {
  //   // onLanguageSwitched called right after a new locale has been set
  //   this.$i18n.onLanguageSwitched = (oldLocale, newLocale) => {
  //     this.$axios.get(`/api/contacts?lang=${newLocale}`).then((res) => {
  //       this.contactUs = res.data.data;
  //     });
  //   };
  //   this.$axios.get(`/api/contacts?lang=${this.$i18n.locale}`).then((res) => {
  //     this.contactUs = res.data.data;
  //   });

  //   axios
  //     .get("/api/socialmedia")
  //     .then((res) => {
  //       this.footerData = res.data.data;
  //     })
  //     .catch((e) => {
  //       console.log(e.data);
  //     });
  // },
  // methods: {
  //   newsletter() {
  //     axios
  //       .post("api/newsletter", { email: this.email })
  //       .then((res) => {
  //         this.newsletterSuccess = true;
  //         setTimeout(() => {
  //           this.newsletterSuccess = false;
  //         }, 3000);
  //       })
  //       .catch((err) => {
  //         this.newsletterError = true;
  //         setTimeout(() => {
  //           this.newsletterError = false;
  //         }, 3000);
  //       });
  //   },
  // },
  // computed: {
  //   isComplete() {
  //     return this.email;
  //   },
  // },
};
